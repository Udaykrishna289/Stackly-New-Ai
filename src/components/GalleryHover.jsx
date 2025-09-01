// // import React, { useState, useEffect, useRef } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function GalleryHover({
// //   sec5BlockImg,
// //   sec5Frame1,
// //   sec5Frame2,
// //   sec5Frame3,
// //   sec5Frame4,
// //   sec5Frame5,
// //   sec5Frame6,
// //   sec5Frame7,
// //   sec5Frame8,
// // }) {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);
// //   const frameSize = 350;

// //   const frames = [
// //     { src: sec5Frame1, className: "left-[8%] top-[8%]", delay: 0.1 },
// //     { src: sec5Frame2, className: "top-[12%] left-[35%]", delay: 0.3 },
// //     { src: sec5Frame3, className: "top-[8%] right-[8%]", delay: 0.5 },
// //     { src: sec5Frame4, className: "bottom-[25%] left-[18%]", delay: 0.7 },
// //     { src: sec5Frame5, className: "bottom-[30%] right-[30%]", delay: 0.9 },
// //     { src: sec5Frame6, className: "top-[60%] left-[15%]", delay: 1.1 },
// //     { src: sec5Frame7, className: "top-[55%] right-[15%]", delay: 1.3 },
// //     { src: sec5Frame8, className: "bottom-[15%] right-[15%]", delay: 1.5 },
// //   ];

// //   // Scroll animation trigger
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         setIsVisible(entry.isIntersecting);
// //       },
// //       { threshold: 0.2 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   // Text animation variants
// //   const textVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" },
// //     },
// //     exit: {
// //       opacity: 0,
// //       y: 20,
// //       transition: { duration: 0.5 },
// //     },
// //   };

// //   // Frame animation variants
// //   const frameVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: (custom) => ({
// //       opacity: 1,
// //       scale: 1,
// //       transition: {
// //         delay: custom.delay,
// //         duration: 0.6,
// //         type: "spring",
// //         damping: 10,
// //         stiffness: 100,
// //       },
// //     }),
// //     exit: {
// //       opacity: 0,
// //       scale: 0.8,
// //       transition: { duration: 0.4 },
// //     },
// //   };

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative w-full min-h-screen bg-gray-900 bg-center bg-no-repeat overflow-hidden"
// //       style={{ backgroundImage: "url('/home/sec5/banner.jpg')" }}
// //     >
// //       <div className="w-full min-h-screen flex flex-col items-center pt-[70px] pb-[200px] px-4">
// //         {/* Animated Title */}
// //         <AnimatePresence>
// //           {isVisible && (
// //             <motion.div
// //               className="text-center mb-14"
// //               initial="hidden"
// //               animate="visible"
// //               exit="exit"
// //               variants={textVariants}
// //             >
// //               <motion.h1
// //                 className="text-5xl font-semibold leading-tight text-white mb-4"
// //                 variants={textVariants}
// //               >
// //                 DESIGN YOUR{" "}
// //                 <motion.span className="text-[#00d1dd]" variants={textVariants}>
// //                   FUTURE HOME
// //                 </motion.span>
// //               </motion.h1>
// //               <motion.p
// //                 className="text-xl font-medium text-white max-w-3xl mx-auto leading-relaxed"
// //                 variants={textVariants}
// //               >
// //                 Bring your dream home to life! Explore innovative designs,
// //                 customize every detail,
// //                 <br />
// //                 and create a space that reflects your style and vision
// //               </motion.p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Gallery Container */}
// //         <div className="relative w-full max-w-7xl mx-auto h-[800px] mt-8 px-8">
// //           {/* Center image */}
// //           <AnimatePresence>
// //             {isVisible && (
// //               <motion.div
// //                 className="absolute inset-0 flex items-center justify-center"
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.8 }}
// //                 transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
// //               >
// //                 <motion.img
// //                   src={sec5BlockImg}
// //                   alt="gallery center"
// //                   className="object-contain rounded-lg shadow-xl"
// //                   style={{
// //                     width: `${frameSize}px`,
// //                     height: `${frameSize}px`,
// //                     zIndex: frames.length + 5,
// //                   }}
// //                   whileHover={{
// //                     scale: 1.05,
// //                     transition: { duration: 0.3, ease: "easeOut" },
// //                   }}
// //                 />
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Animated Frames */}
// //           <div className="relative w-full h-full ">
// //             <AnimatePresence>
// //               {isVisible &&
// //                 frames.map((frame, index) => (
// //                   <motion.img
// //                     key={index}
// //                     src={frame.src}
// //                     alt={`frame${index + 1}`}
// //                     className={`absolute object-contain rounded-lg shadow-lg ${frame.className}`}
// //                     style={{
// //                       width: `${frameSize}px`,
// //                       height: `${frameSize}px`,
// //                       zIndex: index + 1,
// //                     }}
// //                     custom={{ delay: frame.delay }}
// //                     initial="hidden"
// //                     animate="visible"
// //                     exit="exit"
// //                     variants={frameVariants}
// //                     whileHover={{
// //                       scale: 1.08,
// //                       zIndex: frames.length + 10,
// //                       transition: { duration: 0.3 },
// //                     }}
// //                   />
// //                 ))}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function GalleryHover({
//   sec5BlockImg,
//   sec5Frame1,
//   sec5Frame2,
//   sec5Frame3,
//   sec5Frame4,
//   sec5Frame5,
//   sec5Frame6,
//   sec5Frame7,
//   sec5Frame8,
// }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const sectionRef = useRef(null);
//   const frameSize = isMobile ? 120 : 350;

//   const frames = isMobile
//     ? [
//         { src: sec5Frame1, className: "left-[5%] top-[5%]", delay: 0.1 },
//         { src: sec5Frame2, className: "top-[10%] right-[5%]", delay: 0.3 },
//         { src: sec5Frame3, className: "top-[30%] left-[5%]", delay: 0.5 },
//         { src: sec5Frame4, className: "top-[30%] right-[5%]", delay: 0.7 },
//         { src: sec5Frame5, className: "top-[50%] left-[5%]", delay: 0.9 },
//         { src: sec5Frame6, className: "top-[50%] right-[5%]", delay: 1.1 },
//         { src: sec5Frame7, className: "top-[70%] left-[5%]", delay: 1.3 },
//         { src: sec5Frame8, className: "top-[70%] right-[5%]", delay: 1.5 },
//       ]
//     : [
//         { src: sec5Frame1, className: "left-[8%] top-[8%]", delay: 0.1 },
//         { src: sec5Frame2, className: "top-[12%] left-[35%]", delay: 0.3 },
//         { src: sec5Frame3, className: "top-[8%] right-[8%]", delay: 0.5 },
//         { src: sec5Frame4, className: "bottom-[25%] left-[18%]", delay: 0.7 },
//         { src: sec5Frame5, className: "bottom-[30%] right-[30%]", delay: 0.9 },
//         { src: sec5Frame6, className: "top-[60%] left-[15%]", delay: 1.1 },
//         { src: sec5Frame7, className: "top-[55%] right-[15%]", delay: 1.3 },
//         { src: sec5Frame8, className: "bottom-[15%] right-[15%]", delay: 1.5 },
//       ];

//   // Check for mobile on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Scroll animation trigger
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: 20,
//       transition: { duration: 0.5 },
//     },
//   };

//   // Frame animation variants
//   const frameVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (custom) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: custom.delay,
//         duration: 0.6,
//         type: "spring",
//         damping: 10,
//         stiffness: 100,
//       },
//     }),
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: { duration: 0.4 },
//     },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen bg-gray-900 bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: "url('/home/sec5/banner.jpg')" }}
//     >
//       <div className="w-full min-h-screen flex flex-col items-center pt-[40px] pb-[100px] px-4">
//         {/* Animated Title */}
//         <AnimatePresence>
//           {isVisible && (
//             <motion.div
//               className="text-center mb-8 px-2"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={textVariants}
//             >
//               <motion.h1
//                 className={`${
//                   isMobile ? "text-2xl" : "text-5xl"
//                 } font-semibold leading-tight text-white mb-4`}
//                 variants={textVariants}
//               >
//                 DESIGN YOUR{" "}
//                 <motion.span className="text-[#00d1dd]" variants={textVariants}>
//                   FUTURE HOME
//                 </motion.span>
//               </motion.h1>
//               <motion.p
//                 className={`${
//                   isMobile ? "text-sm" : "text-xl"
//                 } font-medium text-white max-w-3xl mx-auto leading-relaxed`}
//                 variants={textVariants}
//               >
//                 Bring your dream home to life! Explore innovative designs,
//                 customize every detail,
//                 {!isMobile && (
//                   <>
//                     <br />
//                     and create a space that reflects your style and vision
//                   </>
//                 )}
//                 {isMobile && " and create your perfect space"}
//               </motion.p>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Gallery Container */}
//         <div
//           className={`relative w-full ${
//             isMobile ? "max-w-md" : "max-w-7xl"
//           } mx-auto ${isMobile ? "h-[600px]" : "h-[800px]"} mt-4 ${
//             isMobile ? "px-2" : "px-8"
//           }`}
//         >
//           {/* Center image */}
//           <AnimatePresence>
//             {isVisible && (
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
//               >
//                 <motion.img
//                   src={sec5BlockImg}
//                   alt="gallery center"
//                   className="object-contain rounded-lg shadow-xl"
//                   style={{
//                     width: `${frameSize}px`,
//                     height: `${frameSize}px`,
//                     zIndex: frames.length + 5,
//                   }}
//                   whileHover={{
//                     scale: isMobile ? 1.02 : 1.05,
//                     transition: { duration: 0.3, ease: "easeOut" },
//                   }}
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Animated Frames */}
//           <div className="relative w-full h-full">
//             <AnimatePresence>
//               {isVisible &&
//                 frames.map((frame, index) => (
//                   <motion.img
//                     key={index}
//                     src={frame.src}
//                     alt={`frame${index + 1}`}
//                     className={`absolute object-contain rounded-lg shadow-lg ${frame.className}`}
//                     style={{
//                       width: `${frameSize}px`,
//                       height: `${frameSize}px`,
//                       zIndex: index + 1,
//                     }}
//                     custom={{ delay: frame.delay }}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={frameVariants}
//                     whileHover={{
//                       scale: isMobile ? 1.03 : 1.08,
//                       zIndex: frames.length + 10,
//                       transition: { duration: 0.3 },
//                     }}
//                   />
//                 ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryHover({
  sec5BlockImg,
  sec5Frame1,
  sec5Frame2,
  sec5Frame3,
  sec5Frame4,
  sec5Frame5,
  sec5Frame6,
  sec5Frame7,
  sec5Frame8,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const sectionRef = useRef(null);
  const frameSize = isSmallScreen ? 120 : isMobile ? 120 : 350;

  const frames = isSmallScreen
    ? [
        { src: sec5Frame1, className: "left-[5%] top-[5%]", delay: 0.1 },
        { src: sec5Frame2, className: "top-[5%] left-[35%]", delay: 0.2 },
        { src: sec5Frame3, className: "top-[5%] right-[5%]", delay: 0.3 },
        { src: sec5Frame4, className: "top-[35%] left-[5%]", delay: 0.4 },
        { src: sec5Frame5, className: "top-[35%] left-[35%]", delay: 0.5 },
        { src: sec5Frame6, className: "top-[35%] right-[5%]", delay: 0.6 },
        { src: sec5Frame7, className: "top-[65%] left-[5%]", delay: 0.7 },
        { src: sec5Frame8, className: "top-[65%] left-[35%]", delay: 0.8 },
      ]
    : isMobile
    ? [
        { src: sec5Frame1, className: "left-[5%] top-[5%]", delay: 0.1 },
        { src: sec5Frame2, className: "top-[10%] right-[5%]", delay: 0.3 },
        { src: sec5Frame3, className: "top-[30%] left-[5%]", delay: 0.5 },
        { src: sec5Frame4, className: "top-[30%] right-[5%]", delay: 0.7 },
        { src: sec5Frame5, className: "top-[50%] left-[5%]", delay: 0.9 },
        { src: sec5Frame6, className: "top-[50%] right-[5%]", delay: 1.1 },
        { src: sec5Frame7, className: "top-[70%] left-[5%]", delay: 1.3 },
        { src: sec5Frame8, className: "top-[70%] right-[5%]", delay: 1.5 },
      ]
    : [
        { src: sec5Frame1, className: "left-[8%] top-[8%]", delay: 0.1 },
        { src: sec5Frame2, className: "top-[12%] left-[35%]", delay: 0.3 },
        { src: sec5Frame3, className: "top-[8%] right-[8%]", delay: 0.5 },
        { src: sec5Frame4, className: "bottom-[25%] left-[18%]", delay: 0.7 },
        { src: sec5Frame5, className: "bottom-[30%] right-[30%]", delay: 0.9 },
        { src: sec5Frame6, className: "top-[60%] left-[15%]", delay: 1.1 },
        { src: sec5Frame7, className: "top-[55%] right-[15%]", delay: 1.3 },
        { src: sec5Frame8, className: "bottom-[15%] right-[15%]", delay: 1.5 },
      ];

  // Check for screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 441);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5 },
    },
  };

  // Frame animation variants
  const frameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom.delay,
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
  ref={sectionRef}
  className={`relative w-full min-h-screen bg-gray-900 bg-center bg-no-repeat overflow-hidden ${
    isSmallScreen ? "flex flex-col items-center" : ""
  }`}
  style={{
    backgroundImage: "url('/home/sec5/banner.jpg')",
    ...(isSmallScreen && {
      width: "440px",
      height: "470px",
      paddingTop: "60px",
      paddingRight: "20px",
      paddingBottom: "60px",
      paddingLeft: "20px",
      gap: "40px",
      transform: "scale(1)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "0" // Override min-h-screen for small screens
    })
  }}
>
<div 
  className={`w-full min-h-screen flex flex-col items-center ${isSmallScreen ? "" : "pt-[40px] pb-[100px] px-4"}`}
  style={{
    ...(isSmallScreen && {
      width: "440px",
      height: "470px",
      paddingTop: "60px",
      paddingRight: "20px",
      paddingBottom: "60px",
      paddingLeft: "20px",
      gap: "40px",
      transform: "scale(1)",
      overflow: "hidden",
      position: "relative"
    })
  }}
>
        {/* Animated Title */}
        <AnimatePresence>
          {isVisible && (
 <motion.div
  className={`text-center mb-8 px-2 ${
    isSmallScreen ? "mt-[-20px] mb-0" : ""
  }`}
  initial="hidden"
  animate="visible"
  exit="exit"
  variants={textVariants}
  style={{
    ...(isSmallScreen && {
      width: "400px",
      height: "89px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-40px", // Moves the div up by 20px
      marginBottom: "0", // Removes bottom margin
      position: "relative", // Ensures proper positioning
      zIndex: 10 // Keeps it above other elements
    })
  }}
>
              <motion.h1
  className={`${
    isSmallScreen ? "text-[18px]" : isMobile ? "text-2xl" : "text-5xl"
  } font-semibold leading-tight text-white mb-4`}
  variants={textVariants}
  style={{
    ...(isSmallScreen && {
      width: "400px",
      height: "22px",
      fontFamily: "Inter",
      fontWeight: 600,
      fontStyle: "Semi Bold",
      fontSize: "18px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center"
    })
  }}
>
  DESIGN YOUR{" "}
  <motion.span 
    className="text-[#00d1dd]" 
    variants={textVariants}
    style={{
      ...(isSmallScreen && {
        fontFamily: "Inter",
        fontWeight: 600,
        fontStyle: "Semi Bold",
        fontSize: "18px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "center"
      })
    }}
  >
    FUTURE HOME
  </motion.span>
</motion.h1>
             <motion.p
  className={`${
    isSmallScreen
      ? "text-[14px]"
      : isMobile
      ? "text-sm"
      : "text-xl"
  } font-medium text-white max-w-3xl mx-auto leading-relaxed`}
  variants={textVariants}
  style={{
    ...(isSmallScreen && {
      fontFamily: "Inter",
      fontWeight: 400,
      fontStyle: "Regular",
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center"
    })
  }}
>
  Bring your dream home to life! Explore innovative designs,
  customize every detail
  {!isSmallScreen && (
    <>
      {!isMobile && (
        <>
          <br />
          and create a space that reflects your style and vision
        </>
      )}
      {isMobile && " and create your perfect space"}
    </>
  )}
</motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Container */}
        <div
          className={`relative w-full ${
            isSmallScreen ? "max-w-xs" : isMobile ? "max-w-md" : "max-w-7xl"
          } mx-auto ${
            isSmallScreen ? "h-[400px]" : isMobile ? "h-[600px]" : "h-[800px]"
          } mt-4 ${isSmallScreen ? "px-1" : isMobile ? "px-2" : "px-8"}`}
        >
          {/* Center image - hidden on small screens */}
          {!isSmallScreen && (
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                >
                  <motion.img
                    src={sec5BlockImg}
                    alt="gallery center"
                    className="object-contain rounded-lg shadow-xl"
                    style={{
                      width: `${frameSize}px`,
                      height: `${frameSize}px`,
                      zIndex: frames.length + 5,
                    }}
                    whileHover={{
                      scale: isMobile ? 1.02 : 1.05,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Animated Frames */}
     <div 
  className={`relative w-full h-full ${isMobile ? "flex items-center justify-center" : ""}`}
  style={{
    ...(isSmallScreen && {
      position: 'relative',
      top: '-90px',  // Moves the div up by 40px
      marginBottom: '-40px', // Compensates for the upward movement
      zIndex: 10 // Ensures it stays above other elements
    })
  }}
>
  <AnimatePresence>
    {isVisible &&
      (isMobile ? (
        // Outer wrapper with border
        <div
          className="relative rounded-lg border-[2.57px] border-white shadow-xl overflow-visible"
          style={{
            width: "429.52px",
            height: "272.48px",
            zIndex: frames.length + 4,
          }}
        >
          {/* Inner container with no clipping */}
          <motion.div
            className="relative w-full h-full overflow-visible"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {frames.map((frame, index) => (
              <motion.img
                key={index}
                src={frame.src}
                alt={`frame${index + 1}`}
                className="absolute shadow-md object-cover"
                style={{
                  width: "80px",
                  height: "60px",
                  top: `${10 + (index % 3) * 30}px`,
                  left: `${10 + (index * 25) % 180}px`,
                  zIndex: index + 1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  zIndex: frames.length + 10,
                  transition: { duration: 0.2 },
                }}
              />
            ))}
          </motion.div>
        </div>
      ) : (
        // Desktop: scattered animated frames
        frames.map((frame, index) => (
          <motion.img
            key={index}
            src={frame.src}
            alt={`frame${index + 1}`}
            className={`absolute object-contain rounded-lg shadow-lg ${frame.className}`}
            style={{
              width: `${frameSize}px`,
              height: `${frameSize}px`,
              zIndex: index + 1,
            }}
            custom={{ delay: frame.delay }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={frameVariants}
            whileHover={{
              scale: 1.08,
              zIndex: frames.length + 10,
              transition: { duration: 0.3 },
            }}
          />
        ))
      ))}
  </AnimatePresence>
</div>

        </div>
      </div>
    </section>
  );
}