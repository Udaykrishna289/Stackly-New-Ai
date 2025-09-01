// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import Pop from '../../assets/forgetPg/pop.png'
// import { Link } from 'react-router-dom'

// export default function ResetPopup() {
//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover
//               "
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
//           <img src={Pop} alt="" />

//           <div className="w-[461px] min-h-[104px] flex flex-col justify-center items-center gap-[28px]">
//             <div className="w-[461px] min-h-[52px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//               Your password has been reset successfully!
//             </div>
//             <div className="w-[461px] min-h-[24px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]">
//               Create a strong new password for your account.
//             </div>
//           </div>

//           <div>
//             <Link
//               href=""
//               className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//             >
//               <img src={Arrow} alt="" />
//               <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
//                 <Link to="/Sign-in">Go to Login</Link>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//

// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import Pop from '../../assets/forgetPg/pop.png'
// import { Link } from 'react-router-dom'
// import logoImg from "/src/assets/Logo.png";

// export default function ResetPopup() {
//   return (
//     <div>
//       <section
//         className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover"
//         style={{
//           backgroundImage: 'url("/ForgetPg/fgPg.png")',
//           height: '100vh',
//           minHeight: '-webkit-fill-available' // For mobile browsers
//         }}
//       >
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
//               display: 'block' // Add this to ensure img renders
//             }}
//           />
//         </div>
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm

//   max-[440px]:flex-col
//   max-[440px]:w-[400px]
//   max-[440px]:h-[364.14px]
//   max-[440px]:rounded-[10px]
//   max-[440px]:border
//   max-[440px]:border-[#ffffff]
//   max-[440px]:p-[32px]
//   max-[440px]:gap-[40px]">
//           {/* Centered image */}
//           <div className="flex justify-center items-center max-[440px]:mt-[32px]">
//             <img
//               src={Pop}
//               alt=""
//               className="w-auto h-auto
//         sm:w-[107px] sm:h-[92.14px]
//         max-[440px]:w-[92.14px]
//         max-[440px]:h-[92.14px]
//         max-[440px]:rounded-[7.93px]"
//             />
//           </div>

//           <div className="w-[461px] min-h-[104px] flex flex-col justify-center items-center gap-[28px]
//   max-[440px]:flex-col
//   max-[440px]:w-[336px]
//   max-[440px]:h-[108px]
//   max-[440px]:gap-[28px]">

//             <div className="w-[461px] min-h-[52px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
//   max-[440px]:font-semibold
//   max-[440px]:text-[26px]
//   max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0]
//   max-[440px]:text-center
//   max-[440px]:text-white">
//               Your password has been reset successfully!
//             </div>

//             {/* <div className="w-[461px] min-h-[24px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]
//   max-[440px]:font-[400]
//   max-[440px]:text-[16px]
//   max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0]
//   max-[440px]:text-center
//   max-[440px]:w-[336px]
//   max-[440px]:h-[44px]">
//               Create a strong new password for your account.
//             </div> */}

//           </div>

//           <div
//               className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//             >
//               <img
//                 src={Arrow}
//                 alt=""
//                 className="
//                     w-auto h-auto
//                     /* Mobile styles (<440px) */
//                     max-[440px]:w-[12.98px]
//                     max-[440px]:h-[12.64px]
//                     max-[440px]:mt-[3.69px]
//                     max-[440px]:ml-[3.69px]
//                     max-[440px]:brightness-0 max-[440px]:invert
//                   "
//               />
//               <div className="font-semibold text-[15px] leading-[100%] text-[#009A98]
//                 max-[440px]:text-white
//                 max-[440px]:font-semibold
//                 max-[440px]:text-[15px]
//                 max-[440px]:leading-[100%]
//                 max-[440px]:tracking-[0]
//                 max-[440px]:w-[83px]
//                 max-[440px]:h-[18px]
//               ">
//                 <Link
//                   to="/Sign-in"
//                   className="max-[440px]:underline max-[440px]:decoration-solid max-[440px]:decoration-white max-[440px]:decoration-1 max-[440px]:underline-offset-[2px]"
//                 >
//                   Go to Login
//                 </Link>
//               </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import Pop from '../../assets/forgetPg/pop.png'
// import { Link } from 'react-router-dom'
// import logoImg from "/src/assets/Logo.png";

// export default function ResetPopup() {
//   return (
//     <div>
//       <section
//         className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover"
//         style={{
//           backgroundImage: 'url("/ForgetPg/fgPg.png")',
//           height: '100vh',
//           minHeight: '-webkit-fill-available' // For mobile browsers
//         }}
//       >
//            {window.innerWidth < 769 && (
//                 <div
//                   style={{
//                     position: 'absolute',
//                     top: '35px',

//                     left: window.innerWidth < 441 ? '24px' : '60px', // Change this value as needed
//                     backgroundColor: 'white',
//                     padding: '2px',
//                     borderRadius: '3px',
//                     width: '100px',
//                     height: '30px',
//                     opacity: 1,
//                     // left: '44px',
//                   }}
//                 >
//                      <img
//                           src={logoImg}
//                           alt="logo"
//                           style={{
//                             width: '100%',
//                             height: '100%',
//                             objectFit: 'contain',
//                             borderRadius: '3px',
//                           }}
//                         />

//                        </div>
//                      )}
//        <div className="w-[525px] min-h-[444px] rounded-[10px] border border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm

//   max-[440px]:flex-col
//   max-[440px]:w-[400px]
//   max-[440px]:h-[364.14px]
//   max-[440px]:rounded-[10px]
//   max-[440px]:border
//   max-[440px]:border-[#ffffff]
//   max-[440px]:p-[32px]
//   max-[440px]:gap-[40px]

//   min-[441px]:max-[768px]:w-[608px]
//   min-[441px]:max-[768px]:h-[328.14px]
//   min-[441px]:max-[768px]:rounded-[10px]
//   min-[441px]:max-[768px]:border
//   min-[441px]:max-[768px]:border-white
//   min-[441px]:max-[768px]:p-[32px]
//   min-[441px]:max-[768px]:gap-[40px]"
// >

//           {/* Centered image */}
//          <div className="flex justify-center items-center max-[440px]:mt-[32px]">
//   <img
//     src={Pop}
//     alt=""
//     className="w-auto h-auto
//       sm:w-[107px] sm:h-[92.14px]
//       max-[440px]:w-[92.14px]
//       max-[440px]:h-[92.14px]
//       max-[440px]:rounded-[7.93px]

//       min-[441px]:max-[768px]:w-[107px]
//       min-[441px]:max-[768px]:h-[92.14px]"
//   />
// </div>

//        <div className="w-[461px] min-h-[104px] flex flex-col justify-center items-center gap-[28px]
//   max-[440px]:flex-col
//   max-[440px]:w-[336px]
//   max-[440px]:h-[108px]
//   max-[440px]:gap-[28px]

//   min-[441px]:max-[768px]:w-[544px]
//   min-[441px]:max-[768px]:h-[72px]
//   min-[441px]:max-[768px]:gap-[40px]">

//            <div className="w-[461px] min-h-[52px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
//   max-[440px]:font-semibold
//   max-[440px]:text-[26px]
//   max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0]
//   max-[440px]:text-center
//   max-[440px]:text-white

//   min-[441px]:max-[768px]:w-[544px]
//   min-[441px]:max-[768px]:h-[72px]
//   min-[441px]:max-[768px]:leading-[140%]
//   min-[441px]:max-[768px]:text-white">
//   Your password has been reset successfully!
// </div>

//             {/* <div className="w-[461px] min-h-[24px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]
//   max-[440px]:font-[400]
//   max-[440px]:text-[16px]
//   max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0]
//   max-[440px]:text-center
//   max-[440px]:w-[336px]
//   max-[440px]:h-[44px]">
//               Create a strong new password for your account.
//             </div> */}

//           </div>

//          <div
//   className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]
//   min-[441px]:max-[768px]:w-[102px]
//   min-[441px]:max-[768px]:h-[20px]
//   min-[441px]:max-[768px]:gap-[4px]"
// >

//             <img
//   src={Arrow}
//   alt=""
//   className="
//     w-auto h-auto

//     /* Mobile styles (<440px) */
//     max-[440px]:w-[12.98px]
//     max-[440px]:h-[12.64px]
//     max-[440px]:mt-[3.69px]
//     max-[440px]:ml-[3.69px]
//     max-[440px]:brightness-0 max-[440px]:invert

//     /* Tablet styles (441px–768px) */
//     min-[441px]:max-[768px]:w-[12.978px]
//     min-[441px]:max-[768px]:h-[12.636px]
//     min-[441px]:max-[768px]:mt-[3.69px]
//     min-[441px]:max-[768px]:ml-[3.69px]
//     min-[441px]:max-[768px]:brightness-0 min-[441px]:max-[768px]:invert
//   "
// />

//              <div className="font-semibold text-[15px] leading-[100%] text-[#009A98]

//   /* Tablet styles (441px–768px) */
//   min-[441px]:max-[768px]:w-[78px]
//   min-[441px]:max-[768px]:h-[17px]
//   min-[441px]:max-[768px]:text-[14px]
//   min-[441px]:max-[768px]:font-semibold
//   min-[441px]:max-[768px]:underline
//   min-[441px]:max-[768px]:text-white

//   /* Mobile styles (<440px) */
//   max-[440px]:text-white
//   max-[440px]:font-semibold
//   max-[440px]:text-[15px]
//   max-[440px]:leading-[100%]
//   max-[440px]:tracking-[0]
//   max-[440px]:w-[83px]
//   max-[440px]:h-[18px]
// ">

//                 <Link
//                   to="/Sign-in"
//                   className="max-[440px]:underline max-[440px]:decoration-solid max-[440px]:decoration-white max-[440px]:decoration-1 max-[440px]:underline-offset-[2px]"
//                 >
//                   Go to Login
//                 </Link>
//               </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import Arrow from "../../assets/forgetPg/arrow1.png";

// export default function HeroForgetPg() {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//       style={{
//         background: "#000000",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Top-left glow */}
//       <div className="absolute w-[700px] h-[300px] top-[-100px] left-[-100px] bg-[#8A38F5] opacity-40 rounded-full blur-[150px] z-0"></div>

//       {/* Bottom-right glow */}
//       <div className="absolute w-[700px] h-[300px] bottom-[-100px] right-[-100px] bg-[#51218F] opacity-40 rounded-full blur-[150px] z-0"></div>

//       {/* Card Wrapper with Gradient Border */}
//       <div className="relative w-[740px] h-[250px] flex items-center justify-center z-10">
//         {/* Gradient border */}
//         <div
//           className="absolute inset-0 rounded-[16px] p-[2px] z-0"
//           style={{
//             background: "linear-gradient(135deg, #8A38F5, #3B0E78)",
//           }}
//         ></div>

//         {/* Transparent Card */}
//         <div
//           className="relative z-10 w-full h-full rounded-[16px] px-6 py-8 flex flex-col items-center justify-center text-center"
//           style={{
//             background: "transparent",
//             backdropFilter: "blur(10px)",
//             WebkitBackdropFilter: "blur(10px)",
//           }}
//         >
//           {/* Success Message */}
//           <h2 className="text-white text-[18px] font-medium">
//             Your password has been reset successfully!
//           </h2>

//           {/* Back Button */}
//           <Link to="/sign-in" className="mt-6 flex flex-col items-center gap-1">
//             <div className="w-10 h-10 rounded-full bg-[#8A38F5] flex items-center justify-center">
//               <img src={Arrow} alt="back" className="w-4 h-4" />
//             </div>
//             <span className="text-white text-sm">Back</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/forgetPg/arrow1.png";
import BgImage from "../../assets/forgetPg/ForgotPassword.png";

export default function HeroResetSuccess() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${BgImage})`,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Top-left glow */}
      <div className="absolute w-[700px] h-[300px] top-[-100px] left-[-100px] bg-[#8A38F5] opacity-40 rounded-full blur-[150px] z-0"></div>

      {/* Bottom-right glow */}
      <div className="absolute w-[700px] h-[300px] bottom-[-100px] right-[-100px] bg-[#51218F] opacity-40 rounded-full blur-[150px] z-0"></div>

      {/* Card Wrapper */}
      <div className="relative  w-[740px] h-[250px] flex items-center justify-center z-10">
        {/* Gradient Border Card */}
        <div
          className="relative bg-[#00000066] z-10 w-[740px] h-[332px] rounded-[16px] px-6 py-8 flex flex-col items-center justify-center text-center opacity-100"
        
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
          {/* Success Message */}
          <h2 className="text-white text-[18px] font-medium mt-[100px]">
            Your password has been reset successfully!
          </h2>

          {/* Back Button */}
          <Link
            to="/sign-in"
            className="flex items-center gap-2 text-white mt-5"
          >
            <div className="w-9 h-9 bg-[#8A38F533] rounded-full flex items-center justify-center border border-[#8A38F5]">
              <img src={Arrow} alt="back" className="w-4 h-4" />
            </div>
            <span className="text-[18px] text-white">Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
