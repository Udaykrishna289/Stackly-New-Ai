// signin.jsx
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";  // ✅ import toast
import "react-toastify/dist/ReactToastify.css";          // ✅ import CSS
import logoImg from "../assets/Logo1.png";
import signBg from "../assets/signBg.png";
import LeftArrow from "../assets/LeftArrow.png";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  // ✅ Detect Auth0 login callback
   useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const userId = queryParams.get("userId");
    const email = queryParams.get("email");

    if (token && userId && email) {
      const userData = { userId, email, token };
      setUserInfo(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));
      toast.success("Login successful 🎉"); // ✅ Toast for social login
      navigate("/", { replace: true });
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      setLoading(true); // ✅ Start loading

      const res = await axios.post(
        "http://localhost:8000/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      const { userId, email, access_token } = res.data;

      setUserInfo({ userId, email, token: access_token });

      localStorage.setItem("token", access_token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userEmail", email);

      toast.success("Login successful 🎉"); // ✅ Success toast
      navigate("/");
    } catch (err) {
      console.error(err);
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.detail ||
        "Invalid email or password";
      toast.error(msg);
    } finally {
      setLoading(false); // ✅ Stop loading after request
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     formData.email === "sample@gmail.com" &&
  //     formData.password === "12345"
  //   ) {
  //     setUserInfo({
  //       userName: "Sample User",
  //       userId: "id2332451",
  //       email: "sample@gmail.com",
  //     });
  //     navigate("/");
  //   } else {
  //     alert("Wrong credentials!");
  //   }
  // };

  return (
    <section
      className="relative w-full min-h-[1024px] flex justify-center items-start bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${signBg})` }}
    >
      {/* main div */}
      <div
        className="relative w-[740px] h-[769px] rounded-[16px] mt-[127.5px] flex flex-col items-center"
        style={{
          background: "transparent",
          backdropFilter: "blur(90px)",
          boxShadow: "0px 0px 46px 0px #00000040",
          border: "2px solid transparent",
          borderImage:
            "linear-gradient(48.81deg, rgba(0, 0, 0, 0) 60.41%, #51218F 89.33%), linear-gradient(221.1deg, rgba(0, 0, 0, 0) 74.13%, #51218F 92.57%)",
          borderImageSlice: "1",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "16px",
            padding: "2px",
            background:
              "linear-gradient(48.81deg, rgba(0, 0, 0, 0) 60.41%, #51218F 89.33%), linear-gradient(221.1deg, rgba(0, 0, 0, 0) 74.13%, #51218F 92.57%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: "-1",
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

        {/* Centered Sign-In Content */}
        <div className="flex flex-col items-center gap-8 w-[692px] h-[649px] mt-[60px]">
          {/* Top child */}
          <div className="flex flex-col items-center gap-8 w-[501px] h-[141px]">
            <div className="w-[230px] h-[44px]">
              <img
                src={logoImg}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[501px] h-[65px] flex flex-col items-center gap-[4px]">
              <div className="w-[501px] h-[38px]">
                <p
                  className="text-center text-[28px] font-normal leading-[100%]"
                  style={{
                    fontFamily: "Lora, serif",
                    color: "#FFFFFF",
                  }}
                >
                  Welcome Back to Elevated Living
                </p>
              </div>

              <div className="w-[501px] h-[23px]">
                <p
                  className="text-center text-[16px] font-normal leading-[100%]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#F7F7FF80",
                  }}
                >
                  Where design is effortless, and luxury is personal.
                </p>
              </div>
            </div>
          </div>

          {/* MAIN Bottom child */}
          <div className="flex flex-col justify-between w-[554px] h-[476px]">
            <div className="w-[554px] h-[428px] gap-[32px]">
              {/* form div */}
              <form
                onSubmit={handleSubmit}
                className="w-[554px] h-[216px] flex flex-col gap-[16px]"
              >
                <div className="w-[554px] h-[84px] flex flex-col gap-[8px]">
                  <label className="text-white text-[16px] font-['Poppins']">
                    Email
                  </label>
                  <div className="w-[554px] h-[48px] flex items-center px-[12px] gap-[10px] rounded-[12px] border border-[#FFFFFF33] bg-[#FFFFFF1F]">
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-[530px] h-[24px] text-[#E0E0E0] text-[16px] font-['Poppins'] outline-none border-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="w-[554px] flex flex-col gap-[8px]">
                  <div className="text-white text-[16px] font-['Poppins']">
                    Password
                  </div>
                  <div className="relative h-[48px] flex items-center justify-between px-4 py-3 rounded-[12px] border border-[#FFFFFF33] bg-[#FFFFFF1F]">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      placeholder="******"
                      className="w-full text-[16px] font-['Poppins'] text-[#E0E0E0EE] bg-transparent outline-none border-none pr-10"
                    />
                    {/* Eye Icon */}
 <span
  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white transition-all duration-300"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? (
    // Eye Open
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white hover:text-purple-300 transition-colors duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  ) : (
    // Eye Closed
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white hover:text-purple-300 transition-colors duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  )}
</span>

                  </div>

                  {/* Remember / Forgot */}
                  <div className="h-[24px] flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-white text-[16px] font-['Poppins']">
                        Remember me
                      </span>
                    </div>
                    <Link to="/heroforgetpg">
                      <span className="text-white text-[16px] underline font-['Poppins'] cursor-pointer">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                </div>

               <button
  type="submit"
  disabled={loading} // ✅ Disable while loading
  className={`${
    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8A38F580] hover:scale-105"
  } bg-[#8A38F533] text-white font-bold w-[554px] py-3 rounded-[30px] border border-[#FFFFFF33] transition-all`}
>
  {loading ? "Signing in..." : "Sign In"} {/* ✅ Change text */}
</button>


                <div className="w-[554px] flex items-center justify-between mt-8">
                  <div className="w-[191.5px] h-px bg-[#B0B0B0]" />
                  <div className="text-[#B0B0B0] text-[16px] font-['Poppins'] text-center">
                    Or Continue with
                  </div>
                  <div className="w-[191.5px] h-px bg-[#B0B0B0]" />
                </div>
              </form>

              {/* OAuth Buttons */}
              <div className="w-[554px] h-[44px] flex items-center justify-center gap-4 mt-[160px] opacity-100">
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
                            d="M18.7026 12.7535C18.6719 9.71361 21.2398 8.25549 21.354 8.18348C19.911 6.11931 17.6636 5.83729 16.8629 5.80488C14.9508 5.61527 13.1308 6.90538 12.1594 6.90538C11.1916 6.90538 9.69339 5.83249 8.1067 5.86129C6.02388 5.89129 4.10193 7.04459 3.02858 8.86874C0.862246 12.541 2.47349 17.9835 4.58456 20.9621C5.61615 22.4203 6.84669 24.0584 8.46162 23.9984C10.0164 23.9384 10.6046 23.0155 12.4848 23.0155C14.365 23.0155 14.8943 23.9996 16.5399 23.9696C18.2138 23.9384 19.2737 22.4827 20.2979 21.021C21.483 19.3288 21.9705 17.6907 22 17.6067C21.9632 17.5911 18.7358 16.3826 18.7038 12.7523L18.7026 12.7535ZM15.6103 3.83312C16.4675 2.81663 17.0459 1.40652 16.8875 0C15.6533 0.048004 14.1562 0.804067 13.2708 1.81815C12.4762 2.71823 11.7799 4.15235 11.9666 5.53126C13.3445 5.63687 14.7519 4.8472 15.6103 3.83312Z"
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
            {/* Bottom signup link */}
            <div className="w-full flex justify-center items-center">
              <div className="flex items-center gap-[4px]">
                <span className="text-[#B0B0B0] text-[16px] font-['Poppins']">
                  Don’t have an account?
                </span>
                <a
                  href="/sign-up"
                  className="text-[#C22CA2] text-[16px] underline font-['Poppins']"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Toast container */}
      {/* <ToastContainer position="top-right" autoClose={3000} theme="dark" /> */}
    </section>
  );
}