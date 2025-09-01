// import React, { useState } from "react";
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
// import { Link } from "react-router-dom";

// export default function DraggableImagesProducts() {
//   const navigate = useNavigate();
//   const [fullscreenImage, setFullscreenImage] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const [showOriginal, setShowOriginal] = useState({
//     livingRoom: true,
//     kitchen: true,
//     kidsRoom: true,
//     diningRoom: true,
//     laundryRoom: true,
//     studyRoom: true,
//   });

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
//     navigate("/products", {
//       state: {
//         scrollToForm: true,
//         selectedRoom: roomType,
//         originalImage: originalImage,
//       },
//       replace: true,
//     });
//   };

//   const toggleOriginalImage = (room, originalImage) => {
//     setPopupImage(originalImage);
//     setShowOriginal((prev) => ({
//       ...prev,
//       [room]: !prev[room],
//     }));
//   };

//   const RoomCard = ({ roomName, originalImage, transformedImage, roomKey }) => (
//     <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//       <div className="max-w-[520px] min-h-[35px] flex justify-between">
//         <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
//           {roomName}
//         </div>
//         <div
//           className="w-[28px] h-[28px] cursor-pointer hover:opacity-80"
//           onClick={() => handleFullscreenn(transformedImage)}
//         >
//           <Link to="/Sign-in">
//             {" "}
//             <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
//           </Link>
//         </div>
//       </div>
//       <div className="max-w-[522px] w-full h-auto rounded-[4px]">
//         <DraggableImages
//           imageRight={originalImage}
//           imageLeft={transformedImage}
//         />
//       </div>
//       <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => toggleOriginalImagee(roomKey, originalImage)}
//         >
//           <Link to="/Sign-in">
//           <img src={Search} alt="Toggle original" title="View original image" />
//             {" "}
//             <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//               Show
//             </div>
//           </Link>
//         </div>
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => handleInputRedirectt(roomName, originalImage)}
//         >
//           <Link to="/Sign-in">
//           <img src={Input} alt="Input" title="Go to input form" />
//             {" "}
//             <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//               Input
//             </div>
//           </Link>
//         </div>
//         <div
//           className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
//           onClick={() => handleDownloadd(transformedImage)}
//         >
//           <Link to="/sign-in">
//           <img src={Download} alt="Download" title="Download image" />
//             <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//               Download
//             </div>
//           </Link>
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
//               onClick={() => setFullscreenImagee(null)}
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
//               onClick={() => setPopupImagee(null)}
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
//           <span className="text-[#009A98]">Stackly.AI</span> Interior Designer
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
//               originalImage={dragImg1_2}
//               transformedImage={dragImg1_1}
//               roomKey="diningRoom"
//             />

//             <RoomCard
//               roomName="Laundry Room"
//               originalImage={dragImg2_2}
//               transformedImage={dragImg2_1}
//               roomKey="laundryRoom"
//             />

//             <RoomCard
//               roomName="Study Room"
//               originalImage={dragImg3_2}
//               transformedImage={dragImg3_1}
//               roomKey="studyRoom"
//             />
//           </div>

//           <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-860px] right-[-1350px]">
//             <select name="" id="" className="text-[#007B82] cursor-pointer">
//               <option selected disabled value="">Choose Area</option>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DragSize from "./../../assets/product-pg/dragsize.png";
import Search from "./../../assets/product-pg/icons_search.png";
import Input from "./../../assets/product-pg/icons_input.png";
import Download from "./../../assets/product-pg/icons_download.png";

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
import { Link } from "react-router-dom";

export default function DraggableImagesProducts() {

  const [selectedArea, setSelectedArea] = useState("");

  const handleAreaChange = (e) => {
    const value = e.target.value;
    setSelectedArea(value);
    if (value) {
      navigate("/sign-in", {
        state: { selectedArea: value }
      });
    }
  };

  const navigate = useNavigate();
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [showOriginal, setShowOriginal] = useState({
    livingRoom: true,
    kitchen: true,
    kidsRoom: true,
    diningRoom: true,
    laundryRoom: true,
    studyRoom: true,
  });

  const handleFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `stackly-design-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputRedirect = (roomType, originalImage) => {
    navigate("/products", {
      state: {
        scrollToForm: true,
        selectedRoom: roomType,
        originalImage: originalImage,
      },
      replace: true,
    });
  };

  const toggleOriginalImage = (room, originalImage) => {
    setPopupImage(originalImage);
    setShowOriginal((prev) => ({
      ...prev,
      [room]: !prev[room],
    }));
  };

  const RoomCard = ({ roomName, originalImage, transformedImage, roomKey }) => (
    <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2 max-[440px]:w-[188px] max-[440px]:h-[188.02px] max-[440px]:gap-[7.51px]">
     <div className="max-w-[520px] min-h-[35px] flex items-center justify-between 
                max-[440px]:w-[188px] max-[440px]:h-[20px] max-[440px]:justify-between">
  
  <div className="text-[18px] font-semibold leading-[35px] tracking-[0.5px] text-[#2A2A2A] 
                  max-[440px]:w-[91px] max-[440px]:h-[13px] max-[440px]:text-[14px] 
                  max-[440px]:leading-[12.23px] max-[440px]:tracking-[0]">
    {roomName}
  </div>

  <div className="w-[21px] h-[21px] max-[440px]:w-[20px] max-[440px]:h-[20px] cursor-pointer hover:opacity-80 flex items-center justify-center">
    <Link to="/Sign-in">
      <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
    </Link>
  </div>

</div>

      <div className="max-w-[522px] w-full h-auto rounded-[4px]">
        <DraggableImages
          imageRight={originalImage}
          imageLeft={transformedImage}
        />
      </div>
      <div className="max-w-[520px] min-h-[57px] flex justify-between items-center max-[440px]:w-[188px] max-[440px]:h-[45px]">

        <div
          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80
             max-[440px]:w-[38px] max-[440px]:h-[45px] max-[440px]:gap-[4px]"
          onClick={() => toggleOriginalImagee(roomKey, originalImage)}
        >
          <Link to="/Sign-in">
            <div
              className="w-[38px] h-[38px] rounded-[44.65px] bg-[#00B0BA14] border-[1.12px] border-[#007B82] flex items-center justify-center
                 max-[440px]:w-[24px] max-[440px]:h-[24px] max-[440px]:rounded-[30px] max-[440px]:border max-[440px]:border-[#007B82]"
            >
              <img
                src={Search}
                alt="Toggle original"
                title="View original image"
                className="w-[38px] h-[38px] object-contain"
              />
            </div>

            <div className="mt-3 max-w-[40px] min-h-[17px] text-[14px] leading-[140%] text-center font-[400] text-[#2A2A2A]
                    max-[440px]:w-[38px] max-[440px]:h-[17px] max-[440px]:text-[12px]">
              Show
            </div>
          </Link>
        </div>
        <div
          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80
             max-[440px]:w-[34px] max-[440px]:h-[45px] max-[440px]:gap-[4px]"
          onClick={() => handleInputRedirectt(roomName, originalImage)}
        >
          <Link to="/Sign-in">
            {/* ✅ WRAP image in styled div */}
            <div
              className="w-[38px] h-[38px] rounded-[45px] bg-[#00B0BA14] border-[1.12px] border-[#007B82] flex items-center justify-center
             max-[440px]:w-[24px] max-[440px]:h-[24px] max-[440px]:rounded-[30px] max-[440px]:border max-[440px]:border-[#007B82] max-[440px]:p-[4px]"
            >
              <img
                src={Input}
                alt="Input"
                title="Go to input form"
                className="w-[38px] h-[38px] object-contain"
              />
            </div>

            <div
              className="mt-3 max-w-[40px] min-h-[17px] text-[14px] leading-[140%] text-center font-[400] text-[#2A2A2A]
                 max-[440px]:w-[34px] max-[440px]:h-[17px] max-[440px]:text-[12px] max-[440px]:font-[400] 
                 max-[440px]:text-center max-[440px]:font-['Inter']"
            >
              Input
            </div>
          </Link>
        </div>

        <div
  className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80
             max-[440px]:w-[67px] max-[440px]:h-[45px] max-[440px]:gap-[4px]"
  onClick={() => handleDownloadd(transformedImage)}
>
  <Link to="/sign-in" className="flex flex-col items-center justify-center gap-[4px]">
    <div
      className="w-[38px] h-[38px] rounded-full bg-[#00B0BA14] border border-[#007B82] flex items-center justify-center
        max-[440px]:w-[24px] max-[440px]:h-[24px] max-[440px]:rounded-[30px] max-[440px]:border max-[440px]:p-[4px]"
    >
      <img
        src={Download}
        alt="Download"
        title="Download image"
        className="w-[36px] h-[36px] object-contain"
      />
    </div>

    <div
      className="mt-1 text-[14px] text-[#2A2A2A] text-center font-[400]
        max-[440px]:text-[12px] max-[440px]:leading-[140%] max-[440px]:w-[67px] max-[440px]:font-['Inter']"
    >
      Download
    </div>
  </Link>
</div>

      </div>
    </div>
  );

  return (
    <div>
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={fullscreenImage}
              alt="Fullscreen preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setFullscreenImagee(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Original Image Popup Modal */}
      {popupImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={popupImage}
              alt="Original preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setPopupImagee(null)}
            >
              
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
              Original Image - Click outside to close
            </div>
          </div>
        </div>
      )}

      {/* DraggableImages Section */}
      <div className="min-[769px]:mt-[20px]">

       <div
  className="w-[1440px] h-[994px]

             /* Mobile styles */
             max-[440px]:flex max-[440px]:flex-col 
             max-[440px]:w-[440px] max-[440px]:h-[643.38px] 
             max-[440px]:pt-[2px] max-[440px]:pr-[20px] 
             max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
             max-[440px]:gap-[22px]

             /* Tablet styles */
             min-[441px]:max-[768px]:w-[768px]
             min-[441px]:max-[768px]:h-[852.04px]
             min-[441px]:max-[768px]:pt-[60px]
             min-[441px]:max-[768px]:pr-[40px]
             min-[441px]:max-[768px]:pb-[60px]
             min-[441px]:max-[768px]:pl-[40px]
             min-[441px]:max-[768px]:gap-[32px]"
>


          <div
            className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[0px]

             /* Mobile styles */
             max-[440px]:w-[400px] max-[440px]:h-[76px] 
             max-[440px]:flex-col max-[440px]:gap-[0px]

             /* Tablet styles */
             min-[441px]:max-[768px]:w-[688px]
             min-[441px]:max-[768px]:h-[86px]
             min-[441px]:max-[768px]:gap-[24px]"
          >


            <div
              className="w-[1026px] h-[78px] flex items-center justify-center 
             font-bold text-[32px] leading-[78px] text-center font-inter 
             bg-gradient-to-r from-[#007B82] to-[#001A1C] bg-clip-text text-transparent

             /* Mobile styles */
             max-[440px]:w-[400px] max-[440px]:h-[30px] 
             max-[440px]:text-[18px] max-[440px]:leading-[30px] 
             max-[440px]:bg-gradient-to-r max-[440px]:from-[#001A1C] 
             max-[440px]:to-[#007B82]

             /* Tablet styles */
             min-[441px]:max-[768px]:w-[688px]
             min-[441px]:max-[768px]:h-[22px]
             min-[441px]:max-[768px]:text-[24px]
             min-[441px]:max-[768px]:leading-[22px]"
            >
              Spaces That Inspire You
            </div>


            <div className="w-[1026px] min-h-[56px] text-[20px] leading-[28px] text-center text-[#000000] font-inter font-normal
              /* Mobile styles */
              max-[440px]:w-[400px] max-[440px]:h-[34px] max-[440px]:text-[12px]
              max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:text-center max-[440px]:font-[400]

              /* Tablet styles */
              min-[441px]:max-[768px]:w-[688px]
              min-[441px]:max-[768px]:h-[40px]
              min-[441px]:max-[768px]:text-[14px]
              min-[441px]:max-[768px]:leading-[140%]
              min-[441px]:max-[768px]:font-[400]"
            >
              Explore handpicked collections for every corner of your home —
              from cozy balconies to focused work zones.
            </div>

          </div>

         <div className="w-[1280px] h-[853px] ml-[30px] grid grid-cols-1 md:grid-cols-3 gap-y-1 gap-10 sm:gap-15 mt-[-20px] p-5 sm:p-10 
  max-[440px]:hidden 
  min-[441px]:max-[768px]:hidden">

            <RoomCard
              roomName="Living Room"
              originalImage={dragImg1_1}
              transformedImage={dragImg1_2}
              roomKey="livingRoom"
            />

            <RoomCard
              roomName="Kitchen"
              originalImage={dragImg2_1}
              transformedImage={dragImg2_2}
              roomKey="kitchen"
            />

            <RoomCard
              roomName="Kids Room"
              originalImage={dragImg3_1}
              transformedImage={dragImg3_2}
              roomKey="kidsRoom"
            />

            <RoomCard
              roomName="Dining Room"
              originalImage={dragImg1_2}
              transformedImage={dragImg1_1}
              roomKey="diningRoom"
            />

            <RoomCard
              roomName="Laundry Room"
              originalImage={dragImg2_2}
              transformedImage={dragImg2_1}
              roomKey="laundryRoom"
            />

            <RoomCard
              roomName="Study Room"
              originalImage={dragImg3_2}
              transformedImage={dragImg3_1}
              roomKey="studyRoom"
            />
          </div>
 
       {/* TABLET 2x2 GRID – only visible between 441px and 768px */}
<div className="
  hidden 
  min-[441px]:max-[768px]:grid 
  min-[441px]:max-[768px]:grid-cols-2 
  min-[441px]:max-[768px]:w-[688px] 
  min-[441px]:max-[768px]:h-[614px] 
  min-[441px]:max-[768px]:gap-[16px] 
  min-[441px]:max-[768px]:justify-center 
  min-[441px]:max-[768px]:items-center 
  min-[441px]:max-[768px]:mx-auto 
  min-[441px]:max-[768px]:mt-[-20px] 
  min-[441px]:max-[768px]:p-5">


  <RoomCard
    roomName="Living Room"
    originalImage={dragImg1_1}
    transformedImage={dragImg1_2}
    roomKey="livingRoom"
  />
  <RoomCard
    roomName="Kitchen"
    originalImage={dragImg2_1}
    transformedImage={dragImg2_2}
    roomKey="kitchen"
  />
  <RoomCard
    roomName="Dining Room"
    originalImage={dragImg1_2}
    transformedImage={dragImg1_1}
    roomKey="diningRoom"
  />
  <RoomCard
    roomName="Kids Room"
    originalImage={dragImg3_1}
    transformedImage={dragImg3_2}
    roomKey="kidsRoom"
  />
</div>

          {/* MOBILE CONTAINER - relative wrapper */}
          <div className="relative w-full px-4 py-4 md:hidden">

            {/* CHOOSE AREA - top right for <441px */}
            <div className="hidden max-[440px]:flex absolute top-[-34px] right-0 z-10">
              <div className="w-[107px] h-[30px] rounded-[8px] border border-[#007B82] border-solid p-[8px] flex items-center gap-[8px] bg-white">
                <select
                  value={selectedArea}
                  onChange={handleAreaChange}
                  className="w-full text-[#007B82] cursor-pointer text-[14px] font-medium outline-none bg-transparent"
                >
                  <option value="" disabled>Choose Area</option>
                  <option value="floor">Floor</option>
                  <option value="office">Office</option>
                  <option value="gym">Gym</option>
                  <option value="balcony">Balcony</option>
                </select>

                {/* Custom dropdown arrow */}
                <svg
                  className="w-[14px] h-[14px] text-[#007B82] pointer-events-none"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* 2x2 MOBILE CARD GRID */}
            <div className="grid grid-cols-2 gap-8 w-full">
              <RoomCard
                roomName="Living Room"
                originalImage={dragImg1_1}
                transformedImage={dragImg1_2}
                roomKey="livingRoom"
              />
              <RoomCard
                roomName="Kitchen"
                originalImage={dragImg2_1}
                transformedImage={dragImg2_2}
                roomKey="kitchen"
              />
              <RoomCard
                roomName="Dining Room"
                originalImage={dragImg1_2}
                transformedImage={dragImg1_1}
                roomKey="diningRoom"
              />
              <RoomCard
                roomName="Kids Room"
                originalImage={dragImg3_1}
                transformedImage={dragImg3_2}
                roomKey="kidsRoom"
              />
              
            </div>
          </div>
          <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-860px] right-[-1350px]">
            <select name="" id="" className="text-[#007B82] cursor-pointer">
              <option value="" disabled>Choose Area</option> // ✅ remove selected
              <option value="" className="text-[#2a2a2a]">
                Floor
              </option>
              <option value="" className="text-[#2a2a2a]">
                Office
              </option>
              <option value="" className="text-[#2a2a2a]">
                Gym
              </option>
              <option value="" className="text-[#2a2a2a]">
                Palcony
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}