import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Arrow from "../../assets/forgetPg/arrow1.png";
import BgImage from "../../assets/forgetPg/ForgotPassword.png";
import axios from "axios";
import { toast } from "react-toastify";

const SignupOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);
const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || localStorage.getItem("signupEmail");
  const password =
    location.state?.password || localStorage.getItem("signupPassword");

  // ✅ Persist email/password temporarily
  useEffect(() => {
    if (email) localStorage.setItem("signupEmail", email);
    if (password) localStorage.setItem("signupPassword", password);
  }, [email, password]);

  // ✅ Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // ✅ Remove email/password if user leaves this page
  useEffect(() => {
    return () => {
      localStorage.removeItem("signupEmail");
      localStorage.removeItem("signupPassword");
      toast.info("Signup verification cancelled");
    };
  }, []);


  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    try {
      await axios.post("http://localhost:8000/verify-otp", {
        email,
        password,   // ✅ include password if backend needs it
        otp: enteredOtp,
      });


      localStorage.removeItem("signupEmail");
      localStorage.removeItem("signupPassword");
      setOtp(["", "", "", "", "", ""]);
      toast.success("OTP verified successfully!");
      setTimeout(() => {
        navigate("/SignUpPopUp");
      }, 3000);
    } catch (err) {
      console.error("OTP Verify Error:", err.response?.data || err.message);

      let msg = "Invalid OTP";
      if (err.response?.data) {
        // Backend may return different formats
        if (err.response.data.detail) {
          msg = err.response.data.detail;
        } else if (err.response.data.message) {
          msg = err.response.data.message;
        } else if (typeof err.response.data === "string") {
          msg = err.response.data;
        }
      }

      toast.error(msg, { autoClose: 3000 });
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 || !email) return;
    setIsResending(true);
    setError("");
    try {
      await axios.post("http://localhost:8000/signup-resend-otp", { email });
      setTimer(45);
      setOtp(["", "", "", "", "", ""]);
      toast.info("New OTP sent to your email.");
    } catch (err) {
      const msg = err.response?.data?.detail || "Failed to resend OTP";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsResending(false);
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${BgImage})`,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className={`
          relative bg-[#00000066] w-[740px] h-[480px] rounded-[16px] border-2 
          pt-[32px] pr-[24px] pb-[32px] pl-[24px] flex flex-col items-center gap-[24px]
          backdrop-blur-md 
        `}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "inherit",
            padding: "2px",
            background: `
        linear-gradient(48.81deg, rgba(0, 0, 0, 0) 60.41%, #51218F 89.33%),
        linear-gradient(221.1deg, rgba(0, 0, 0, 0) 74.13%, #51218F 92.57%)
      `,
            WebkitMask: `
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0)
      `,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: "-1"
          }}
        ></div>
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link to="/sign-in"
            onClick={() => {
              localStorage.removeItem("signupEmail");
              localStorage.removeItem("signupPassword");
              toast.info("Signup verification cancelled");
            }}
            className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 bg-[#8A38F533] rounded-full flex items-center justify-center border border-[#8A38F5]">
              <img src={Arrow} alt="back" className="w-4 h-4" />
            </div>
            <span className="text-[18px] text-white">Back</span>
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-white text-[28px] font-normal leading-[100%] mt-14 text-center font-[Poppins]">
          Enter OTP
        </h2>

        {/* Subtext */}
        <p className="text-[#F7F7FF80] text-[16px] text-center max-w-[420px] mt-0">
          We've sent a 6-digit OTP to{" "}
          <span className="text-white font-medium">{email}</span>. Please enter
          it below to continue.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-11 mt-0">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="
        w-[50px]
        h-[50px]
        text-center
        text-white
        text-[20px]
        bg-transparent
        outline-none
        border-b-[1px]
        border-solid
        border-[#C22CA2]
        focus:border-[#FF45EC]
      "
            />
          ))}
        </div>
        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm text-center mt-2">{error}</div>
        )}

        {/* Verify Button */}
        <button
  onClick={handleVerify}
  disabled={loading} // ✅ Optional: disable when loading
  className={`${
    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8A38F580] hover:scale-105"
  } bg-[#8A38F533] text-white font-medium w-[554px] h-[45px] mt-5  rounded-[30px] border border-[#FFFFFF33] transition-all duration-300`}
>
  {loading ? "Verifying..." : "Verify OTP"} {/* ✅ Dynamic text like Sign In */}
</button>

        {/* Resend Timer */}
        <p className="text-[#F7F7FF80] text-[14px] text-center mt-4 font-normal">
          Didn’t receive the code?{" "}
          <span
            onClick={handleResendOTP}
            className={`${timer > 0
              ? "text-gray-400"
              : "text-[#FF45EC] cursor-pointer hover:underline"
              }`}
          >
            {isResending
              ? "Resending..."
              : timer > 0
                ? `Resend in 00:${timer.toString().padStart(2, "0")}`
                : "Resend OTP"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupOtp;