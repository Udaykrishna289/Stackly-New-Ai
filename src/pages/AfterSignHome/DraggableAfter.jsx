// import React from "react";
// import DragSize from "./../../assets/product-pg/dragsize.png";
// import Img1 from "./../../assets/product-pg/img1.png";
// import Drag from "../../assets/afterHome/drag.png";
// import Download from "../../assets/afterHome/download.png";
// import Input from "../../assets/afterHome/input.png";
// import Search from "../../assets/afterHome/search.png";
// import More from "../../assets/afterHome/more.png";
// import Share from "../../assets/afterHome/share.png";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import DraggableImages from "../../components/DraggableImages";
// import Banner from "../../assets/product-pg/bannercode.png";
// import Banner1 from "../../assets/product-pg/bannercode1.png";
// import Star from "../../assets/product-pg/star.png";
// import {Link} from "react-router-dom" 


// export default function DraggableAfter() {
//   return (
//     <div>
//       {/* DraggableImages */}
//       <div>
//         <div
//           className="max-w-[100vw] h-auto bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: 'url("/AfterHome/sec4.png")' }}
//         >
//           <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[14px]">
//             <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C] pt-[70px]">
//               Your Recent <span className="text-[#009A98]">Designs</span>
//             </div>
//             <div className="w-[1026px] min-h-[56px] font-[400] text-[20px] leading-[24px] text-center text-[#000000]">
//               Your latest AI-powered transformations — beautifully rendered and
//               saved in your gallery
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-2 gap-10 sm:gap-15 mt-10  p-5 sm:p-10">
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-960px] right-[-1350px] ">
//             <select
//               name=""
//               id=""
//               className="text-[#007B82] cursor-pointer w-full"
//             >
//               <option value="">Filters</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <Link to="">

//         <div className="w-full h-[20px] flex justify-center items-center font-[400] text-[20px] leading-[140%] text-center underline text-[#007B82] mb-[50px]">
//           View all
//         </div>
//       </Link>
//     </div>
//   );
// }

//DraggableAfter.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Drag from "../../assets/afterHome/drag.png";
import Download from "../../assets/afterHome/download.png";
import Input from "../../assets/afterHome/input.png";
import Search from "../../assets/afterHome/search.png";
import More from "../../assets/afterHome/more.png";
import Share from "../../assets/afterHome/share.png";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";

import DraggableImages from "../../components/DraggableImages";

export default function DraggableAfter({ formRef, setSelectedImage }) {
  const [popupImage, setPopupImage] = useState(null);
  const [showDraggable, setShowDraggable] = useState(false);
  const [dragData, setDragData] = useState({ left: "", right: "" });
  const [visibleActions, setVisibleActions] = useState({});
  const [showAllMobile, setShowAllMobile] = useState(false); // new state

  const handleDownload = (imageSrc) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "ai-generated.png";
    link.click();
  };

  const handleCopyLink = (imageSrc) => {
    navigator.clipboard.writeText(window.location.origin + "/" + imageSrc);
    alert("Image link copied to clipboard");
  };

  const handleScrollToForm = () => {
    formRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleActions = (index) => {
    setVisibleActions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const designs = [
    { left: dragImg1_2, right: dragImg1_1, date: "MM/DD" },
    { left: dragImg1_2, right: dragImg1_1, date: "MM/DD" },
    { left: dragImg1_2, right: dragImg1_1, date: "MM/DD" },
    { left: dragImg1_2, right: dragImg1_1, date: "MM/DD" },
  ];

  return (
    <div>
      <div
        className="max-w-[100vw] h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/AfterHome/sec4.png")' }}
      >
        {/* Heading */}
        <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[14px]
               max-[440px]:w-[400px] max-[440px]:h-[80px] max-[440px]:gap-[16px]
               max-[440px]:mx-auto"> 
          <div
            className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C] pt-[70px]
             max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:font-medium max-[440px]:leading-[100%] max-[440px]:opacity-100"
          >
            Your Recent <span className="text-[#009A98]">Designs</span>
          </div>

          <div
            className="w-[1026px] min-h-[56px] font-[400] text-[20px] leading-[24px] text-center text-[#000000]
             max-[440px]:w-[400px] max-[440px]:h-[40px] max-[440px]:text-[14px] max-[440px]:leading-[140%] max-[440px]:opacity-100"
          >
            Your latest AI-powered transformations — beautifully rendered and saved in your gallery
          </div>
        </div>

        {/* Design Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 sm:p-10">
          {designs.map((design, index) => {
            const isHiddenMobile = index !== 0 && !showAllMobile;
            return (
              <div
                key={index}
                className={`max-w-[522px] m-auto w-full flex flex-col gap-2 ${
                  isHiddenMobile ? "max-[440px]:hidden" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="text-[16px] font-semibold text-[#007B82]">
                    {design.date}
                  </div>
                  <img
                    src={Drag}
                    className="w-[28px] h-[28px] cursor-pointer"
                    alt="drag"
                    onClick={() => {
                      setPopupImage(design.left);
                      setShowDraggable(false);
                    }}
                  />
                </div>

                <div className="rounded-[4px]">
                  <DraggableImages imageRight={design.right} imageLeft={design.left} />
                </div>

                <div className="flex justify-between items-center mt-2">
                  {/* Show */}
                  <div
                    onClick={() => {
                      setDragData({ left: design.left, right: design.right });
                      setShowDraggable(true);
                      setPopupImage(null);
                    }}
                    className={`cursor-pointer flex flex-col items-center transition-opacity duration-300 ${
                      visibleActions[index] ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img src={Search} alt="show" />
                    <span className="text-[12px] text-[#2A2A2A]">Show</span>
                  </div>

                  {/* Input */}
                  <div
                    onClick={() => {
                      setSelectedImage(design.right);
                      handleScrollToForm();
                    }}
                    className={`cursor-pointer flex flex-col items-center transition-opacity duration-300 ${
                      visibleActions[index] ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img src={Input} alt="input" />
                    <span className="text-[12px] text-[#2A2A2A]">Input</span>
                  </div>

                  {/* Download */}
                  <div
                    onClick={() => handleDownload(design.right)}
                    className={`cursor-pointer flex flex-col items-center transition-opacity duration-300 ${
                      visibleActions[index] ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img src={Download} alt="download" />
                    <span className="text-[12px] text-[#2A2A2A]">Download</span>
                  </div>

                  {/* Share */}
                  <div
                    onClick={() => handleCopyLink(design.right)}
                    className={`cursor-pointer flex flex-col items-center transition-opacity duration-300 ${
                      visibleActions[index] ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img src={Share} alt="share" />
                    <span className="text-[12px] text-[#2A2A2A]">Share</span>
                  </div>

                  {/* More */}
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => toggleActions(index)}
                  >
                    <img src={More} alt="more" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View All – Mobile Only */}
      {!showAllMobile && (
        <div className="w-full flex justify-center items-center mb-[50px] max-[440px]:flex min-[441px]:hidden">
          <button
            onClick={() => setShowAllMobile(true)}
            className="font-[400] text-[20px] leading-[140%] text-center underline text-[#007B82]"
          >
            View all
          </button>
        </div>
      )}

      {/* Desktop "View All" Link */}
      <Link to="/gallery">
        <div className="w-full h-[20px] justify-center items-center font-[400] text-[20px] leading-[140%] text-center underline text-[#007B82] mb-[50px] hidden min-[441px]:flex">
          View all
        </div>
      </Link>

      {/* Popup for Right Image */}
      {popupImage && !showDraggable && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex justify-center items-center"
          onClick={() => setPopupImage(null)}
        >
        <img
  src={popupImage}
  alt="popup"
  className="max-w-[800px] max-h-[100vh] rounded-xl shadow-lg
             max-[440px]:max-w-[90%] max-[440px]:max-h-[80vh] max-[440px]:rounded-lg"
/>

        </div>
      )}

      {/* Draggable Popup from "Show" */}
      {showDraggable && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center"
          onClick={() => setShowDraggable(false)}
        >
          <div
            className="relative w-full max-w-[800px] max-h-[100vh] overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <DraggableImages imageRight={dragData.right} imageLeft={dragData.left} />
          </div>
        </div>
      )}
    </div>
  );
}



