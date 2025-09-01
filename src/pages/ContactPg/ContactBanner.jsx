// import React from "react";
// import logo from "../../assets/pricing-pg/logo.png"; // replace with your logo path
// import iconChat from "../../assets/pricing-pg/chat.png"; // faded background icon
// import iconNote from "../../assets/pricing-pg/pad.png"; // another background icon

// const ContactBanner = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center w-full min-h-[425px] px-4 py-20 bg-white overflow-hidden gap-[30px]">
//       {/* Background icons */}
//       <img src={iconChat} alt="" className="absolute top-[10px] left-20" />
//       <img src={iconChat} alt="" className="absolute  left-0 bottom-0" />
//       <img
//         src={iconNote}
//         alt=""
//         className="absolute right-[300px] top-[80px]"
//       />
//       {/* Logo */}
//       <img src={logo} alt="StacklyAI logo" className="w-[88.5px] h-[118px]" />

//       {/* Heading */}
//       <h2 className=" max-w-[700px] leading-[100%] text-[38px] font-semibold text-center text-[#2A2A2A]">
//         Get in touch with{" "}
//         <span className="text-[#00B0BA] font-bold">STACKLYAI</span> right now!
//       </h2>
//     </section>
//   );
// };

// export default ContactBanner;

import React from "react";
import logo from "../../assets/pricing-pg/logo.png"; // replace with your logo path
import iconChat from "../../assets/pricing-pg/chat.png"; // faded background icon
import iconNote from "../../assets/pricing-pg/pad.png"; // another background icon

const ContactBanner = () => {
  return (
   <section className="relative flex flex-col items-center justify-center w-full min-h-[425px] px-4 py-20 bg-white overflow-hidden gap-[30px]
  max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[440px] max-[440px]:min-h-[195px]
  max-[440px]:px-[20px] max-[440px]:py-[40px] max-[440px]:gap-[27px]">

      {/* <div className="absolute top-0 left-0 right-0 max-[440px]:flex hidden items-center justify-between w-full px-5 py-4  z-10">
  <div className="flex items-center gap-2">
   
    <div className="w-[24px] h-[24px] flex items-center justify-center">
     
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[16px] h-[16px]"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#2A2A2A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    
    <span className="text-[#2A2A2A] font-inter font-bold text-[16px] leading-[140%]">
      Back
    </span>
  </div>
</div> */}

      <img src={iconChat} alt="" className="absolute top-[10px] left-20" />
      <img src={iconChat} alt="" className="absolute  left-0 bottom-0" />
      <img
        src={iconNote}
        alt=""
        className="absolute right-[300px] top-[80px]"
      />
      {/* Logo */}
     <img
  src={logo}
  alt="StacklyAI logo"
  className="w-[88.5px] h-[118px] max-[440px]:w-[48px] max-[440px]:h-[64px]"
/>


      {/* Heading */}
      <h2 className="max-w-[700px] leading-[100%] text-[38px] font-semibold text-center text-[#2A2A2A] max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:font-semibold max-[440px]:leading-[100%]">
        Get in touch with{" "}
        <span className="text-[#00B0BA] font-bold">STACKLYAI</span> right now!
      </h2>

    </section>
  );
};

export default ContactBanner;
