// import React from 'react'

// export default function StepsHome() {
//   return (
// <section className="w-full pb-20 px-5 ">
//     <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//       <h1 className=" w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//         <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{" "}
//         <span className="text-[#007B82]">STACKLYAI</span>
//       </h1>
//       <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//         3 Easy Steps to Get Started
//       </p>
//     </div>

//     <div className="step1">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 1:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]"> Upload </span>a photo of your room,
//         home, or outdoor space.
//       </p>
//     </div>
//     <div className="step2 flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 2:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]"> Personalize your experience </span>—
//         choose the room type, adjust AI creativity, add special
//         instructions, and select your favorite design style
//       </p>
//     </div>

//     <div className="step3 flex flex-col items-end">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 3:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]">Generate</span> stunning new decor and
//         design concepts in under 25 seconds.
//       </p>
//     </div>
//   </section>

//     <section className="w-full pb-20 px-5">
//   {/* Header Section */}
//   <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//     <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//       <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//       WITH <span className="text-[#007B82]">STACKLYAI</span>
//     </h1>
//     <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//       3 Easy Steps to Get Started
//     </p>
//   </div>

//   {/* Steps Row */}
//   <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap">
//     {/* Step 1 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 1:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Upload</span> a photo of your room,
//         home, or outdoor space.
//       </p>
//     </div>

//     {/* Step 2 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 2:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Personalize your experience</span> —
//         choose the room type, adjust AI creativity, add special instructions, and select your favorite design style
//       </p>
//     </div>

//     {/* Step 3 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 3:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Generate</span> stunning new decor and
//         design concepts in under 25 seconds.
//       </p>
//     </div>
//   </div>
// </section>

//     <section className="w-full pb-20 px-5">
//   <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//     <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//       <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{' '}
//       <span className="text-[#007B82]">STACKLYAI</span>
//     </h1>
//     <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//       3 Easy Steps to Get Started
//     </p>
//   </div>

//   {/* Steps Container */}
//   <div className="flex flex-row flex-wrap justify-center items-start gap-8 mt-16">
//     <SlideInView direction="left" delay={0.2}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 1:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Upload</span> a photo of your room,
//           home, or outdoor space.
//         </p>
//       </div>
//     </SlideInView>

//     <SlideInView direction="bottom" delay={0.4}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 2:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Personalize your experience</span> — choose the room type, adjust AI creativity, add special instructions, and select your favorite design style.
//         </p>
//       </div>
//     </SlideInView>

//     <SlideInView direction="right" delay={0.6}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 3:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Generate</span> stunning new décor and design concepts in under 25 seconds.
//         </p>
//       </div>
//     </SlideInView>
//   </div>
// </section>
//   )
// }
// import React from "react";
// import SlideInView from "../../components/SlideInView.jsx";

// export default function StepsHome() {
//   return (
//     <section className="w-full h-auto pb-20 px-5 mt-5">
//       {/* Header Section */}
//       <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//         <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//           <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//           WITH <span className="text-[#007B82]">STACKLYAI</span>
//         </h1>
//         <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//           3 Easy Steps to Get Started
//         </p>
//       </div>

//       {/* Steps Row */}
//       <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap">
//         {/* Step 1 */}
//         <SlideInView delay={0}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 1:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">Upload</span> a photo of your
//               room, home, or outdoor space.
//             </p>
//           </div>
//         </SlideInView>

//         {/* Step 2 */}
//         <SlideInView delay={0.3}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 2:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">
//                 Personalize your experience
//               </span>{" "}
//               — choose the room type, adjust AI creativity, add special
//               instructions, and select your favorite design style
//             </p>
//           </div>
//         </SlideInView>

//         {/* Step 3 */}
//         <SlideInView delay={0.6}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 3:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">Generate</span> stunning new
//               decor and design concepts in under 25 seconds.
//             </p>
//           </div>
//         </SlideInView>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import SlideInView from "../../components/SlideInView.jsx";

// export default function StepsHome() {
//   return (
//    <section className="w-full h-auto pb-20 px-5 mt-5 
//   max-[440px]:w-[440px] max-[440px]:h-[585px] 
//   max-[440px]:flex max-[440px]:flex-col 
//   max-[440px]:pt-[40px] max-[440px]:px-[20px] max-[440px]:pb-[40px] max-[440px]:gap-[45px]">

//       {/* Header Section */}
//     <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5 
//   max-[440px]:w-[400px] max-[440px]:h-[53px] max-[440px]:gap-[16px] 
//   max-[440px]:mt-[-132px]">

//        <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black 
//   max-[440px]:w-[400px] max-[440px]:h-[22px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-semibold 
//   max-[440px]:text-[18px] max-[440px]:leading-[100%] 
//   max-[440px]:tracking-[0] max-[440px]:text-center">
//   <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//   WITH <span className="text-[#007B82]">STACKLYAI</span>
// </h1>

//       <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A] 
//   max-[440px]:w-[400px] max-[440px]:h-[17px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-normal 
//   max-[440px]:text-[14px] max-[440px]:leading-[100%] 
//   max-[440px]:tracking-[0] max-[440px]:text-center 
//   max-[440px]:mt-[-33px]">
//   3 Easy Steps to Get Started
// </p>


//       </div>

//       {/* Steps Row */}
//       <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap 
//   max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-[237px] 
//   max-[440px]:justify-between max-[440px]:px-[4px] max-[440px]:gap-[8px] 
//   max-[440px]:mt-[-120px]">


//         {/* Step 1 */}
//         <SlideInView delay={0}>
//          <div className="flex flex-col items-center 
//   max-[440px]:flex-col max-[440px]:w-[120px] max-[440px]:h-[169px] max-[440px]:gap-[28px]">

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 1:
// </div>

//             </div>
//            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5
//   max-[440px]:w-[120px] max-[440px]:h-[51px]
//   max-[440px]:font-['Inter'] max-[440px]:font-normal
//   max-[440px]:text-[12px] max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0] max-[440px]:text-center">
//   <span className="text-[#007B82]">Upload</span> a photo of your
//   room, home, or outdoor space.
// </p>

//           </div>
//         </SlideInView>

//         {/* Step 2 */}
//         <SlideInView delay={0.3}>
//          <div className="flex flex-col items-center
//   max-[440px]:flex-col max-[440px]:w-[134px] max-[440px]:h-auto
//   max-[440px]:gap-[28px]">

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}

//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 2:
// </div>

//             </div>
//             <p
//   className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5
//     max-[440px]:w-[134px] max-[440px]:h-[119px] 
//     max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//     max-[440px]:font-['Inter'] max-[440px]:font-normal 
//     max-[440px]:tracking-[0] max-[440px]:text-center"
// >
//   <span className="text-[#007B82]">
//     Personalize your experience
//   </span>{" "}
//   — choose the room type, adjust AI creativity, add special
//   instructions, and select your favorite design style
// </p>

//           </div>
//         </SlideInView>

//         {/* Step 3 */}
//         <SlideInView delay={0.6}>
//           <div
//   className="flex flex-col items-center
//     max-[440px]:flex-col 
//     max-[440px]:w-[120px] 
//     max-[440px]:h-[186px] 
//     max-[440px]:gap-[28px]"
// >

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//             >
//              <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 3:
// </div>

//             </div>
//            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 
//   max-[440px]:w-[120px] max-[440px]:h-[68px] 
//   max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//   max-[440px]:tracking-[0] max-[440px]:font-normal max-[440px]:text-center font-['Inter']">
//   <span className="text-[#007B82]">Generate</span> stunning new
//   decor and design concepts in under 25 seconds.
// </p>

//           </div>
//         </SlideInView>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import SlideInView from "../../components/SlideInView.jsx";
import Frame from "../../assets/home/Frame.png";
import step1 from "../../assets/home/sec7/step1.png";
import step2 from "../../assets/home/sec7/step2.png";
import step3 from "../../assets/home/sec7/step3.png";
import stepbg from "../../assets/home/sec7/sectionBg.png";

export default function StepsHome() {
  return (
    <section
      className="w-full h-[777px] opacity-100 pt-[60px] pb-[60px] gap-[53px] bg-cover bg-center"
      style={{ backgroundImage: `url(${stepbg})` }}
    >
      <div className="w-full h-[657px] opacity-100 gap-[65px] flex flex-col items-center mx-auto">
        {/* Heading */}
        <div className="w-[1120px] h-[81px] opacity-100 gap-[18px] text-center flex flex-col justify-center items-center">
          <h1 className="w-[1120px] h-[41px] opacity-100 text-[32px] font-normal leading-[100%] text-center text-white lora-text">
            Bringing <span className="text-[#8A38F5] lora-text"> Beauty </span> to Every Corner
          </h1>
          <p className="w-[1120px] h-[22px] opacity-100 text-[18px] font-normal leading-[100%] text-center text-white poppins-font">
            Personalized design solutions that make your home truly yours
          </p>
        </div>

        {/* Steps Section */}
        <div className="w-[1440px] h-[511px] opacity-100 flex flex-row justify-center items-start gap-[22px] flex-wrap max-[440px]:hidden">
          {/* Sub-heading */}
          <div className="w-[1440px] h-[19px] opacity-100 gap-[10px] px-[80px] flex items-start">
            <p className="w-[1280px] h-[19px] opacity-100 text-[16px] leading-[100%] font-normal text-left text-white poppins-font">
              Create Stunning Designs in 3 Simple Steps, Powered by{" "}
              <span className="text-[#8A38F5]">STACKLYAI</span>
            </p>
          </div>

          {/* Step Cards */}
          <div className="w-[1440px] h-[470px] px-[80px] flex justify-between items-start">
            {[
              {
                step: "Step 1",
                title: "Upload",
                text: "Upload a photo of your room, home, or outdoor space.",
                image: step1,
              },
              {
                step: "Step 2",
                title: "Personalize your experience",
                text: "Personalize your stay! choose a room, set AI creativity, and pick your design style.",
                image: step2,
              },
              {
                step: "Step 3",
                title: "Generate",
                text: "Generate stunning new decor and design concepts in under 25 seconds.",
                image: step3,
              },
            ].map((item, index) => (
              <SlideInView key={index} delay={index * 0.3}>
                <div className="flex flex-col w-[400px] h-[470px] rounded-[12px] opacity-100 relative">
               {/* Step Badge - original bottom-right position */}
<div
  className="absolute top-[394px] left-[250px] z-10 flex items-center gap-[10px] 
             rounded-[12px] px-[22px] py-[10px] 
             backdrop-blur-[6px] shadow-[0px_2px_6px_0px_#00000040] 
             border border-white/20 bg-white/10"
>
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="w-[19.5px] h-[19.5px] border-[1.5px] border-white opacity-100 overflow-hidden flex items-center justify-center rounded-full"
  >
    <img src={Frame} alt="star" className="w-full h-full object-cover" />
  </motion.div>

  <div className="w-[48px] h-[19px] text-white text-[16px] font-semibold leading-[100%] text-center poppins-font whitespace-nowrap">
    {item.step}
  </div>
</div>


                  {/* Image block */}
                  <div className="group w-[400px] h-[470px] rounded-[12px] overflow-hidden relative z-0">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>

                  {/* Description */}
                  <div className="absolute top-[46px] left-[25px] w-[247px] h-auto text-white z-20">
                    <p className="font-[600] text-[16px] leading-[140%] font-[Poppins] mb-1">
                      {item.title}
                    </p>
                    <p className="font-[400] text-[16px] leading-[140%] font-[Poppins]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SlideInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


