import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImg from "../assets/Logo1.png";
import signBg from "../assets/signBg.png";
import LeftArrow from "../assets/LeftArrow.png";

export default function SignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const userId = queryParams.get("userId");
    const email = queryParams.get("email");

    if (token && userId && email) {
      const userData = { userId, email, token };
      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));
      navigate("/", { replace: true });
    }
  }, [location.search, navigate, setUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate email format
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid Gmail address");
      setIsLoading(false);
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      setIsLoading(false);
      return;
    }

    // Validate password strength (optional)
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          confirm_password: confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.detail || "Something went wrong!";
        setError(errorMsg);
        toast.error(errorMsg);
        setIsLoading(false);
        return;
      }

      // ✅ Store email and password temporarily in localStorage
      localStorage.setItem("signupEmail", email);
      localStorage.setItem("signupPassword", password);

      toast.success("OTP sent to your email.");
      setTimeout(() => {
        navigate("/SignupOtp", { state: { email, password } });
      }, 1500);

    } catch (err) {
      const errorMsg = "Failed to connect to server";
      setError(errorMsg);
      toast.error(errorMsg);
      setIsLoading(false);
    }
  };

  return (
    <section
      className="w-full min-h-[1024px] flex justify-center items-center bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${signBg})` }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      {/* Main Card */}
      <div
        className="relative w-[740px] h-[869px] rounded-[16px] flex flex-col items-center overflow-hidden"
        style={{
          background: "transparent",
          backdropFilter: "blur(90px)",
          boxShadow: "0px 0px 46px 0px #00000040",
          position: "relative",
          isolation: "isolate"
        }}
      >
        {/* Gradient Border - Precise Implementation */}
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
        <Link
          to="/"
          className="absolute flex items-center gap-[12px] w-[174px] h-[32px] top-[20px] left-[20px] cursor-pointer"
        >
          <div
            className="w-[32px] h-[32px] rounded-full border border-[#8A38F533] backdrop-blur-[90px] flex items-center justify-center"
            style={{ background: "#8A38F533" }}
          >
            <img src={LeftArrow} alt="Back" className="w-[16px] h-[16px]" />
          </div>

          <div className="text-white text-[18px] font-normal font-poppins leading-[100%]">
            Back to home
          </div>
        </Link>
        
        {/* Centered Sign-Up Content */}
        <div className="flex flex-col items-center gap-8 w-[692px] h-[649px] mt-[60px]">
          {/* Top child */}
          <div className="flex flex-col items-center gap-8 w-[501px] h-[141px]">
            {/* 🔼 Top Image Div */}
            <div
              className="w-[230px] h-[44px] opacity-100"
              style={{ transform: "rotate(0deg)" }}
            >
              <img
                src={logoImg}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* 🔽 Bottom Div */}
            <div
              className="w-[501px] h-[65px] flex flex-col items-center gap-[4px] opacity-100"
              style={{ transform: "rotate(0deg)" }}
            >
              {/* 🔼 Top Child Div */}
              <div className="w-[501px] h-[38px]">
                <p
                  className="text-center text-[28px] font-normal leading-[100%]"
                  style={{
                    fontFamily: "Lora, serif",
                    color: "#FFFFFF",
                  }}
                >
                  Welcome to Effortless Elegance
                </p>
              </div>

              {/* 🔽 Bottom Child Div */}
              <div className="w-[501px] h-[23px]">
                <p
                  className="text-center text-[16px] font-normal leading-[100%]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#F7F7FF80",
                  }}
                >
                  Step into a world where AI meets timeless luxury
                </p>
              </div>
            </div>
          </div>

          <form
            className="w-full max-w-[558px] min-h-[44px] flex flex-col gap-5 items-center justify-center"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div className="w-[554px] h-[84px] flex flex-col gap-[8px] opacity-100">
              <label className="w-full h-[24px] text-white text-[16px] font-normal leading-[100%] font-['Poppins']">
                Email
              </label>
              <div className="w-[554px] h-[48px] flex items-center px-[12px] gap-[10px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF33] bg-[#FFFFFF1F] opacity-100">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[530px] h-[24px] text-[#E0E0E0] text-[16px] font-normal leading-[100%] font-['Poppins'] outline-none border-none bg-transparent"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="w-[554px] h-[84px] flex flex-col gap-[8px] opacity-100">
              <label className="w-full h-[24px] text-white text-[16px] font-normal leading-[100%] font-['Poppins']">
                Password
              </label>
              <div className="w-[554px] h-[48px] flex items-center px-[12px] gap-[10px] rounded-[12px]  border-[1px] border-solid border-[#FFFFFF33] bg-[#FFFFFF1F] opacity-100">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[500px] h-[24px] text-[#E0E0E0] text-[16px] font-normal leading-[100%] font-['Poppins'] outline-none border-none bg-transparent"
                  required
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* Eye Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="15"
                    viewBox="0 0 25 15"
                    fill="none"
                  >
                    <path
                      d="M24.0705 7.51211C21.3277 4.35156 17.5375 0.71875 12.5 0.71875C10.4656 0.71875 8.60078 1.29395 6.63301 2.52305C4.97402 3.56445 3.27266 5.02969 0.935547 7.43945L0.875 7.5L1.28066 7.91777C4.6168 11.3326 7.49883 14.2812 12.5 14.2812C14.71 14.2812 16.8533 13.5607 19.0512 12.0773C20.9221 10.8119 22.5145 9.20742 23.792 7.91172L24.125 7.57871L24.0705 7.51211ZM12.5 12.3438C9.82988 12.3438 7.65625 10.1701 7.65625 7.5C7.65625 4.82988 9.82988 2.65625 12.5 2.65625C15.1701 2.65625 17.3438 4.82988 17.3438 7.5C17.3438 10.1701 15.1701 12.3438 12.5 12.3438Z"
                      fill="#BEBCBC"
                    />
                    <path
                      d="M12.1609 5.73203C12.1609 5.31426 12.282 4.9207 12.4939 4.59375C10.8895 4.59375 9.59375 5.90156 9.59375 7.51211C9.59375 9.12266 10.8955 10.4244 12.4939 10.4244C14.0924 10.4244 15.4002 9.12266 15.4002 7.51211C15.0732 7.72402 14.6797 7.84512 14.2619 7.84512C13.1055 7.83906 12.1609 6.89453 12.1609 5.73203Z"
                      fill="#BEBCBC"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Confirm Password */}
           {/* Confirm Password */}
<div className="w-[554px] flex flex-col gap-[8px] opacity-100">
  <label className="w-full h-[24px] text-white text-[16px] font-normal leading-[100%] font-['Poppins']">
    Confirm Password
  </label>
  <div className="w-[554px] h-[48px] flex items-center px-[12px] gap-[10px] rounded-[12px]  border-[1px] border-solid border-[#FFFFFF33] bg-[#FFFFFF1F] opacity-100">
    <input
      type={showConfirmPassword ? "text" : "password"}
      placeholder="******"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="w-[500px] h-[24px] text-[#E0E0E0] text-[16px] font-normal leading-[100%] font-['Poppins'] outline-none border-none bg-transparent"
      required
    />
    <span
      className="cursor-pointer"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      {/* Eye Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
      >
        <path
          d="M24.0705 7.51211C21.3277 4.35156 17.5375 0.71875 12.5 0.71875C10.4656 0.71875 8.60078 1.29395 6.63301 2.52305C4.97402 3.56445 3.27266 5.02969 0.935547 7.43945L0.875 7.5L1.28066 7.91777C4.6168 11.3326 7.49883 14.2812 12.5 14.2812C14.71 14.2812 16.8533 13.5607 19.0512 12.0773C20.9221 10.8119 22.5145 9.20742 23.792 7.91172L24.125 7.57871L24.0705 7.51211ZM12.5 12.3438C9.82988 12.3438 7.65625 10.1701 7.65625 7.5C7.65625 4.82988 9.82988 2.65625 12.5 2.65625C15.1701 2.65625 17.3438 4.82988 17.3438 7.5C17.3438 10.1701 15.1701 12.3438 12.5 12.3438Z"
          fill="#BEBCBC"
        />
        <path
          d="M12.1609 5.73203C12.1609 5.31426 12.282 4.9207 12.4939 4.59375C10.8895 4.59375 9.59375 5.90156 9.59375 7.51211C9.59375 9.12266 10.8955 10.4244 12.4939 10.4244C14.0924 10.4244 15.4002 9.12266 15.4002 7.51211C15.0732 7.72402 14.6797 7.84512 14.2619 7.84512C13.1055 7.83906 12.1609 6.89453 12.1609 5.73203Z"
          fill="#BEBCBC"
        />
      </svg>
    </span>
  </div>

  {/* Remember Me Only */}
  <div className="h-[24px] flex items-center">
    <div className="flex items-center gap-2 whitespace-nowrap">
      <input type="checkbox" className="w-4 h-4" />
      <span className="text-white text-[16px] font-normal leading-none font-['Poppins']">
        Remember me
      </span>
    </div>
  </div>
</div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#8A38F533] border border-[#FFFFFF1A] text-base text-white cursor-pointer font-bold
             w-[554px] h-[48px] gap-[10px] rounded-[30px]  border-[1px] border-solid border-[#FFFFFF33]
             pt-[10px] pr-[30px] pb-[10px] pl-[30px]
             hover:bg-[#8A38F580] hover:scale-105 transition-all duration-300 ease-in-out
             ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Sending OTP..." : "Sign Up"}
            </button>

            <div className="w-[554px] h-[24px] flex items-center justify-between gap-[18px] mt-2 opacity-100 ">
              {/* Left Line */}
              <div className="w-[191.5px] h-px bg-[#B0B0B0]" />

              {/* Middle Text */}
              <div className="w-[135px] h-[24px] text-[#B0B0B0] text-[16px] font-medium leading-[100%] font-['Poppins'] text-center">
                Or Continue with
              </div>

              {/* Right Line */}
              <div className="w-[191.5px] h-px bg-[#B0B0B0]" />
            </div>
          </form>
          
          <div className="w-[554px] h-[44px] flex items-center justify-center gap-4 mt-6 opacity-100">
            <div className="w-[202px] h-[44px] flex justify-between items-center">
              <a href="http://localhost:8000/login/google">
                <button
                  className="
                         w-[44px] h-[44px] bg-white rounded-[38px] opacity-100
                         shadow-[0px_2px_4px_0px_#00000014] p-[10px] flex items-center justify-center gap-[10px] cursor-pointer
                       "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_36_40)">
                      <path
                        d="M8.36055 0.789371C5.96258 1.62125 3.89457 3.20018 2.46029 5.29425C1.026 7.38832 0.301037 9.88714 0.391883 12.4237C0.482728 14.9602 1.38459 17.4008 2.96501 19.3869C4.54543 21.373 6.72109 22.7999 9.17243 23.4581C11.1598 23.9709 13.2419 23.9934 15.2399 23.5237C17.0499 23.1172 18.7233 22.2476 20.0962 21C21.5251 19.6619 22.5622 17.9596 23.0962 16.0762C23.6765 14.0281 23.7798 11.8742 23.3981 9.78H12.2381V14.4094H18.7012C18.572 15.1477 18.2952 15.8524 17.8873 16.4813C17.4795 17.1102 16.9489 17.6503 16.3274 18.0694C15.5382 18.5914 14.6485 18.9427 13.7156 19.1006C12.7798 19.2746 11.82 19.2746 10.8843 19.1006C9.93591 18.9045 9.03874 18.5131 8.24993 17.9512C6.98271 17.0542 6.0312 15.7799 5.53118 14.31C5.02271 12.8126 5.02271 11.1893 5.53118 9.69187C5.8871 8.64228 6.47549 7.68663 7.25243 6.89625C8.14154 5.97515 9.26718 5.31674 10.5058 4.99326C11.7445 4.66979 13.0484 4.69374 14.2743 5.0625C15.232 5.35648 16.1078 5.87013 16.8318 6.5625C17.5606 5.8375 18.2881 5.11062 19.0143 4.38187C19.3893 3.99 19.7981 3.61687 20.1674 3.21562C19.0622 2.18714 17.765 1.38685 16.3499 0.860622C13.7731 -0.0750226 10.9536 -0.100167 8.36055 0.789371Z"
                        fill="white"
                      />
                      <path
                        d="M8.3607 0.789367C10.9536 -0.100776 13.7731 -0.0762934 16.3501 0.858742C17.7654 1.38855 19.062 2.19269 20.1657 3.22499C19.7907 3.62624 19.3951 4.00124 19.0126 4.39124C18.2851 5.11749 17.5582 5.84124 16.832 6.56249C16.1079 5.87012 15.2321 5.35648 14.2745 5.06249C13.0489 4.69244 11.7451 4.66711 10.5061 4.98926C9.26712 5.31141 8.14079 5.96861 7.2507 6.88874C6.47377 7.67912 5.88538 8.63477 5.52945 9.68437L1.64258 6.67499C3.03384 3.91604 5.44273 1.80566 8.3607 0.789367Z"
                        fill="#E33629"
                      />
                      <path
                        d="M0.611157 9.65624C0.820072 8.62085 1.16691 7.61816 1.64241 6.67499L5.52928 9.69186C5.02081 11.1892 5.02081 12.8126 5.52928 14.31C4.23428 15.31 2.93866 16.315 1.64241 17.325C0.452064 14.9556 0.0890305 12.2559 0.611157 9.65624Z"
                        fill="#F8BD00"
                      />
                      <path
                        d="M12.2381 9.77814H23.3981C23.7799 11.8724 23.6766 14.0263 23.0963 16.0744C22.5623 17.9578 21.5252 19.66 20.0963 20.9981C18.8419 20.0194 17.5819 19.0481 16.3275 18.0694C16.9494 17.6499 17.4802 17.1092 17.8881 16.4796C18.296 15.8501 18.5726 15.1447 18.7013 14.4056H12.2381C12.2363 12.8644 12.2381 11.3213 12.2381 9.77814Z"
                        fill="#587DBD"
                      />
                      <path
                        d="M1.64062 17.325C2.93687 16.325 4.2325 15.32 5.5275 14.31C6.02851 15.7804 6.98138 17.0548 8.25 17.9512C9.04127 18.5105 9.94037 18.8987 10.89 19.0912C11.8257 19.2652 12.7855 19.2652 13.7213 19.0912C14.6542 18.9333 15.5439 18.5821 16.3331 18.06C17.5875 19.0387 18.8475 20.01 20.1019 20.9887C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4487C7.60632 23.0291 6.13814 22.2892 4.86563 21.2756C3.51874 20.2063 2.41867 18.8587 1.64062 17.325Z"
                        fill="#319F43"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_40">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
              <a href="http://localhost:8000/login/apple">
                <button
                  className="
                      w-[44px] h-[44px] bg-white rounded-[38px] opacity-100
                      shadow-[0px_2px_4px_0px_#00000014] p-[10px] flex items-center justify-center gap-[10px] cursor-pointer
                    "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.7026 12.7535C18.6719 9.71361 21.2398 8.25549 21.354 8.18348C19.911 6.11931 17.6636 5.83729 16.8629 5.80488C14.9508 5.61527 13.1308 6.90538 12.1594 6.90538C11.1916 6.90538 9.69339 5.83249 8.1067 5.86129C6.02388 5.89129 4.10193 7.04459 3.02858 8.86874C0.862246 12.541 2.47349 17.9835 4.58456 20.9621C5.61615 22.4203 6.84669 24.0584 8.46162 23.9984C10.0164 23.9384 10.6046 23.0155 12.4848 23.0155C14.365 23.0155 14.8943 23.9996 16.5399 23.9696C18.2138 23.9384 19.2737 22.4827 20.2979 21.021C21.483 19.3288 21.9705 17.6907 22 17.6067C21.9632 17.5911 18.7358 16.3826 18.7038 12.7523L18.7026 12.7535ZM15.6103 3.83312C16.4675 2.81663 17.0459 1.40652 16.8875 0C15.6533 0.048004 14.1562 0.804067 13.2708 1.81815C12.4762 2.71823 11.7799 4.15235 11.9666 5.53126C13.3445 5.63687 14.7519 4.84720 15.6103 3.83312Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </a>
              <a href="http://localhost:8000/login/facebook">
                <button
                  className="
                        w-[44px] h-[44px] bg-white rounded-[38px] opacity-100
                           shadow-[0px_2px_4px_0px_#00000014] p-[10px] flex items-center justify-center gap-[10px] cursor-pointer
                             "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_36_50)">
                      <mask
                        id="mask0_36_50"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_36_50)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 12.067C0 18.034 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                          fill="#1877F2"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_36_50">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom child content at bottom */}
        <div className="w-full flex justify-center items-center opacity-100 mt-14">
          <div className="flex items-center gap-[4px]">
            {/* Left Text */}
            <span className="text-[#B0B0B0] text-[16px] font-normal leading-[100%] font-['Poppins']">
              Already have an account?
            </span>

            {/* Right Link */}
            <Link
              to="/sign-in"
              className="text-[#C22CA2] text-[16px] font-medium leading-[100%] underline font-['Poppins'] cursor-pointer"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}