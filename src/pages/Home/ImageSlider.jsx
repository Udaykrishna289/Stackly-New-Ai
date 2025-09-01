// import React, { useState } from "react";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import { Link } from "react-router-dom";

// export default function ImageSlider() {
//   const [index, setIndex] = useState(0);

//   const showNext = () => {
//     index < 2 ? setIndex((prev) => ++prev) : setIndex(0);
//   };

//   const showPrev = () => {
//     index > 0 ? setIndex((prev) => --prev) : setIndex(2);
//   };

//   return (
//     <section className="w-full min-h-[600px] py-16 px-4 flex flex-col justify-center items-center gap-10">
//       <h2 className="text-black text-center text-3xl md:text-4xl font-medium max-w-[900px] leading-snug">
//         Explore our community's creations for{" "}
//         <span className="text-[#007B82]">inspiration</span>, then craft your{" "}
//         <span className="text-[#007B82]">own project</span> and share amazing
//         images with the world.
//       </h2>

//       <div className="w-full flex items-start justify-start gap-0 h-auto overflow-hidden flex-nowrap">
//         <div
//           className="flex flex-col sm:flex-row justify-center items-center gap-6 min-w-full transition-all "
//           style={{ transform: `translateX(${index * -100}%)` }}
//         >
//           <div className="relative max-w-[500px] w-full">
//             <img
//               src={dragImg1_1}
//               alt="Original Room"
//               className="rounded-md shadow-lg w-full"
//             />
//             <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
//               Original Room
//             </div>
//           </div>
//           <div className="relative max-w-[500px] w-full">
//             <img
//               src={dragImg1_2}
//               alt="STACKLY AI"
//               className="rounded-md shadow-lg w-full"
//             />
//             <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
//               STACKLYAI
//             </div>
//           </div>
//         </div>
//         <div
//           className="flex flex-col sm:flex-row justify-center items-center gap-6 min-w-full transition-all "
//           style={{ transform: `translateX(${index * -100}%)` }}
//         >
//           <div className="relative max-w-[500px] w-full">
//             <img
//               src={dragImg2_1}
//               alt="Original Room"
//               className="rounded-md shadow-lg w-full"
//             />
//             <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
//               Original Room
//             </div>
//           </div>
//           <div className="relative max-w-[500px] w-full">
//             <img
//               src={dragImg2_2}
//               alt="STACKLY AI"
//               className="rounded-md shadow-lg w-full"
//             />
//             <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
//               STACKLYAI
//             </div>
//           </div>
//         </div>
//         <div
//           className="flex flex-col sm:flex-row justify-center items-center gap-6 min-w-full transition-all "
//           style={{ transform: `translateX(${index * -100}%)` }}
//         >
//           <div className="relative max-w-[500px] w-full">
//             <img
//               src={dragImg3_1}
//               alt="Original Room"
//               className="rounded-md shadow-lg w-full"
//             />
//             <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
//               Original Room
//             </div>
//           </div>
//           <div className="relative max-w-[500px] w-full">
//             <img
//               src={dragImg3_2}
//               alt="STACKLY AI"
//               className="rounded-md shadow-lg w-full"
//             />
//             <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
//               STACKLYAI
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center gap-10">
//         <div
//           className="rounded-full p-3 bg-[#f5fafa] cursor-pointer aspect-square shadow-md"
//           onClick={showPrev}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="11"
//             height="19"
//             viewBox="0 0 11 19"
//             fill="none"
//           >
//             <path
//               d="M2.72451 9.48668L10.0732 16.8354C10.3232 17.0853 10.4441 17.3769 10.4361 17.7102C10.4281 18.0435 10.2988 18.3351 10.0482 18.5851C9.79759 18.835 9.50597 18.96 9.17337 18.96C8.84076 18.96 8.54914 18.835 8.29852 18.5851L0.599893 10.9114C0.399929 10.7115 0.249956 10.4865 0.149973 10.2366C0.0499911 9.9866 0 9.73664 0 9.48668C0 9.23673 0.0499911 8.98677 0.149973 8.73682C0.249956 8.48686 0.399929 8.2619 0.599893 8.06194L8.29852 0.363307C8.54848 0.113352 8.84443 -0.00762655 9.18636 0.000372027C9.5283 0.0083706 9.82392 0.137681 10.0732 0.388303C10.3225 0.638925 10.4475 0.93054 10.4481 1.26315C10.4488 1.59575 10.3238 1.88737 10.0732 2.13799L2.72451 9.48668Z"
//               fill="#007B82"
//             />
//           </svg>
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <span
//             onClick={() => setIndex(0)}
//             className={`${
//               index === 0 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-black"
//             } rounded-full cursor-pointer`}
//           />
//           <span
//             onClick={() => setIndex(1)}
//             className={`${
//               index === 1 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-black"
//             } rounded-full cursor-pointer`}
//           />
//           <span
//             onClick={() => setIndex(2)}
//             className={`${
//               index === 2 ? "w-5 h-3 bg-cyan-500" : "w-3 h-3 bg-black"
//             } rounded-full cursor-pointer`}
//           />
//         </div>
//         <div
//           className="rounded-full p-3 bg-[#f5fafa] cursor-pointer aspect-square shadow-md"
//           onClick={showNext}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="11"
//             height="19"
//             viewBox="0 0 11 19"
//             fill="none"
//           >
//             <path
//               d="M8.27549 9.48668L0.926793 16.8354C0.676838 17.0853 0.55586 17.3769 0.563858 17.7102C0.571856 18.0435 0.701166 18.3351 0.951789 18.5851C1.20241 18.835 1.49403 18.96 1.82663 18.96C2.15924 18.96 2.45086 18.835 2.70148 18.5851L10.4001 10.9114C10.6001 10.7115 10.75 10.4865 10.85 10.2366C10.95 9.9866 11 9.73664 11 9.48668C11 9.23673 10.95 8.98677 10.85 8.73682C10.75 8.48686 10.6001 8.2619 10.4001 8.06194L2.70148 0.363307C2.45152 0.113352 2.15557 -0.00762655 1.81364 0.000372027C1.4717 0.0083706 1.17608 0.137681 0.926793 0.388303C0.677505 0.638925 0.552526 0.93054 0.55186 1.26315C0.551193 1.59575 0.676171 1.88737 0.926793 2.13799L8.27549 9.48668Z"
//               fill="#007B82"
//             />
//           </svg>
//         </div>
//       </div>

//       <div className="w-full max-w-[1070px] flex justify-end mt-6">
//         <Link
//           to={""}
//           className="text-[#007b82] text-lg font-bold underline underline-offset-4 hover:text-cyan-400"
//         ></Link>
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
import { Link } from "react-router-dom";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const showNext = () => {
    index < 2 ? setIndex((prev) => ++prev) : setIndex(0);
  };

  const showPrev = () => {
    index > 0 ? setIndex((prev) => --prev) : setIndex(2);
  };

  return (
    <section

      className="w-full min-h-[600px] py-16 px-4 flex flex-col justify-center items-center gap-10
             max-[440px]:w-[440px] max-[440px]:min-h-[447px] 
             max-[440px]:pt-[40px] max-[440px]:pr-[20px] 
             max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
             max-[440px]:gap-[32px]"
    >

      <h2
        className="text-black text-center text-3xl md:text-4xl font-medium max-w-[1000px] leading-relaxed
             max-[440px]:w-[400px] max-[440px]:h-[66px] max-[440px]:text-[16px] 
             max-[440px]:leading-[140%] max-[440px]:font-[400] max-[440px]:text-center"
      >
        Explore our community's creations for{" "}
        <span className="text-[#007B82] font-semibold">inspiration</span>, then craft your{" "}
        <span className="text-[#007B82] font-semibold">own project</span> and share amazing
        images with the world.
      </h2>


      <div className="w-full flex items-start justify-start gap-0 h-auto overflow-hidden flex-nowrap">
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 min-w-full transition-all
             max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-[180px] max-[440px]:gap-[40px]"
          style={{ transform: `translateX(${index * -100}%)` }}
        >

          <div className="relative max-w-[500px] w-full">
            <img
              src={dragImg1_1}
              alt="Original Room"
              className="rounded-md shadow-lg w-full 
               max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[8px]"
            />
            <div
              className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded 
             max-[440px]:w-[90.14px] max-[440px]:h-[24.48px] max-[440px]:top-[17.67px] max-[440px]:left-[16.97px] 
             max-[440px]:rounded-[2.83px] max-[440px]:px-[7.07px] max-[440px]:py-[4.24px] max-[440px]:gap-[7.07px]
             max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center"
            >
              <span className="max-[440px]:w-[76px] max-[440px]:h-[16px] max-[440px]:text-[11.31px] 
                   max-[440px]:font-[500] max-[440px]:leading-[140%] max-[440px]:text-center">
                Original Room
              </span>
            </div>

          </div>

          <div className="relative max-w-[500px] w-full">
            <img
              src={dragImg1_2}
              alt="STACKLY AI"
              className="rounded-md shadow-lg w-full 
               max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[7.25px]"
            />
            <div
              className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded 
             max-[440px]:top-[16.29px] max-[440px]:left-[15.63px] 
             max-[440px]:rounded-[2.61px] 
             max-[440px]:px-[6.51px] max-[440px]:py-[3.91px] 
             max-[440px]:text-[10.42px] max-[440px]:leading-[140%] 
             max-[440px]:font-[500] max-[440px]:w-[69.03px] max-[440px]:h-[22.82px] 
             max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center max-[440px]:text-center"
            >
              STACKLYAI
            </div>

          </div>

        </div>
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 min-w-full transition-all 
             max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-[180px] max-[440px]:gap-[40px]"
          style={{ transform: `translateX(${index * -100}%)` }}
        >
          {/* Image 1 - Original Room */}
          <div className="relative max-w-[500px] w-full">
            <img
              src={dragImg2_1}
              alt="Original Room"
              className="rounded-md shadow-lg w-full 
                 max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[8px]"
            />
            <div
              className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded 
                 max-[440px]:w-[90.14px] max-[440px]:h-[24.48px] max-[440px]:top-[17.67px] max-[440px]:left-[16.97px] 
                 max-[440px]:rounded-[2.83px] max-[440px]:px-[7.07px] max-[440px]:py-[4.24px] max-[440px]:gap-[7.07px]
                 max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center"
            >
              <span className="max-[440px]:w-[76px] max-[440px]:h-[16px] max-[440px]:text-[11.31px] 
                       max-[440px]:font-[500] max-[440px]:leading-[140%] max-[440px]:text-center">
                Original Room
              </span>
            </div>
          </div>
          {/* Image 2 - STACKLYAI */}
          <div className="relative max-w-[500px] w-full">
            <img
              src={dragImg2_2}
              alt="STACKLY AI"
              className="rounded-md shadow-lg w-full 
                 max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[7.25px]"
            />
            <div
              className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded 
                 max-[440px]:top-[16.29px] max-[440px]:left-[15.63px] 
                 max-[440px]:rounded-[2.61px] 
                 max-[440px]:px-[6.51px] max-[440px]:py-[3.91px] 
                 max-[440px]:text-[10.42px] max-[440px]:leading-[140%] 
                 max-[440px]:font-[500] max-[440px]:w-[69.03px] max-[440px]:h-[22.82px] 
                 max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center max-[440px]:text-center"
            >
              STACKLYAI
            </div>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 min-w-full transition-all 
             max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-[180px] max-[440px]:gap-[40px]"
          style={{ transform: `translateX(${index * -100}%)` }}
        >
          {/* Image 1 - Original Room */}
          <div className="relative max-w-[500px] w-full">
            <img
              src={dragImg3_1}
              alt="Original Room"
              className="rounded-md shadow-lg w-full 
                 max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[8px]"
            />
            <div
              className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded 
                 max-[440px]:w-[90.14px] max-[440px]:h-[24.48px] max-[440px]:top-[17.67px] max-[440px]:left-[16.97px] 
                 max-[440px]:rounded-[2.83px] max-[440px]:px-[7.07px] max-[440px]:py-[4.24px] max-[440px]:gap-[7.07px]
                 max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center"
            >
              <span className="max-[440px]:w-[76px] max-[440px]:h-[16px] max-[440px]:text-[11.31px] 
                       max-[440px]:font-[500] max-[440px]:leading-[140%] max-[440px]:text-center">
                Original Room
              </span>
            </div>
          </div>

          {/* Image 2 - STACKLYAI */}
          <div className="relative max-w-[500px] w-full">
            <img
              src={dragImg3_2}
              alt="STACKLY AI"
              className="rounded-md shadow-lg w-full 
                 max-[440px]:w-[180px] max-[440px]:h-[180px] max-[440px]:rounded-[7.25px]"
            />
            <div
              className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded 
                 max-[440px]:top-[16.29px] max-[440px]:left-[15.63px] 
                 max-[440px]:rounded-[2.61px] 
                 max-[440px]:px-[6.51px] max-[440px]:py-[3.91px] 
                 max-[440px]:text-[10.42px] max-[440px]:leading-[140%] 
                 max-[440px]:font-[500] max-[440px]:w-[69.03px] max-[440px]:h-[22.82px] 
                 max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center max-[440px]:text-center"
            >
              STACKLYAI
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-center relative max-[440px]:gap-[20px]">
        {/* Left Arrow */}
        <div
          className="rounded-full p-3 bg-[#f5fafa] cursor-pointer aspect-square shadow-md
               max-[440px]:w-[25.55px] max-[440px]:h-[25.55px] max-[440px]:rounded-[21.29px]
               max-[440px]:p-0 max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center"
          onClick={showPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            className="max-[440px]:w-[5.56px] max-[440px]:h-[10.09px]"
          >
            <path
              d="M2.72451 9.48668L10.0732 16.8354C10.3232 17.0853 10.4441 17.3769 10.4361 17.7102C10.4281 18.0435 10.2988 18.3351 10.0482 18.5851C9.79759 18.835 9.50597 18.96 9.17337 18.96C8.84076 18.96 8.54914 18.835 8.29852 18.5851L0.599893 10.9114C0.399929 10.7115 0.249956 10.4865 0.149973 10.2366C0.0499911 9.9866 0 9.73664 0 9.48668C0 9.23673 0.0499911 8.98677 0.149973 8.73682C0.249956 8.48686 0.399929 8.2619 0.599893 8.06194L8.29852 0.363307C8.54848 0.113352 8.84443 -0.00762655 9.18636 0.000372027C9.5283 0.0083706 9.82392 0.137681 10.0732 0.388303C10.3225 0.638925 10.4475 0.93054 10.4481 1.26315C10.4488 1.59575 10.3238 1.88737 10.0732 2.13799L2.72451 9.48668Z"
              fill="#007B82"
            />
          </svg>
        </div>

        {/* Pagination Dots - Centered with gap */}
        <div className="flex gap-[6.39px] mx-[15px]">
          <span
            onClick={() => setIndex(0)}
            className={`${index === 0 ? "w-[33.01px]" : "w-[6.39px]"
              } h-[6.39px] rounded-full cursor-pointer ${index === 0 ? "bg-cyan-500" : "bg-black"
              }`}
          />
          <span
            onClick={() => setIndex(1)}
            className={`${index === 1 ? "w-[33.01px]" : "w-[6.39px]"
              } h-[6.39px] rounded-full cursor-pointer ${index === 1 ? "bg-cyan-500" : "bg-black"
              }`}
          />
          <span
            onClick={() => setIndex(2)}
            className={`${index === 2 ? "w-[33.01px]" : "w-[6.39px]"
              } h-[6.39px] rounded-full cursor-pointer ${index === 2 ? "bg-cyan-500" : "bg-black"
              }`}
          />
        </div>

        {/* Right Arrow */}
        <div
          className="rounded-full p-3 bg-[#f5fafa] cursor-pointer aspect-square shadow-md
               max-[440px]:w-[25.55px] max-[440px]:h-[25.55px] max-[440px]:rounded-[21.29px]
               max-[440px]:p-0 max-[440px]:flex max-[440px]:justify-center max-[440px]:items-center"
          onClick={showNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            className="max-[440px]:w-[5.56px] max-[440px]:h-[10.09px]"
          >
            <path
              d="M8.27549 9.48668L0.926804 2.13799C0.676848 1.88804 0.55587 1.59642 0.563869 1.26309C0.571867 0.929767 0.701179 0.638153 0.951803 0.388222C1.20243 0.138291 1.49404 0.0133056 1.82665 0.0132656C2.15925 0.0132256 2.45087 0.138171 2.70149 0.388103L10.4001 8.06176C10.6001 8.26172 10.75 8.48668 10.85 8.73663C10.95 8.98659 11 9.23655 11 9.4865C11 9.73646 10.95 9.98642 10.85 10.2364C10.75 10.4863 10.6001 10.7113 10.4001 10.9112L2.70149 18.6099C2.45153 18.8598 2.15558 18.9808 1.81365 18.9728C1.47171 18.9648 1.17609 18.8355 0.926804 18.5849C0.677521 18.3343 0.552535 18.0426 0.551847 17.71C0.551158 17.3774 0.676113 17.0858 0.926804 16.8352L8.27549 9.48668Z"
              fill="#007B82"
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-[1070px] flex justify-end mt-6">
        <Link
          to={""}
          className="text-[#007b82] text-lg font-bold underline underline-offset-4 hover:text-cyan-400"
        ></Link>
      </div>
    </section>
  );
}