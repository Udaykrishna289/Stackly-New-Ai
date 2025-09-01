import React from "react";
import bgImage from "../../assets/api/bgColour1.png";

const integrationData = [
  {
    title: "Interior Design Platforms",
    description:
      "Let your users transform their rooms instantly within your app using AI rendering.",
  },
  {
    title: "Architectural SaaS Tools",
    description:
      "Integrate real-time visualization of floor plans, facades, and elevations.",
  },
  {
    title: "Home Renovation Platforms",
    description:
      "Enable users to preview renovation ideas directly on your website.",
  },
  {
    title: "E-Commerce & Furniture Brands",
    description:
      "Display furniture in realistic settings using AI-generated room mockups.",
  },
  {
    title: "Real Estate Marketplaces",
    description:
      "Offer virtual staging with one click, enhancing property listings.",
  },
  {
    title: "Home Builder Apps",
    description:
      "Let buyers preview customized homes with different themes and materials.",
  },
];

const AfterApiIntegration = () => {
  return (
    <div
      className="w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center gap-10 bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white max-w-4xl">
        Who Can <span className="text-[#00D9D0]">Integrate</span> StacklyAI API?
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-white text-center max-w-2xl leading-relaxed">
        Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
      </p>

      {/* Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {integrationData.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 bg-white rounded-[30px] shadow-md shadow-[#007B8229] flex flex-col gap-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a]">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-[#707070] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AfterApiIntegration;

//   return (
//     <div
//       className="relative w-full h-[959px] flex flex-col items-center justify-center gap-12 px-4"
//       style={{
//         backgroundColor: "rgba(1, 18, 19, 1)",
//         overflow: "hidden",
//       }}
//     >
//       {/* Blurred Circles */}
//       <div
//         className="absolute w-[400px] h-[400px] rounded-full"
//         style={{
//           top: "50px",
//           left: "100px",

//           //background: "rgba(0, 176, 186, 0.8)",
//           filter: "blur(544px)",
//         }}
//       />
//       <div
//         className="absolute w-[400px] h-[400px] rounded-full"
//         style={{
//           bottom: "50px",
//           right: "150px",
//           //background: "rgba(0, 176, 186, 0.6)",
//           //background: "rgba(0, 176, 186, 1)",
//           backgroundImage: `url(${bgImage})`,

//           filter: "blur(544px)",
//         }}
//       />
//       <div
//   className="absolute w-[300px] h-[300px] rounded-full"
//   style={{
//     top: "80px",
//     left: "80px",
//     background: "radial-gradient(circle, rgba(0,217,208,0.25) 0%, rgba(1,18,19,0) 70%)",
//     zIndex: 0,
//   }}
// ></div> 

//       {/* Heading */}
//       <div className="w-[791px] h-[58px] text-[48px] font-bold leading-[100%] text-white text-center z-10">
//         Who Can <span className="text-[#00D9D0]">Integrate</span> StacklyAI API?
//       </div>

//       {/* Paragraph */}
//       <p className="w-[672px] h-[56px] text-[18px] font-[400] leading-[28px] text-center text-white z-10">
//         Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
//       </p>

//       {/* Boxes */}
//       <div className="w-[1440px] h-[484px] grid grid-cols-3 gap-10 z-10">
//         {integrationData.map((item, index) => (
//           <div
//             key={index}
//             className="w-[413px] h-[240px] p-[40px] bg-white rounded-[40px] drop-shadow-[4px_4px_12px_#007B8229] shadow-[inset_2px_2px_16px_#FFFFFF14] flex flex-col gap-[20px]"
//           >
//             <h3 className="w-[333px] h-[68px] text-[#2a2a2a] text-[28px] font-bold leading-[100%]">
//               {item.title}
//             </h3>
//             <p className="w-[333px] h-[72px] text-[#707070] text-[17px] font-[400] leading-[24px]">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AfterApiIntegration;
