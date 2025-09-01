// import React, { useEffect, useState } from "react";
// import Form from "./Form";
// import GalleryHover from "../../components/GalleryHover";
// import { useAnimation } from "../../components/AnimatedDesignSection";
// import sec3Pattern1 from "../../assets/home/sec3/arcticons_ai-chat-alt-1.png";
// import sec3Pattern2 from "../../assets/home/sec3/arcticons_ai-chat-alt-2.png";
// import sec3Pattern3 from "../../assets/home/sec3/material-icon-theme_gemini-ai.png";
// import sec3Pattern4 from "../../assets/home/sec3/material-icon-theme_gemini-ai(1).png";
// import sec3Design1 from "../../assets/home/sec3/design1.jpeg";
// import sec3Design2 from "../../assets/home/sec3/design2.jpeg";
// import sec3Design3 from "../../assets/home/sec3/design3.jpeg";
// import sec3bg1 from "../../assets/home/sec3/Threefeatures.jpg";

// import sec4Icon1 from "../../assets/home/sec4/1.png";
// import sec4Icon2 from "../../assets/home/sec4/2.png";
// import sec4Icon3 from "../../assets/home/sec4/3.png";
// import sec4Icon4 from "../../assets/home/sec4/4.png";

// import sec5BlockImg from "../../assets/home/sec5/Frame 182.png";
// import sec5Frame1 from "../../assets/home/sec5/Frame 175.png";
// import sec5Frame2 from "../../assets/home/sec5/Frame 176.png";
// import sec5Frame3 from "../../assets/home/sec5/Frame 177.png";
// import sec5Frame4 from "../../assets/home/sec5/Frame 178.png";
// import sec5Frame5 from "../../assets/home/sec5/Frame 181.png";
// import sec5Frame6 from "../../assets/home/sec5/Frame 180.png";
// import sec5Frame7 from "../../assets/home/sec5/Frame 183.png";
// import sec5Frame8 from "../../assets/home/sec5/Frame 184.png";

// import img1 from "../../assets/home/sec6/1.png";
// import img2 from "../../assets/home/sec6/2.png";
// import img3 from "../../assets/home/sec6/3.png";
// import img4 from "../../assets/home/sec6/4.png";
// import img5 from "../../assets/home/sec6/1 (1).png";
// import user6 from "../../assets/home/sec6/2 (1).png";
// import user7 from "../../assets/home/sec6/3 (1).png";
// import user8 from "../../assets/home/sec6/4 (1).png";
// import sec6Logo from "../../assets/home/sec6/Logo.png";

// import sec9Frame from "../../assets/home/sec9/Frame 168.png";

// import sec10Img1 from "../../assets/home/sec10/3d-interior-design-free-png 1.png";
// import sec10Img2 from "../../assets/home/sec10/3d-interior-design-png 1.png";

// import sec13Img1 from "../../assets/home/sec13/img1.jpg";
// import sec13Img2 from "../../assets/home/sec13/img2.jpg";

// import sec14Img2 from "../../assets/home/sec14/Vector.png";
// import sec14Img3 from "../../assets/home/sec14/m1.jpg";
// import sec14Img4 from "../../assets/home/sec14/m2.jpg";
// import sec14Img5 from "../../assets/home/sec14/m3.jpg";
// import FAQ from "./FAQ";
// import HeroBanner from "./HeroBanner";
// import DraggableImageSection from "./DraggableImageSection";
// import ImageSlider from "./ImageSlider";
// import StepsHome from "./StepsHome";
// import Star from "../../assets/home/star.png";
// import Reacts from "../../assets/home/react.png";
// import Stars from "../../assets/home/stars.png";
// import Magic from "../../assets/product-pg/magic.png";
// import {Link} from "react-router-dom"
// import BasicForm from "./BasicForm";


// //export default function Home() {
// export default function Home() {
//   const frameImages = [
//     "/home/sec5/frame1.png",
//     "/home/sec5/frame2.png",
//     "/home/sec5/frame3.png",
//     "/home/sec5/frame4.png",
//     "/home/sec5/frame5.png",
//     "/home/sec5/frame6.png",
//     "/home/sec5/frame7.png",
//     "/home/sec5/frame8.png",
//   ];
//   const { sectionRef, animations } = useAnimation();
//   const faqs = [
//     {
//       question: "What is Stackly AI?",
//       answer:
//         "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
//     },
//     {
//       question: "How does Stackly AI work?",
//       answer:
//         "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
//     },
//     {
//       question: "Is Stackly AI free to use?",
//       answer:
//         "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
//     },
//     {
//       question: "How do I contact Stackly AI?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//   ];

//   return (
//     <div>
//       {/* banner  */}

//       <HeroBanner />

//       {/* section 2 */}

//       <section className="max-w-[100vw] w-full min-h-[552px] flex flex-col justify-center items-center gap-5 p-[30px] max-[500px]:py -10 max-[500px]:min-h-0 bg-gradient-to-l from-[#00B0BA14] to-[#00B0BA00]">
//         <h1 className="max-w-[220px] w-full min-h-[46px] text-[40px] font-black  leading-[100%] text-[#2a2a2a] text-center">
//           STACKLY AI
//         </h1>
//         <h2 className="max-w-[979px] w-full min-h-[63px] text-[52px] font-bold leading-[100%] text-center text-[#007B82] flex gap-[10px] ">
//           <img src={Stars} alt="stars" className="w-[50px] h-[50px]" />
//           Smarter. Faster. Built for Excellence
//         </h2>
//         <p className="max-w-[839px] w-full min-h-[76px] text-[20px] font-normal leading-[38px]  h-[38px] text-center ">
//           Experience rapid, photo-realistic designs powered by advanced
//           AI—trusted by professionals and homeowners alike.
//         </p>
//       </section>
//       <div className="absolute">
//         <img src={Star} alt="" className="relative top-[-120px] left-[60px]" />
//         <img
//           src={Star}
//           alt=""
//           className="relative top-[-130px] left-[100px] w-[30px]"
//         />
//         {/* <img src={Star} alt="" className='relative top-[-570px] left-[1000px]' /> */}
//         {/* <img src={Star} alt="" className='relative top-[-580px] left-[1040px] w-[30px]' /> */}
//         <img
//           src={Reacts}
//           alt=""
//           className="relative top-[-570px] left-[50px]"
//         />
//         {/* <img src={Reacts} alt="" className='relative top-[-370px] left-[1100px]' /> */}
//       </div>

//       {/* section 3 */}

//       <section className="w-full min-h-[900px]" ref={sectionRef}>
//         <div
//           className="w-full min-h-[900px]  bg-cover bg-center bg-no-repeat bg-blend-overlay pb-0"
//           style={{ backgroundImage: `url(${sec3bg1})` }}
//         >
//           <div className="home-bg-img relative w-full min-h-[900px] overflow-hidden">
//             {/* Background images */}
//             <img
//               src={sec3Pattern1}
//               alt=""
//               className="absolute w-[240px] h-[240px] top-0 left-0 mix-blend-overlay max-sm:w-[120px] max-sm:h-[120px]"
//             />
//             <img
//               src={sec3Pattern2}
//               alt=""
//               className="absolute w-[60px] h-[60px] top-[554px] left-[1080px] mix-blend-overlay max-sm:hidden"
//             />
//             <img
//               src={sec3Pattern3}
//               alt=""
//               className="absolute w-[44px] h-[44px] top-[747px] left-[260px] max-sm:hidden"
//             />
//             <img
//               src={sec3Pattern4}
//               alt=""
//               className="absolute w-[44px] h-[44px] top-[932px] left-[70%] max-sm:hidden"
//             />

//             {/* Heading */}
//             <h1 className="text-[40px] font-bold text-white text-center mb-2 relative top-[-300px] max-sm:top-0 max-sm:text-[28px] px-4">
//               Ultimate <span className="text-[#00D1DD]">AI Design Tool</span>{" "}
//               for Interiors & Exteriors
//             </h1>
//             <p className="text-[22px] font-medium text-white text-center relative top-[-290px] max-sm:top-0 max-sm:text-[18px] px-4">
//               Transform Any Space Effortlessly
//             </p>

//             {/* Design sections */}
//             <div className="w-full relative min-h-[1050px] max-sm:min-h-fit flex flex-col items-center gap-10 py-10">
//               {/* Left */}
//               <div
//                 className={`flex items-center justify-center gap-5 absolute left-5 mt-[-200px] max-sm:static max-sm:flex-col max-sm:p-3 transition-all duration-1000 ease-out ${
//                   animations?.leftVisible
//                     ? "translate-x-0 opacity-100"
//                     : "-translate-x-[100%] opacity-0"
//                 }`}
//               >
//                 <p className="rounded-full text-[22px] font-semibold text-black bg-white p-5 whitespace-nowrap max-sm:text-[18px] max-sm:text-center">
//                   AI-Powered Interior Designs
//                 </p>
//                 <img
//                   className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-white"
//                   src={sec3Design1}
//                   alt="Interior design"
//                 />
//               </div>

//               {/* Center */}
//               <div
//                 className={`flex items-center justify-center gap-5 absolute right-5 top-[80px] max-sm:static max-sm:flex-col max-sm:p-3 transition-all duration-1000 ease-out ${
//                   animations?.centerVisible
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-[100%] opacity-0"
//                 }`}
//               >
//                 <img
//                   className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-white"
//                   src={sec3Design2}
//                   alt="Exterior design"
//                 />
//                 <p className="rounded-full text-[22px] font-semibold text-black bg-white p-5 whitespace-nowrap max-sm:text-[18px] max-sm:text-center">
//                   Stunning Exterior Makeovers
//                 </p>
//               </div>

//               {/* Right */}
//               <div
//                 className={`flex items-center justify-center gap-5 absolute left-5 top-[370px] max-sm:static max-sm:flex-col max-sm:p-3 transition-all duration-1000 ease-out ${
//                   animations?.rightVisible
//                     ? "translate-x-0 opacity-100"
//                     : "-translate-x-[100%] opacity-0"
//                 }`}
//               >
//                 <p className="rounded-full text-[22px] font-semibold text-black bg-white p-5 whitespace-nowrap max-sm:text-[18px] max-sm:text-center">
//                   Outdoor Spaces Reimagined
//                 </p>
//                 <img
//                   className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-white"
//                   src={sec3Design3}
//                   alt="Outdoor design"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 4 */}

//       <section className="max-[500px]:p-5 max-w-[100vw] w-full min-h-[983px] overflow-x-hidden flex justify-center items-center p-[50px] bg-gradient-to-l from-[#00B0BA14] to-[#00B0BA00]">
//         <div className="max-w-[1279px] w-full min-h-[778px] bg-white  flex flex-col justify-center items-center gap-10 px-5 py-10 rounded-[15px] bg-gradient-to-l from-[#00B0BA14] to-[#00B0BA00]">
//           <p className="max-w-[951px] w-full min-h-[29px] text-[24px] font-[400] leading-[100%] text-center text-[#2a2a2a]">
//             First-of-Its-Kind Features
//           </p>
//           <h2 className="max-w-[951px] w-full min-h-[48px] text-[40px] font-bold leading-[100%] text-center text-black">
//             The <span className="text-[#009A98]">All You Need</span> AI Home
//             Design Tool
//           </h2>

//           <div className="max-w-[1219px] w-full min-h-[310px] flex justify-center items-center max-[900px]:flex-wrap gap-20">
//             <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
//               <img
//                 src={sec4Icon1}
//                 alt="icon1"
//                 className="max-w-[100px] w-full min-h-[100px] border-[1px] border-solid border-white shadow-md rounded-[50%]"
//               />
//               <h3 className="max-w-[211px] w-full min-h-[48px] text-[24px] font-semibold leading-[100%] text-center text-[#2a2a2a]">
//                 Interior & Exterior Image Generation
//               </h3>
//               <p className="max-w-[250px] w-full min-h-[102px] text-[16px]  font-medium leading-[150%] h-[34px] text-center">
//                 Get design ideas for every part of your home—both indoors and
//                 outdoors.
//               </p>
//             </div>

//             <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
//               <img
//                 src={sec4Icon2}
//                 alt="icon1"
//                 className="max-w-[100px] w-full min-h-[100px] border-[1px] border-solid border-white shadow-md rounded-[50%]"
//               />
//               <h3 className="max-w-[211px] text-[24px] w-full min-h-[48px]  font-semibold leading-[100%] text-center text-[#2a2a2a]">
//                 Unlimited AI Ideas
//               </h3>
//               <p className="max-w-[250px] w-full min-h-[102px]  text-[16px] font-medium leading-[150%] h-[34px] text-center">
//                 Generate endless creative ideas to transform any space with
//                 ease.
//               </p>
//             </div>

//             <div className="max-w-[250px] w-full min-h-[310px]  flex flex-col justify-center items-center gap-5">
//               <img
//                 src={sec4Icon3}
//                 alt="icon1"
//                 className="max-w-[100px] w-full min-h-[100px] border-[1px] border-solid border-white shadow-md rounded-[50%]"
//               />
//               <h3 className="max-w-[211px] w-full min-h-[48px] text-[24px] font-semibold leading-[100%] text-center text-[#2a2a2a]">
//                 High-Resolution Images
//               </h3>
//               <p className="max-w-[250px] w-full min-h-[102px]  text-[16px] font-medium leading-[150%] h-[34px] text-center">
//                 Download crystal-clear, AI-generated images that capture every
//                 detail.
//               </p>
//             </div>

//             <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
//               <img
//                 src={sec4Icon4}
//                 alt="icon1"
//                 className="max-w-[100px] w-full min-h-[100px] border-[1px] border-solid border-white shadow-md rounded-[50%]"
//               />
//               <h3 className="max-w-[211px] w-full min-h-[48px] text-[24px] font-semibold leading-[100%] text-center text-[#2a2a2a]">
//                 Fast Image Generation
//               </h3>
//               <p className="max-w-[250px] w-full min-h-[102px]  text-[16px] font-medium leading-[150%] h-[34px] text-center ">
//                 Create stunning, AI-powered images in just seconds.
//               </p>
//             </div>
//           </div>
//           <Link to="/Products">
//             {" "}
//             <div
//               className="max-w-[846px] w-[846px] min-h-[65px] flex justify-center items-center rounded-[5px] hover:bg-[#4bb0b5]
//           "
//               style={{
//                 backgroundImage: `
//         linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)

//         `,
//               }}
//             >
//               <p
//                 className="max-w-[464px] w-full min-h-[65px] text-xl font-bold leading-[100%]  text-center text-white no-underline flex justify-center items-center gap-[10px] cursor-pointer"
//                 style={{ wordSpacing: "2px" }}
//               >
//                 <img src={Magic} alt="" className="w-30px h-[30px]" />
//                 Generate Design
//               </p>
//             </div>
//           </Link>
//         </div>
//       </section>

//       <div className="absolute">
//         {/* <img src={Star} alt="" className='relative top-[-120px] left-[1010px]'/> */}
//         {/* <img src={Star} alt="" className='relative top-[-190px] left-[1090px] w-[30px]'/> */}
//         <img src={Star} alt="" className="relative top-[-800px] left-[50px]" />
//         <img
//           src={Star}
//           alt=""
//           className="relative top-[-800px] left-[90px] w-[30px]"
//         />
//         {/* <img src={Reacts} alt="" className='relative top-[-670px] left-[20px]' />
//         <img src={Reacts} alt="" className='relative top-[-370px] left-[1400px]' /> */}
//       </div>
//       <div className="relative w-full h-full">
//         {/* Star on left side with relative top and left */}
//         <img
//           src={Star}
//           alt=""
//           className="absolute bottom-[200px] right-[90px]"
//         />

//         {/* Star on bottom right corner with absolute positioning */}
//         <img
//           src={Star}
//           alt=""
//           className="absolute bottom-[180px] right-[50px] w-[30px]"
//         />
//       </div>

//       <GalleryHover
//         sec5BlockImg={sec5BlockImg}
//         sec5Frame1={sec5Frame1}
//         sec5Frame2={sec5Frame2}
//         sec5Frame3={sec5Frame3}
//         sec5Frame4={sec5Frame4}
//         sec5Frame5={sec5Frame5}
//         sec5Frame6={sec5Frame6}
//         sec5Frame7={sec5Frame7}
//         sec5Frame8={sec5Frame8}
//       />

//       <section className="w-full min-h-[725px] bg-white py-16 px-4 flex flex-col justify-center items-center gap-[100px]">
//         <div className="max-w-6xl mx-auto ">
//           {/* Title */}
//           <h2 className="text-center text-[#007B82] text-2xl md:text-3xl text-[40px] leading-[140%] font-semibold mb-16">
//             Our Design Range, Trusted Worldwide
//           </h2>

//           {/* First Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-16">
//             {/* Images */}
//             <div className="flex justify-center md:justify-start -space-x-4">
//               {[img1, img2, img3, img4].map((src, idx) => (
//                 <img
//                   key={idx}
//                   src={src}
//                   alt={`Design ${idx + 1}`}
//                   className="w-[88px] h-[88px] rounded-full border-2 border-white object-cover"
//                 />
//               ))}
//             </div>

//             {/* Middle - Stat */}
//             <div className="text-center">
//               <p className="text-3xl font-bold text-teal-700 text-[82px] mb-[30px]">
//                 45+
//               </p>
//               <p className="text-gray-800 font-medium text-[32px]">
//                 Design Styles
//               </p>
//             </div>

//             {/* Right - Text */}
//             <div className="text-center text-[black] text-[28px] leading-[140%]">
//               <p>
//                 We blend AI intelligence with diverse design trends to deliver
//                 spaces you'll love
//               </p>
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
//             {/* Left - Text */}
//             <div className=" text-[black] text-[28px] leading-[140%] text-center">
//               <p>
//                 Join a growing community of users transforming their spaces with
//                 AI-powered design
//               </p>
//             </div>

//             {/* Middle - User Images */}
//             <div className="flex justify-center -space-x-4">
//               {[img5, user6, user7, user8].map((src, idx) => (
//                 <img
//                   key={idx}
//                   src={src}
//                   alt={`User ${idx + 1}`}
//                   className="w-[88px] h-[88px] rounded-full border-2 border-white object-cover"
//                 />
//               ))}
//             </div>

//             {/* Right - Stat */}
//             <div className="text-center">
//               <p className="text-[82px] font-bold text-teal-700">100+</p>
//               <p className="text-gray-800 font-medium text-center text-[32px]">
//                 Happy Users
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section></section>

//       {/* Section 7 */}

//       <BasicForm />

//       {/* Section 7.5 */}

//       <StepsHome />

//       {/* Section 8 */}

//       <section
//         className="w-screen min-h-[612px] bg-center bg-cover object-cover bg-no-repeat flex justify-center items-center"
//         style={{ background: "url('/home/sec8/Bg.png')" }}
//       >
//         <div className="max-w-[727px] w-full min-h-[274px] bg-[#00000099] backdrop-blur-[2] flex flex-col justify-center items-center gap-6 px-[30px] py-10 rounded-xl">
//           <h1 className="max-w-[667px] w-full min-h-[62px] text-[44px] font-bold leading-[140%] text-center text-[white]">
//             Sign Up Quickly! Get <span className="text-[#00d1dd]">25%</span>
//             Offer
//           </h1>
//           <div className="ul-list">
//             <ul className="max-w-[405px] w-full min-h-[24px] flex justify-between items-center">
//               <li
//                 className='before:content-["."] text-[white] text-[17px] font-medium leading-[140%] text-center before:text-[#007B82] before:text-[50px] before:m-2.5'
//                 style={{ listStyle: "none" }}
//               >
//                 30 free outputs
//               </li>
//               <li
//                 className='before:content-["."] text-[white] text-[17px] font-medium leading-[140%] text-center before:text-[#007B82] before:text-[50px] before:m-2.5'
//                 style={{ listStyle: "none" }}
//               >
//                 No credit card required
//               </li>
//             </ul>
//           </div>
//           <Link to="/sign-up">
//             <div
//               className="max-w-[406px] w-[406px] min-h-[60px] flex justify-center items-center gap-2.5 text-xl font-bold leading-[35px] text-center text-[white] cursor-pointer rounded-xl"
//               style={{
//                 background:
//                   "linear-gradient(to right,#00B0BA 0%,#000000 50%,#007B82 100%)",
//                 wordSpacing: "8px",
//               }}
//             >
//               Signup
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* Section 9 */}

//       <section className="max-w-[100vw]  flex flex-col justify-center items-center gap-[50px] p-5 py-32">
//         <h1 className="max-w-[1320px] w-full min-w-[134px] md:text-5xl text-3xl font-semibold leading-[140%] mb-[80px] text-center text-black">
//           Plan Your Future{" "}
//           <span className="text-[#007B82]">Interiors, Exteriors, </span> and{" "}
//           <span>Outdoor Spaces </span>with{" "}
//           <span className="text-[rgb(5,128,128)]">Stackly</span>
//         </h1>
//         <img
//           className="max-w-[1115px] h-auto w-full"
//           src={sec9Frame}
//           alt="section 9 frame image"
//         />
//       </section>

//       {/* Section 10 */}

//       {/* <section className="max-w-[100vw] min-h-[926px] flex flex-col justify-center items-center gap-[30px]">
//         <h1 className="max-w-[1320px] min-h-[67px] w-full text-[48px] font-semibold leading-[140%] text-center text-black">
//           Compare Design, Find Your{" "}
//           <span className="text-[#007B82]">Perfect style</span>
//         </h1>
//         <p className="max-w-[736px] w-full min-h-[72px] text-lg font-semibold leading-[200%] text-center text-[#B0B0B0]">
//           Explore and compare multiple interior, exterior, and outdoor designs
//           to discover the one that matches your unique taste.
//         </p>
//         <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-2.5 p-5">
//           <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
//             <img
//               className="max-w-[541px]  w-full"
//               src={sec10Img1}
//               alt="image1"
//             />
//             <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
//               <span className="text-[#007B82]">
//                 "Your style is sleek and sophisticated.{" "}
//               </span>
//               This brown-themed office design blends modern functionality with
//               warm, earthy tones—perfect for a productive and stylish
//               workspace."
//             </p>
//           </div>

//           <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
//             <img
//               className="max-w-[541px]  w-full"
//               src={sec10Img2}
//               alt="image2"
//             />
//             <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
//               <span className="text-[#007B82]">
//                 "Embrace comfort with a touch of elegance.
//               </span>{" "}
//               This brown-themed lounge offers a cozy yet professional
//               atmosphere, balancing work and relaxation effortlessly."
//             </p>
//           </div>
//         </div>
//       </section> */}
//       <section className="max-w-[100vw] min-h-[926px] flex flex-col justify-center items-center gap-[30px]">
//         <h1 className="max-w-[1320px] min-h-[67px] w-full text-[48px] font-semibold leading-[140%] text-center text-black">
//           Compare Design, Find Your{" "}
//           <span className="text-[#007B82]">Perfect style</span>
//         </h1>
//         <p className="max-w-[736px] w-full min-h-[72px] text-lg font-semibold leading-[200%] text-center ">
//           Explore and compare multiple interior, exterior, and outdoor designs
//           to discover the one that matches your unique taste.
//         </p>
//         {/* <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-2.5 p-5">
//           <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
//             <img
//               className="max-w-[541px]  w-full"
//               src={sec10Img1}
//               alt="image1"
//             />
//             <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
//               <span className="text-[#007B82]">
//                 "Your style is sleek and sophisticated.{" "}
//               </span>
//               This brown-themed office design blends modern functionality with
//               warm, earthy tones—perfect for a productive and stylish
//               workspace."
//             </p>
//           </div>

//           <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
//             <img
//               className="max-w-[541px]  w-full"
//               src={sec10Img2}
//               alt="image2"
//             />
//             <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
//               <span className="text-[#007B82]">
//                 "Embrace comfort with a touch of elegance.
//               </span>{" "}
//               This brown-themed lounge offers a cozy yet professional
//               atmosphere, balancing work and relaxation effortlessly."
//             </p>
//           </div>
//         </div> */}
//         <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-5 p-5">
//           {[
//             {
//               img: sec10Img1,
//               text: `"Your style is sleek and sophisticated. This brown-themed office design blends modern functionality with warm, earthy tones—perfect for a productive and stylish workspace."`,
//             },
//             {
//               img: sec10Img2,
//               text: `"Embrace comfort with a touch of elegance. This brown-themed lounge offers a cozy yet professional atmosphere, balancing work and relaxation effortlessly."`,
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="group max-w-[577px] w-full bg-white shadow-[0_0_4px_0_#00000040] rounded-[10px] overflow-hidden transition-all duration-500"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={`image${index}`}
//                   className="w-full max-w-[541px] transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-500 ease-in-out p-5">
//                 <p className="text-center text-[17px] font-semibold leading-[140%] text-black">
//                   <span className="text-[#007B82]">
//                     {item.text.split(".")[0]}.
//                   </span>
//                   {item.text.slice(item.text.indexOf(".") + 1)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* {section:11} */}

//       <ImageSlider />

//       {/* Section: Community Showcase */}

//       {/* {section-12} */}
//       <section className="w-full min-h-[200px] py-10 px-4 bg-[#007B8212] flex flex-col md:flex-row justify-center items-center flex-wrap gap-6">
//         <h2 className="text-black text-center md:text-left text-2xl md:text-3xl font-medium max-w-[900px]">
//           Get started with 10 free outputs – No credit card needed!
//         </h2>

//         <Link
//           to="/Sign-in"
//           className="max-w-[406px] min-h-[60px] rounded-[5px] bg-gradient-to-r from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-bold py-5 px-16 rounded-md hover:opacity-50 transition"
//         >
//           Start Free Trial
//         </Link>
//       </section>
//       {/* {section-13} */}
//       <section className="w-full py-16 px-4 flex flex-col justify-center items-center mt-20">
//         <h2 className="text-[48px] md:text-5xl font-semibold text-center text-gray-800 leading-[140%]">
//           Discover Our{" "}
//           <span className="text-[#007B82]">Advanced AI Interior Tools</span> and
//           Redesign
//         </h2>
//         <h2 className="text-[48px] md:text-5xl font-semibold text-center text-[black] mt-3">
//           Your Space Instantly
//         </h2>
//       </section>

//       {/* {section-14} */}

//       <DraggableImageSection />

//       {/* {section-15} */}

//       <section className="w-full py-16 px-6 flex flex-col items-center bg-white text-gray-800">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-[28px] font-semibold leading-[140%] text-[black]">
//             Transform in <span className="text-[#007b82]">Seconds</span>, Not
//             Days
//           </p>
//           <h2 className="text-[48px] md:text-5xl font-semibold mt-2 leading-[140%] ">
//             StacklyAI is for <span className="text-[#007b82]">Homeowners</span>{" "}
//             and <span className="text-[#007b82]">Professionals</span>
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
//           {/* Personal Use Card */}
//           <div className="flex flex-col items-center text-center">
//             <img
//               src={sec13Img2}
//               alt="Personal Use"
//               className="rounded-lg shadow-md mb-6 w-full object-cover"
//             />
//             <h3 className="text-[38px] font-semibold mb-2 leading-[140%] align-center">
//               For Personal Use <span className="text-[#007B82]">01</span>
//             </h3>
//             <p className=" font-[normal] text-[19px] leading-[200%] max-w-sm">
//               Explore your unique style and create endless realistic designs for
//               both your home's interior and exterior spaces.
//             </p>
//           </div>

//           {/* Professional Use Card */}
//           <div className="flex flex-col items-center text-center">
//             <img
//               src={sec13Img1}
//               alt="Professional Use"
//               className="rounded-lg shadow-md mb-6 w-full object-cover"
//             />
//             <h3 className="text-[38px] font-semibold mb-2 leading-[140%] align-center mb-2">
//               For Professional Use <span className="text-[#007B82]">02</span>
//             </h3>
//             <p className="font-[normal] text-[19px] leading-[200%] max-w-sm">
//               Impress clients instantly by showcasing stunning design
//               transformations while saving time on every project.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* {section-16} */}

//       <section
//         className="relative w-full  absolute-0  bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('./src/assets/home/sec14/bg1.jpg')" }}
//       >
//         <div className="py-20 px-6 bg-[#00000096]">
//           <div className="flex flex-col items-center text-center text-white">
//             <h2 className="text-[48px] md:text-5xl leading-[140%] text-center font-bold mb-4">
//               <span className="text-6xl font-bold">“</span> Meet Our Members{" "}
//               <span className="text-6xl font-bold">”</span>
//             </h2>
//             <p className="max-w-[630px] min-h-[78px] text-[28px] leading-[140%] text-center md:text-xl text-gray-300 mb-8">
//               You're in good company with{" "}
//               <span className="text-cyan-400  font-semibold">Stackly AI</span>,
//               trusted by people in all 195 countries.
//             </p>
//             {/* Center logo */}
//             <div className="mb-16">
//               <div className="bg-[#FFFFFF1F] rounded-full p-8 shadow-lg">
//                 <img src={sec14Img2} alt="Center Icon" className="w-12 h-12" />
//               </div>
//             </div>

//             {/* Member Cards */}
//             <div className="w-[100vw] flex justify-center item-center flex-wrap gap-10">
//               {/* Card 1 */}
//               <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                 <div className="min-w-[413px] h-full flex justify-around items-center">
//                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1 ">
//                     <h3 className="text-black text-[22px] font-medium leading-[140%] ">
//                       Guru Ragav Auditor
//                     </h3>
//                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">
//                       Auditor
//                     </p>
//                   </div>
//                   <img
//                     src={sec14Img3}
//                     alt="Member 1"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 </div>
//                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                   “I use Stackly AI to help my clients visualize how their
//                   backyard could look like if they hire me for the job. It works
//                   flawlessly!”
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                 <div className="min-w-[413px] h-full flex justify-around items-center">
//                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
//                     <h3 className="text-black text-[22px] font-medium leading-[140%]">
//                       Cristian Rama
//                     </h3>
//                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">
//                       Architect
//                     </p>
//                   </div>
//                   <img
//                     src={sec14Img4}
//                     alt="Member 2"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 </div>
//                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                   “I needed to replace my living room furniture so I generated a
//                   few design ideas with Stackly AI. I picked my favorite, sent
//                   it to the furniture maker and now I have it in real life.
//                   Awesome technology!”
//                 </p>
//               </div>

//               {/* Card 3 */}
//               <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                 <div className="min-w-[413px] h-full flex justify-around items-center">
//                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
//                     <h3 className="text-black text-[22px] font-medium leading-[140%]">
//                       Ram Krishnan
//                     </h3>
//                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">
//                       Architect
//                     </p>
//                   </div>
//                   <img
//                     src={sec14Img5}
//                     alt="Member 3"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 </div>
//                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                   “I run a real estate agency and a lot of my clients send me
//                   pictures with their empty properties. I use Stackly AI to
//                   furnish them automatically. It has become an indispensable
//                   tool for us.”
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* {section faq} */}

//       {/* {section-15} */}

//       <FAQ faqs={faqs} />
//     </div>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Components
import Form from "./Form";
import GalleryHover from "../../components/GalleryHover";
import { useAnimation } from "../../components/AnimatedDesignSection";
import FAQ from "./FAQ";
import HeroBanner from "./HeroBanner";
import DraggableImageSection from "./DraggableImageSection";
import ImageSlider from "./ImageSlider";
import StepsHome from "./StepsHome";
import BasicForm from "./BasicForm";

// Section Images
import sec3Pattern1 from "../../assets/home/sec3/arcticons_ai-chat-alt-1.png";
import sec3Pattern2 from "../../assets/home/sec3/arcticons_ai-chat-alt-2.png";
import sec3Pattern3 from "../../assets/home/sec3/material-icon-theme_gemini-ai.png";
import sec3Pattern4 from "../../assets/home/sec3/material-icon-theme_gemini-ai(1).png";
import sec3Design1 from "../../assets/home/sec3/design1.jpeg";
import sec3Design2 from "../../assets/home/sec3/design2.jpeg";
import sec3Design3 from "../../assets/home/sec3/design3.jpeg";
import sec3bg1 from "../../assets/home/sec3/Threefeatures.jpg";

import sec4Icon1 from "../../assets/home/sec4/1.png";
import sec4Icon2 from "../../assets/home/sec4/2.png";
import sec4Icon3 from "../../assets/home/sec4/3.png";
import sec4Icon4 from "../../assets/home/sec4/4.png";
import Frame from "../../assets/home/Frame.png";

import sec5BlockImg from "../../assets/home/sec5/Frame 182.png";
import sec5Frame1 from "../../assets/home/sec5/Frame 175.png";
import sec5Frame2 from "../../assets/home/sec5/Frame 176.png";
import sec5Frame3 from "../../assets/home/sec5/Frame 177.png";
import sec5Frame4 from "../../assets/home/sec5/Frame 178.png";
import sec5Frame5 from "../../assets/home/sec5/Frame 181.png";
import sec5Frame6 from "../../assets/home/sec5/Frame 180.png";
import sec5Frame7 from "../../assets/home/sec5/Frame 183.png";
import sec5Frame8 from "../../assets/home/sec5/Frame 184.png";

import img1 from "../../assets/home/sec6/1.png";
import img2 from "../../assets/home/sec6/2.png";
import img3 from "../../assets/home/sec6/3.png";
import img4 from "../../assets/home/sec6/4.png";
import img5 from "../../assets/home/sec6/1 (1).png";
import user6 from "../../assets/home/sec6/2 (1).png";
import user7 from "../../assets/home/sec6/3 (1).png";
import user8 from "../../assets/home/sec6/4 (1).png";
import sec6Logo from "../../assets/home/sec6/Logo.png";

import sec9Frame from "../../assets/home/sec9/Frame 168.png";

import sec10Img1 from "../../assets/home/sec10/3d-interior-design-free-png 1.png";
import sec10Img2 from "../../assets/home/sec10/3d-interior-design-png 1.png";

import sec13Img1 from "../../assets/home/sec13/img1.jpg";
import sec13Img2 from "../../assets/home/sec13/img2.jpg";

import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m3.jpg";
import sec14Img4 from "../../assets/home/sec14/m1.jpg";
import sec14Img5 from "../../assets/home/sec14/m2.jpg";

import DotFrame from "../../assets/home/DotFrame.png";
import NewFrame from "../../assets/home/nsec3/image2.png";
import NewFrame2 from "../../assets/home/nsec3/image1.png";
import NewFrame3 from "../../assets/home/nsec3/image3.png";
import NewFrame4 from "../../assets/home/nsec3/image4.png";
import NewFrame5 from "../../assets/home/nsec3/image5.png";
import NewFrame6 from "../../assets/home/nsec3/image6.png";
import Group from "../../assets/home/nsec3/StarGroup.png";
import vector from "../../assets/home/nsec3/vector.png";
import star from "../../assets/home/Big star.png";
import Star from "../../assets/home/stars.png";
import Reacts from "../../assets/home/react.png";
import Magic from "../../assets/product-pg/magic.png";
import Line from "../../assets/home/Sideline.png";
import BgVideo2 from "../../assets/home/vd2.mp4";
import Bfooter from "../../assets/home/footer.png";

export default function Home() {
  const { sectionRef, animations } = useAnimation();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const counter45Ref = useRef(null);
  const counter100Ref = useRef(null);
  const hasAnimated = useRef(false);
  const lastTriggered = useRef(0);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });


const faqs = [
  {
    question: "How does Stackly AI work?",
    answer: "Stackly AI uses advanced algorithms to automate tasks efficiently.",
    related: [
      {
        question: "Is Stackly AI suitable for beginners?",
        answer: "Yes, Stackly AI has a beginner-friendly interface.",
      },
      {
        question: "What technologies does Stackly use?",
        answer: "It uses React, Node.js, and AI/ML models under the hood.",
      },
    ],
  },
  {
    question: "Is there a free version available?",
    answer: "Yes, Stackly AI offers a free trial with limited features.",
    related: [
      {
        question: "How long does the free trial last?",
        answer: "The free trial lasts for 14 days from the signup date.",
      },
      {
        question: "Can I upgrade during the trial?",
        answer: "Yes, you can upgrade anytime via your account settings.",
      },
    ],
  },
  {
    question: "Can Stackly AI integrate with other tools?",
    answer: "Yes, it supports integration with tools like Zapier and Slack.",
    related: [
      {
        question: "Does Stackly AI support API access?",
        answer: "Yes, Stackly AI provides API documentation for developers.",
      },
      {
        question: "Can I sync Stackly with my CRM?",
        answer: "Absolutely, CRM integration is available in the pro plan.",
      },
    ],
  },
  {
    question: "Is customer support available?",
    answer: "Yes, 24/7 customer support is available via chat and email.Yes, 24/7 customer support is available via chat and email.Yes, 24/7 customer support is available via chat and email.Yes, 24/7 customer support is available via chat and email.Yes, 24/7 customer support is available via chat and email.Yes, 24/7 customer support is available via chat and email.Yes, 24/7 customer support is available via chat and email.",
    related: [
      {
        question: "Is live chat support available?",
        answer: "Yes, you can chat with support directly through the dashboard.",
      },
      {
        question: "Where can I raise a ticket?",
        answer: "Go to the 'Help' section and click 'Raise a Ticket'.",
      },
    ],
  },
];


  const mobileCards = [
    {
      id: 1,
      name: "Guru Ragav Auditor",
      role: "Auditor",
      image: sec14Img3,
      quote: "I use Stackly AI to help my clients visualize how their backyard could look like if they hire me for the job. It works flawlessly!."
    },
    {
      id: 2,
      name: "Cristian Rama",
      role: "Architect",
      image: sec14Img4,
      quote: "I needed to replace my living room furniture so I generated a few design ideas with Stackly AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology!"
    },
    {
      id: 3,
      name: "Ram Krishnan",
      role: "Architect",
      image: sec14Img5,
      quote: "I run a real estate agency and a lot of my clients send me pictures with their empty properties. I use Stackly AI to furnish them automatically. It has become an indispensable tool for us."
    }
  ];

  const images1 = [NewFrame, NewFrame3, NewFrame4];
  const images2 = [NewFrame2, NewFrame5, NewFrame6];

  // Image cycling for first div on hover
  useEffect(() => {
    if (isHovering1) {
      const interval = setInterval(() => {
        setCurrentImage1((prev) => (prev + 1) % images1.length);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setCurrentImage1(0); // Reset to NewFrame on mouse leave
    }
  }, [isHovering1]);

  // Image cycling for second div on hover
  useEffect(() => {
    if (isHovering2) {
      const interval = setInterval(() => {
        setCurrentImage2((prev) => (prev + 1) % images2.length);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setCurrentImage2(0); // Reset to NewFrame2 on mouse leave
    }
  }, [isHovering2]);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
    setCurrentImage1(0); // Reset to NewFrame
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
    setCurrentImage2(0); // Reset to NewFrame2
  };

  const handleClick1 = () => {
    setClickCount1((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    setCurrentImage1(clickCount1 === 0 ? 1 : 2); // NewFrame3 (index 1) or NewFrame4 (index 2)
  };

  const handleClick2 = () => {
    setClickCount2((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    setCurrentImage2(clickCount2 === 0 ? 1 : 2); // NewFrame5 (index 1) or NewFrame6 (index 2)
  };


   

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev === mobileCards.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev === 0 ? mobileCards.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
const [ref4, inView4] = useInView({ threshold: 0.1 });

const animateCounter = (ref, target) => {
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 16);

    const step = () => {
      start += increment;
      if (start >= target) {
        ref.current.textContent = `${target}+`;
      } else {
        ref.current.textContent = `${Math.floor(start)}+`;
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

useEffect(() => {
  if (inView4) {
    const now = Date.now();
    if (now - lastTriggered.current > 2000) { // 2-second cooldown
      animateCounter(counter45Ref, 45);
      animateCounter(counter100Ref, 100);
      lastTriggered.current = now;
    }
  }
}, [inView4]);


  return (
    <div>
      {/* banner  */}

      <HeroBanner />

      {/* section 2 */}

      {/* <section className="w-full max-w-[1440px] h-[453px] flex flex-col justify-center items-center gap-5 p-[30px] 
                    bg-gradient-to-l from-[#00B0BA14] to-[#00B0BA00] relative
                    max-[440px]:h-[248px] max-[440px]:min-h-0 max-[440px]:py-[60px] max-[440px]:px-[20px] 
                    max-[440px]:gap-[20px]"> */}

        {/* Desktop-only decorative elements (hidden on mobile) */}
        {/* <img
          src={Star}
          alt=""
          className="absolute top-[70px] right-[80px] w-[39px] h-[30px] max-[440px]:hidden"
        />
        <img
          src={Star}
          alt=""
          className="absolute top-[90px] right-[71.25px] w-[19.64px] h-[20.86px] max-[440px]:hidden"
        />
        <img
          src={Star}
          alt=""
          className="absolute bottom-[110px] left-[140px] w-[19.64px] h-[20.86px] max-[440px]:hidden"
        />
        <img
          src={Star}
          alt=""
          className="absolute bottom-[120px] left-[110.25px] w-[39px] h-[37px] max-[440px]:hidden"
        />
        <img
          src={Reacts}
          alt=""
          className="absolute top-[50px] left-[40px] w-[74px] h-[74px] max-[440px]:hidden"
        />
        <img
          src={Reacts}
          alt=""
          className="absolute bottom-[40px] right-[71.25px] w-[74px] h-[74px] max-[440px]:hidden"
        /> */}

        {/* Mobile-only decorative elements (hidden on desktop) */}
        {/* <img
          src={Star}
          alt=""
          className="hidden max-[440px]:block absolute top-[20px] right-[20px] w-[19px] h-[20px]"
        />
        <img
          src={Star}
          alt=""
          className="hidden max-[440px]:block absolute top-[33px] right-[35px] w-[10px] h-[10px]"
        />
        <img
          src={Star}
          alt=""
          className="hidden max-[440px]:block absolute bottom-[20px] left-[20px] w-[19px] h-[20px]"
        />
        <img
          src={Star}
          alt=""
          className="hidden max-[440px]:block absolute bottom-[18px] left-[35px] w-[10px] h-[10px]"
        />
        <img
          src={Reacts}
          alt=""
          className="hidden max-[440px]:block absolute top-[20px] left-[20px] w-[40px] h-[40px]"
        />
        <img
          src={Reacts}
          alt=""
          className="hidden max-[440px]:block absolute bottom-[20px] right-[20px] w-[40px] h-[40px]"
        /> */}

        {/* H1 - Title */}
        {/* <h1 className="w-full max-w-[220px] text-[24px] font-black leading-[100%] text-center text-[#2a2a2a] mx-auto
                 max-[440px]:max-w-[300px] max-[440px]:text-[20px] max-[440px]:font-[700] 
                 max-[440px]:text-[#000000] font-inter max-[440px]:mt-[20px]">
          STACKLY AI
        </h1> */}

        {/* H2 - Subtitle with icon */}
        {/* <div className="w-full max-w-[979px] flex flex-col items-center">
          <h2 className="w-full flex items-center justify-center gap-[10px] text-center
               max-[440px]:gap-[8px] max-[440px]:items-center">
            <img
              src={Stars}
              alt="stars"
              className="w-[47px] h-[46px] max-[440px]:w-[22px] max-[440px]:h-[22px]"
            />
            <span className="text-[32px] font-bold leading-[100%] text-[#007B82]
                  max-[440px]:text-[18px] max-[440px]:leading-[120%]">
              Smarter. Faster. Built for Excellence
            </span>
          </h2>
        </div> */}

        {/* Paragraph */}
        {/* <p className="w-full max-w-[839px] text-[24px] font-normal leading-[35px] text-center text-[#2A2A2A] mx-auto
                max-[440px]:text-[14px] max-[440px]:leading-[140%] max-[440px]:px-[30px]">
          Experience rapid, photo-realistic designs powered by advanced AI—trusted by professionals and homeowners alike.
        </p> */}

      {/* </section> */}



{/* new figma disgine sec2 */}
   <section className="w-full h-[857px] rotate-0 opacity-100 bg-[#000000] relative overflow-hidden">
      {/* DotFrame image */}
      <img
        src={DotFrame}
        alt="Dot Frame"
        className="w-[800px] h-[163px] opacity-100 rotate-0 absolute top-[62px] left-[-367px]"
      />

      {/* Hoverable frames */}
      <div className="relative w-full h-[800px] overflow-hidden">
        {/* FIRST IMAGE DIV */}
        <motion.div
          ref={ref1}
          initial={{ y: 100, opacity: 0 }}
          animate={inView1 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[95px] left-[319px] w-[325px] h-[381px] overflow-hidden z-10"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          onClick={handleClick1}
        >
          <div className="w-full h-full relative">
            <img
              src={images1[currentImage1]}
              alt={`Frame ${currentImage1 + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0"
              style={{ transition: "opacity 0.3s ease-in-out" }}
            />
          </div>
        </motion.div>

        {/* SECOND IMAGE DIV */}
        <motion.div
          ref={ref2}
          initial={{ y: 100, opacity: 0 }}
          animate={inView2 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[350px] left-[105px] w-[325px] h-[381px] overflow-hidden z-10"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          onClick={handleClick2}
        >
          <div className="w-full h-full relative">
            <img
              src={images2[currentImage2]}
              alt={`Frame ${currentImage2 + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0"
              style={{ transition: "opacity 0.3s ease-in-out" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Text container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-[158px] left-[752px] w-[488px] h-[152px] flex flex-col gap-[12px] opacity-100"
      >
        <div className="w-[262px] h-[22px]">
          <p className="text-white font-[400] text-[18px] leading-[100%] poppins-font">
            STACKLY AI
          </p>
        </div>
        <div className="w-[488px] h-[118px]">
          <p className="text-white font-[400] text-[52px] leading-[140%] lancelot-text -mt-[14px]">
            Design Your Dream Space Effortlessly
          </p>
        </div>
      </motion.div>

      {/* Description box */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView2 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-[616px] h-[176px] absolute top-[440px] right-[40px] flex flex-col gap-[6px]"
      >
        <div className="w-full h-[45px]">
          <p className="text-white text-[32px] font-[400] leading-[140%] poppins-font">
            Minimal Style
          </p>
        </div>
        <div className="w-[616px] h-[125px]">
          <p className="text-white text-[18px] font-[400] leading-[140%] lora-text">
            Step into a space where less truly becomes more. Our AI blends clean lines,
            soft tones, and thoughtful spacing to create interiors that feel light, breathable,
            and beautifully uncluttered. <br />
            Designed to inspire calm, focus, and modern sophistication without lifting a finger.
          </p>
        </div>
      </motion.div>

      {/* Icons */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        src={Group}
        alt="Group 28"
        className="absolute w-[26.99px] h-[26.99px] top-[31px] left-[1300px] rotate-0 border-[1.9px] border-solid border-black"
      />

      <motion.img
        initial={{ opacity: 0 }}
        animate={inView2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        src={Group}
        alt="Group 28"
        className="absolute w-[55.01px] h-[55.01px] top-[810px] left-[1297px] rotate-0 border-[1.9px] border-black"
      />

      {/* Explore more button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={inView2 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Link to="/sign-in">
          <div className="absolute w-[280px] h-[50px] top-[685px] left-[1041px] flex items-center px-[6px] group">
            <div className="w-[217px] h-[34px] flex items-center justify-center">
              <p className="text-white text-[24px] font-[400] leading-[140%] text-center font-[Lora] transition-all duration-300 group-hover:text-opacity-80">
                Explore more
              </p>
            </div>
            <div className="w-[50px] h-[50px] ml-[-15px] rotate-[-180deg] rounded-[30px] bg-white/10 relative flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
              <img
                src={vector}
                alt="icon"
                className="w-[22.5px] h-[17.5px] rotate-[-180deg] transition-all duration-300 group-hover:opacity-80 group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </div>
        </Link>
      </motion.div>
    </section>






      {/* section 3 */}
      {/*  full section is hidden */}
     <section 
  className="hidden w-full min-h-[900px] max-[440px]:min-h-[634px]"
  
  ref={sectionRef}
>
        <div
          className="w-full min-h-[900px] max-[440px]:min-h-[634px] bg-cover bg-center bg-no-repeat bg-blend-overlay pb-0
    max-[440px]:flex max-[440px]:flex-col
    max-[440px]:pt-[40px] max-[440px]:pr-[20px]
    max-[440px]:pb-[40px] max-[440px]:pl-[20px] max-[440px]:gap-[32px]"
          style={{ backgroundImage: `url(${sec3bg1})` }}
        >
          <div className="home-bg-img relative w-full h-[1200px] max-[440px]:min-h-[634px] max-[440px]:h-auto overflow-hidden ">
            {/* Background images */}
            <img
              src={sec3Pattern2}
              alt=""
              className="absolute w-[60px] h-[60px] top-[554px] left-[1080px] mix-blend-overlay max-[440px]:hidden"
            />
            <img
              src={sec3Pattern4}
              alt=""
              className="absolute w-[44px] h-[44px] top-[747px] left-[260px] max-[440px]:hidden"
            />
            <img
              src={sec3Pattern4}
              alt=""
              className="absolute w-[44px] h-[44px] top-[932px] left-[70%] max-[440px]:hidden"
            />

            {/* ✅ Fixed Heading Section - Desktop unchanged, mobile fixed */}
            <div className="flex flex-col items-center justify-center h-[200px] relative
                      max-[440px]:flex max-[440px]:flex-col max-[440px]:items-center max-[440px]:w-full max-[440px]:h-auto max-[440px]:gap-[20px] max-[440px]:mb-[20px]">
              <h1
                className="text-[40px] font-bold text-white text-center mb-[90px] relative top-[-80px] 
          max-[440px]:top-0 max-[440px]:text-[20px] max-[440px]:font-medium max-[440px]:leading-[120%] 
          max-[440px]:w-full max-[440px]:px-4 font-inter">
                Ultimate <span className="text-[#00D1DD]">AI Design Tool</span> for Interiors & Exteriors
              </h1>

              <p
                className="text-[22px] font-medium text-white text-center relative mb-[40px] top-[-160px] 
          max-[440px]:top-[-100px] max-[440px]:text-[16px] max-[440px]:font-normal max-[440px]:leading-[120%]
          max-[440px]:w-full max-[440px]:px-4 font-inter"
              >
                Transform Any Space Effortlessly
              </p>
            </div>

            {/* Design sections - Desktop unchanged */}
            <div
              className="w-full relative min-h-[1050px] max-[440px]:w-full max-[440px]:min-h-fit flex flex-col items-center gap-10 py-10 
        max-[440px]:pt-[40px] max-[440px]:pb-[20px]"
            >
              {/* Left */}
              <div
                className={`flex items-center justify-center gap-0  absolute left-5 mt-[-200px] 
          max-[440px]:static max-[440px]:flex-row max-[440px]:w-full max-[440px]:px-4
          max-[440px]:justify-center max-[440px]:gap-4 max-[440px]:mt-[-180px]
          transition-all duration-1000 ease-out ${animations?.leftVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-[100%] opacity-0"
                  }`}
              >
                <p
                  className="rounded-full text-[22px]  font-semibold text-black bg-white p-5 whitespace-nowrap 
            max-[440px]:text-[12px] max-[440px]:font-normal max-[440px]:p-2 max-[440px]:rounded-[33.4px]
            max-[440px]:w-auto max-[440px]:h-[28px] flex items-center justify-center"
                >
                  AI-Powered Interior Designs
                </p>
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-white
            max-[440px]:w-[145px] max-[440px]:h-[145px] max-[440px]:rounded-[108.75px] max-[440px]:border-[2.9px]"
                  src={sec3Design1}
                  alt="Interior design"
                />
              </div>

              {/* Center */}
              <div
                className={`flex items-center justify-center gap-0 absolute right-12 top-[80px] 
          max-[440px]:static max-[440px]:flex-row max-[440px]:w-full max-[440px]:px-4
          max-[440px]:justify-center max-[440px]:gap-4 max-[440px]:mt-4
          transition-all duration-1000 ease-out ${animations?.centerVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[100%] opacity-0"
                  }`}
              >
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-white 
            max-[440px]:w-[145px] max-[440px]:h-[145px] max-[440px]:rounded-[108.75px] max-[440px]:border-[2.9px]"
                  src={sec3Design2}
                  alt="Exterior design"
                />
                <p className="rounded-full text-[22px]  font-semibold text-black bg-white p-5 whitespace-nowrap 
            max-[440px]:text-[12px] max-[440px]:font-normal max-[440px]:p-2 max-[440px]:rounded-[33.4px]
            max-[440px]:w-auto max-[440px]:h-[28px] flex items-center justify-center">
                  Stunning Exterior Makeovers
                </p>
              </div>

              {/* Right */}
              <div
                className={`flex items-center justify-center gap-0 absolute left-5 top-[350px] 
          max-[440px]:static max-[440px]:flex-row max-[440px]:w-full max-[440px]:px-4
          max-[440px]:justify-center max-[440px]:gap-4 max-[440px]:mt-4
          transition-all duration-1000 ease-out ${animations?.rightVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-[100%] opacity-0"
                  }`}
              >
                <p className="rounded-full text-[22px] font-semibold text-black bg-white p-5 whitespace-nowrap 
            max-[440px]:text-[12px] max-[440px]:font-normal max-[440px]:p-2 max-[440px]:rounded-[33.4px]
            max-[440px]:w-auto max-[440px]:h-[28px] flex items-center justify-center">
                  Outdoor Spaces Reimagined
                </p>
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-white
            max-[440px]:w-[145px] max-[440px]:h-[145px] max-[440px]:rounded-[108.75px] max-[440px]:border-[2.9px]"
                  src={sec3Design3}
                  alt="Outdoor design"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Section 4 */}

      {/* <section className="relative w-full h-auto flex justify-center items-center p-[50px] bg-gradient-to-l from-[#00B0BA14] to-[#00B0BA00] 
  max-[500px]:p-5 max-[440px]:min-h-[537px]">

        <img
          src={Star}
          alt=""
          className="absolute top-[90px] left-[50px] max-[440px]:top-[30px] max-[440px]:left-[20px] max-[440px]:w-[22px] max-[440px]:h-[25px]"
        />
        <img
          src={Star}
          alt=""
          className="absolute top-[130px] left-[90px] w-[30px] max-[440px]:top-[50px] max-[440px]:left-[35px] max-[440px]:w-[13px] max-[440px]:h-[15px]"
        />

        <img
          src={Star}
          alt=""
          className="absolute bottom-[100px] right-[90px] max-[440px]:hidden"
        />
        <img
          src={Star}
          alt=""
          className="absolute bottom-[80px] right-[75px] w-[30px] max-[440px]:hidden"
        />

        <div className="max-w-[1279px] w-full h-auto bg-white flex flex-col justify-center items-center gap-10 px-5 py-10 rounded-[15px] bg-gradient-to-l from-[#00B0BA14] to-[#00B0BA00] 
    max-[440px]:w-full max-[440px]:min-h-[537px] 
    max-[440px]:px-[20px] max-[440px]:pt-[10px] max-[440px]:pb-[40px] max-[440px]:gap-[32px]">

          <p className="w-full max-w-[951px] text-[18px] font-[400] leading-[100%] text-center text-[#2a2a2a] 
      max-[440px]:text-[16px] max-[440px]:font-semibold font-inter">
            First-of-Its-Kind Features
          </p>

          <h2 className="w-full max-w-[951px] text-[32px] font-bold leading-[100%] text-center text-black 
      max-[440px]:text-[18px] max-[440px]:font-[500] font-inter">
            The <span className="text-[#009A98]">All You Need</span> AI Home Design Tool
          </h2>

          <div className="w-full max-w-[1219px] flex justify-between items-stretch flex-wrap
      max-[1200px]:justify-center max-[1200px]:gap-10
      max-[900px]:gap-8 max-[440px]:gap-x-[12px] max-[440px]:gap-y-[24px]">

            {[sec4Icon1, sec4Icon2, sec4Icon3, sec4Icon4].map((icon, i) => (
              <div key={i} className="w-[250px] flex flex-col items-center gap-5 text-center
          max-[1200px]:w-[220px] max-[900px]:w-[200px] max-[440px]:w-[calc(50%-6px)] max-[440px]:gap-[12px] ">

                <div className="w-[60px] h-[60px] border border-white shadow-md rounded-full flex items-center justify-center
            max-[440px]:w-[40px] max-[440px]:h-[40px] max-[440px]:bg-[#007B821A]">
                  <img src={icon} alt={`icon${i}`} className="w-[40px] h-[40px] max-[440px]:w-[20px] max-[440px]:h-[20px]" />
                </div>

                <h3 className="text-[18px] font-bold text-[#2a2a2a] font-inter max-[440px]:text-[14px] min-h-[48px] flex items-center justify-center">
                  {[
                    'Interior & Exterior Image Generation',
                    'Unlimited AI Ideas',
                    'High-Resolution Images',
                    'Fast Image Generation'
                  ][i]}
                </h3>

                <p className="text-[16px] font-medium font-inter max-[440px]:text-[12px] max-[440px]:leading-[120%] min-h-[66px] flex items-center justify-center">
                  {[
                    'Get design ideas for every part of your home—both indoors and outdoors.',
                    'Generate endless creative ideas to transform any space with ease.',
                    'Download crystal-clear, AI-generated images that capture every detail.',
                    'Create stunning, AI-powered images in just seconds.'
                  ][i]}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Link to="/sign-in" className="w-full max-w-[846px] flex justify-center">
              <div
                className="w-[572px] h-[54px] flex justify-center items-center gap-[8px] px-[10px] py-[1px]
        rounded-[8px] border cursor-pointer hover:bg-[#4bb0b5]
        max-[440px]:w-full max-[440px]:h-[45px] max-[440px]:rounded-[8px] max-[440px]:border max-[440px]:border-[#00B0BACC]"
                style={{
                  backgroundImage: `linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)`,
                }}
              >
                <p className="flex items-center justify-center gap-[8px] text-xl font-bold text-white
        max-[440px]:text-[14px] font-inter">
                  <img src={Magic} alt="" className="w-[30px] h-[30px] max-[440px]:w-[28px] max-[440px]:h-[28px]" />
                  Generate Design
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      


      {/* <GalleryHover
        sec5BlockImg={sec5BlockImg}
        sec5Frame1={sec5Frame1}
        sec5Frame2={sec5Frame2}
        sec5Frame3={sec5Frame3}
        sec5Frame4={sec5Frame4}
        sec5Frame5={sec5Frame5}
        sec5Frame6={sec5Frame6}
        sec5Frame7={sec5Frame7}
        sec5Frame8={sec5Frame8}
      /> */}
      {/* section 6 */}
     {/* <section
  className="w-full h-[477px] bg-[#021C1D] px-4 py-16 flex justify-center items-center 
             max-[440px]:w-[440px] 
             max-[440px]:h-[280px] 
             max-[440px]:px-[20px] 
             max-[440px]:py-[40px] 
             max-[440px]:gap-[40px] 
             max-[440px]:opacity-100"
>

        <div
          className="w-full max-w-6xl flex flex-col items-center
             max-[440px]:w-full max-[440px]:px-4 
             max-[440px]:gap-[16px]"
        >
         
          <h2
  className="text-center text-white text-[40px] md:text-3xl leading-[140%] font-semibold mb-16
           
             max-[440px]:text-[18px] 
             max-[440px]:leading-[140%] 
             max-[440px]:font-medium 
             max-[440px]:mb-4 
             max-[440px]:w-[400px] 
             max-[440px]:h-[25px] 
             max-[440px]:opacity-100"
  style={{ fontFamily: "Inter" }}
>
  Our Design Range, Trusted Worldwide
</h2>


          
  <div
  className="w-[900px] h-[100px] grid grid-cols-1 md:grid-cols-3 items-center gap-2
             max-[440px]:flex max-[440px]:flex-row 
             max-[440px]:w-[400px] 
             max-[440px]:h-[51px] 
             max-[440px]:gap-[18px] 
             max-[440px]:justify-center 
             max-[440px]:items-center 
             max-[440px]:text-center 
             max-[440px]:mx-auto"
>


           
            <div
              className="flex justify-center md:justify-start -space-x-4
      max-[440px]:w-[118px] max-[440px]:h-[40px]"
            >
              {[img1, img2, img3, img4].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Design ${idx + 1}`}
                  className="w-[88px] h-[88px] rounded-full border-2 border-white object-cover
          max-[440px]:w-[41.63px] max-[440px]:h-[41.63px]
          max-[440px]:rounded-[37.47px] max-[440px]:p-[4.16px]"
                />
              ))}
            </div>

           
            <div
              className="text-center
      max-[440px]:flex max-[440px]:flex-col max-[440px]:justify-center max-[440px]:items-center
      max-[440px]:w-[94px] max-[440px]:h-[45px]"
            >
              <p
                className="text-3xl font-bold text-[42px] mb-[10px] 
    bg-gradient-to-r from-[#007B82] to-[#FFFFFF] bg-clip-text text-transparent
    max-[440px]:w-[94px] max-[440px]:h-[25px]
    max-[440px]:text-[18px] max-[440px]:font-medium
    max-[440px]:leading-[140%] max-[440px]:text-center 
    max-[440px]:mb-[4px]"
              >
                45+
              </p>

              <p
                className="text-[white] font-medium text-[28px]
    max-[440px]:w-[94px] max-[440px]:h-[20px]
    max-[440px]:text-[14px] max-[440px]:font-normal
    max-[440px]:leading-[140%] max-[440px]:text-center"
              >
                Design Styles
              </p>

            </div>

           
            <div
              className="text-center mr-[30px] text-[white] text-[18px] leading-[140%]
      max-[440px]:w-[158px] max-[440px]:h-[51px]
      max-[440px]:text-[12px] max-[440px]:font-normal
      max-[440px]:leading-[140%] max-[440px]:text-center font-inter
      max-[440px]:flex max-[440px]:items-center"
            >
              We blend AI intelligence with diverse design trends to deliver spaces you'll love
            </div>
          </div>


        
   <div
  className="w-[900px] h-[100px] grid grid-cols-1 ml-[90px] mt-[15px] md:grid-cols-3 items-center gap-6
             max-[440px]:flex max-[440px]:flex-row 
             max-[440px]:w-[400px] 
             max-[440px]:h-[68px] 
             max-[440px]:ml-[30px]
             max-[440px]:gap-[18px] 
             max-[440px]:opacity-100
             max-[440px]:justify-center max-[440px]:items-center max-[440px]:text-center"
>



          
            <div
              className="text-[white] text-[18px] mr-[20px] leading-[140%] text-center
    max-[440px]:w-[147px] max-[440px]:h-[68px]
    max-[440px]:text-[12px] max-[440px]:font-normal
    max-[440px]:leading-[140%] max-[440px]:tracking-[0]
    max-[440px]:text-center font-inter"
            >
              <p>
                Join a growing community of users transforming their spaces with
                AI-powered design
              </p>
            </div>


            <div
              className="flex justify-center -space-x-4
    max-[440px]:w-[118px] max-[440px]:h-[40px]
    max-[440px]:flex-row"
            >
              {[img5, user6, user7, user8].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`User ${idx + 1}`}
                  className="w-[88px] h-[88px] rounded-full border-2 border-white object-cover
      max-[440px]:w-[40.56px] max-[440px]:h-[40.56px]
      max-[440px]:rounded-[36.5px] max-[440px]:p-[4.06px]
      max-[440px]:mr-[4.06px]"
                />
              ))}

            </div>

           
            <div className="text-center mr-[40px] 
  max-[440px]:flex max-[440px]:flex-col 
  max-[440px]:w-[89px] max-[440px]:h-auto">

              <p
                className=" font-bold text-[42px] bg-gradient-to-r from-[#007B82] to-[#FFFFFF] bg-clip-text text-transparent 
    max-[440px]:w-[89px] max-[440px]:h-[25px] 
    max-[440px]:text-[18px] max-[440px]:font-medium 
    max-[440px]:leading-[140%] max-[440px]:text-center flex items-center justify-center"
              >
                100+
              </p>

              <p
                className="text-[white] font-medium text-center text-[28px] 
    max-[440px]:w-[89px] max-[440px]:h-[20px] 
    max-[440px]:text-[14px] max-[440px]:font-normal 
    max-[440px]:leading-[140%] max-[440px]:text-center flex items-center justify-center"
              >
                Happy Users
              </p>

            </div>
          </div>
        </div>
      </section> */}


     

      <StepsHome />

      {/* Section 7 */}

      <BasicForm />
      
      {/* new figma section6 */}
  <section className="w-full h-[713px] opacity-100 relative overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src={BgVideo2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

        <div
          className="absolute w-[1277px] h-[481px] top-[135px] left-[96px] opacity-100 flex gap-[46px]"
          style={{ transform: "rotate(0deg)" }}
        >
        
        {/* left div */}
        <div
  className="w-[936px] h-[481px] flex flex-col justify-between opacity-100"
  style={{ transform: "rotate(0deg)" }}
>
  {/* Top Section */}
  <div className="w-[936px] h-[232px] flex flex-col gap-[42px] opacity-100">
    {/* Heading */}
    <div className="w-[936px] h-[82px] flex items-center">
      <h2
        className="w-[599px] h-[82px] text-[32px] leading-[100%] font-normal text-white"
        style={{ fontFamily: 'Lora' }}
      >
        Elevate your home with artfully crafted, AI-enhanced design.
      </h2>
    </div>

    {/* Paragraph */}
    <p
      className="w-[830px] h-[108px] text-[18px] leading-[150%] font-normal text-white"
      style={{ fontFamily: 'Poppins' }}
    >
      Experience interior design that speaks for itself. Our tailored AI-powered solutions have
      consistently delighted clients around the world bringing unique styles, functional layouts,
      and beautiful results to every space. From modern minimalism to timeless elegance, we deliver
      designs that truly feel like home.
    </p>
  </div>

  {/* Bottom Section */}
  <div className="relative w-[424px] h-[199px] rounded-[20px]" style={{ background: "#8A38F514" }}>
              {/* Gradient border overlay */}
              <div
                className="absolute inset-0 rounded-[20px] pointer-events-none"
                style={{
                  border: "1px solid transparent",
                  background: "linear-gradient(283.03deg, #8A38F5 -4.05%, #000000 106.3%) border-box",
                  WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                  borderRadius: "20px"
                }}
              />

              {/* Your existing content container */}
              <div
                className="w-[412px] h-[186px] rounded-[20px] flex flex-col gap-[18px] mt-[7px] ml-[7px] pt-[24px] pr-[16px] pb-[24px] pl-[20px]"
                style={{
  backgroundColor: "#2E0854CC" // CC ≈ 80% opacity
}}
              >
                <h3
                  className="w-[376px] h-[24px] text-white text-[20px] font-medium leading-[120%]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Discover Smarter Design Possibilities
                </h3>
                <p
                  className="w-[376px] h-[34px] text-white text-[14px] font-normal leading-[120%]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Explore how our AI transforms your spaces fast, stylish, and effortless
                </p>

                <div className="w-[245px] h-[44px] flex items-center justify-start">
                  <Link to="/sign-in">
                    <div
                      className="w-[222px] h-[44px] flex items-center gap-[10px] border border-solid rounded-[30px] px-[30px] py-[10px]"
                      style={{
                        background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)"
                      }}
                    >
                      <div
                        className="w-[128px] h-[19px] text-[16px] font-medium leading-[100%] text-white"
                        style={{ fontFamily: 'Inter' }}
                      >
                        Explore Features
                      </div>
                      <div className="w-[24px] h-[24px] p-[2.25px] box-border">
                        <img
                          src={Frame}
                          alt="icon"
                          className="w-[19.5px] h-[19.5px]"
                          style={{
                            filter: "brightness(0) saturate(100%) invert(92%) sepia(56%) saturate(763%) hue-rotate(239deg) brightness(97%) contrast(102%)",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

         {/* right div */}
          <div
            ref={ref4}
            className="w-full h-[481px] opacity-100 flex flex-col gap-[105px]"
            style={{ transform: "rotate(0deg)" }}
          >
            <div
              className="w-full h-[481px] opacity-100 flex flex-col gap-[105px]"
              style={{ transform: "rotate(0deg)" }}
            >
              {/* 45+ div */}
              <div className="w-[280px] h-[181px] border border-white opacity-100">
                <div className="w-[224px] h-[149px] relative left-[15px] opacity-100 flex flex-col items-center justify-between">
                  {/* Top Text */}
                  <div className="w-[224px] h-[115px] flex items-center justify-center">
                    <p
                      className="text-[82px] font-medium leading-[140%] text-center"
                      style={{
                        fontFamily: 'Poppins',
                        background: "linear-gradient(104.83deg, #8A38F5 28.54%, #C22CA2 84.84%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      <span ref={counter45Ref}>0+</span>
                    </p>
                  </div>
                  {/* Bottom Text */}
                  <div className="w-[224px] h-[34px] flex items-center justify-center">
                    <p
                      className="text-[24px] font-normal leading-[140%] text-white text-center"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Design Styles
                    </p>
                  </div>
                </div>
                <div className="w-[269px] h-[52px] border border-white opacity-100">
                  <img src={Line} alt="Sideline" className="w-full h-full object-contain" />
                </div>
              </div>
              {/* 100+ div */}
              <div className="w-[295px] h-[175px] border border-white opacity-100">
                <div className="w-[239px] h-[149px] relative opacity-100 flex flex-col items-center justify-between">

                  {/* Top Text */}
                  <div className="w-[239px] h-[115px] flex items-center justify-center">
                    <p
                      className="text-[82px] font-medium leading-[140%] text-center"
                      style={{
                        fontFamily: 'Poppins',
                        background: "linear-gradient(104.83deg, #8A38F5 28.54%, #C22CA2 84.84%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      <span ref={counter100Ref}>0+</span>
                    </p>
                  </div>

                  {/* Bottom Text */}
                  <div className="w-[239px] h-[34px] flex items-center justify-center">
                    <p
                      className="text-[24px] font-normal leading-[140%] text-white text-center"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Happy Users
                    </p>
                  </div>
                </div>

                <div className="w-[269px] h-[52px] border border-white opacity-100">
                  <img src={Line} alt="Sideline" className="w-full h-full object-contain" />
                </div>

              </div>

            </div>
          </div>




        </div>


      </section>


      {/* <section className="w-full min-h-[792px] py-16 px-6 flex flex-col items-center bg-white text-gray-800
  max-[440px]:w-full max-[440px]:min-h-0 max-[440px]:py-[40px] max-[440px]:px-[20px] max-[440px]:gap-[10px]">
      
        <div className="text-center mb-12 max-[440px]:hidden">
          <h2 className="text-[32px] font-semibold mb-[10px] leading-[140%]">
            StacklyAI is for Homeowners and Professionals
          </h2>
          <p className="text-[20px] font-semibold leading-[140%] text-[black]">
            Transform in <span className="text-[#007b82]">Seconds</span>, Not <span className="text-[#007b82]">Days</span>
          </p>
        </div>

      
        <div className="text-center mb-1 hidden max-[440px]:flex max-[440px]:flex-col max-[440px]:w-[400px] max-[440px]:min-h-[95px] max-[440px]:gap-[20px] max-[440px]:mx-auto">
          <h2 className="max-[440px]:w-[400px] max-[440px]:h-[56px] max-[440px]:font-semibold max-[440px]:text-[20px] max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:text-center font-inter">
            StacklyAI is for <span className="text-[#007b82]">Homeowners</span> and <span className="text-[#007b82]">Professionals</span>
          </h2>
          <p className="max-[440px]:w-[400px] max-[440px]:h-[19px] max-[440px]:font-normal max-[440px]:text-[16px] max-[440px]:leading-[100%] max-[440px]:tracking-[0] max-[440px]:text-center text-[black] font-inter">
            Transform in <span className="text-[#007b82]">Seconds</span>, Not Days
          </p>
        </div>

       
        <div className="flex justify-center gap-12 w-full max-w-6xl
    max-[440px]:flex max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:min-h-[307px] 
    max-[440px]:px-[8px] max-[440px]:gap-[24px]">

         
          <div className="flex flex-col items-center text-center w-full max-w-[522px] max-[440px]:hidden">
            <h3 className="text-[24px] font-semibold mb-8 w-full text-left leading-[140%] font-inter">
              <span className="text-[#007B82]">01</span> For Personal Use
            </h3>
            <img
              src={sec13Img2}
              alt="Personal Use"
              className="w-full h-[371px] rounded-lg shadow-md mb-6 object-cover"
            />
            <p className="font-normal text-[18px] leading-[140%] max-w-[522px] w-full font-inter">
              Explore your unique style and create endless realistic designs for
              both your home's interior and exterior spaces.
            </p>
          </div>

          <div className="flex-col items-center text-center hidden max-[440px]:flex max-[440px]:w-[180px] max-[440px]:h-[307px] max-[440px]:gap-[16px]">
            <h3 className="text-[38px] font-semibold leading-[140%] text-center mb-0
        max-[440px]:text-[14px] max-[440px]:w-[180px] max-[440px]:h-[27px]
        max-[440px]:leading-[140%] max-[440px]:tracking-[0]
        max-[440px]:font-semibold max-[440px]:mx-auto max-[440px]:whitespace-nowrap font-inter">
              <span className="text-[#007B82]">01</span> For Personal Use
            </h3>
            <img
              src={sec13Img2}
              alt="Personal Use"
              className="rounded-lg shadow-md w-full object-cover
        max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[7.41px] max-[440px]:mx-auto"
            />
            <p className="font-normal text-[19px] leading-[200%] max-w-sm text-center
        max-[440px]:w-[180px] max-[440px]:h-[68px] max-[440px]:text-[12px]
        max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:mx-auto font-inter">
              Explore your unique style and create endless realistic designs for
              both your home's interior and exterior spaces.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-[522px] max-[440px]:hidden">
            <h3 className="text-[24px] font-semibold mb-8 w-full text-left leading-[140%] font-inter">
              <span className="text-[#007B82]">02</span> For Professional Use
            </h3>
            <img
              src={sec13Img1}
              alt="Professional Use"
              className="w-full h-[371px] rounded-lg shadow-md mb-6 object-cover"
            />
            <p className="font-normal text-[18px] leading-[140%] max-w-[522px] w-full font-inter">
              Impress clients instantly by showcasing stunning design
              transformations while saving time on every project.
            </p>
          </div>

          <div className="flex-col items-center text-center hidden max-[440px]:flex max-[440px]:w-[180px] max-[440px]:h-[307px] max-[440px]:gap-[16px]">
            <h3 className="text-[38px] font-semibold leading-[140%] text-center mb-0
        max-[440px]:text-[14px] max-[440px]:w-[180px] max-[440px]:h-[27px]
        max-[440px]:leading-[140%] max-[440px]:tracking-[0]
        max-[440px]:font-semibold max-[440px]:mx-auto max-[440px]:whitespace-nowrap font-inter">
              <span className="text-[#007B82]">02</span> For Professional Use
            </h3>
            <img
              src={sec13Img1}
              alt="Professional Use"
              className="rounded-lg shadow-md w-full object-cover
        max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[7.41px] max-[440px]:mx-auto"
            />
            <p className="font-normal text-[19px] leading-[200%] max-w-sm text-center
        max-[440px]:w-[180px] max-[440px]:h-[68px] max-[440px]:text-[12px]
        max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:mx-auto font-inter">
              Impress clients instantly by showcasing stunning design
              transformations while saving time on every project.
            </p>
          </div>
        </div>
      </section>

      
      <section className="relative w-full min-h-[612px] flex justify-center items-center px-6 py-16
  bg-center bg-cover bg-no-repeat 
  max-sm:min-h-[330px] max-sm:px-5 max-sm:py-10"
        style={{ backgroundImage: "url('/home/sec8/Bg.png')" }}>

       
        <div className="absolute inset-0 bg-[#000000cc] z-0"></div>

       
        <div
          className="relative z-10 w-full max-w-[836px] h-[264px] flex flex-col justify-center items-center gap-6 px-[30px] py-10 rounded-[20px] max-sm:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(2px)',
            border: '1px solid transparent',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
       
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{
              background: 'linear-gradient(276.41deg, #FFFFFF -0.87%, #999999 97.94%)',
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          ></div>

          <h1 className="text-[32px] font-semibold leading-[140%] text-center text-white font-inter max-md:text-[28px]">
            Sign Up Quickly! Get <span className="text-[#00d1dd]">25%</span> Offer
          </h1>

          <div className="flex justify-between items-center w-full max-w-[405px] gap-4 max-md:flex-col max-md:gap-3">
            <p className="text-[#FFFFFF] text-[18px] font-medium leading-[140%] max-md:text-[16px]"><span className="w-[8px] h-[8px] rounded-full bg-[#00B0BA] mr-3 inline-block"></span>30 free outputs</p>
            <p className="text-[#FFFFFF] text-[18px] font-medium leading-[140%] max-md:text-[16px]"><span className="w-[8px] h-[8px] rounded-full bg-[#00B0BA] mr-3 inline-block"></span>No credit card required</p>
          </div>

          <Link to="/sign-up" className="w-full max-w-[406px]">
            <div
              className="w-full h-[54px] flex justify-center items-center rounded-xl text-[18px] font-semibold text-[#FFFFFF] max-md:h-[48px] max-md:text-[16px]"
              style={{
                backgroundImage: "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
              }}
            >
              <span className="mr-[6px]">Start Free Trial</span>
              <img
                src={Frame}
                alt="upload"
                className="w-[24px] h-[24px] object-contain"
              />
            </div>
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-[371px] min-h-[250px] bg-[#00000099] backdrop-blur-[2px] flex flex-col justify-center items-center gap-3 rounded-[12px] p-6 sm:hidden
  "style={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(2px)',
            border: '1px solid transparent',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
          <h1 className="text-[18px] font-semibold leading-[140%] text-center text-white font-inter">
            Sign Up Quickly! Get <span className="text-[#00d1dd]">25%</span> Offer
          </h1>
          <ul className="flex flex-col gap-3 w-full items-center">
            <li className="text-white text-[13px] font-[500] leading-[140%] flex items-center before:content-[''] before:inline-block before:w-[6px] before:h-[6px] before:bg-[#007B82] before:rounded-full before:mr-2">
              30 free outputs
            </li>
            <li className="text-white text-[13px] font-[500] leading-[140%] flex items-center before:content-[''] before:inline-block before:w-[6px] before:h-[6px] before:bg-[#007B82] before:rounded-full before:mr-2">
              No credit card required
            </li>
          </ul>
          <Link to="/sign-up" className="w-full max-w-[258px]">
            <div className="w-full h-[45px] flex justify-center items-center rounded-[8px] border border-white text-[16px] font-[700] text-white px-5"
              style={{
                background: "linear-gradient(to right, #00B0BA 0%, #000000 50%, #007B82 100%)"
              }}>
              Signup
            </div>
          </Link>
        </div>
      </section> */}

      {/* Section 9 */}

      {/* <section
        className="max-w-[100vw] flex flex-col justify-center items-center gap-[50px] p-5 py-32
             max-[440px]:flex-col max-[440px]:w-[440px] max-[440px]:h-auto 
             max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px]
             max-[440px]:gap-[45px]"
      >
        <h1
          className="max-w-[1320px] w-full min-w-[134px] md:text-5xl text-3xl font-semibold leading-[140%] mb-[80px] text-center text-black
               max-[440px]:w-[392px] max-[440px]:h-[56px] max-[440px]:text-[20px] max-[440px]:leading-[140%] 
               max-[440px]:font-[600] max-[440px]:text-center max-[440px]:mx-auto"
        >
          Plan Your Future{" "}
          <span className="text-[#007B82]">Interiors, Exteriors, </span> and{" "}
          <span>Outdoor Spaces </span>with{" "}
          <span className="text-[rgb(5,128,128)]">Stackly</span>
        </h1>

        <img
          className="max-w-[1115px] h-auto w-full 
               max-[440px]:w-[380.3px] max-[440px]:h-[323px]"
          src={sec9Frame}
          alt="section 9 frame image"
        />
      </section> */}


      {/* Section 10 */}

      {/* <section className="max-w-[100vw] min-h-[926px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className="max-w-[1320px] min-h-[67px] w-full text-[48px] font-semibold leading-[140%] text-center text-black">
          Compare Design, Find Your{" "}
          <span className="text-[#007B82]">Perfect style</span>
        </h1>
        <p className="max-w-[736px] w-full min-h-[72px] text-lg font-semibold leading-[200%] text-center text-[#B0B0B0]">
          Explore and compare multiple interior, exterior, and outdoor designs
          to discover the one that matches your unique taste.
        </p>
        <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-2.5 p-5">
          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img1}
              alt="image1"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
              <span className="text-[#007B82]">
                "Your style is sleek and sophisticated.{" "}
              </span>
              This brown-themed office design blends modern functionality with
              warm, earthy tones—perfect for a productive and stylish
              workspace."
            </p>
          </div>

          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img2}
              alt="image2"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
              <span className="text-[#007B82]">
                "Embrace comfort with a touch of elegance.
              </span>{" "}
              This brown-themed lounge offers a cozy yet professional
              atmosphere, balancing work and relaxation effortlessly."
            </p>
          </div>
        </div>
      </section> */}
      {/* <section
        className="w-[1440px] h-[1000px] flex flex-col justify-center items-center gap-[18px] px-6
    max-[440px]:w-[440px] max-[440px]:h-[auto] max-[440px]:min-h-[521px]
    max-[440px]:pt-[20px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px] max-[440px]:gap-[18px] overflow-hidden"
      >
        <h1
          className="max-w-[1320px] min-h-[67px] mt-[-30px] w-full text-[32px] font-semibold leading-[140%] text-center text-black
      max-[440px]:w-[344px] max-[440px]:h-[56px] max-[440px]:text-[25px]
      max-[440px]:font-[600] max-[440px]:leading-[140%] max-[440px]:text-center max-[440px]:mx-auto"
        >
          Compare Design, Find Your{" "}
          <span className="text-[#007B82]">Perfect style</span>
        </h1>

        <p
          className="max-w-[1280px] w-full min-h-[72px] text-[20px] font-medium leading-[150%] text-center
      max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:text-[14px]
      max-[440px]:leading-[140%] max-[440px]:font-[400] max-[440px]:text-center max-[440px]:mx-auto"
        >
          Explore and compare multiple interior, exterior, and outdoor designs
          to discover the one that matches your unique taste.
        </p>

        <div
          className="flex justify-center items-center gap-5 p-5 flex-wrap
      max-[440px]:flex-nowrap max-[440px]:w-[400px] max-[440px]:gap-[10px] max-[440px]:overflow-x-auto max-[440px]:overflow-y-hidden max-[440px]:scrollbar-none"
        >
          {[
            {
              img: sec10Img1,
              text: `"Your style is sleek and sophisticated. This brown-themed office design blends modern functionality with warm, earthy tones—perfect for a productive and stylish workspace."`,
            },
            {
              img: sec10Img2,
              text: `"Embrace comfort with a touch of elegance. This brown-themed lounge offers a cozy yet professional atmosphere, balancing work and relaxation effortlessly."`,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group max-w-[577px] w-full bg-white shadow-[0_0_4px_0_#00000040] rounded-[10px] overflow-hidden transition-all duration-500
          max-[440px]:w-[190px] max-[440px]:h-[300px] max-[440px]:flex max-[440px]:flex-col
          max-[440px]:rounded-[5.7px] max-[440px]:border max-[440px]:border-[0.57px]
          max-[440px]:px-[10px] max-[440px]:py-[10px] max-[440px]:gap-[10px] shrink-0"
            >
              // Image 
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={`image${index}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              //Text
              <div
                className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 
            transition-all duration-500 ease-in-out p-5 
            max-[440px]:max-h-full max-[440px]:opacity-100 max-[440px]:p-0"
              >
                <p className="text-center text-[18px] font-semibold leading-[140%] text-black max-[440px]:text-[12px] max-[440px]:px-[2px]">
                  <span className="text-[#007B82]">
                    {item.text.split(".")[0]}.
                  </span>
                  {item.text.slice(item.text.indexOf(".") + 1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

{/* <section
  className="w-full max-w-[1440px] h-[867px] flex flex-col justify-center items-center gap-[18px] px-6 overflow-hidden mx-auto
    max-[440px]:w-[440px] max-[440px]:h-auto max-[440px]:min-h-[521px]
    max-[440px]:pt-[20px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px] max-[440px]:gap-[18px]"
>
 
  <div className="flex flex-col items-center gap-[18px] w-full">
    <h1
      className="max-w-[1320px] w-full text-[32px] font-semibold leading-[140%] text-center text-black
        max-[440px]:w-[344px] max-[440px]:text-[25px]
        max-[440px]:font-[600] max-[440px]:leading-[140%] max-[440px]:text-center mx-auto"
    >
      Compare Design, Find Your{" "}
      <span className="text-[#007B82]">Perfect style</span>
    </h1>

    <p
      className="max-w-[1280px] w-full text-[20px] font-medium leading-[150%] text-center text-[#333]
        max-[440px]:w-[400px] max-[440px]:text-[14px]
        max-[440px]:leading-[140%] max-[440px]:font-[400] max-[440px]:text-center mx-auto"
    >
      Explore and compare multiple interior, exterior, and outdoor designs
      to discover the one that matches your unique taste.
    </p>
  </div>

  <div
    className="flex justify-center items-center gap-5 p-5 flex-wrap w-full
      max-[440px]:flex-nowrap max-[440px]:w-[400px] max-[440px]:gap-[10px] max-[440px]:overflow-x-auto max-[440px]:scrollbar-none"
  >
    {[
      {
        img: sec10Img1,
        text: `"Your style is sleek and sophisticated. This brown-themed office design blends modern functionality with warm, earthy tones—perfect for a productive and stylish workspace."`,
      },
      {
        img: sec10Img2,
        text: `"Embrace comfort with a touch of elegance. This brown-themed lounge offers a cozy yet professional atmosphere, balancing work and relaxation effortlessly."`,
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group max-w-[577px] w-full bg-white shadow-[0_0_4px_0_#00000040] rounded-[10px] overflow-hidden transition-all duration-500
          max-[440px]:w-[190px] max-[440px]:h-[300px] max-[440px]:flex max-[440px]:flex-col
          max-[440px]:rounded-[5.7px] max-[440px]:border max-[440px]:border-[0.57px]
          max-[440px]:px-[10px] max-[440px]:py-[10px] max-[440px]:gap-[10px] shrink-0"
      >
       
        <div className="overflow-hidden h-[calc(100%-100px)]">
          <img
            src={item.img}
            alt={`image${index}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

       
        <div
          className="h-[100px] p-5 transition-all duration-500 ease-in-out transform translate-y-0
            max-[440px]:p-0 max-[440px]:h-auto"
        >
          <p className="text-center text-[18px] font-semibold leading-[140%] text-black max-[440px]:text-[12px] max-[440px]:px-[2px]">
            <span className="text-[#007B82]">
              {item.text.split(".")[0]}.
            </span>
            {item.text.slice(item.text.indexOf(".") + 1)}
          </p>
        </div>
      </div>
    ))}
  </div>
</section> */}

{/* <section
  className="w-full max-w-[1440px] h-[867px] flex flex-col justify-center items-center gap-[18px] px-6 overflow-hidden mx-auto
    max-[440px]:w-full max-[440px]:h-auto max-[440px]:min-h-[521px]
    max-[440px]:pt-[20px] max-[440px]:px-[20px] max-[440px]:pb-[40px] max-[440px]:gap-[18px]"
>
  //Heading & Subheading 
  <div className="flex flex-col items-center gap-[18px] w-full">
    <h1 className="max-w-[1320px] w-full text-[32px] font-semibold leading-[140%] text-center text-black
      max-[440px]:w-[344px] max-[440px]:text-[25px]
      max-[440px]:font-[600] max-[440px]:leading-[140%] max-[440px]:text-center mx-auto">
      Compare Design, Find Your <span className="text-[#007B82]">Perfect style</span>
    </h1>

    <p className="max-w-[1280px] w-full text-[20px] font-medium leading-[150%] text-center text-[#333]
      max-[440px]:w-[400px] max-[440px]:text-[14px]
      max-[440px]:leading-[140%] max-[440px]:font-[400] max-[440px]:text-center mx-auto">
      Explore and compare multiple interior, exterior, and outdoor designs
      to discover the one that matches your unique taste.
    </p>
  </div>

  //Card List
  <div
    className="flex justify-center items-center gap-5 p-5 w-full flex-wrap
      max-[440px]:flex-nowrap max-[440px]:gap-[10px] max-[440px]:w-full max-[440px]:overflow-hidden"
  >
    {[{
      img: sec10Img1,
      text: `"Your style is sleek and sophisticated. This brown-themed office design blends modern functionality with warm, earthy tones—perfect for a productive and stylish workspace."`,
    }, {
      img: sec10Img2,
      text: `"Embrace comfort with a touch of elegance. This brown-themed lounge offers a cozy yet professional atmosphere, balancing work and relaxation effortlessly."`,
    }].map((item, index) => (
      <div
        key={index}
        className="group max-w-[577px] w-full bg-white shadow-[0_0_4px_0_#00000040] rounded-[10px] overflow-hidden transition-all duration-500
          max-[440px]:w-[50%] max-[440px]:h-[300px] max-[440px]:flex max-[440px]:flex-col
          max-[440px]:rounded-[5.7px] max-[440px]:border max-[440px]:border-[0.57px]
          max-[440px]:px-[6px] max-[440px]:py-[10px] max-[440px]:gap-[10px] shrink-0"
      >
       // Image 
        <div className="overflow-hidden h-[calc(100%-100px)] max-[440px]:h-[150px]">
          <img
            src={item.img}
            alt={`image${index}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        // Text 
        <div className="h-[100px] p-5 transition-all duration-500 ease-in-out transform translate-y-0
          max-[440px]:p-[6px] max-[440px]:h-auto">
          <p className="text-center text-[18px] font-semibold leading-[140%] text-black max-[440px]:text-[12px] max-[440px]:px-[2px]">
            <span className="text-[#007B82]">{item.text.split(".")[0]}.</span>
            {item.text.slice(item.text.indexOf(".") + 1)}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
 */}


      {/* <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-2.5 p-5">
          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img1}
              alt="image1"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
              <span className="text-[#007B82]">
                "Your style is sleek and sophisticated.{" "}
              </span>
              This brown-themed office design blends modern functionality with
              warm, earthy tones—perfect for a productive and stylish
              workspace."
            </p>
          </div>

          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img2}
              alt="image2"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-semibold leading-[140%] text-black">
              <span className="text-[#007B82]">
                "Embrace comfort with a touch of elegance.
              </span>{" "}
              This brown-themed lounge offers a cozy yet professional
              atmosphere, balancing work and relaxation effortlessly."
            </p>
          </div>
        </div> */}
      {/* <section
        className="w-full min-h-[200px] py-10 px-4 bg-[#007B8212] flex flex-col md:flex-row justify-center items-center flex-wrap gap-6
             max-[440px]:flex-col max-[440px]:w-[440px] max-[440px]:h-auto max-[440px]:py-[20px] max-[440px]:px-[20px] max-[440px]:gap-[20px]"
      >
        <h2
          className="text-black text-center md:text-left text-2xl md:text-3xl font-medium max-w-[900px]
               max-[440px]:w-[400px] max-[440px]:h-[20px] max-[440px]:text-[14px]
               max-[440px]:leading-[140%] max-[440px]:font-[500] max-[440px]:text-center"
        >
          Get started with 10 free outputs – No credit card needed!
        </h2>

        <Link
          to="/Sign-in"
          className="max-w-[406px] min-h-[60px] rounded-[5px] text-white font-bold px-16 py-5 rounded-md 
               flex justify-center items-center 
             max-[440px]:w-[170px] max-[440px]:h-[45px] max-[440px]:rounded-[4px] 
             max-[440px]:py-0 max-[440px]:px-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
          }}
        >
          <span
            className="max-[440px]:w-[116px] max-[440px]:h-[20px] max-[440px]:text-[16px] 
               max-[440px]:font-[700] max-[440px]:leading-[19.7px] max-[440px]:text-center"
          >
            Start Free Trial
          </span>
        </Link>
      </section> */}

      {/* {section:11} */}

      {/* <ImageSlider /> */}

      {/* Section: Community Showcase */}

      {/* {section-12} */}


      {/* {section-13} */}
      {/* <section className="w-full py-16 px-4 flex flex-col justify-center items-center mt-20 max-[440px]:hidden">
        <h2 className="text-[48px] md:text-5xl font-semibold text-center text-gray-800 leading-[140%]">
          Discover Our <span className="text-[#007B82]">Advanced AI Interior Tools</span> and Redesign
        </h2>
        <h2 className="text-[48px] md:text-5xl font-semibold text-center text-black mt-3">
          Your Space Instantly
        </h2>
      </section> */}


      {/* {section-14} */}

      {/* <DraggableImageSection /> */}

      {/* {section-15} */}



      {/* {section-16} */}

      {/* <section
        className="relative w-full bg-cover bg-center bg-no-repeat
    max-[440px]:w-[440px] 
    max-[440px]:h-[573px] 
    max-[440px]:object-cover"
        style={{ backgroundImage: "url('./src/assets/home/sec14/bg1.jpg')" }}
      >
        <div
          className="py-20 px-6 bg-[#00000096]
      max-[440px]:w-[440px] 
      max-[440px]:h-[573px]"
        >
          <div className="flex flex-col items-center text-center text-white relative max-[440px]:top-[-24px]">
            <h2
              className="text-[32px] md:text-5xl leading-[140%] text-center font-bold mb-4 
          max-[440px]:flex 
          max-[440px]:flex-row 
          max-[440px]:items-center 
          max-[440px]:justify-center 
          max-[440px]:gap-[14px] 
          max-[440px]:w-[400px] 
          max-[440px]:h-[22px] 
          max-[440px]:text-[16px] 
          max-[440px]:leading-[140%] 
          max-[440px]:font-semibold 
          max-[440px]:tracking-[0px] 
          max-[440px]:font-['Inter']"
            >
              <span
                className="text-6xl font-bold 
            max-[440px]:text-[16px] 
            max-[440px]:w-[14px] 
            max-[440px]:h-[10.94px] 
            max-[440px]:relative 
            max-[440px]:top-[1.31px]"
              >
                “
              </span>

              <span className="max-[440px]:w-[149px] max-[440px]:h-[22px] max-[440px]:text-center">
                Meet Our Members
              </span>

              <span
                className="text-6xl font-bold 
            max-[440px]:text-[16px] 
            max-[440px]:w-[14px] 
            max-[440px]:h-[14px] 
            max-[440px]:inline-block 
            max-[440px]:transform 
            max-[440px]:-rotate-180"
              >
                ”
              </span>
            </h2>

           
            <div className="hidden md:flex items-center gap-4 mb-8">
              <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#FFFFFF1F] p-3 shadow-lg">
                <img src={sec14Img2} alt="logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-[24px] text-gray-300 font-medium font-['Inter'] leading-[140%]">
                You're in good company with{" "}
                <span className="text-cyan-400 font-semibold">Stackly AI</span>, trusted by people in all 195 countries.
              </p>
            </div>

         
            <div className="md:hidden mb-16">
              <p
                className="text-[14px] leading-[140%] font-medium text-center text-gray-300 mt-1 w-[400px] mx-auto"
              >
                You're in good company with{" "}
                <span className="text-cyan-400 font-semibold">Stackly AI</span>,<br />
                trusted by people in all 195 countries.
              </p>
              <div
                className="bg-[#FFFFFF1F] rounded-full p-8 mt-3 shadow-lg flex items-center justify-center
            max-[440px]:w-[52px]
            max-[440px]:h-[52px]
            max-[440px]:rounded-[47.27px]
            max-[440px]:p-0 mx-auto"
              >
                <img
                  src={sec14Img2}
                  alt="Center Icon"
                  className="w-12 h-12
              max-[440px]:w-[29.91px]
              max-[440px]:h-[27.18px]"
                />
              </div>
            </div>


            <div className="w-[100vw] flex justify-center items-center flex-wrap gap-10 max-[440px]:hidden">

             
              <div className="max-w-[413px] min-h-[242px] bg-white rounded-[12px] p-10 flex flex-col items-center">

                <div className="min-w-[413px] h-full flex justify-around items-center">
                  <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                    <h3 className="text-black text-[18px] font-bold leading-[140%]">
                      Guru Ragav Auditor
                    </h3>
                    <p className="text-[#b0b0b0] font-[400] text-[16px] leading-[140%]">
                      Auditor
                    </p>
                  </div>
                  <img src={sec14Img3} alt="Member 1" className="w-20 h-20 rounded-full object-cover" />
                </div>

                <p className="text-[#2A2A2A] font-[400] text-[16px] leading-[140%] mt-10">
                  “I use Stackly AI to help my clients visualize how their backyard could look like if they hire me for the job. It works flawlessly!”
                </p>
              </div>

              <div className="max-w-[413px] min-h-[286px] bg-white rounded-[12px] p-10 flex flex-col items-center">

                <div className="min-w-[413px] h-full flex justify-around items-center">
                  <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                    <h3 className="text-black text-[18px] font-bold leading-[140%]">
                      Cristian Rama
                    </h3>
                    <p className="text-[#b0b0b0] font-[400] text-[16px] leading-[140%]">
                      Architect
                    </p>
                  </div>
                  <img src={sec14Img4} alt="Member 2" className="w-20 h-20 rounded-full object-cover" />
                </div>

                <p className="text-[#2A2A2A] font-[400] text-[16px] leading-[140%] mt-10">
                  “I needed to replace my living room furniture so I generated a few design ideas with Stackly AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology!”
                </p>
              </div>

           
              <div className="max-w-[413px] min-h-[286px] bg-white rounded-[12px] p-10 flex flex-col items-center">

                <div className="min-w-[413px] h-full flex justify-around items-center">
                  <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                    <h3 className="text-black text-[18px] font-bold leading-[140%]">
                      Ram Krishnan
                    </h3>
                    <p className="text-[#b0b0b0] font-[400] text-[16px] leading-[140%]">
                      Architect
                    </p>
                  </div>
                  <img src={sec14Img5} alt="Member 3" className="w-20 h-20 rounded-full object-cover" />
                </div>

                <p className="text-[#2A2A2A] font-[400] text-[16px] leading-[140%] mt-10">
                  “I run a real estate agency and a lot of my clients send me pictures with their empty properties. I use Stackly AI to furnish them automatically. It has become an indispensable tool for us.”
                </p>
              </div>

            </div> */}


            {/* MOBILE < */}


{/*         
            <div
              className="hidden max-[440px]:flex flex-col items-center w-full px-4 pb-8 max-[440px]:-mt-10"
              style={{
                overflowX: 'hidden',
                touchAction: 'pan-y',
                userSelect: 'none',
              }}
            >

              <div className="relative overflow-hidden w-[349px] mx-auto">
             
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
                >
                  {mobileCards.map((card) => (
                    <div
                      key={card.id}
                      className="min-w-[349px] h-[210px] bg-white rounded-[8px] p-4 flex flex-col gap-[20px]"
                    >
                      <div className="w-full flex justify-between items-center">
                        <div className="flex flex-col gap-[8px] items-start">
                          <h3 className="text-black h-[22px] font-['Inter'] font-[500] text-[16px] leading-[140%] tracking-[0]">
                            {card.name}
                          </h3>

                          <p className="text-[#b0b0b0] h-[20px] font-['Inter'] font-[400] text-[14px] leading-[140%] tracking-[0]">
                            {card.role}
                          </p>
                        </div>
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-[48px] h-[48px] rounded-full object-cover"
                        />

                      </div>
                      <p className="text-[#2A2A2A] w-[317px] h-[60px] font-['Inter'] font-[400] text-[14px] leading-[140%] tracking-[0]">
                        "{card.quote}"
                      </p>

                    </div>
                  ))}
                </div>

               
                <div className="flex items-center justify-center gap-4 mt-6 w-full">
                 
                  <button
                    onClick={prevCard}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#2A2A2A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                 
                  <div className="flex gap-2">
                    {mobileCards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCardIndex(index)}
                        className={`w-[12px] h-[12px] rounded-full transition-colors ${index === currentCardIndex ? 'bg-gray-300' : 'bg-gray-800'
                          }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                 
                  <button
                    onClick={nextCard}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#2A2A2A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      
      

      {/* {section faq} */}

      {/* {section-15} */}

      <FAQ faqs={faqs} />
<section
  className="relative w-full max-w-full h-[316px] opacity-100 mx-auto bg-cover bg-center"
  style={{ backgroundImage: `url(${Bfooter})` }}
>
<div className="absolute top-[63px] left-1/2 transform -translate-x-1/2 w-[737px] h-[190px] flex flex-col items-center gap-[24px] opacity-100">

    {/* Heading Text */}
    <div
      className="w-[484px] h-[45px] text-center text-white text-[32px] leading-[140%] font-[500] whitespace-nowrap"
      style={{ fontFamily: 'Poppins' }}
    >
      Sign Up Quickly! Get
      <span className="bg-gradient-to-r from-[#C22CA2] to-[#8A38F5] font-bold text-transparent bg-clip-text"> 25%</span> Offer
    </div>
{/* Combined Info Row */}
<div className="flex items-center justify-center gap-[30px] opacity-100">
  {/* 30 Free Outputs */}
  <div className="flex items-center gap-[8px]">
    <div className="w-[8px] h-[8px] rounded-full bg-[#C22CA2]"></div>
    <div
      className="text-white text-[18px] leading-[140%] font-[500]"
      style={{ fontFamily: 'Inter' }}
    >
      30 free outputs
    </div>
  </div>

  {/* No Credit Card Required */}
  <div className="flex items-center gap-[8px]">
    <div className="w-[8px] h-[8px] rounded-full bg-[#C22CA2]"></div>
    <div
      className="text-white text-[18px] leading-[140%] font-[500]"
      style={{ fontFamily: 'Inter' }}
    >
      No credit card required
    </div>
  </div>
</div>

    {/* Button */}
  
   <Link to="/sign-in">
  <div
    className="w-[207px] h-[44px] flex items-center justify-center gap-[10px] px-[30px] py-[10px] rounded-[30px] border border-white"
    style={{
      background:
        "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
      opacity: 1,
    }}
  >
    <span
      className="text-white text-[16px] leading-[100%] font-[500]"
      style={{ fontFamily: "Inter" }}
    >
      Start Free Trial
    </span>
    <div className="w-[24px] h-[24px] opacity-100">
      <img src={Frame} alt="icon" className="w-full h-full" />
    </div>
  </div>
</Link>

  </div>
</section>




</div>
  );
}