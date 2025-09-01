// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DragSize from "./../../assets/product-pg/dragsize.png";
// import Search from "./../../assets/product-pg/search.png";
// import Input from "./../../assets/product-pg/input.png";
// import Download from "./../../assets/product-pg/download.png";

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
// //import { FormDataContext } from "../../context/FormDataContext";

// export default function AfterDraggableImagesProducts() {

//   // const navigate = useNavigate();
//   // const { setImgURL, setFormData } =
//   //   useContext(FormDataContext);

//   const [fullscreenImage, setFullscreenImage] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);


//   const handleFullscreen = (image) => {
//     setFullscreenImage(image);
//   };

//   const handleDownload = (imageUrl) => {
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `stackly-design-${Date.now()}.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleInputRedirect = (roomType, originalImage) => {
//     setFormData((prev) => {
//       return { ...prev, roomType: roomType };
//     });
//     setImgURL(originalImage);
//   };

//   const scrollToForm = () => {
//     formRef.current?.scrollIntoView({ behavior: "smooth" });
//   };



//   const RoomCard = ({ roomName, originalImage, transformedImage, roomKey }) => (
//     <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//       <div className="max-w-[520px] min-h-[35px] flex justify-between">
//         <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
//           {roomName}
//         </div>
//         <div
//           className="w-[28px] h-[28px] cursor-pointer hover:opacity-80"
//           onClick={() => handleFullscreen(transformedImage)}
//         >
//           <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
//         </div>
//       </div>
//       <div className="max-w-[522px] w-full h-auto rounded-[4px]">
//         <DraggableImages
//           imageLeft={transformedImage}
//           imageRight={originalImage}
//         />
//       </div>
//       <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => toggleOriginalImage(roomKey, originalImage)}
//         >
//           <img src={Search} alt="Toggle original" title="View original image" />
//           <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//             Show
//           </div>
//         </div>
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={({scrollToForm}) => {
//             handleInputRedirect(roomName, originalImage);
//             navigate("#formSec");
//           }}

//         >
//           <img src={Input} alt="Input" title="Go to input form" />
//           <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//             Input
//           </div>
//         </div>
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => handleDownload(transformedImage)}
//         >
//           <img src={Download} alt="Download" title="Download image" />
//           <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//             Download
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       {/* Fullscreen Modal */}
//       {fullscreenImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-full max-h-full">
//             <img
//               src={fullscreenImage}
//               alt="Fullscreen preview"
//               className="max-w-full max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//               onClick={() => setFullscreenImage(null)}
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Original Image Popup Modal */}
//       {popupImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-full max-h-full">
//             <img
//               src={popupImage}
//               alt="Original preview"
//               className="max-w-full max-h-[90vh] object-contain"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//               onClick={() => setPopupImage(null)}
//             >
//               ×
//             </button>
//             <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
//               Original Image - Click outside to close
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-[100vw] min-h-[720px] flex flex-col items-center justify-center gap-5 bg-gradient-to-l from-[#007B8214] to-[white]">
//         <h1 className="w-full max-w-[1064px] text-center font-bold text-[70px] leading-[78px] mt-[150px]">
//           <span className="text-[#009A98]">Stackly.AI</span>

//         </h1>

//         <p className="max-w-[1064px] min-h-[56px] text-[22px] leading-[28px] text-center font-[400] text-[#0F0F0F]">
//           You can now effortlessly bring your design dreams to life using the
//           power of AI. Simply take a photo using your camera and watch as our
//           advanced AI algorithms work their magic.
//         </p>

//         <div className="max-w-[1064px] min-h-[28px] text-[18px] leading-[28px] font-semibold text-center text-[#007B82]">
//           Best quality, lightning fast used by homeowners and professionals
//         </div>

//         <div className="absolute">
//           <img
//             src={Banner}
//             alt="banner1"
//             className="absolute left-[-60px] top-[70px]"
//           />
//           <img src={Banner1} alt="banner2" className="" />
//         </div>

//         <div className="w-[52.38px] h-[50px] relative top-[-300px] left-[-650px]">
//           <img src={Star} alt="star" />
//         </div>
//         <div className="w-[30px] h-[28.64px] relative top-[-330px] left-[-630px]">
//           <img src={Star} alt="star" />
//         </div>
//         <div className="w-[52.38px] h-[50px] relative top-[50px] left-[550px]">
//           <img src={Star} alt="star" />
//         </div>
//         <div className="w-[30px] h-[28.64px] relative top-[20px] left-[580px]">
//           <img src={Star} alt="star" />
//         </div>
//       </div>

//       {/* DraggableImages Section */}
//       <div>
//         <div className="max-w-[100vw] h-auto">
//           <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[24px]">
//             <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C]">
//               Spaces That Inspire You
//             </div>
//             <div className="w-[1026px] min-h-[56px] text-[400] text-[24px] leading-[28px] text-center text-[#000000]">
//               Explore handpicked collections for every corner of your home —
//               from cozy balconies to focused work zones.
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-15 mt-10 p-5 sm:p-10">
//             <RoomCard
//               roomName="Living Room"
//               originalImage={dragImg1_1}
//               transformedImage={dragImg1_2}
//               roomKey="livingRoom"
//             />

//             <RoomCard
//               roomName="Kitchen"
//               originalImage={dragImg2_1}
//               transformedImage={dragImg2_2}
//               roomKey="kitchen"
//             />

//             <RoomCard
//               roomName="Kids Room"
//               originalImage={dragImg3_1}
//               transformedImage={dragImg3_2}
//               roomKey="kidsRoom"
//             />

//             <RoomCard
//               roomName="Dining Room"
//               originalImage={dragImg1_1}
//               transformedImage={dragImg1_2}
//               roomKey="diningRoom"
//             />

//             <RoomCard
//               roomName="Laundry Room"
//               originalImage={dragImg2_1}
//               transformedImage={dragImg2_2}
//               roomKey="laundryRoom"
//             />

//             <RoomCard
//               roomName="Study Room"
//               originalImage={dragImg3_1}
//               transformedImage={dragImg3_2}
//               roomKey="studyRoom"
//             />
//           </div>

//           <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-860px] right-[-1350px]">
//             <select name="" id="" className="text-[#007B82] cursor-pointer">
//               <option selected disabled value="">
//                 Choose Area
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Floor
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Office
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Gym
//               </option>
//               <option value="" className="text-[#2a2a2a]">
//                 Palcony
//               </option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import DragSize from "./../../assets/product-pg/dragsize.png";
import Search from "./../../assets/product-pg/search.png";
import Input from "./../../assets/product-pg/input.png";
import Download from "./../../assets/product-pg/download.png";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";
import Banner from "../../assets/product-pg/bannercode.png";
import Banner1 from "../../assets/product-pg/bannercode1.png";
import Star from "../../assets/product-pg/star.png";

export default function AfterDraggableImagesProducts() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showDraggable, setShowDraggable] = useState(false);
  const [dragData, setDragData] = useState({ left: "", right: "" });

  const handleFullscreen = (image) => setFullscreenImage(image);
  const draggableRef = useRef(null);

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `stackly-design-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShow = (leftImg, rightImg) => {
    setDragData({ left: leftImg, right: rightImg });
    setShowDraggable(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        draggableRef.current &&
        !draggableRef.current.contains(event.target)
      ) {
        setShowDraggable(false); // Close when click is outside
      }
    };

    if (showDraggable) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDraggable]);

  const RoomCard = ({ roomName, originalImage, transformedImage }) => (
    <div className="max-w-[522px] m-auto w-full h-auto flex flex-col gap-2">
      <div className="max-w-[520px] min-h-[35px] flex justify-between">
        <div className="text-[24px] font-semibold leading-[35px] text-[#2A2A2A]">
          {roomName}
        </div>
        <div
          className="w-[28px] h-[28px] cursor-pointer hover:opacity-80"
          onClick={() => handleFullscreen(transformedImage)}
        >
          <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
        </div>
      </div>
      <div className="max-w-[522px] w-full h-auto rounded-[16px] overflow-hidden">
        <DraggableImages imageLeft={transformedImage} imageRight={originalImage} />
      </div>
      <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
        <div
          className="max-w-[40px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
          onClick={() => handleShow(transformedImage, originalImage)}
        >
          <img src={Search} alt="Show" />
          <div className="text-[12px] text-[#2A2A2A]">Show</div>
        </div>

        <div className="max-w-[40px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80">
          <img src={Input} alt="Input" />
          <div className="text-[12px] text-[#2A2A2A]">Input</div>
        </div>

        <div
          className="max-w-[40px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
          onClick={() => handleDownload(transformedImage)}
        >
          <img src={Download} alt="Download" />
          <div className="text-[12px] text-[#2A2A2A]">Download</div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)} // ✅ close on background click
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // ✅ prevent close on image click
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen preview"
              className="max-w-[860px] max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {showDraggable && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          onClick={() => setShowDraggable(false)} // ✅ close on outside click
        >
          <div
            ref={draggableRef}
            onClick={(e) => e.stopPropagation()} // ✅ prevent modal click from closing
            className="w-[95%] max-w-[860px] max-h-[90vh] overflow-hidden bg-white rounded-xl shadow-xl"
          >
            <DraggableImages imageRight={dragData.right} imageLeft={dragData.left} />
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="max-w-[100vw] min-h-[720px] flex flex-col items-center justify-center gap-5 bg-gradient-to-l from-[#007B8214] to-[white]">
        <h1 className="w-full max-w-[1064px] text-center font-bold text-[70px] leading-[78px] mt-[150px]">
          <span className="text-[#009A98]">Stackly.AI</span> Interior Designer
        </h1>
        <p className="max-w-[1064px] text-[22px] text-center font-[400] text-[#0F0F0F]">
          You can now effortlessly bring your design dreams to life using the
          power of AI. Simply take a photo using your camera and watch as our
          advanced AI algorithms work their magic.
        </p>
        <div className="text-[18px] font-semibold text-center text-[#007B82]">
          Best quality, lightning fast used by homeowners and professionals
        </div>
        <div className="absolute">
          <img src={Banner} alt="banner1" className="absolute left-[-60px] top-[70px]" />
          <img src={Banner1} alt="banner2" className="" />
        </div>
        <div className="w-[52.38px] h-[50px] relative top-[-300px] left-[-650px]">
          <img src={Star} alt="star" />
        </div>
        <div className="w-[30px] h-[28.64px] relative top-[-330px] left-[-630px]">
          <img src={Star} alt="star" />
        </div>
        <div className="w-[52.38px] h-[50px] relative top-[50px] left-[550px]">
          <img src={Star} alt="star" />
        </div>
        <div className="w-[30px] h-[28.64px] relative top-[20px] left-[580px]">
          <img src={Star} alt="star" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[100vw] h-auto mt-[50px]">
        <div className="w-full flex flex-col justify-center items-center gap-[24px]">
          <div className="w-[1026px] font-bold text-[48px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C]">
            Spaces That Inspire You
          </div>
          <div className="w-[1026px] text-[24px] text-center text-[#000000]">
            Explore handpicked collections for every corner of your home — from cozy
            balconies to focused work zones.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 p-5 sm:p-10">
          <RoomCard roomName="Living Room" originalImage={dragImg1_1} transformedImage={dragImg1_2} />
          <RoomCard roomName="Kitchen" originalImage={dragImg2_1} transformedImage={dragImg2_2} />
          <RoomCard roomName="Kids Room" originalImage={dragImg3_1} transformedImage={dragImg3_2} />
          <RoomCard roomName="Dining Room" originalImage={dragImg1_1} transformedImage={dragImg1_2} />
          <RoomCard roomName="Laundry Room" originalImage={dragImg2_1} transformedImage={dragImg2_2} />
          <RoomCard roomName="Study Room" originalImage={dragImg3_1} transformedImage={dragImg3_2} />
        </div>
      </div>
    </div>
  );
}


