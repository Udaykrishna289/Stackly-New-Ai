// import React, { useState } from "react";
// import close from "../../assets/forgetPg/close.png";
// import Arrow from "../../assets/forgetPg/arrow.png";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function HeroForgetPg() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSendOTP = async () => {
//     // Basic email validation
//     if (!email.includes("@") || !email.includes(".")) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:8000/forget-password/send-otp", {
//         email,
//       });
//       localStorage.setItem("resetEmail", email);
//       navigate("/Otp", { state: { email } }); // Passing email via state
//     } catch (err) {
//       setError(err.response?.data?.detail || "Error sending OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[0px] bg-[#00000033] backdrop-blur-sm">
//           <div className="w-[100%] min-h-[80px] text-end flex justify-end">
//             <img src={close} alt="" className="w-[28px] h-[28px] " />
//           </div>

//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
//             <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
//               <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//                 Forgot your password?
//               </div>
//               <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
//                 No worries. Enter your email and we'll send you a one-time
//                 password (OTP) to reset it.
//               </div>
//             </div>

//             <div className="w-[461px] min-h-[194px] flex flex-col justify-center items-center gap-[40px]">
//               <input
//                 type="email"
//                 placeholder="ramprakash@example.com"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setError("");
//                 }}
//                 className="w-[460px] min-h-[48px] rounded-[8px] border-[1px] border-solid border-[#E2E2E2] placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]"
//               />

//               {error && (
//                 <div className="text-red-500 text-sm w-full text-center">
//                   {error}
//                 </div>
//               )}

//               <button
//                 onClick={handleSendOTP}
//                 disabled={isLoading}
//                 className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer disabled:opacity-70"
//               >
//                 {isLoading ? "Sending..." : "Send OTP"}
//               </button>

//               <div>
//                 <Link
//                   to="/sign-in"
//                   className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//                 >
//                   <img src={Arrow} alt="" />
//                   <span className="font-semibold text-[15px] leading-[100%] text-[#009A98]">
//                     Back to Login
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import close from "../../assets/forgetPg/close.png";
// import Arrow from "../../assets/forgetPg/arrow.png";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import logoImg from "/src/assets/Logo.png";

// export default function HeroForgetPg() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSendOTP = async () => {
//     // Basic email validation
//     if (!email.includes("@") || !email.includes(".")) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:8000/forget-password/send-otp", {
//         email,
//       });
//       localStorage.setItem("resetEmail", email);
//       navigate("/Otp", { state: { email } }); // Passing email via state
//     } catch (err) {
//       setError(err.response?.data?.detail || "Error sending OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
//         style={{
//           backgroundImage: 'url("/ForgetPg/fgPg.png")',
//           height: '100dvh' // Uses dynamic viewport height for mobile
//         }}
//       >
//         {/* Mobile Logo */}
//         <div style={{
//           position: 'absolute',
//           top: '35px',
//           left: '24px',
//           backgroundColor: 'white',
//           padding: '2px',
//           borderRadius: '3px',
//           display: window.innerWidth < 441 ? 'block' : 'none'
//         }}>
//           <img
//             src={logoImg}
//             alt="logo"
//             style={{
//               width: '100px',
//               height: '30px',
//               display: 'block'
//             }}
//           />
//         </div>

//         {/* Main Container */}
//         <div className="w-[525px] min-h-[444px] px-[32px] py-[28px] rounded-[10px]
//                 bg-[#00000033] backdrop-blur-[6px]
//                 border border-white shadow-[0_0_0_2px_rgba(255,255,255,0.6)]
//                 flex flex-col justify-center items-center
//                 max-[440px]:w-[400px] max-[440px]:min-h-[439px] max-[440px]:px-[32px] max-[440px]:py-[28px]
//                 max-[440px]:gap-[40px]">

//           {/* Close Button */}
//           <div className="w-full min-h-[80px] text-end flex justify-end">
//             <img src={close} alt="close" className="w-[28px] h-[28px]" />
//           </div>

//           {/* Content Area */}
//           <div className="w-full min-h-[320px] flex flex-col justify-center items-center gap-[40px]
//                      max-[440px]:w-[336px] max-[440px]:min-h-[315px] max-[440px]:gap-[40px]">

//             {/* Title Section */}
//             <div className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]
//                        max-[440px]:w-full max-[440px]:h-[86px]">
//               <div className="text-center text-[#009A98] font-semibold text-[26px] leading-[26px]
//                          max-[440px]:text-[26px] max-[440px]:leading-[26px]"
//                 style={{ fontFamily: "Inter" }}>
//                 Forgot your password?
//               </div>

//               <div className="w-full min-h-[48px] font-normal text-[15px] leading-[24px] text-center text-[#B0B0B0]
//                          max-[440px]:text-[14px]"
//                 style={{ fontFamily: 'Inter' }}>
//                 No worries. Enter your email and we'll send you a one-time
//                 password (OTP) to reset it.
//               </div>
//             </div>

//             {/* Form Section */}
//             <div className="w-full min-h-[194px] flex flex-col justify-center items-center gap-[40px]
//                        max-[440px]:w-[336px] max-[440px]:h-[189px]">

//               {/* Email Input */}
//               <input
//                 type="email"
//                 placeholder="ramprakash@example.com"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setError("");
//                 }}
//                 className="w-full h-[48px] rounded-[8px] border border-[#E2E2E2]
//                       placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]
//                       max-[440px]:w-full"
//               />

//               {/* Error Message */}
//               {error && (
//                 <div className="text-red-500 text-sm w-full text-center">
//                   {error}
//                 </div>
//               )}

//               {/* Send OTP Button */}
//               <button
//                 onClick={handleSendOTP}
//                 disabled={isLoading}
//                 className="w-full h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-black to-[#007B82]
//                       flex justify-center items-center text-white font-bold text-[16px] leading-[35px]
//                       cursor-pointer disabled:opacity-70
//                       max-[440px]:h-[41px] max-[440px]:text-[14px]"
//               >
//                 {isLoading ? "Sending..." : "Send OTP"}
//               </button>

//               {/* Back to Login Link */}
//               <div>
//                 <Link
//                   to="/sign-in"
//                   className="flex justify-center items-center gap-[4px]"
//                 >
//                   <img src={Arrow} alt="arrow" />
//                   <span className="font-semibold text-[15px] text-[#009A98]">
//                     Back to Login
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import close from "../../assets/forgetPg/close.png";
// import Arrow from "../../assets/forgetPg/arrow.png";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import logoImg from "/src/assets/Logo.png";

// export default function HeroForgetPg() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSendOTP = async () => {
//     // Basic email validation
//     if (!email.includes("@") || !email.includes(".")) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:8000/forget-password/send-otp", {
//         email,
//       });
//       localStorage.setItem("resetEmail", email);
//       navigate("/Otp", { state: { email } }); // Passing email via state
//     } catch (err) {
//       setError(err.response?.data?.detail || "Error sending OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
//         style={{
//           backgroundImage: 'url("/ForgetPg/fgPg.png")',
//           height: '100dvh' // Uses dynamic viewport height for mobile
//         }}
//       >
//         {/* Mobile Logo */}
//             {window.innerWidth < 769 && (
//           <div
//             style={{
//               position: 'absolute',
//               top: '35px',

//               left: window.innerWidth < 441 ? '24px' : '60px', // Change this value as needed
//               backgroundColor: 'white',
//               padding: '2px',
//               borderRadius: '3px',
//               width: '100px',
//               height: '30px',
//               opacity: 1,
//               // left: '44px',
//             }}
//           >
//                <img
//                     src={logoImg}
//                     alt="logo"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'contain',
//                       borderRadius: '3px',
//                     }}
//                   />

//                  </div>
//                )}

//         {/* Main Container */}
//         <div className="w-[525px] min-h-[444px] px-[32px] py-[28px] rounded-[10px]
//                 bg-[#00000033] backdrop-blur-[6px]
//                 border border-white shadow-[0_0_0_2px_rgba(255,255,255,0.6)]
//                 flex flex-col justify-center items-center
//                 max-[440px]:w-[400px] max-[440px]:min-h-[439px] max-[440px]:px-[32px] max-[440px]:py-[28px]
//                 max-[440px]:gap-[40px]

//                 min-[441px]:max-[768px]:w-[608px]
//                 min-[441px]:max-[768px]:h-[444px]
//                 min-[441px]:max-[768px]:pt-[28px]
//                 min-[441px]:max-[768px]:pr-[32px]
//                 min-[441px]:max-[768px]:pb-[28px]
//                 min-[441px]:max-[768px]:pl-[32px]
//                 min-[441px]:max-[768px]:gap-[40px]
//                 min-[441px]:max-[768px]:rounded-[10px]
//                 min-[441px]:max-[768px]:border-[1px]"
// >

//           {/* Close Button */}
//           <div className="w-full min-h-[80px] text-end flex justify-end">
//   <img
//     src={close}
//     alt="close"
//     className="w-[28px] h-[28px]
//       min-[441px]:max-[768px]:w-[28px]
//       min-[441px]:max-[768px]:h-[28px]
//       min-[441px]:max-[768px]:opacity-100
//       min-[441px]:max-[768px]:mt-[20px]"
//   />
// </div>

//           {/* Content Area */}
//         <div
//   className="w-full min-h-[320px] flex flex-col justify-center items-center gap-[40px]
//     max-[440px]:w-[336px] max-[440px]:min-h-[315px] max-[440px]:gap-[40px]
//     min-[441px]:max-[768px]:w-[544px]
//     min-[441px]:max-[768px]:h-[320px]
//     min-[441px]:max-[768px]:gap-[40px]"
// >

//             {/* Title Section */}
//            <div
//   className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]
//     max-[440px]:w-full max-[440px]:h-[86px]
//     min-[441px]:max-[768px]:w-[336px]
//     min-[441px]:max-[768px]:h-[86px]
//     min-[441px]:max-[768px]:gap-[12px]"
// >

//            <div
//   className="text-center text-[#009A98] font-semibold text-[26px] leading-[26px]
//     max-[440px]:text-[26px] max-[440px]:leading-[26px]
//     min-[441px]:max-[768px]:w-[289px]
//     min-[441px]:max-[768px]:h-[26px]"
//   style={{ fontFamily: "Inter" }}
// >
//   Forgot your password?
// </div>

// <div
//   className="w-full min-h-[48px] font-normal text-[15px] leading-[24px] text-center text-[#B0B0B0]
//     max-[440px]:text-[14px]
//     min-[441px]:max-[768px]:w-[336px]
//     min-[441px]:max-[768px]:h-[48px]
//     min-[441px]:max-[768px]:text-[14px]"
//   style={{ fontFamily: 'Inter' }}
// >
//   No worries. Enter your email and we'll send you a one-time
//   password (OTP) to reset it.
// </div>

//             </div>

//             {/* Form Section */}
//            <div className="w-full min-h-[194px] flex flex-col justify-center items-center gap-[40px]
//   max-[440px]:w-[336px] max-[440px]:h-[189px]
//   min-[441px]:max-[768px]:w-[544px]
//   min-[441px]:max-[768px]:h-[194px]
//   min-[441px]:max-[768px]:gap-[40px]"
// >

//               {/* Email Input */}
//               <input
//   type="email"
//   placeholder="ramprakash@example.com"
//   value={email}
//   onChange={(e) => {
//     setEmail(e.target.value);
//     setError("");
//   }}
//   className="w-full h-[48px] rounded-[8px] border border-[#E2E2E2]
//     placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]

//     max-[440px]:w-full

//     min-[441px]:max-[768px]:w-[544px]
//     min-[441px]:max-[768px]:h-[48px]
//     min-[441px]:max-[768px]:rounded-[8px]
//     min-[441px]:max-[768px]:border-[1px]"
// />

//               {/* Error Message */}
//               {error && (
//                 <div className="text-red-500 text-sm w-full text-center">
//                   {error}
//                 </div>
//               )}

//               {/* Send OTP Button */}
//            <button
//   onClick={handleSendOTP}
//   disabled={isLoading}
//   className="w-full h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-black to-[#007B82]
//     flex justify-center items-center text-white font-bold text-[16px] leading-[35px]
//     cursor-pointer disabled:opacity-70

//     max-[440px]:h-[41px] max-[440px]:text-[14px]

//     min-[441px]:max-[768px]:w-[544px]
//     min-[441px]:max-[768px]:h-[46px]
//     min-[441px]:max-[768px]:rounded-[8px]"
// >
//   {isLoading ? "Sending..." : "Send OTP"}
// </button>

//               {/* Back to Login Link */}
//             <div>
//   <Link
//     to="/sign-in"
//     className="flex justify-center items-center gap-[4px]

//       min-[441px]:max-[768px]:w-[116px]
//       min-[441px]:max-[768px]:h-[20px]
//       min-[441px]:max-[768px]:gap-[4px]"
//   >
//     <img src={Arrow} alt="arrow" />
//     <span className="font-semibold text-[15px] text-[#009A98]">
//       Back to Login
//     </span>
//   </Link>
// </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ Import toast
import "react-toastify/dist/ReactToastify.css"; // ✅ Ensure styles are loaded
import Arrow from "../../assets/forgetPg/arrow1.png";
import BgImage from "../../assets/forgetPg/ForgotPassword.png"; // import the background image

export default function HeroForgetPg() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address", { autoClose: 1500 });
      return;
    }

    setIsLoading(true);

    try {
      await axios.post("http://localhost:8000/forget-password/send-otp", {
        email,
      });

      localStorage.setItem("resetEmail", email);

      toast.success("OTP sent successfully!", { autoClose: 1500 });

      setTimeout(() => {
        navigate("/Otp", { state: { email } });
      }, 1200); // delay so success toast appears
    } catch (err) {
      const msg = err.response?.data?.detail || "Error sending OTP";
      toast.error(msg, { autoClose: 1500 });
    } finally {
      setIsLoading(false);
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
      <div className="relative w-[740px] h-[419px] flex items-center justify-center z-10">
        {/* Card Content */}
        <div
          className="relative bg-[#00000066] z-10 w-full h-full rounded-[16px] px-6 py-8 flex flex-col items-center justify-center"
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
              zIndex: "-1",
            }}
          ></div>

          {/* Back Arrow */}
          <div className="absolute top-6 left-6">
            <Link to="/sign-in" className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 bg-[#8A38F533] rounded-full flex items-center justify-center border border-[#8A38F5">
                <img src={Arrow} alt="back" className="w-4 h-4" />
              </div>
              <span className="text-[18px] text-white">Back</span>
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-white text-[28px] font-normal leading-[100%] tracking-normal text-center font-[Poppins]">
            Forgot your password?
          </h2>

          {/* Subheading */}
          <p className="text-[#F7F7FF80] text-[16px] font-normal leading-[150%] tracking-normal text-center font-[Poppins] max-w-[414px] opacity-100 mt-3">
            No worries. Enter your email and we’ll send you a one-time password
            (OTP) to reset it.
          </p>

          {/* Form */}
          <div className="flex flex-col items-start gap-3 mt-6 ">
            <label className="text-white text-[15px]">
              Enter your email ID
            </label>

            <input
              type="email"
              placeholder="John001@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[554px] h-[45px] px-4 py-2 rounded-[8px] bg-[#1F1B2E] border-[1px] border-solid border-[#FFFFFF33] text-white placeholder-gray-400 text-sm"
            />

            <button
              onClick={handleSendOTP}
              disabled={isLoading}
              className={`w-[554px] h-[45px] text-white font-medium mt-4 transition-all duration-300 
    ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8A38F580] hover:scale-105"} 
    bg-[#8A38F533] border border-[#FFFFFF33] rounded-[30px]`}
            >
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

