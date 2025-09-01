// import React from "react";
// import logo from "../assets/Logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
//   faPinterestP,
// } from "@fortawesome/free-brands-svg-icons";
// export default function Footer() {
//   return (
//     <footer className="w-full h-auto flex justify-center items-center flex-col mt-20 shadow-lg bg-[rgba(0,123,130,0.04)]">
//       {/* <div className="w-full h-[2px] border-black bg-[#2a2a2a] rounded-[2px] mb-14"></div> */}
//       <div className="max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 lg:mx-20 md:mx-12 sm:mx-10 sm:mx-0 gap-10 mt-10">
//         <div className="mr-5">
//           <img src={logo} alt="Stackly Logo" className="mb-4 w-32" />
//           <p className="text-[16px] leading-[24px]">
//             Automatically generate photo-like images of your desired spaces in
//             seconds. Unleash the most advanced AI interior design tool to boost
//             your productivity.
//           </p>
//           <div className="flex gap-4 mt-4">
//             <a href="#" className="text-[#007b82]">
//               <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#007b82]">
//               <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#007b82]">
//               <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#007b82]">
//               <FontAwesomeIcon icon={faPinterestP} className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-bold text-[18px] mb-4 text-[#007b82]">
//             Quick links
//           </h4>
//           <ul className=" text-[16px] leading-[40px] spacing-[0.3px] text-[#2A2A2A]">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Trends</a>
//             </li>
//             <li>
//               <a href="#">Products</a>
//             </li>
//             <li>
//               <a href="#">Pricing</a>
//             </li>
//             <li>
//               <a href="#">API</a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bold text-[18px] mb-4 text-[#007b82]">
//             Terms & Policy
//           </h4>
//           <ul className="text-[16px] leading-[40px] spacing-[0.3px] text-[#2A2A2A]">
//             <li>
//               <a href="#">Terms of Services</a>
//             </li>
//             <li>
//               <a href="#">Privacy and Cookie Policy</a>
//             </li>
//             <li>
//               <a href="#">Cookie Settings</a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bold text-[18px] mb-4 text-[#007b82]">
//             Contact Us
//           </h4>
//           <div className="text-[16px] leading-[40px] spacing-[0.3px] text-[#2A2A2A]">
//             <a
//               href="mailto:info@stacklyai.com"
//               className="flex items-center gap-2 text-[#007B82] transition-colors"
//             >
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               <div className="text-[#2b2b2b]">info@stacklyai.com</div>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="w-[1300px] h-[2px] flex justify-center items-center bg-[#007B8233] sm:m-5 m-10"></div>

//       <div className="text-center text-[#007B82] text-[16px] leading-[16px] tracking-[0.26px] text-xs mt-4 mb-10">
//         &copy; 2023 Stackly AI | All Rights Reserved
//       </div>
//     </footer>
//   );
// }

//footer.jsx
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import logo from "../assets/Logo1.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
//   faPinterestP,
// } from "@fortawesome/free-brands-svg-icons";

// export default function Footer() {
//   const location = useLocation();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 441);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 441);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const hiddenRoutes = [
//     "/sign-up",
//     "/sign-in",
//     "/Otp",
//     "/ForgetPg",
//     "/SignupOtp",
//     "/ResetPassword",
//     "/ResetPopup",
//     "/SignUpPopup",
//     "/HeroForgetPg",
//   ];

//   // Don't render footer if current route is in the hidden list AND screen is mobile
//   // if (hiddenRoutes.includes(location.pathname) && isMobile) {
//   //   return null;
//   // }
//   if (hiddenRoutes.includes(location.pathname)) {
//     return null; // Hide on all screen sizes
//   }
//   return (
//   <footer className="w-full h-auto flex justify-center items-center flex-col mt-0 shadow-lg bg-black">

//       {/* <div className="w-full h-[2px] border-black bg-[#2a2a2a] rounded-[2px] mb-14"></div> */}
//       <div className="max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 lg:mx-20 md:mx-12 sm:mx-10 sm:mx-0 gap-10 mt-10 
//   max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[400px] max-[440px]:min-h-[427px] max-[440px]:gap-[24px]">

//         <div className="mr-5 
//   max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[296px] max-[440px]:min-h-[148px] max-[440px]:gap-[12px]">

//           <img
//             src={logo}
//             alt="Stackly Logo"
//             className="mb-4 w-32 
//     max-[440px]:w-[192px] max-[440px]:h-[56px] max-[440px]:object-contain"
//           />

//         <p className="text-[16px] leading-[24px] text-white 
//   max-[440px]:w-[296px] max-[440px]:h-[80px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-[400] 
//   max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//   max-[440px]:tracking-[0.3px]">
//   Automatically generate photo-like images of your desired spaces in
//   seconds. Unleash the most advanced AI interior design tool to boost
//   your productivity.
// </p>

//           <div className="flex gap-4 mt-4 max-[440px]:hidden">
//             <a href="#" className="text-[#FFFFFF]">
//               <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#FFFFFF]">
//               <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#FFFFFF]">
//               <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#FFFFFF]">
//               <FontAwesomeIcon icon={faPinterestP} className="w-5 h-5" />
//             </a>
//           </div>

//         </div>

//         <div>
//           <h4 className="font-bold text-[18px] mb-4 text-[#FFFFFF] max-[440px]:hidden">
//             Quick links
//           </h4>

//           <ul className="text-[16px] leading-[40px] spacing-[0.3px] text-[#FFFFFF] max-[440px]:hidden">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/products">Feature</a>
//             </li>
//             <li>
//               <a href="/pricing">Pricing</a>
//             </li>
//             <li>
//               <a href="/api">API</a>
//             </li>
//             <li>
//               <a href="/contact">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold text-[18px] mb-4 text-[#FFFFFF] max-[440px]:hidden">
//             Terms & Policy
//           </h4>

//           <ul className="text-[16px] leading-[40px] spacing-[0.3px] text-[#FFFFFF] max-[440px]:hidden">
//             <li>
//               <a href="#">Terms of Services</a>
//             </li>
//             <li>
//               <a href="#">Privacy and Cookie Policy</a>
//             </li>
//             <li>
//               <a href="#">Cookie Settings</a>
//             </li>
//           </ul>
//         </div>
//         {/* Desktop Version (Hidden on mobile) */}
//         <div className="hidden max-[440px]:hidden">
//           <h4 className="font-bold text-[18px] mb-4 text-[#FFFFFF]">Quick links</h4>
//           <ul className="text-[16px] leading-[40px] spacing-[0.3px] text-[#FFFFFF]">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Trends</a></li>
//             <li><a href="#">Products</a></li>
//             <li><a href="#">Pricing</a></li>
//             <li><a href="#">API</a></li>
//           </ul>
//         </div>
//         <div className="hidden max-[440px]:hidden">
//           <h4 className="font-bold text-[18px] mb-4 text-[#FFFFFF]">Terms & Policy</h4>
//           <ul className="text-[16px] leading-[40px] spacing-[0.3px] text-[#FFFFFF]">
//             <li><a href="#">Terms of Services</a></li>
//             <li><a href="#">Privacy and Cookie Policy</a></li>
//             <li><a href="#">Cookie Settings</a></li>
//           </ul>
//         </div>
//         {/* Mobile Version (Only visible on mobile <441px) */}
//         <div className="hidden max-[440px]:flex max-[440px]:flex-row max-[440px]:justify-between max-[440px]:gap-[16px] max-[440px]:w-full max-[440px]:-mt-[48px]">

//           {/* Quick Links Mobile */}
//           <div className="flex flex-col gap-[8px]">
//             <h4 className="text-[#007b82] text-[14px] font-semibold leading-[24px] tracking-[0.3px] font-['Inter']">
//               Quick links
//             </h4>
//             <ul className="flex flex-col justify-between w-[106px] h-[133px] text-[14px] leading-[100%] tracking-[0.3px] text-[#2A2A2A] font-['Inter']">
//               <li className="h-[17px]"><a href="#">Home</a></li>
//               <li className="h-[17px]"><a href="#">Trends</a></li>
//               <li className="h-[17px]"><a href="#">Products</a></li>
//               <li className="h-[17px]"><a href="#">Pricing</a></li>
//               <li className="h-[17px]"><a href="#">API</a></li>
//             </ul>
//           </div>
//           {/* Terms & Policy Mobile */}
//           <div className="flex flex-col gap-[8px]">
//             <h4 className="text-[#007b82] text-[14px] font-semibold leading-[24px] tracking-[0.3px] font-['Inter']">
//               Terms & Policy
//             </h4>
//             <ul className="flex flex-col justify-between w-[174px] h-[133px] text-[14px] leading-[100%] tracking-[0.3px] text-[#2A2A2A] font-['Inter']">
//               <ul className="flex flex-col gap-[6px] w-[174px] text-[14px] leading-[100%] tracking-[0.3px] text-[#2A2A2A] font-['Inter']">
//                 <li className="h-[17px]"><a href="#">Terms of Services</a></li>
//                 <li className="h-[17px]"><a href="#">Privacy and Cookie Policy</a></li>
//                 <li className="h-[17px]"><a href="#">Cookie Settings</a></li>
//               </ul>
//             </ul>
//           </div>
//         </div>
//         <div
//           className="max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[193px] max-[440px]:gap-[12px]"
//         >
//           <h4 className="font-bold text-[18px] mb-4 text-[#FFFFFF] max-[440px]:text-[14px] max-[440px]:mb-0 max-[440px]:leading-[24px] max-[440px]:tracking-[0.3px] max-[440px]:font-semibold font-['Inter']">
//             Contact Us
//           </h4>

//           <div className="text-[16px] leading-[40px] tracking-[0.3px] text-[#FFFFFF] max-[440px]:text-[14px] max-[440px]:leading-[20px]">
//             <a
//               href="mailto:info@stacklyai.com"
//               className="flex items-center gap-2 text-[#FFFFFF] transition-colors"
//             >
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               <div className="text-[#FFFFFF]">info@stacklyai.com</div>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div
//         className="w-[1300px] h-[2px] flex justify-center items-center bg-[#007B8233] sm:m-5 m-10 
//         max-[440px]:w-[385px] max-[440px]:h-[1px] max-[440px]:rotate-0"
//       ></div>


//       <div className="text-center text-[#FFFFFF] text-[16px] leading-[16px] tracking-[0.26px] text-xs mt-4 mb-10
//   max-[440px]:w-[400px] max-[440px]:h-[24px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-normal 
//   max-[440px]:text-[16px] max-[440px]:leading-[16px] 
//   max-[440px]:tracking-[0.26px]">
//         &copy; 2023 Stackly AI | All Rights Reserved
//       </div>

//     </footer>
//   );
// }


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 441);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const checkAuth = () => {
    const userId = localStorage.getItem("userId");
    const userInfo = localStorage.getItem("userInfo");
    setIsLoggedIn(!!(userId && userInfo));
  };

  // Run on mount + whenever route changes
  checkAuth();

  // Listen for changes in localStorage (e.g., login/logout from other tabs)
  window.addEventListener("storage", checkAuth);

  return () => {
    window.removeEventListener("storage", checkAuth);
  };
}, [location.pathname]);


  const hiddenRoutes = [
    "/sign-up",
    "/sign-in",
    "/Otp",
    "/ForgetPg",
    "/SignupOtp",
    "/ResetPassword",
    "/ResetPopup",
    "/SignUpPopup",
    "/heroforgetpg",
  ];

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="w-full h-auto flex justify-center items-center flex-col mt-0 shadow-lg bg-black">
      <div className="max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 lg:mx-20 md:mx-12 sm:mx-10 max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[400px] max-[440px]:min-h-[427px] max-[440px]:gap-[24px] max-[440px]:px-4">
        
        {/* Logo & About */}
        <div className="mr-5 max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[296px] max-[440px]:min-h-[148px] max-[440px]:gap-[12px]">
          <img
            src={logo}
            alt="Stackly Logo"
            className="mb-1 w-32 max-[440px]:w-[192px] max-[440px]:h-[56px] max-[440px]:object-contain"
          />
          <p className="text-[16px] leading-[24px] text-white max-[440px]:w-[296px] max-[440px]:h-[80px] max-[440px]:font-['Inter'] max-[440px]:font-[400] max-[440px]:text-[12px] max-[440px]:leading-[140%] max-[440px]:tracking-[0.3px]">
            Automatically generate photo-like images of your desired spaces in
            seconds. Unleash the most advanced AI interior design tool to boost
            your productivity.
          </p>
          <div className="flex gap-4 mt-4 max-[440px]:hidden">
            <a href="#" className="text-[#FFFFFF]">
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#FFFFFF]">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#FFFFFF]">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#FFFFFF]">
              <FontAwesomeIcon icon={faPinterestP} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links (Desktop) */}
<div>
  <h4 className="font-bold ml-12 text-[18px] mb-4 text-[#FFFFFF] max-[440px]:hidden">
    Quick links
  </h4>
  <ul className="text-[16px] ml-12 leading-[40px] spacing-[0.3px] text-[#FFFFFF] max-[440px]:hidden">
    {/* Dynamic first link */}
    <li>
      <a href={isLoggedIn ? "/canvas" : "/"}>{isLoggedIn ? "Canvas" : "Home"}</a>
    </li>

    {isLoggedIn ? (
      <>
        <li><a href="/products">My Spaces</a></li>
        <li><a href="/pricing">Inspirations</a></li>
        <li><a href="/api">API</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </>
    ) : (
      <>
        <li><a href="/products">Feature</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/api">API</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </>
    )}
  </ul>
</div>

        {/* Terms & Policy */}
        <div>
          <h4 className="font-bold ml-4 text-[18px] mb-4 text-[#FFFFFF] max-[440px]:hidden">
            Terms & Policy
          </h4>
          <ul className="text-[16px] ml-4 leading-[40px] spacing-[0.3px] text-[#FFFFFF] max-[440px]:hidden">
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Privacy and Cookie Policy</a></li>
            <li><a href="#">Cookie Settings</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="max-[440px]:flex ml-12 max-[440px]:flex-col max-[440px]:w-[193px] max-[440px]:-ml-[0px] max-[440px]:mt-[160px] max-[440px]:gap-[2px]">
          <h4 className="font-bold text-[18px] mb-4 text-[#FFFFFF] max-[440px]:text-[14px] max-[440px]:mb-0 max-[440px]:leading-[24px] max-[440px]:tracking-[0.3px] max-[440px]:font-semibold font-['Inter']">
            Contact Us
          </h4>
          <div className="text-[16px] leading-[40px] tracking-[0.3px] text-[#FFFFFF] max-[440px]:text-[14px] max-[440px]:leading-[20px]">
            <a
              href="mailto:info@stacklyai.com"
              className="flex items-center gap-2 text-[#FFFFFF] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="text-[#FFFFFF]">info@stacklyai.com</div>
            </a>
          </div>
        </div>

        {/* Mobile Version (Only visible on mobile <441px) */}
        <div className="hidden max-[440px]:flex max-[440px]:flex-row max-[440px]:justify-between max-[440px]:gap-[16px] max-[440px]:w-full max-[440px]:-mt-[270px]">
          {/* Quick Links Mobile */}
          <div className="flex flex-col gap-[12px]">
            <h4 className="text-[#007b82] text-[14px] font-semibold leading-[24px] tracking-[0.3px] font-['Inter']">
              Quick links
            </h4>
            <ul className="flex flex-col justify-between w-[106px] h-[133px] text-[14px] leading-[100%] tracking-[0.3px] text-[#2A2A2A] font-['Inter']">
              <li className="h-[17px]"><a href="/">Home</a></li>
              {isLoggedIn ? (
                <>
                  <li className="h-[17px]"><a href="/products">My Spaces</a></li>
                  <li className="h-[17px]"><a href="/pricing">Inspirations</a></li>
                  <li className="h-[17px]"><a href="/api">FAQs</a></li>
                </>
              ) : (
                <>
                  <li className="h-[17px]"><a href="/products">Feature</a></li>
                  <li className="h-[17px]"><a href="/pricing">Pricing</a></li>
                  <li className="h-[17px]"><a href="/api">API</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Terms & Policy Mobile */}
          <div className="flex flex-col gap-[8px]">
            <h4 className="text-[#007b82] text-[14px] font-semibold leading-[24px] tracking-[0.3px] font-['Inter']">
              Terms & Policy
            </h4>
            <ul className="flex flex-col gap-[6px] w-[174px] text-[14px] leading-[100%] tracking-[0.3px] text-[#2A2A2A] font-['Inter']">
              <li className="h-[17px]"><a href="#">Terms of Services</a></li>
              <li className="h-[17px]"><a href="#">Privacy and Cookie Policy</a></li>
              <li className="h-[17px]"><a href="#">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[1300px] h-[2px] flex justify-center items-center bg-[#007B8233] sm:m-5 m-10 max-[440px]:w-[385px] max-[440px]:h-[1px] max-[440px]:rotate-0"></div>

      {/* Copyright */}
      <div className="text-center text-[#FFFFFF] text-[16px] leading-[16px] tracking-[0.26px] text-xs mt-4 mb-10 max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:font-['Inter'] max-[440px]:font-normal max-[440px]:text-[16px] max-[440px]:leading-[16px] max-[440px]:tracking-[0.26px]">
        &copy; 2023 Stackly AI | All Rights Reserved
      </div>
    </footer>
  );
}
