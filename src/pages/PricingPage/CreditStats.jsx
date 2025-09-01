// import React from "react";
// import TotalCreditsImg from "../../assets/pricing-pg/img1.png"; // Replace with your first image
// import TodaysUsageImg from "../../assets/pricing-pg/img2.png"; // Replace with your first image

// export default function CreditStats() {
//   return (
//     <section className="w-full min-h-[882px] bg-[white] flex flex-col justify-center items-center gap-[50px]">
//       <div className="w-[100%] max-w-[719px] min-h-[31px] text-[26px] font-semibold leading-[100%] text-center text-[#2a2a2a] mt-[200px]">"Powering Millions of Actions — And Growing Every Day!"</div>

//       <div className=" w-full flex justify-evenly">
//         <div>
//             <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px] " >Total Credits Used</div>
//             <img src={TotalCreditsImg} alt="" />
//             <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leadimg-[60px]  text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">10+</div>
//             <div className="w-[100%] max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">“Over 10+ Million Credits Used by Our Community!”</div>
//         </div>

//         <div>
//             <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]" >Today's Usage</div>
//             <img src={TodaysUsageImg} alt="" />
//             <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leadimg-[60px]  text-black shadow-[0_3px_20px_0] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">85+</div>
//             <div className="w-[100%] max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">“85,000 Credits Used Today — and Counting!”</div>

//         </div>

//       </div>
//     </section>
//   );
// }

// import React from "react";
// import TotalCreditsImg from "../../assets/pricing-pg/img1.png"; // Replace with your first image
// import TodaysUsageImg from "../../assets/pricing-pg/img2.png"; // Replace with your first image

// export default function CreditStats() {
//   return (
//     <section
//       className="w-full min-h-[882px] bg-[white] flex flex-col justify-center items-center gap-[50px]
//              max-[440px]:w-[440px]
//              max-[440px]:min-h-[416px]
//              max-[440px]:flex-col
//              max-[440px]:pt-[40px]
//              max-[440px]:pr-[20px]
//              max-[440px]:pb-[40px]
//              max-[440px]:pl-[20px]
//              max-[440px]:gap-[32px]"
//     >

//      <div
//   className="w-[100%] max-w-[719px] min-h-[31px] text-[26px] font-semibold leading-[100%] text-center text-[#2a2a2a] mt-[200px]
//              max-[440px]:w-[271px]
//              max-[440px]:h-[50px]
//              max-[440px]:text-[18px]
//              max-[440px]:leading-[140%]
//              max-[440px]:text-center
//              max-[440px]:font-semibold
//              max-[440px]:mt-[10px]"
// >
//   "Powering Millions of Actions — And Growing Every Day!"
// </div>

//      <div className="w-full flex justify-evenly min-[441px]:flex max-[440px]:hidden">
//   <div>
//     <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]">
//       Total Credits Used
//     </div>
//     <img src={TotalCreditsImg} alt="" />
//     <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leading-[60px] text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">
//       10+
//     </div>
//     <div className="w-full max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">
//       “Over 10+ Million Credits Used by Our Community!”
//     </div>
//   </div>

//   <div>
//     <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]">
//       Today's Usage
//     </div>
//     <img src={TodaysUsageImg} alt="" />
//     <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leading-[60px] text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">
//       85+
//     </div>
//     <div className="w-full max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">
//       “85,000 Credits Used Today — and Counting!”
//     </div>
//   </div>
// </div>

// {/* MOBILE */}
// <div className="w-full flex flex-col items-center gap-[20px] px-[20px] pt-[20px] pb-[40px] max-[440px]:flex min-[441px]:hidden">
//   {/* Cards Row */}
//   <div className="flex flex-row justify-center gap-[16px]">
//     {/* Total Credits Used Card */}
//     <div className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md">
//       <img src={TotalCreditsImg} alt="" className="w-full object-cover rounded-[12px]" />
//       <div className="absolute top-[9px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow">
//         <span className="text-[12px] leading-[100%] font-normal text-black">Total Credits Used</span>
//       </div>
//       <div className="absolute top-[85px] left-[123.5px] w-[40px] h-[40px] bg-white rounded-full shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
//         10+
//       </div>
//     </div>

//     {/* Today's Usage Card */}
//     <div className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md">
//       <img src={TodaysUsageImg} alt="" className="w-full object-cover rounded-[12px]" />
//       <div className="absolute top-[9px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow">
//         <span className="text-[12px] leading-[100%] font-normal text-black">Today's Usage</span>
//       </div>
//       <div className="absolute top-[85px] left-[123.5px] w-[40px] h-[40px] bg-white rounded-full shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
//         85+
//       </div>
//     </div>
//   </div>

//   {/* Descriptions Below Cards */}
//   <div className="flex flex-row justify-center gap-[16px] mt-[10px]">
//     <p className="w-[171px] h-[30px] text-[12px] leading-[100%] font-normal text-[#2a2a2a] text-center">
//       “Over 10+ Million Credits Used by Our Community!”
//     </p>
//     <p className="w-[171px] h-[30px] text-[12px] leading-[100%] font-normal text-[#2a2a2a] text-center">
//       “85,000 Credits Used Today — and Counting!”
//     </p>
//   </div>
// </div>

//     </section>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import TotalCreditsImg from "../../assets/pricing-pg/img1.png";
// import TodaysUsageImg from "../../assets/pricing-pg/img2.png";

// export default function CreditStats() {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const cardHoverVariants = {
//     hover: {
//       y: -10,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   const pulseVariants = {
//     initial: { scale: 1 },
//     pulse: {
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={containerVariants}
//       className="w-full max-w-[1440px] h-[775px] mx-auto opacity-100 px-[80px] py-[60px] flex flex-col justify-center items-center gap-[42px] bg-white
//              max-[440px]:w-[440px]
//              max-[440px]:h-[416px]
//              max-[440px]:pt-[20px]
//              max-[440px]:pr-[20px]
//              max-[440px]:pb-[20px]
//              max-[440px]:pl-[20px]
//              max-[440px]:gap-[32px]"
//     >
//       <motion.div
//         variants={itemVariants}
//         className="w-[586px] h-[78px] text-[32px] leading-[120%] text-center text-[#007B82] mb-[-49px]
//             max-[440px]:mt-[-40px]
//             max-[440px]:mb-[1px]
//              max-[440px]:w-[331px]
//              max-[440px]:h-[50px]
//              max-[440px]:text-[18px]
//              max-[440px]:leading-[140%]
//              max-[440px]:text-center
//              max-[440px]:font-semibold"
//         style={{ fontFamily: "Aptos Serif" }}
//       >
//         Track your creative flow with today's credits used and designs generated
//       </motion.div>

//       <div className="w-[1004px] h-[535px] opacity-100 mt-[50px] flex justify-evenly gap-[92px] min-[441px]:flex max-[440px]:hidden">
//         <motion.div
//           className="relative w-[455px] h-[535px]"
//           whileHover="hover"
//           variants={cardHoverVariants}
//         >
//           <img
//             src={TotalCreditsImg}
//             alt=""
//             className="w-[438px] h-[535px] opacity-100 rounded-[20px]"
//             style={{ transform: "rotate(0deg)" }}
//           />

//           <motion.div
//             className="absolute w-[272px] h-[54px] opacity-100 rounded-[15px] bg-[#FFFFFFCC] shadow-[3px_5px_9px_0px_#00000040]
//                  px-[20px] py-[10px] flex items-center justify-center gap-[10px] bottom-[20px] left-[20px]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//           >
//             <div
//               className="w-[232px] h-[34px] text-[28px] font-[400] leading-[100%] text-center text-black whitespace-nowrap"
//               style={{ fontFamily: "Aptos Serif", verticalAlign: "middle" }}
//             >
//               Total Credits Used
//             </div>
//           </motion.div>

//           <motion.div
//             className="absolute bg-white p-5 w-fit rounded-full top-[175px] left-[315px]"
//             variants={pulseVariants}
//             initial="initial"
//             animate="pulse"
//           >
//             <div className="w-[140px] h-[140px] rounded-full bg-white shadow-[0_1px_3px_px] shadow-black flex flex-col items-center justify-center">
//               <div
//                 className="text-[42px] font-semibold leading-[100%] text-[#007B82]"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 10+
//               </div>
//               <div
//                 className="text-[16px] font-normal leading-[100%] text-[#007B82] mt-[4px]"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 Credit
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="relative w-[455px] h-[535px]"
//           whileHover="hover"
//           variants={cardHoverVariants}
//         >
//           <motion.div
//             className="absolute w-[272px] h-[54px] opacity-100 rounded-[15px] bg-[#FFFFFFCC] shadow-[3px_5px_9px_0px_#00000040]
//                px-[20px] py-[10px] flex items-center justify-center gap-[10px] bottom-[20px] left-[20px] z-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//           >
//             <div
//               className="w-[232px] h-[34px] text-[28px] font-[400] leading-[100%] text-center text-black whitespace-nowrap"
//               style={{ fontFamily: "Aptos Serif", verticalAlign: "middle" }}
//             >
//               Today's Usage
//             </div>
//           </motion.div>

//           <img
//             src={TodaysUsageImg}
//             alt=""
//             className="absolute w-[438px] h-[535px] opacity-100 rounded-[20px] left-[5px] top-0"
//             style={{ transform: "rotate(0deg)" }}
//           />

//           <motion.div
//             className="absolute bg-white p-5 w-fit rounded-full top-[185px] left-[315px] z-10"
//             variants={pulseVariants}
//             initial="initial"
//             animate="pulse"
//           >
//             <div className="w-[140px] h-[140px] rounded-full bg-white shadow-[0_1px_3px_px] shadow-black flex flex-col items-center justify-center">
//               <div
//                 className="text-[42px] font-semibold leading-[100%] text-[#007B82]"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 85+
//               </div>
//               <div
//                 className="text-[16px] font-normal leading-[100%] text-[#007B82] mt-[4px]"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 Images
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* MOBILE */}
//       <motion.div
//         className="w-full flex flex-col items-center gap-[50px] px-[20px] pt-[20px] pb-[40px] max-[440px]:flex min-[441px]:hidden"
//         variants={containerVariants}
//       >
//         <div className="flex flex-row justify-center gap-[16px]">
//           <motion.div
//             className="flex flex-col items-center gap-[6px]"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img
//                 src={TotalCreditsImg}
//                 alt=""
//                 className="w-full object-cover rounded-[12px]"
//               />
//               <motion.div
//                 className="absolute top-[5px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <span className="text-[12px] leading-[100%] font-normal text-black">
//                   Total Credits Used
//                 </span>
//               </motion.div>
//               <motion.div
//                 className="absolute p-2 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] top-[85px] left-[115.5px]"
//                 variants={pulseVariants}
//                 initial="initial"
//                 animate="pulse"
//               >
//                 <div className="w-[40px] h-[40px] rounded-full bg-white shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
//                   10+
//                 </div>
//               </motion.div>
//             </motion.div>
//             <motion.div
//               className="w-[171px] h-[30px] text-[12px] mt-[20px] text-center font-normal leading-[100%]"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//             >
//               "Over 10+ Million Credits Used by Our Community!"
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center gap-[6px]"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img
//                 src={TodaysUsageImg}
//                 alt=""
//                 className="w-full object-cover rounded-[12px]"
//               />
//               <motion.div
//                 className="absolute top-[5px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <span className="text-[12px] leading-[100%] font-normal text-black">
//                   Today's Usage
//                 </span>
//               </motion.div>
//               <motion.div
//                 className="absolute p-2 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] top-[85px] left-[115.5px]"
//                 variants={pulseVariants}
//                 initial="initial"
//                 animate="pulse"
//               >
//                 <div className="w-[40px] h-[40px] rounded-full bg-white shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
//                   85+
//                 </div>
//               </motion.div>
//             </motion.div>
//             <motion.div
//               className="w-[171px] h-[30px] text-[12px] mt-[20px] text-center font-normal leading-[100%]"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//             >
//               "85,000 Credits Used Today — and Counting!"
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import BannerImg from "../../assets/pricing-pg/bannerSec2.png";
import creditBg from "../../assets/pricing-pg/creditBg.png";
import creditBg2 from "../../assets/pricing-pg/creditBg2.png";
import bannersec1 from "../../assets/pricing-pg/bannersec1.png";
import bannersec3 from "../../assets/pricing-pg/bannersec3.png";
import bannersec4 from "../../assets/pricing-pg/bannersec4.png";


const UsageInsights = () => {
  const [credits, setCredits] = useState(0);
  const [images, setImages] = useState(0);
  const sectionRef = useRef(null);
  const [currentBg, setCurrentBg] = useState(0);
  const creditBackgrounds = [creditBg, bannersec1, bannersec3, bannersec4];

  const animateCounts = () => {
    let startTime = null;
    const endCredits = 10;
    const endImages = 100;
    const duration = 2000; // animation speed

    const step = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setCredits(Math.floor(progress * endCredits));
      setImages(Math.floor(progress * endImages));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          animateCounts(); // run when scrolled into view
        } else {
          // Reset numbers when scrolled out of view
          setCredits(0);
          setImages(0);
        }
      },
      { threshold: 0.5 } // 50% visible triggers animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    // Background image slider for creditBg
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % creditBackgrounds.length);
      }, 3000); // change every 3 seconds
      return () => clearInterval(interval);
    }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-[799.01px] absolute top-[468px] opacity-100 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}
    >
      {/* Heading */}
      <div className="w-[727px] h-[93px] flex flex-col gap-[12px] absolute top-[50px] left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-[52px] font-medium leading-[140%] font-[Lora] bg-gradient-to-r from-[#8A38F5] via-[rgba(255,255,255,0.9)] to-[#8A38F5] bg-clip-text text-transparent">
          Daily Usage Insights
        </h2>
        <p className="text-[18px] font-normal font-[Poppins] text-white">
          Follow your design journey through today's usage and results
        </p>
      </div>

      {/* Rotating Credit Background */}
      <div className="w-[1025px] h-[441px] rounded-[20px] absolute top-[190px] left-1/2 -translate-x-1/2 overflow-hidden relative">
        <img
          key={currentBg}
          src={creditBackgrounds[currentBg]}
          alt="Credit Background"
          className="w-full h-full object-cover absolute inset-0 animate-kenburns opacity-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        />
      </div>

      {/* Stats */}
      <div className="w-[776px] h-[205px] gap-[76px] absolute top-[559px] left-1/2 -translate-x-1/2 flex justify-between">
        {/* Credits */}
        <div
          className="w-[350px] h-[205px] rounded-[20px] border border-[#8A38F5] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${creditBg2})` }}
        >
          <div className="absolute top-[91px] left-[33px] flex flex-col gap-[25px]">
            <h3 className="text-white font-[Lora] text-[32px] font-medium">
              {credits}+ credits
            </h3>
            <p className="text-white font-[Poppins] text-[18px]">
              Total Credits Used today
            </p>
          </div>
        </div>

        {/* Images */}
        <div
          className="w-[350px] h-[205px] rounded-[20px] border border-[#8A38F5] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${creditBg2})` }}
        >
          <div className="absolute top-[91px] left-[33px] flex flex-col gap-[25px]">
            <h3 className="text-white font-[Lora] text-[32px] font-medium">
              {images}+ images
            </h3>
            <p className="text-white font-[Poppins] text-[18px] w-[206px]">
              Creations Made Today
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-5px, -5px);
  }
}
.animate-kenburns {
  animation: kenburns 3s ease-in-out forwards;
}
`}
      </style>
    </section>
  );
};

export default UsageInsights;
