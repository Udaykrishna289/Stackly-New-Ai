// import React, { useState } from "react";
// import DraggableImages from "../../components/DraggableImages";
// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import { Link } from "react-router-dom";

// export default function CarouselProducts() {
//   const [index, setIndex] = useState(0);
//   const showNext = () => {
//     index < 2 ? setIndex((prev) => ++prev) : setIndex(0);
//   };

//   const showPrev = () => {
//     index > 0 ? setIndex((prev) => --prev) : setIndex(2);
//   };

//   return (
//     <div className="w-full bg-[#001e20] p-[20px] sm:p-[50px] mt-10">
//       <h3 className="text-2xl sm:text-[40px] text-white font-bold text-center">
//         Latest <span className="text-[#00b0ba]">Design Trends</span>
//       </h3>
//       <div className="w-full text-center font-[400] text-[24px] leading-[28px] text-white my-[22px]">
//         <p>Curated ideas for modern living</p>
//       </div>
//       <div className="w-full flex justify-center items-center">
//         <div className="w-full max-w-[850px] min-h-[48px] rounded-[10px] border-[1px] border-solid border-white px-[20px] py-[10px] text-white font-[500] text-[16px] text-center leading-[28px] my-[20px]">
//           Soft Neutrals Tone
//         </div>
//       </div>

//       <div className="overflow-x-hidden flex gap-2 sm:gap-5 w-full mt-10 px-2 items-center justify-center">
//         <span
//           className="p-2 sm:p-4 text-md sm:text-xl bg-[#19383b] cursor-pointer rounded-full"
//           onClick={showPrev}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="10"
//             height="20"
//             viewBox="0 0 14 24"
//             fill="none"
//           >
//             <path
//               d="M3.40564 11.8584L12.5915 21.0442C12.904 21.3567 13.0552 21.7212 13.0452 22.1378C13.0352 22.5544 12.8735 22.9189 12.5603 23.2313C12.247 23.5438 11.8825 23.7 11.4667 23.7C11.051 23.7 10.6864 23.5438 10.3732 23.2313L0.749866 13.6393C0.499911 13.3893 0.312444 13.1081 0.187467 12.7957C0.0624889 12.4832 0 12.1708 0 11.8584C0 11.5459 0.0624889 11.2335 0.187467 10.921C0.312444 10.6086 0.499911 10.3274 0.749866 10.0774L10.3732 0.454134C10.6856 0.14169 11.0555 -0.00953319 11.483 0.000465034C11.9104 0.0104633 12.2799 0.172101 12.5915 0.485379C12.9031 0.798656 13.0593 1.16317 13.0602 1.57893C13.061 1.99469 12.9048 2.35921 12.5915 2.67249L3.40564 11.8584Z"
//               fill="white"
//             />
//           </svg>
//         </span>
//         <div className="h-auto flex-1 max-w-[800px] aspect-video overflow-x-hidden w-fit flex flex-nowrap gap-0 items-center justify-start">
//           <div
//             className="min-w-full transition-all "
//             style={{ transform: `translateX(${index * -100}%)` }}
//           >
//             <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
//           </div>
//           <div
//             className="min-w-full transition-all "
//             style={{ transform: `translateX(${index * -100}%)` }}
//           >
//             <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
//           </div>
//           <div
//             className="min-w-full transition-all "
//             style={{ transform: `translateX(${index * -100}%)` }}
//           >
//             <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
//           </div>
//         </div>

//         <span
//           className="p-2 sm:p-4 text-md sm:text-xl bg-[#19383b] cursor-pointer rounded-full"
//           onClick={showNext}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="10"
//             height="20"
//             viewBox="0 0 14 24"
//             fill="none"
//           >
//             <path
//               d="M10.5944 11.8584L1.40849 21.0442C1.09605 21.3567 0.944824 21.7212 0.954823 22.1378C0.964821 22.5544 1.12646 22.9189 1.43974 23.2313C1.75301 23.5438 2.11753 23.7 2.53329 23.7C2.94905 23.7 3.31357 23.5438 3.62685 23.2313L13.2501 13.6393C13.5001 13.3893 13.6876 13.1081 13.8125 12.7957C13.9375 12.4832 14 12.1708 14 11.8584C14 11.5459 13.9375 11.2335 13.8125 10.921C13.6876 10.6086 13.5001 10.3274 13.2501 10.0774L3.62685 0.454134C3.3144 0.14169 2.94447 -0.00953319 2.51704 0.000465034C2.08962 0.0104633 1.7201 0.172101 1.40849 0.485379C1.09688 0.798656 0.940658 1.16317 0.939825 1.57893C0.938992 1.99469 1.09521 2.35921 1.40849 2.67249L10.5944 11.8584Z"
//               fill="white"
//             />
//           </svg>
//         </span>
//       </div>

//       <div className="flex justify-center items-center gap-2 my-5">
//         <span
//           onClick={() => setIndex(0)}
//           className={`${
//             index === 0 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-white"
//           } rounded-full cursor-pointer`}
//         />
//         <span
//           onClick={() => setIndex(1)}
//           className={`${
//             index === 1 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-white"
//           } rounded-full cursor-pointer`}
//         />
//         <span
//           onClick={() => setIndex(2)}
//           className={`${
//             index === 2 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-white"
//           } rounded-full cursor-pointer`}
//         />
//       </div>

//       {/* <Link to="/Sign-in">
//         {" "}
//         <div className="flex gap-2.5 justify-center items-center mt-10">
//           <nav className="bg-[#00b0ba] p-3 sm:px-[25px] sm:py-[15px] rounded-[5px] flex gap-2.5 justify-center items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 29 29"
//               fill="none"
//               className="w-7 h-7"
//             >
//               <path
//                 d="M9.00008 5.46663L5.66675 7.33329L7.53341 3.99996L5.66675 0.666626L9.00008 2.53329L12.3334 0.666626L10.4667 3.99996L12.3334 7.33329L9.00008 5.46663ZM25.0001 18.5333L28.3334 16.6666L26.4667 20L28.3334 23.3333L25.0001 21.4666L21.6667 23.3333L23.5334 20L21.6667 16.6666L25.0001 18.5333ZM28.3334 0.666626L26.4667 3.99996L28.3334 7.33329L25.0001 5.46663L21.6667 7.33329L23.5334 3.99996L21.6667 0.666626L25.0001 2.53329L28.3334 0.666626ZM16.7867 15.04L20.0401 11.7866L17.2134 8.95996L13.9601 12.2133L16.7867 15.04ZM18.1601 7.71996L21.2801 10.84C21.8001 11.3333 21.8001 12.2 21.2801 12.72L5.72008 28.28C5.20008 28.8 4.33341 28.8 3.84008 28.28L0.720078 25.16C0.200078 24.6666 0.200078 23.8 0.720078 23.28L16.2801 7.71996C16.8001 7.19996 17.6667 7.19996 18.1601 7.71996Z"
//                 fill="white"
//               />
//             </svg>
//             <Link to="/Sign-in">
//               {" "}
//               <p className="text-md sm:text-xl font-bold text-white">
//                 Create Magic
//               </p>
//             </Link>
//           </nav>
//         </div>{" "}
//       </Link> */}
//     </div>
//   );
// }
// import React, { useState } from "react";
// import DraggableImages from "../../components/DraggableImages";
// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import { Link } from "react-router-dom";

// export default function CarouselProducts() {
//   const [index, setIndex] = useState(0);
//   const showNext = () => {
//     index < 2 ? setIndex((prev) => ++prev) : setIndex(0);
//   };

//   const showPrev = () => {
//     index > 0 ? setIndex((prev) => --prev) : setIndex(2);
//   };

//   return (
//    <div className="w-full bg-[#001e20] p-[20px] sm:p-[50px] mt-10 max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[440px] max-[440px]:min-h-[468px] max-[440px]:py-[40px] max-[440px]:px-[20px] max-[440px]:gap-[32px]">
//       {/* Original h3 - hidden below 441px */}
// <h3 className="hidden min-[441px]:block text-2xl sm:text-[40px] text-white font-bold text-center">
//   Latest <span className="text-[#00b0ba]">Design Trends</span>
// </h3>


// {/* Mobile h3 - only shown below 441px */}

// <h3 className="hidden max-[440px]:flex w-[400px] h-[37px] font-inter font-bold text-center items-center justify-center text-white text-[20px] leading-[100%] tracking-[0%]">
//   Latest <span className="text-[#00b0ba] ml-2">Design Trends</span>
// </h3>
// <div className="w-full text-center font-[400] text-[24px] leading-[28px] text-white my-[22px]">
//   {/* Desktop version (shows above 440px) */}
// <p className="hidden min-[441px]:block [your-desktop-styles]">
//   Curated ideas for modern living
// </p>
// {/* Mobile version (shows below 441px) */}
// <p className="hidden max-[440px]:flex w-[400px] h-[21px] font-inter font-normal text-center items-center justify-center text-white text-[14px] leading-[28px] tracking-[0%] mt-[-30px]">
//   Curated ideas for modern living
// </p>

//       </div>
//       {/* Original div - hidden below 440px */}
// <div className="hidden min-[440px]:flex w-full justify-center items-center">
//   <div className="
//     w-full max-w-[850px] min-h-[48px] rounded-[10px] 
//     border-[1px] border-solid border-white px-[20px] py-[10px] 
//     text-white font-[500] text-[16px] text-center leading-[28px] my-[20px]
//     transition-all duration-300 ease-in-out
//     hover:bg-gradient-to-r hover:from-[#00B0BA]/30 hover:to-[#00B0BA]/10
//     hover:border-[#00B0BA] hover:shadow-[0_0_15px_rgba(0,176,186,0.4)]
//     active:bg-gradient-to-r active:from-[#00B0BA]/40 active:to-[#00B0BA]/20
//   ">
//     Soft Neutrals Tone
//   </div>
// </div>
// {/* Mobile duplicate - only shown below 440px */}
// <div className="max-[439px]:flex hidden w-full justify-center items-center">
//   <div className="
//     w-full max-w-[350px] min-h-[40px] rounded-[8px] 
//     border-[1px] border-solid border-white px-[16px] py-[8px] 
//     text-white font-[500] text-[14px] text-center leading-[24px] my-[16px]
//     transition-all duration-300 ease-in-out
//     hover:bg-gradient-to-r hover:from-[#00B0BA]/30 hover:to-[#00B0BA]/10
//     hover:border-[#00B0BA] hover:shadow-[0_0_10px_rgba(0,176,186,0.3)]
//     active:bg-gradient-to-r active:from-[#00B0BA]/40 active:to-[#00B0BA]/20
//   ">
//     Soft Neutrals Tone
//   </div>
// </div>

//       <div className="overflow-x-hidden flex gap-2 sm:gap-5 w-full mt-10 px-2 items-center justify-center">
//         <span
//           className="p-2 sm:p-4 text-md sm:text-xl bg-[#19383b] cursor-pointer rounded-full"
//           onClick={showPrev}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="10"
//             height="20"
//             viewBox="0 0 14 24"
//             fill="none"
//           >
//             <path
//               d="M3.40564 11.8584L12.5915 21.0442C12.904 21.3567 13.0552 21.7212 13.0452 22.1378C13.0352 22.5544 12.8735 22.9189 12.5603 23.2313C12.247 23.5438 11.8825 23.7 11.4667 23.7C11.051 23.7 10.6864 23.5438 10.3732 23.2313L0.749866 13.6393C0.499911 13.3893 0.312444 13.1081 0.187467 12.7957C0.0624889 12.4832 0 12.1708 0 11.8584C0 11.5459 0.0624889 11.2335 0.187467 10.921C0.312444 10.6086 0.499911 10.3274 0.749866 10.0774L10.3732 0.454134C10.6856 0.14169 11.0555 -0.00953319 11.483 0.000465034C11.9104 0.0104633 12.2799 0.172101 12.5915 0.485379C12.9031 0.798656 13.0593 1.16317 13.0602 1.57893C13.061 1.99469 12.9048 2.35921 12.5915 2.67249L3.40564 11.8584Z"
//               fill="white"
//             />
//           </svg>
//         </span>
//         <div className="h-auto flex-1 max-w-[800px] aspect-video overflow-x-hidden w-fit flex flex-nowrap gap-0 items-center justify-start">
//           <div
//             className="min-w-full transition-all "
//             style={{ transform: `translateX(${index * -100}%)` }}
//           >
//             <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
//           </div>
//           <div
//             className="min-w-full transition-all "
//             style={{ transform: `translateX(${index * -100}%)` }}
//           >
//             <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
//           </div>
//           <div
//             className="min-w-full transition-all "
//             style={{ transform: `translateX(${index * -100}%)` }}
//           >
//             <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
//           </div>
//         </div>

//         <span
//           className="p-2 sm:p-4 text-md sm:text-xl bg-[#19383b] cursor-pointer rounded-full"
//           onClick={showNext}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="10"
//             height="20"
//             viewBox="0 0 14 24"
//             fill="none"
//           >
//             <path
//               d="M10.5944 11.8584L1.40849 21.0442C1.09605 21.3567 0.944824 21.7212 0.954823 22.1378C0.964821 22.5544 1.12646 22.9189 1.43974 23.2313C1.75301 23.5438 2.11753 23.7 2.53329 23.7C2.94905 23.7 3.31357 23.5438 3.62685 23.2313L13.2501 13.6393C13.5001 13.3893 13.6876 13.1081 13.8125 12.7957C13.9375 12.4832 14 12.1708 14 11.8584C14 11.5459 13.9375 11.2335 13.8125 10.921C13.6876 10.6086 13.5001 10.3274 13.2501 10.0774L3.62685 0.454134C3.3144 0.14169 2.94447 -0.00953319 2.51704 0.000465034C2.08962 0.0104633 1.7201 0.172101 1.40849 0.485379C1.09688 0.798656 0.940658 1.16317 0.939825 1.57893C0.938992 1.99469 1.09521 2.35921 1.40849 2.67249L10.5944 11.8584Z"
//               fill="white"
//             />
//           </svg>
//         </span>
//       </div>

//      <div className="flex justify-center items-center gap-2 my-5">
//   {/* Indicator 1 */}
//   <span
//     onClick={() => setIndex(0)}
//     className={`
//       ${index === 0 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-white"}
//       max-[440px]:w-2 max-[440px]:h-2
//       rounded-full cursor-pointer transition-all duration-200
//     `}
//   />
  
//   {/* Indicator 2 */}
//   <span
//     onClick={() => setIndex(1)}
//     className={`
//       ${index === 1 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-white"}
//       max-[440px]:w-2 max-[440px]:h-2
//       rounded-full cursor-pointer transition-all duration-200
//     `}
//   />
  
//   {/* Indicator 3 */}
//   <span
//     onClick={() => setIndex(2)}
//     className={`
//       ${index === 2 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-white"}
//       max-[440px]:w-2 max-[440px]:h-2
//       rounded-full cursor-pointer transition-all duration-200
//     `}
//   />
// </div>

//       {/* <Link to="/Sign-in">
//         {" "}
//         <div className="flex gap-2.5 justify-center items-center mt-10">
//           <nav className="bg-[#00b0ba] p-3 sm:px-[25px] sm:py-[15px] rounded-[5px] flex gap-2.5 justify-center items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 29 29"
//               fill="none"
//               className="w-7 h-7"
//             >
//               <path
//                 d="M9.00008 5.46663L5.66675 7.33329L7.53341 3.99996L5.66675 0.666626L9.00008 2.53329L12.3334 0.666626L10.4667 3.99996L12.3334 7.33329L9.00008 5.46663ZM25.0001 18.5333L28.3334 16.6666L26.4667 20L28.3334 23.3333L25.0001 21.4666L21.6667 23.3333L23.5334 20L21.6667 16.6666L25.0001 18.5333ZM28.3334 0.666626L26.4667 3.99996L28.3334 7.33329L25.0001 5.46663L21.6667 7.33329L23.5334 3.99996L21.6667 0.666626L25.0001 2.53329L28.3334 0.666626ZM16.7867 15.04L20.0401 11.7866L17.2134 8.95996L13.9601 12.2133L16.7867 15.04ZM18.1601 7.71996L21.2801 10.84C21.8001 11.3333 21.8001 12.2 21.2801 12.72L5.72008 28.28C5.20008 28.8 4.33341 28.8 3.84008 28.28L0.720078 25.16C0.200078 24.6666 0.200078 23.8 0.720078 23.28L16.2801 7.71996C16.8001 7.19996 17.6667 7.19996 18.1601 7.71996Z"
//                 fill="white"
//               />
//             </svg>
//             <Link to="/Sign-in">
//               {" "}
//               <p className="text-md sm:text-xl font-bold text-white">
//                 Create Magic
//               </p>
//             </Link>
//           </nav>
//         </div>{" "}
//       </Link> */}
//     </div>
//   );
// }

import React, { useState } from "react";
import DraggableImages from "../../components/DraggableImages";
import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import { Link } from "react-router-dom";

export default function CarouselProducts() {
  const [index, setIndex] = useState(0);
  const showNext = () => {
    index < 2 ? setIndex((prev) => ++prev) : setIndex(0);
  };

  const showPrev = () => {
    index > 0 ? setIndex((prev) => --prev) : setIndex(2);
  };

  return (
<div
  className="
    w-full h-[804px] bg-[#001e20] p-[20px] sm:p-[50px] mt-10

    /* Tablet styles: >441px to <769px */
    min-[441px]:max-[768px]:w-[768px]
    min-[441px]:max-[768px]:h-[544px]
    min-[441px]:max-[768px]:pt-[60px]
    min-[441px]:max-[768px]:pr-[40px]
    min-[441px]:max-[768px]:pb-[60px]
    min-[441px]:max-[768px]:pl-[40px]
    min-[441px]:max-[768px]:gap-[32px]
    min-[441px]:max-[768px]:opacity-100

    /* Mobile styles: ≤440px */
    max-[440px]:flex max-[440px]:flex-col 
    max-[440px]:w-[440px] 
    max-[440px]:h-auto   
    max-[440px]:py-[40px] 
    max-[440px]:px-[20px] 
    max-[440px]:gap-[32px] 
    max-[440px]:opacity-100
  "
>

 {/* Desktop ≥769px only */}
<h3 className="hidden min-[769px]:block text-2xl min-[769px]:text-[40px] text-white font-bold text-center">
  Latest <span className="text-[#00b0ba]">Design Trends</span>
</h3>


{/* Mobile ≤440px */}
<h3 className="hidden max-[440px]:flex w-[400px] h-[37px] font-inter font-bold text-center items-center justify-center text-white text-[20px] leading-[100%] tracking-[0%]">
  Latest <span className="text-[#00b0ba] ml-2">Design Trends</span>
</h3>

{/* Tablet >441px and <769px only */}
<h3 className="hidden min-[441px]:max-[768px]:flex min-[441px]:max-[768px]:w-[688px] min-[441px]:max-[768px]:h-[37px] min-[441px]:max-[768px]:font-inter min-[441px]:max-[768px]:font-bold min-[441px]:max-[768px]:text-[24px] min-[441px]:max-[768px]:leading-[100%] min-[441px]:max-[768px]:tracking-[0%] min-[441px]:max-[768px]:text-white min-[441px]:max-[768px]:text-center min-[441px]:max-[768px]:items-center min-[441px]:max-[768px]:justify-center">
  Latest <span className="text-[#00b0ba] ml-2">Design Trends</span>
</h3>


<div className="w-full text-center font-[400] text-[24px] leading-[28px] text-white my-[22px]">
{/* Desktop version (≥769px) */}
<p className="hidden min-[769px]:block text-[18px] font-inter font-normal text-white text-center leading-[28px] tracking-[0%]">
  Curated ideas for modern living
</p>

{/* Tablet version (441px–768px) */}
<p className="hidden min-[441px]:max-[768px]:flex min-[441px]:max-[768px]:w-[688px] min-[441px]:max-[768px]:h-[21px] min-[441px]:max-[768px]:font-inter min-[441px]:max-[768px]:font-normal min-[441px]:max-[768px]:text-[18px] min-[441px]:max-[768px]:text-white min-[441px]:max-[768px]:leading-[100%] min-[441px]:max-[768px]:text-center min-[441px]:max-[768px]:items-center min-[441px]:max-[768px]:justify-center">
  Curated ideas for modern living
</p>

{/* Mobile version (≤440px) */}
<p className="hidden max-[440px]:flex w-[400px] h-[21px] font-inter font-normal text-center items-center justify-center text-white text-[14px] leading-[28px] tracking-[0%] mt-[-30px]">
  Curated ideas for modern living
</p>


      </div>
{/* Original div - hidden below 441px */}
{/* Desktop version (≥769px) */}
<div className="hidden min-[769px]:flex w-full justify-center items-center">
  <div className="
    w-full max-w-[850px] min-h-[48px] rounded-[10px] 
    border-[1px] border-solid border-white px-[20px] py-[10px] 
    text-white font-[500] text-[16px] text-center leading-[28px] my-[20px]
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-[#00B0BA]/30 hover:to-[#00B0BA]/10
    hover:border-[#00B0BA] hover:shadow-[0_0_15px_rgba(0,176,186,0.4)]
    active:bg-gradient-to-r active:from-[#00B0BA]/40 active:to-[#00B0BA]/20
  ">
    Soft Neutrals Tone
  </div>
</div>

{/* Tablet version (441px–768px) */}
<div className="hidden min-[441px]:max-[768px]:flex w-full justify-center items-center">
  <div className="
    w-[396px] h-[36px] rounded-[10px] 
    border border-solid border-white px-[12px] py-[8px] 
    text-white font-inter font-[500] text-[14px] text-center leading-[140%]
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-[#00B0BA]/30 hover:to-[#00B0BA]/10
    hover:border-[#00B0BA] hover:shadow-[0_0_12px_rgba(0,176,186,0.3)]
    active:bg-gradient-to-r active:from-[#00B0BA]/40 active:to-[#00B0BA]/20
  ">
    Soft Neutrals Tone
  </div>
</div>

{/* Mobile version (≤440px) */}
<div className="hidden max-[440px]:flex w-full justify-center items-center mt-[-30px] mb-[8px]">
  <div className="
    w-full max-w-[350px] min-h-[40px] rounded-[8px] 
    border-[1px] border-solid border-white px-[16px] py-[8px] 
    text-white font-[500] text-[14px] text-center leading-[24px]
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-[#00B0BA]/30 hover:to-[#00B0BA]/10
    hover:border-[#00B0BA] hover:shadow-[0_0_10px_rgba(0,176,186,0.3)]
    active:bg-gradient-to-r active:from-[#00B0BA]/40 active:to-[#00B0BA]/20
  ">
    Soft Neutrals Tone
  </div>
</div>



<div
  className="
    overflow-x-hidden flex gap-2 sm:gap-5 w-full mt-10 px-2 items-center justify-center

    /* Tablet styles: 441px to 768px */
    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[266px]
    min-[441px]:max-[768px]:gap-[32px]
    min-[441px]:max-[768px]:opacity-100
  "
>


  
  {/* ⬅️ Left Arrow */}
<span
  className="w-[60px] h-[60px] flex items-center justify-center bg-[#19383b] cursor-pointer rounded-[50px] mx-6

             max-[440px]:w-[25.55px] max-[440px]:h-[25.55px] max-[440px]:rounded-[21.29px] max-[440px]:opacity-0

             min-[441px]:max-[768px]:w-[25.553956985473633px] min-[441px]:max-[768px]:h-[25.553956985473633px]
             min-[441px]:max-[768px]:rounded-[21.29px] min-[441px]:max-[768px]:opacity-0"
  onClick={showPrev}
>


    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="20"
      viewBox="0 0 14 24"
      fill="none"
    >
      <path
        d="M3.40564 11.8584L12.5915 21.0442C12.904 21.3567 13.0552 21.7212 13.0452 22.1378C13.0352 22.5544 12.8735 22.9189 12.5603 23.2313C12.247 23.5438 11.8825 23.7 11.4667 23.7C11.051 23.7 10.6864 23.5438 10.3732 23.2313L0.749866 13.6393C0.499911 13.3893 0.312444 13.1081 0.187467 12.7957C0.0624889 12.4832 0 12.1708 0 11.8584C0 11.5459 0.0624889 11.2335 0.187467 10.921C0.312444 10.6086 0.499911 10.3274 0.749866 10.0774L10.3732 0.454134C10.6856 0.14169 11.0555 -0.00953319 11.483 0.000465034C11.9104 0.0104633 12.2799 0.172101 12.5915 0.485379C12.9031 0.798656 13.0593 1.16317 13.0602 1.57893C13.061 1.99469 12.9048 2.35921 12.5915 2.67249L3.40564 11.8584Z"
        fill="#007B82"
      />
    </svg>
  </span>

  {/* Image Slider */}
<div
  className="h-[400px] flex-1 max-w-[850px] aspect-video overflow-hidden w-fit 
             flex flex-nowrap gap-0 items-center justify-start rounded-[15px] 
             
             max-[440px]:w-full max-[440px]:h-auto 
             max-[440px]:rounded-[10px] max-[440px]:opacity-100 

             /* Tablet styles: 441px to 768px */
             min-[441px]:max-[768px]:w-[400px]
             min-[441px]:max-[768px]:h-[230px]
             min-[441px]:max-[768px]:rounded-[5px]
             min-[441px]:max-[768px]:opacity-100
"
>



    <div
      className="min-w-full transition-all"
      style={{ transform: `translateX(${index * -100}%)` }}
    >
      <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
    </div>
    <div
      className="min-w-full transition-all"
      style={{ transform: `translateX(${index * -100}%)` }}
    >
      <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
    </div>
    <div
      className="min-w-full transition-all"
      style={{ transform: `translateX(${index * -100}%)` }}
    >
      <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
    </div>
  </div>

  {/* ➡️ Right Arrow */}
<span
  className="w-[60px] h-[60px] flex items-center justify-center bg-[#19383b] cursor-pointer rounded-[50px] mx-6

             max-[440px]:w-[30px] max-[440px]:h-[30px]
             max-[440px]:rounded-[21.29px] max-[440px]:opacity-100

             min-[441px]:max-[768px]:w-[30px] min-[441px]:max-[768px]:h-[30px]
             min-[441px]:max-[768px]:rounded-[21.29px] min-[441px]:max-[768px]:opacity-100
             min-[441px]:max-[768px]:bg-[#007B821F] min-[441px]:max-[768px]:shadow-[0px_1px_12px_0px_#00000026]"
  onClick={showNext}
>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 14 24"
  fill="none"
  className="w-[10px] h-[20px]

             max-[440px]:w-[5.56px] max-[440px]:h-[10.09px]"
>

    <path
      d="M10.5944 11.8584L1.40849 21.0442C1.09605 21.3567 0.944824 21.7212 0.954823 22.1378C0.964821 22.5544 1.12646 22.9189 1.43974 23.2313C1.75301 23.5438 2.11753 23.7 2.53329 23.7C2.94905 23.7 3.31357 23.5438 3.62685 23.2313L13.2501 13.6393C13.5001 13.3893 13.6876 13.1081 13.8125 12.7957C13.9375 12.4832 14 12.1708 14 11.8584C14 11.5459 13.9375 11.2335 13.8125 10.921C13.6876 10.6086 13.5001 10.3274 13.2501 10.0774L3.62685 0.454134C3.3144 0.14169 2.94447 -0.00953319 2.51704 0.000465034C2.08962 0.0104633 1.7201 0.172101 1.40849 0.485379C1.09688 0.798656 0.940658 1.16317 0.939825 1.57893C0.938992 1.99469 1.09521 2.35921 1.40849 2.67249L10.5944 11.8584Z"
      fill="#007B82"
    />
  </svg>
</span>


</div>

{/* Desktop Only (≥769px): hidden on mobile & tablet */}
<div className="hidden min-[769px]:block">
  <div className="flex justify-center items-center mt-10 my-5 gap-[14px]">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        onClick={() => setIndex(i)}
        className={`w-[12px] h-[12px] rounded-full cursor-pointer transition-all duration-200 ${
          index === i ? "bg-[#00B0BA]" : "bg-white border border-[#D0D0D0]"
        }`}
      />
    ))}
  </div>
</div>


{/* Tablet & Mobile Only (≤768px): */}
<div className="flex max-[768px]:flex justify-center items-center gap-[14px] my-5 
                w-[90px] h-[12px] mx-auto 
                min-[769px]:hidden">
  {[0, 1, 2].map((i) => (
    <span
      key={i}
      onClick={() => setIndex(i)}
      className={`w-[8px] h-[8px] rounded-full cursor-pointer transition-all duration-200 ${
        index === i ? "bg-[#00B0BA]" : "bg-white border border-[#D0D0D0]"
      }`}
    />
  ))}
</div>




      {/* <Link to="/Sign-in">
        {" "}
        <div className="flex gap-2.5 justify-center items-center mt-10">
          <nav className="bg-[#00b0ba] p-3 sm:px-[25px] sm:py-[15px] rounded-[5px] flex gap-2.5 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
              fill="none"
              className="w-7 h-7"
            >
              <path
                d="M9.00008 5.46663L5.66675 7.33329L7.53341 3.99996L5.66675 0.666626L9.00008 2.53329L12.3334 0.666626L10.4667 3.99996L12.3334 7.33329L9.00008 5.46663ZM25.0001 18.5333L28.3334 16.6666L26.4667 20L28.3334 23.3333L25.0001 21.4666L21.6667 23.3333L23.5334 20L21.6667 16.6666L25.0001 18.5333ZM28.3334 0.666626L26.4667 3.99996L28.3334 7.33329L25.0001 5.46663L21.6667 7.33329L23.5334 3.99996L21.6667 0.666626L25.0001 2.53329L28.3334 0.666626ZM16.7867 15.04L20.0401 11.7866L17.2134 8.95996L13.9601 12.2133L16.7867 15.04ZM18.1601 7.71996L21.2801 10.84C21.8001 11.3333 21.8001 12.2 21.2801 12.72L5.72008 28.28C5.20008 28.8 4.33341 28.8 3.84008 28.28L0.720078 25.16C0.200078 24.6666 0.200078 23.8 0.720078 23.28L16.2801 7.71996C16.8001 7.19996 17.6667 7.19996 18.1601 7.71996Z"
                fill="white"
              />
            </svg>
            <Link to="/Sign-in">
              {" "}
              <p className="text-md sm:text-xl font-bold text-white">
                Create Magic
              </p>
            </Link>
          </nav>
        </div>{" "}
      </Link> */}
    </div>
  );
}