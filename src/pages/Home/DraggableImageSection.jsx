// import React from "react";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import DraggableImages from "../../components/DraggableImages";

// export default function DraggableImageSection() {
//   return (
//     <section className="w-full bg-[#011213] text-white py-16 px-4 flex flex-col items-center">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
//           {" "}
//           <span className="text-cyan-400"></span>
//         </h2>
//         <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-2"></h2>
//       </div>

//       {/* Features Section */}
//       <div className="flex flex-col gap-16 w-full max-w-7xl">
//         {/* Feature 1 */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="flex-1">
//             <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
//               <span className="text-cyan-400">Gorgeous Makeovers</span> and
//               Stylish Transformations
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Want to give your home a stunning new look inside and out? Our
//               AI-powered makeover feature lets you explore various styles to
//               elevate your space. Redesign any interior, exterior, or outdoor
//               area effortlessly.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
//             <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
//           </div>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="flex-1">
//             <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
//               <span className="text-cyan-400">Transform Empty Spaces</span> with
//               Stylish Furniture
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Curious how your room would look fully furnished? Our AI-powered
//               tool fills any room type with furniture and décor. Perfect for
//               empty or under-construction spaces—bring your vision to life with
//               Stackly.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
//             <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
//           </div>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="flex-1">
//             <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
//               Artistic Makeover for{" "}
//               <span className="text-cyan-400">Interiors and Exteriors</span>
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Unleash the power of AI with Artistic Makeover. From stylish
//               furniture arrangements to a complete exterior refresh, let AI
//               transform your space with a fresh, creative vision.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
//             <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
//           </div>
//         </div>
//       </div>



//     </section>
//   );
// }

import React, { useState } from "react";
import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";
import { Link } from "react-router-dom";

export default function DraggableImageSection() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };


  return (
    <section className="w-[full] bg-[#011213] text-white py-16 px-16 flex flex-col items-center">
      {/* Heading - Only shows below 440px */}
      {/* ✅ Desktop Only (≥ 441px) */}
      <div className="text-center mb-16 hidden min-[441px]:block">
        <div className="w-[1007px] h-[112px] mx-auto">
          <h2 className="font-inter font-normal text-[40px] leading-[56px] tracking-[0%] text-white text-center">
            Discover Our <span className="text-cyan-400">Advanced AI Interior Tools</span>
            <br />
            and Redesign Your Space Instantly
          </h2>
        </div>
      </div>

      {/* ✅ Mobile Only (≤ 440px) */}
      <div className="text-center mb-8 block max-[440px]:block min-[441px]:hidden">
        <div className="w-[400px] h-[56px] mx-auto">
          <h2 className="font-inter font-semibold text-[20px] leading-[28px] tracking-[0%] text-white text-center">
            Discover Our <span className="text-cyan-400">Advanced AI Interior Tools</span>
            <br />
            and Redesign Your Space Instantly
          </h2>
        </div>
      </div>


      {/* Features Section */}
      <div className="flex flex-col gap-16 w-full max-w-7xl">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 max-[440px]:hidden">
          {/* Text */}
          <div className="flex-1 w-[500px] h-[236px]">
            <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
              <span className="text-cyan-400">Gorgeous Makeovers</span> and
              Stylish Transformations
            </h3>
            <p className="w-[500px] leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
              Want to give your home a stunning new look inside and out? Our
              AI-powered makeover feature lets you explore various styles to
              elevate your space. Redesign any interior, exterior, or outdoor
              area effortlessly.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
            <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 max-[440px]:hidden">
          {/* Text */}
          <div className="flex-1">
            <h3 className="w-[500px] text-[34px] font-semibold leading-[140%] mb-4">
              <span className="text-cyan-400">Transform Empty Spaces</span> with
              Stylish Furniture
            </h3>
            <p className="w-[500px] leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
              Curious how your room would look fully furnished? Our AI-powered
              tool fills any room type with furniture and décor. Perfect for
              empty or under-construction spaces—bring your vision to life with
              Stackly.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
            <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 max-[440px]:hidden">
          {/* Text */}
          <div className="flex-1">
            <h3 className="w-[500px] text-[34px] font-semibold leading-[140%] mb-4">
              Artistic Makeover for{" "}
              <span className="text-cyan-400">Interiors and Exteriors</span>
            </h3>
            <p className="w-[500px] leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
              Unleash the power of AI with Artistic Makeover. From stylish
              furniture arrangements to a complete exterior refresh, let AI
              transform your space with a fresh, creative vision.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
            <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
          </div>
        </div>
      </div>


      {/* Features Section for Mobile Only (<440px) */}
      <div className="hidden max-[440px]:flex flex-col w-[400px] gap-[32px] relative">
        {/* Carousel Container with Sticky Arrows */}
        <div className="relative w-full">
          {/* Left Arrow - Sticky to the left side */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-[#19383b] cursor-pointer rounded-full z-10"
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
                fill="white"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div className="overflow-x-hidden w-full mx-auto" style={{ maxWidth: '309.57px' }}>
            <div className="flex transition-all duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {/* Feature 1 */}
              <div className="min-w-full">
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="w-[309.57px] h-[178px] rounded-[3.87px]">
                    <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="min-w-full">
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="w-[309.57px] h-[178px] rounded-[3.87px]">
                    <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="min-w-full">
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="w-[309.57px] h-[178px] rounded-[3.87px]">
                    <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow - Sticky to the right side */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-[#19383b] cursor-pointer rounded-full z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="20"
              viewBox="0 0 14 24"
              fill="none"
            >
              <path
                d="M10.5944 11.8584L1.40849 21.0442C1.09605 21.3567 0.944824 21.7212 0.954823 22.1378C0.964821 22.5544 1.12646 22.9189 1.43974 23.2313C1.75301 23.5438 2.11753 23.7 2.53329 23.7C2.94905 23.7 3.31357 23.5438 3.62685 23.2313L13.2501 13.6393C13.5001 13.3893 13.6876 13.1081 13.8125 12.7957C13.9375 12.4832 14 12.1708 14 11.8584C14 11.5459 13.9375 11.2335 13.8125 10.921C13.6876 10.6086 13.5001 10.3274 13.2501 10.0774L3.62685 0.454134C3.3144 0.14169 2.94447 -0.00953319 2.51704 0.000465034C2.08962 0.0104633 1.7201 0.172101 1.40849 0.485379C1.09688 0.798656 0.940658 1.16317 0.939825 1.57893C0.938992 1.99469 1.09521 2.35921 1.40849 2.67249L10.5944 11.8584Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        {/* Text Content - Shows based on current slide */}
        <div className="w-full text-center px-4">
          {currentSlide === 0 && (
            <div>
              <div className="w-[309.57px] mx-auto"> {/* Container matching image width */}
                <h3
                  className="w-full font-inter font-medium text-[16px] leading-[140%] tracking-[0%] mb-2 text-left"
                >
                  <span className="text-cyan-400">Gorgeous Makeovers</span> and Stylish Transformations
                </h3>
              </div>
              <div className="w-[309.57px] mx-auto"> {/* Same container as heading and image */}
                <button
                  onClick={() => setShowText1(!showText1)}
                  className="text-sm text-[#ffffff] underline underline-offset-4 font-medium mb-2 block text-left w-full"
                >
                  {showText1 ? "Read Less" : "Read More"}
                </button>
              </div>
              {showText1 && (
                <p className="text-[14px] leading-[180%] font-medium text-[#f5f5f5]">
                  Want to give your home a stunning new look inside and out? Our AI-powered makeover
                  feature lets you explore various styles to elevate your space.
                </p>
              )}
            </div>
          )}

          {currentSlide === 1 && (
            <div>
              <div className="w-[309.57px] mx-auto"> {/* Container matching image width */}
                <h3
                  className="w-full font-inter font-medium text-[16px] leading-[140%] tracking-[0%] mb-2 text-left"
                >
                  <span className="text-cyan-400">Transform Empty Spaces</span> with Stylish Furniture
                </h3>
              </div>
              <div className="w-[309.57px] mx-auto"> {/* Container matching image width */}
                <button
                  onClick={() => setShowText2(!showText2)}
                  className="text-sm text-[#ffffff] underline underline-offset-4 font-medium mb-2 block text-left w-full"
                >
                  {showText2 ? "Read Less" : "Read More"}
                </button>
              </div>
              {showText2 && (
                <p className="text-[14px] leading-[180%] font-medium text-[#f5f5f5]">
                  Curious how your room would look fully furnished? Our AI-powered tool fills any room
                  type with furniture and décor.
                </p>
              )}
            </div>
          )}

          {currentSlide === 2 && (
            <div>
              <div className="w-[309.57px] mx-auto"> {/* Container matching image width */}
                <h3
                  className="w-full font-inter font-medium text-[16px] leading-[140%] tracking-[0%] mb-2 text-left"
                >
                  Artistic Makeover for <span className="text-cyan-400">Interiors and Exteriors</span>
                </h3>
              </div>

              <div className="w-[309.57px] mx-auto"> {/* Container matching image width */}
                <button
                  onClick={() => setShowText3(!showText3)}
                  className="text-sm text-[#ffffff] underline underline-offset-4 font-medium mb-2 block text-left w-full"
                >
                  {showText3 ? "Read Less" : "Read More"}
                </button>
              </div>
              {showText3 && (
                <p className="text-[14px] leading-[180%] font-medium text-[#f5f5f5]">
                  Unleash the power of AI with Artistic Makeover. From stylish furniture arrangements
                  to a complete exterior refresh, let AI transform your space with a fresh,
                  creative vision.
                </p>
              )}
            </div>

          )}
          <p className="w-[364px] h-[60px] mt-[20px] font-normal text-[14px] leading-[140%] tracking-[0%] text-center font-['Inter']">
            Loved by experts and designed for everyone, our platform brings professional-quality results with ease and simplicity.
          </p>
          <div className="flex justify-center mt-[20px]">
            <h3 className="text-[20px] leading-[140%] tracking-[0%] font-medium text-center text-white font-['Inter']">
              Get Started – Infinite Ideas
            </h3>
          </div>
          <div className="flex justify-center mt-[20px]">
            <Link to="/sign-in">
              <button
                className="w-[400px] h-[45px] rounded-[8px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
                }}
              >
                <span className="text-white font-['Inter'] font-bold text-[16px] leading-[35px] tracking-[0%]">
                  Access Now !
                </span>
              </button>
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}