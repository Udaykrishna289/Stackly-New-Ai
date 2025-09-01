// //ImageGeneration.jsx result page
// import React, { useState, useEffect } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import { PacmanLoader } from "react-spinners";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import SideArrow from "../../assets/pricing-pg/sideArrow.png";
// import Report from "../../assets/product-pg/report.png";
// import More from "../../assets/product-pg/more.png";
// import Download from "../../assets/product-pg/do.png";
// import Share from "../../assets/product-pg/share.png";
// import Split from "../../assets/product-pg/split.png";

// export default function ImageGeneration() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [originalImage, setOriginalImage] = useState(null);
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [selectedStyle, setSelectedStyle] = useState("interior");
//   const [buildingType, setBuildingType] = useState("residential");
//   const [roomType, setRoomType] = useState("living room");
//   const [roomStyle, setRoomStyle] = useState("modern");
//   const [numDesigns, setNumDesigns] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);
//   const [currentView, setCurrentView] = useState("split"); // 'split' or 'slide'
//   const [error, setError] = useState(null);

//   const backendBaseUrl = "http://localhost:8000";

//   useEffect(() => {
//   if (location.state) {
//     // Handle originalImage (string URL or File)
//     if (location.state.originalImage) {
//       if (typeof location.state.originalImage === "string") {
//         setOriginalImage(location.state.originalImage);
//       } else {
//         setOriginalImage(URL.createObjectURL(location.state.originalImage));
//       }
//     }

//     // Process generatedImages
//     if (location.state.generatedImages) {
//       const processedImages = location.state.generatedImages.map((img) => {
//         let url = "";
//         if (typeof img === "string") {
//           url = img;
//         } else if (img.url) {
//           url = img.url;
//         } else if (img instanceof Blob) {
//           url = URL.createObjectURL(img);
//         } else {
//           // fallback if no url
//           url = "";
//         }

//         // Prepend backend URL if url is relative (doesn't start with http or blob)
//         if (url && !url.startsWith("http") && !url.startsWith("blob:")) {
//           url = backendBaseUrl + url;
//         }

//         return {
//           url,
//           id: img.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//           ...img, // spread any other props if needed
//         };
//       });
//       setGeneratedImages(processedImages);
//     }
//   }
// }, [location.state]);

//   // Clean up object URLs
//   useEffect(() => {
//   return () => {
//     if (originalImage && originalImage.startsWith("blob:")) {
//       URL.revokeObjectURL(originalImage);
//     }
//     generatedImages.forEach((img) => {
//       if (img.url && img.url.startsWith("blob:")) {
//         URL.revokeObjectURL(img.url);
//       }
//     });
//   };
// }, [originalImage, generatedImages]);

//   const handleGenerateDesigns = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Replace with actual API call if needed for re-generation
//       setTimeout(() => {
//         const newDesigns = Array.from({ length: numDesigns }, (_, i) => ({
//           id: Date.now() + i,
//           url: `https://example.com/generated-image-${i}.jpg`,
//           style: selectedStyle,
//           timestamp: new Date().toISOString(),
//         }));
//         setGeneratedImages([...generatedImages, ...newDesigns]);
//         setIsLoading(false);
//       }, 2000);
//     } catch (err) {
//       console.error("Generation error:", err);
//       setError("Failed to generate designs. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = (imageUrl) => {
//     if (!imageUrl) return;
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `design-${Date.now()}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleShare = (imageUrl) => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Check out my design!",
//           text: "I created this using our awesome design tool",
//           url: imageUrl,
//         })
//         .catch((err) => console.error("Error sharing:", err));
//     } else {
//       prompt("Copy this link to share:", imageUrl);
//     }
//   };

//   const handleReport = (imageId) => {
//     const reason = prompt("Please enter the reason for reporting:");
//     if (reason) {
//       alert("Thank you for your report. We'll review this design.");
//     }
//   };


//   return (
//     <div>
//       <section className="w-full h-[1340px] flex justify-center items-center bg-[#002628]">
//         <div className="w-[1280px] h-[1199px]">
//           <div className="w-[1280px] h-[287px] rounded-tl-[20px] rounded-tr-[20px] bg-gradient-to-t from-[#002628] to-[#00646A] via-[#00B0BA] flex flex-col justify-center items-center gap-4">
//             <div className="w-[658px] h-[53px] font-bold text-[38px] leading-[140%] tracking-[20px] text-center text-white">
//               PICK YOUR STYLE
//             </div>
//             <div className="w-[658px] h-[121px] flex justify-between items-center">
//               {/* Style Selection Buttons */}
//               {["interior", "exteriors", "outdoors"].map((style) => (
//                 <div
//                   key={style}
//                   className="w-[101px] h-[121px] flex flex-col justify-center items-center gap-[20px] cursor-pointer"
//                   onClick={() => setSelectedStyle(style)}
//                 >
//                   <div
//                     className={`w-[70px] h-[70px] rounded-[90px] ${selectedStyle === style
//                       ? "bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] border-[2px] border-solid border-white"
//                       : "bg-[#FFFFFF1A]"
//                       } drop-shadow-[0_2px_4px_0 #00B0BA4D] flex justify-center items-center`}
//                   >
//                     <img
//                       src={
//                         style === "interior"
//                           ? Interior
//                           : style === "exteriors"
//                             ? Home
//                             : Tree
//                       }
//                       alt={style}
//                     />
//                   </div>
//                   <div className="w-[101px] h-[31px] font-semibold text-[22px] leading-[140%] text-center text-white">
//                     {style.charAt(0).toUpperCase() + style.slice(1)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="w-[1280px] h-[912px] rounded-bl-[20px] rounded-br-[20px] bg-[white] drop-shadow-[0_1px_4px_0 #00000059] p-[20px]">
//             <div className="w-[1240px] h-[868px] rounded-[6px] flex flex-col justify-start items-start gap-[30px]">
//               {/* Navigation Controls */}
//               <div className="w-[100%] h-[30px] flex justify-between">
//                 <Link to="/">
//                   <div className="w-[75px] flex justify-center items-center cursor-pointer">
//                     <img
//                       src={SideArrow}
//                       alt="Back"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                       Back
//                     </div>
//                   </div>
//                 </Link>

//                 <div className="w-[350px] h-[25px] flex justify-center items-center gap-[32px]">
//                   <div
//                     className="w-[105px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() => handleDownload(designs[0]?.id)}
//                   >
//                     <img
//                       src={Download}
//                       alt="Download"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                       Download
//                     </div>
//                   </div>
//                   <div
//                     className="w-[73px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() => handleShare(designs[0]?.id)}
//                   >
//                     <img
//                       src={Share}
//                       alt="Share"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                       Share
//                     </div>
//                   </div>
//                   <div
//                     className="w-[80px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() => handleReport(designs[0]?.id)}
//                   >
//                     <img
//                       src={Report}
//                       alt="Report"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                       Report
//                     </div>
//                   </div>
//                   <div
//                     className="w-[75px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() => setShowMoreOptions(!showMoreOptions)}
//                   >
//                     <img
//                       src={More}
//                       alt="More options"
//                       className="w-[24px] h-[24px]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* More Options Dropdown */}
//               {showMoreOptions && (
//                 <div className="absolute right-[40px] top-[340px] bg-white shadow-lg rounded-md p-2 z-10">
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Save to favorites
//                   </div>
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Duplicate design
//                   </div>
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Delete design
//                   </div>
//                 </div>
//               )}

//               {/* Form Controls */}
//               <div className="w-[1177px] h-[74px] flex justify-between items-center">
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Building Type
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <select
//                       value={buildingType}
//                       onChange={(e) => setBuildingType(e.target.value)}
//                       className="w-[100%] outline-none"
//                     >
//                       <option value="residential">Residential</option>
//                       <option value="commercial">Commercial</option>
//                       <option value="industrial">Industrial</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Room Type
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <select
//                       value={roomType}
//                       onChange={(e) => setRoomType(e.target.value)}
//                       className="w-[100%] outline-none"
//                     >
//                       <option value="living room">Living Room</option>
//                       <option value="bedroom">Bedroom</option>
//                       <option value="kitchen">Kitchen</option>
//                       <option value="bathroom">Bathroom</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Room Style
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <select
//                       value={roomStyle}
//                       onChange={(e) => setRoomStyle(e.target.value)}
//                       className="w-[100%] outline-none"
//                     >
//                       <option value="modern">Modern</option>
//                       <option value="traditional">Traditional</option>
//                       <option value="minimalist">Minimalist</option>
//                       <option value="industrial">Industrial</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Number Of Designs
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <input
//                       type="number"
//                       min="1"
//                       max="10"
//                       value={numDesigns}
//                       onChange={(e) => setNumDesigns(e.target.value)}
//                       className="w-[100%] outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Image Display */}
//               <div className="w-[1176px] h-[360px] flex flex-col gap-[10px] p-[20px]">
//                 <div className="w-[100%] h-[24px] flex justify-end">
//                   <div
//                     className="w-[180px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() =>
//                       setCurrentView(
//                         currentView === "split" ? "slide" : "split"
//                       )
//                     }
//                   >
//                     <img
//                       src={Split}
//                       alt="Toggle view"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[18px] leading-[156%] text-[#2A2A2A]">
//                       {currentView === "split" ? "Slide view" : "Split view"}
//                     </div>
//                   </div>
//                 </div>

//                 {currentView === "split" ? (
//                   <div className="w-[100%] h-[336px] flex justify-between items-center gap-4">
//                     <div>
//                       {originalImage && (
//                         <img
//                           src={originalImage}
//                           alt="Original design"
//                           className="max-h-[336px]"
//                         />
//                       )}
//                     </div>
//                     <div>
//                       {generatedImages.length > 0 && (
//                         <img
//                           src={generatedImages[0].url}
//                           alt="Generated design"
//                           className="max-h-[336px]"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="w-[100%] h-[336px] overflow-x-auto flex gap-4">
//                     {designs.map((design) => (
//                       <div key={design.id} className="flex-shrink-0">
//                         <img
//                           src={design.after}
//                           alt={`Generated design ${design.id}`}
//                           className="h-[336px]"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Create More Designs Button */}
//               <div className="w-[100%] h-[55px] flex justify-center items-center mt-[50px]">
//                 <button
//                   onClick={handleGenerateDesigns}
//                   disabled={isLoading}
//                   className={`w-[193px] h-[54px] flex justify-center items-center border-[1px] border-solid border-[#00B0BA] font-semibold text-[18px] rounded-[10px] text-[#2A2A2A] ${isLoading
//                     ? "opacity-50 cursor-not-allowed"
//                     : "hover:bg-[#00B0BA20]"
//                     }`}
//                 >
//                   {isLoading ? "Generating..." : "Create More Designs"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//Images show 
// import React, { useState, useEffect } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import { PacmanLoader } from "react-spinners";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import SideArrow from "../../assets/pricing-pg/sideArrow.png";
// import Report from "../../assets/product-pg/report.png";
// import More from "../../assets/product-pg/more.png";
// import Download from "../../assets/product-pg/do.png";
// import Share from "../../assets/product-pg/share.png";
// import Split from "../../assets/product-pg/split.png";

// export default function ImageGeneration() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [originalImage, setOriginalImage] = useState(null);
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [selectedStyle, setSelectedStyle] = useState("interior");
//   const [buildingType, setBuildingType] = useState("residential");
//   const [roomType, setRoomType] = useState("living room");
//   const [roomStyle, setRoomStyle] = useState("modern");
//   const [numDesigns, setNumDesigns] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);
//   const [currentView, setCurrentView] = useState("split"); // 'split' or 'slide'
//   const [error, setError] = useState(null);

//   const backendBaseUrl = "http://localhost:8000";

//   useEffect(() => {
//     if (location.state) {
//       // Handle originalImage (string URL or File)
//       if (location.state.originalImage) {
//         if (typeof location.state.originalImage === "string") {
//           setOriginalImage(location.state.originalImage);
//         } else {
//           setOriginalImage(URL.createObjectURL(location.state.originalImage));
//         }
//       }

//       // Process generatedImages
//       if (location.state.generatedImages) {
//         const processedImages = location.state.generatedImages.map((img) => {
//           let url = "";
//           if (typeof img === "string") {
//             url = img;
//           } else if (img.url) {
//             url = img.url;
//           } else if (img instanceof Blob) {
//             url = URL.createObjectURL(img);
//           } else {
//             url = "";
//           }

//           if (url && !url.startsWith("http") && !url.startsWith("blob:")) {
//             url = backendBaseUrl + url;
//           }

//           return {
//             url,
//             id: img.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//             ...img,
//           };
//         });
//         setGeneratedImages(processedImages);
//       }
//     }
//   }, [location.state]);

//   // Clean up object URLs
//   useEffect(() => {
//     return () => {
//       if (originalImage && originalImage.startsWith("blob:")) {
//         URL.revokeObjectURL(originalImage);
//       }
//       generatedImages.forEach((img) => {
//         if (img.url && img.url.startsWith("blob:")) {
//           URL.revokeObjectURL(img.url);
//         }
//       });
//     };
//   }, [originalImage, generatedImages]);

//   const handleDownload = (imageUrl, index) => {
//     if (!imageUrl) return;
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `design-${index}-${Date.now()}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleShare = (imageUrl) => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Check out my design!",
//           text: "I created this using our awesome design tool",
//           url: imageUrl,
//         })
//         .catch((err) => console.error("Error sharing:", err));
//     } else {
//       prompt("Copy this link to share:", imageUrl);
//     }
//   };

//   const handleReport = (imageId) => {
//     const reason = prompt("Please enter the reason for reporting:");
//     if (reason) {
//       alert("Thank you for your report. We'll review this design.");
//     }
//   };

//   const handleGenerateDesigns = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Replace with actual API call if needed for re-generation
//       setTimeout(() => {
//         const newDesigns = Array.from({ length: numDesigns }, (_, i) => ({
//           id: Date.now() + i,
//           url: `https://example.com/generated-image-${i}.jpg`,
//           style: selectedStyle,
//           timestamp: new Date().toISOString(),
//         }));
//         setGeneratedImages([...generatedImages, ...newDesigns]);
//         setIsLoading(false);
//       }, 2000);
//     } catch (err) {
//       console.error("Generation error:", err);
//       setError("Failed to generate designs. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <section className="w-full h-[1340px] flex justify-center items-center bg-[#002628]">
//         <div className="w-[1280px] h-[1199px]">
//           <div className="w-[1280px] h-[287px] rounded-tl-[20px] rounded-tr-[20px] bg-gradient-to-t from-[#002628] to-[#00646A] via-[#00B0BA] flex flex-col justify-center items-center gap-4">
//             <div className="w-[658px] h-[53px] font-bold text-[38px] leading-[140%] tracking-[20px] text-center text-white">
//               PICK YOUR STYLE
//             </div>
//             <div className="w-[658px] h-[121px] flex justify-between items-center">
//               {["interior", "exteriors", "outdoors"].map((style) => (
//                 <div
//                   key={style}
//                   className="w-[101px] h-[121px] flex flex-col justify-center items-center gap-[20px] cursor-pointer"
//                   onClick={() => setSelectedStyle(style)}
//                 >
//                   <div
//                     className={`w-[70px] h-[70px] rounded-[90px] ${
//                       selectedStyle === style
//                         ? "bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] border-[2px] border-solid border-white"
//                         : "bg-[#FFFFFF1A]"
//                     } drop-shadow-[0_2px_4px_0 #00B0BA4D] flex justify-center items-center`}
//                   >
//                     <img
//                       src={
//                         style === "interior"
//                           ? Interior
//                           : style === "exteriors"
//                           ? Home
//                           : Tree
//                       }
//                       alt={style}
//                     />
//                   </div>
//                   <div className="w-[101px] h-[31px] font-semibold text-[22px] leading-[140%] text-center text-white">
//                     {style.charAt(0).toUpperCase() + style.slice(1)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="w-[1280px] h-[912px] rounded-bl-[20px] rounded-br-[20px] bg-[white] drop-shadow-[0_1px_4px_0 #00000059] p-[20px]">
//             <div className="w-[1240px] h-[868px] rounded-[6px] flex flex-col justify-start items-start gap-[30px]">
//               <div className="w-[100%] h-[30px] flex justify-between">
//                 <Link to="/">
//                   <div className="w-[75px] flex justify-center items-center cursor-pointer">
//                     <img
//                       src={SideArrow}
//                       alt="Back"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                       Back
//                     </div>
//                   </div>
//                 </Link>

//                 <div className="w-[350px] h-[25px] flex justify-center items-center gap-[32px]">
//                   {generatedImages.length > 0 && (
//                     <>
//                       <div
//                         className="w-[105px] flex justify-center items-center gap-1 cursor-pointer"
//                         onClick={() => handleDownload(generatedImages[0].url, 0)}
//                       >
//                         <img
//                           src={Download}
//                           alt="Download"
//                           className="w-[24px] h-[24px]"
//                         />
//                         <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                           Download
//                         </div>
//                       </div>
//                       <div
//                         className="w-[73px] flex justify-center items-center gap-1 cursor-pointer"
//                         onClick={() => handleShare(generatedImages[0].url)}
//                       >
//                         <img
//                           src={Share}
//                           alt="Share"
//                           className="w-[24px] h-[24px]"
//                         />
//                         <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                           Share
//                         </div>
//                       </div>
//                       <div
//                         className="w-[80px] flex justify-center items-center gap-1 cursor-pointer"
//                         onClick={() => handleReport(generatedImages[0].id)}
//                       >
//                         <img
//                           src={Report}
//                           alt="Report"
//                           className="w-[24px] h-[24px]"
//                         />
//                         <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                           Report
//                         </div>
//                       </div>
//                     </>
//                   )}
//                   <div
//                     className="w-[75px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() => setShowMoreOptions(!showMoreOptions)}
//                   >
//                     <img
//                       src={More}
//                       alt="More options"
//                       className="w-[24px] h-[24px]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {showMoreOptions && (
//                 <div className="absolute right-[40px] top-[340px] bg-white shadow-lg rounded-md p-2 z-10">
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Save to favorites
//                   </div>
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Duplicate design
//                   </div>
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Delete design
//                   </div>
//                 </div>
//               )}

//               <div className="w-[1177px] h-[74px] flex justify-between items-center">
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Building Type
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <select
//                       value={buildingType}
//                       onChange={(e) => setBuildingType(e.target.value)}
//                       className="w-[100%] outline-none"
//                     >
//                       <option value="residential">Residential</option>
//                       <option value="commercial">Commercial</option>
//                       <option value="industrial">Industrial</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Room Type
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <select
//                       value={roomType}
//                       onChange={(e) => setRoomType(e.target.value)}
//                       className="w-[100%] outline-none"
//                     >
//                       <option value="living room">Living Room</option>
//                       <option value="bedroom">Bedroom</option>
//                       <option value="kitchen">Kitchen</option>
//                       <option value="bathroom">Bathroom</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Room Style
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <select
//                       value={roomStyle}
//                       onChange={(e) => setRoomStyle(e.target.value)}
//                       className="w-[100%] outline-none"
//                     >
//                       <option value="modern">Modern</option>
//                       <option value="traditional">Traditional</option>
//                       <option value="minimalist">Minimalist</option>
//                       <option value="industrial">Industrial</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
//                   <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
//                     Number Of Designs
//                   </div>
//                   <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid border-[#00B0BA] flex justify-center items-center p-[10px]">
//                     <input
//                       type="number"
//                       min="1"
//                       max="10"
//                       value={numDesigns}
//                       onChange={(e) => setNumDesigns(parseInt(e.target.value))}
//                       className="w-[100%] outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="w-[1176px] h-[360px] flex flex-col gap-[10px] p-[20px]">
//                 <div className="w-[100%] h-[24px] flex justify-end">
//                   <div
//                     className="w-[180px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() =>
//                       setCurrentView(currentView === "split" ? "slide" : "split")
//                     }
//                   >
//                     <img
//                       src={Split}
//                       alt="Toggle view"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[18px] leading-[156%] text-[#2A2A2A]">
//                       {currentView === "split" ? "Slide view" : "Split view"}
//                     </div>
//                   </div>
//                 </div>

//                 {isLoading ? (
//                   <div className="w-full h-full flex justify-center items-center">
//                     <PacmanLoader color="#00B0BA" size={25} />
//                   </div>
//                 ) : currentView === "split" ? (
//                   <div className="w-[100%] h-[336px] overflow-y-auto flex flex-col gap-4">
//                     {generatedImages.map((generatedImage, index) => (
//                       <div key={generatedImage.id} className="flex justify-between items-center gap-4">
//                         <div className="flex-1">
//                           {originalImage && (
//                             <img
//                               src={originalImage}
//                               alt="Original design"
//                               className="max-h-[300px] object-contain"
//                             />
//                           )}
//                         </div>
//                         <div className="flex-1">
//                           <img
//                             src={generatedImage.url}
//                             alt={`Generated design ${index + 1}`}
//                             className="max-h-[300px] object-contain"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="w-[100%] h-[336px] overflow-x-auto flex gap-4">
//                     {generatedImages.map((generatedImage, index) => (
//                       <div key={generatedImage.id} className="flex-shrink-0 h-full">
//                         <img
//                           src={generatedImage.url}
//                           alt={`Generated design ${index + 1}`}
//                           className="h-full object-contain"
//                         />
//                         <div className="text-center mt-2">Design {index + 1}</div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="w-[100%] h-[55px] flex justify-center items-center mt-[50px]">
//                 <button
//                   onClick={handleGenerateDesigns}
//                   disabled={isLoading}
//                   className={`w-[193px] h-[54px] flex justify-center items-center border-[1px] border-solid border-[#00B0BA] font-semibold text-[18px] rounded-[10px] text-[#2A2A2A] ${
//                     isLoading
//                       ? "opacity-50 cursor-not-allowed"
//                       : "hover:bg-[#00B0BA20]"
//                   }`}
//                 >
//                   {isLoading ? "Generating..." : "Create More Designs"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import { PacmanLoader } from "react-spinners";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import SideArrow from "../../assets/pricing-pg/sideArrow.png";
// import Report from "../../assets/product-pg/report.png";
// import More from "../../assets/product-pg/more.png";
// import Download from "../../assets/product-pg/do.png";
// import Share from "../../assets/product-pg/share.png";
// import Split from "../../assets/product-pg/split.png";

// export default function ImageGeneration() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [originalImage, setOriginalImage] = useState(null);
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [selectedStyle, setSelectedStyle] = useState("interior");
//   const [buildingType, setBuildingType] = useState("residential");
//   const [roomType, setRoomType] = useState("living room");
//   const [roomStyle, setRoomStyle] = useState("modern");
//   const [numDesigns, setNumDesigns] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);
//   const [error, setError] = useState(null);

//   const backendBaseUrl = "http://localhost:8000";

//   useEffect(() => {
//     if (location.state) {
//       // Handle originalImage
//       if (location.state.originalImage) {
//         if (typeof location.state.originalImage === "string") {
//           setOriginalImage(location.state.originalImage);
//         } else {
//           setOriginalImage(URL.createObjectURL(location.state.originalImage));
//         }
//       }

//       // Process generatedImages
//       if (location.state.generatedImages) {
//         const processedImages = location.state.generatedImages.map((img) => {
//           let url = "";
//           if (typeof img === "string") {
//             url = img;
//           } else if (img.url) {
//             url = img.url;
//           } else if (img instanceof Blob) {
//             url = URL.createObjectURL(img);
//           } else {
//             url = "";
//           }

//           if (url && !url.startsWith("http") && !url.startsWith("blob:")) {
//             url = backendBaseUrl + url;
//           }

//           return {
//             url,
//             id: img.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//             ...img,
//           };
//         });
//         setGeneratedImages(processedImages);
//       }
//     }
//   }, [location.state]);

//   // Clean up object URLs
//   useEffect(() => {
//     return () => {
//       if (originalImage && originalImage.startsWith("blob:")) {
//         URL.revokeObjectURL(originalImage);
//       }
//       generatedImages.forEach((img) => {
//         if (img.url && img.url.startsWith("blob:")) {
//           URL.revokeObjectURL(img.url);
//         }
//       });
//     };
//   }, [originalImage, generatedImages]);

//   const handleDownload = (imageUrl, index) => {
//     if (!imageUrl) return;
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `design-${index}-${Date.now()}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleShare = (imageUrl) => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Check out my design!",
//           text: "I created this using our awesome design tool",
//           url: imageUrl,
//         })
//         .catch((err) => console.error("Error sharing:", err));
//     } else {
//       prompt("Copy this link to share:", imageUrl);
//     }
//   };

//   const handleReport = (imageId) => {
//     const reason = prompt("Please enter the reason for reporting:");
//     if (reason) {
//       alert("Thank you for your report. We'll review this design.");
//     }
//   };

//   const handleGenerateDesigns = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Replace with actual API call if needed for re-generation
//       setTimeout(() => {
//         const newDesigns = Array.from({ length: numDesigns }, (_, i) => ({
//           id: Date.now() + i,
//           url: `https://example.com/generated-image-${i}.jpg`,
//           style: selectedStyle,
//           timestamp: new Date().toISOString(),
//         }));
//         setGeneratedImages([...generatedImages, ...newDesigns]);
//         setIsLoading(false);
//       }, 2000);
//     } catch (err) {
//       console.error("Generation error:", err);
//       setError("Failed to generate designs. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   // Function to chunk array into pairs for 2-column layout
//   const chunkArray = (array, size) => {
//     const chunked = [];
//     for (let i = 0; i < array.length; i += size) {
//       chunked.push(array.slice(i, i + size));
//     }
//     return chunked;
//   };

//   // Combine original image with generated images for display
//   const allImages = originalImage 
//     ? [{ url: originalImage, id: "original", isOriginal: true }, ...generatedImages]
//     : generatedImages;

//   // Split into rows of 2 images each
//   const imageRows = chunkArray(allImages, 2);

//   return (
//     <div>
//       <section className="w-full min-h-screen flex justify-center items-center bg-[#002628]">
//         <div className="w-[1280px] min-h-[1199px]">
//           <div className="w-[1280px] h-[287px] rounded-tl-[20px] rounded-tr-[20px] bg-gradient-to-t from-[#002628] to-[#00646A] via-[#00B0BA] flex flex-col justify-center items-center gap-4">
//             <div className="w-[658px] h-[53px] font-bold text-[38px] leading-[140%] tracking-[20px] text-center text-white">
//               YOUR GENERATED DESIGNS
//             </div>
//             <div className="w-[658px] h-[121px] flex justify-between items-center">
//               {["interior", "exteriors", "outdoors"].map((style) => (
//                 <div
//                   key={style}
//                   className="w-[101px] h-[121px] flex flex-col justify-center items-center gap-[20px] cursor-pointer"
//                   onClick={() => setSelectedStyle(style)}
//                 >
//                   <div
//                     className={`w-[70px] h-[70px] rounded-[90px] ${
//                       selectedStyle === style
//                         ? "bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] border-[2px] border-solid border-white"
//                         : "bg-[#FFFFFF1A]"
//                     } drop-shadow-[0_2px_4px_0 #00B0BA4D] flex justify-center items-center`}
//                   >
//                     <img
//                       src={
//                         style === "interior"
//                           ? Interior
//                           : style === "exteriors"
//                           ? Home
//                           : Tree
//                       }
//                       alt={style}
//                     />
//                   </div>
//                   <div className="w-[101px] h-[31px] font-semibold text-[22px] leading-[140%] text-center text-white">
//                     {style.charAt(0).toUpperCase() + style.slice(1)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="w-[1280px] min-h-[912px] rounded-bl-[20px] rounded-br-[20px] bg-[white] drop-shadow-[0_1px_4px_0 #00000059] p-[20px]">
//             <div className="w-[1240px] min-h-[868px] rounded-[6px] flex flex-col justify-start items-start gap-[30px]">
//               <div className="w-[100%] h-[30px] flex justify-between">
//                 <Link to="/">
//                   <div className="w-[75px] flex justify-center items-center cursor-pointer">
//                     <img
//                       src={SideArrow}
//                       alt="Back"
//                       className="w-[24px] h-[24px]"
//                     />
//                     <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                       Back
//                     </div>
//                   </div>
//                 </Link>

//                 <div className="w-[350px] h-[25px] flex justify-center items-center gap-[32px]">
//                   {generatedImages.length > 0 && (
//                     <>
//                       <div
//                         className="w-[105px] flex justify-center items-center gap-1 cursor-pointer"
//                         onClick={() => handleDownload(generatedImages[0].url, 0)}
//                       >
//                         <img
//                           src={Download}
//                           alt="Download"
//                           className="w-[24px] h-[24px]"
//                         />
//                         <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                           Download All
//                         </div>
//                       </div>
//                       <div
//                         className="w-[73px] flex justify-center items-center gap-1 cursor-pointer"
//                         onClick={() => handleShare(generatedImages[0].url)}
//                       >
//                         <img
//                           src={Share}
//                           alt="Share"
//                           className="w-[24px] h-[24px]"
//                         />
//                         <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
//                           Share
//                         </div>
//                       </div>
//                     </>
//                   )}
//                   <div
//                     className="w-[75px] flex justify-center items-center gap-1 cursor-pointer"
//                     onClick={() => setShowMoreOptions(!showMoreOptions)}
//                   >
//                     <img
//                       src={More}
//                       alt="More options"
//                       className="w-[24px] h-[24px]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {showMoreOptions && (
//                 <div className="absolute right-[40px] top-[340px] bg-white shadow-lg rounded-md p-2 z-10">
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Save to favorites
//                   </div>
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Duplicate design
//                   </div>
//                   <div className="py-1 cursor-pointer hover:bg-gray-100 px-3">
//                     Delete design
//                   </div>
//                 </div>
//               )}

//               {/* Image Grid Display */}
//               <div className="w-full p-4">
//                 {isLoading ? (
//                   <div className="w-full h-[500px] flex justify-center items-center">
//                     <PacmanLoader color="#00B0BA" size={25} />
//                     <span className="ml-4">Generating designs...</span>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-2 gap-6">
//                     {imageRows.map((row, rowIndex) => (
//                       <div key={`row-${rowIndex}`} className="flex gap-6 w-full">
//                         {row.map((image, colIndex) => (
//                           <div 
//                             key={image.id} 
//                             className="flex-1 flex flex-col items-center"
//                           >
//                             <div className="relative group">
//                               <img
//                                 src={image.url}
//                                 alt={
//                                   image.isOriginal 
//                                     ? "Original design" 
//                                     : `Generated design ${rowIndex * 2 + colIndex}`
//                                 }
//                                 className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md"
//                               />
//                               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
//                                 {image.isOriginal ? "Original Image" : `Design ${rowIndex * 2 + colIndex}`}
//                               </div>
//                               <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                                 <button
//                                   onClick={() => handleDownload(image.url, rowIndex * 2 + colIndex)}
//                                   className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//                                 >
//                                   <img
//                                     src={Download}
//                                     alt="Download"
//                                     className="w-4 h-4"
//                                   />
//                                 </button>
//                               </div>
//                             </div>
//                             {!image.isOriginal && (
//                               <button
//                                 onClick={() => handleDownload(image.url, rowIndex * 2 + colIndex)}
//                                 className="mt-2 px-4 py-1 bg-[#00B0BA] text-white rounded-md hover:bg-[#007B82]"
//                               >
//                                 Download
//                               </button>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Create More Designs Button */}
//               <div className="w-[100%] h-[55px] flex justify-center items-center mt-[50px]">
//                 <button
//                   onClick={handleGenerateDesigns}
//                   disabled={isLoading}
//                   className={`w-[193px] h-[54px] flex justify-center items-center border-[1px] border-solid border-[#00B0BA] font-semibold text-[18px] rounded-[10px] text-[#2A2A2A] ${
//                     isLoading
//                       ? "opacity-50 cursor-not-allowed"
//                       : "hover:bg-[#00B0BA20]"
//                   }`}
//                 >
//                   {isLoading ? "Generating..." : "Create More Designs"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import { PacmanLoader } from "react-spinners";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import SideArrow from "../../assets/pricing-pg/sideArrow.png";
// import Report from "../../assets/product-pg/report.png";
// import More from "../../assets/product-pg/more.png";
// import Download from "../../assets/product-pg/do.png";
// import Share from "../../assets/product-pg/share.png";
// import axios from "axios";

// export default function ImageGeneration() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [originalImage, setOriginalImage] = useState(null);
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [selectedStyle, setSelectedStyle] = useState("interior");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);

//   const backendBaseUrl = "http://localhost:8000";

//   const [formData, setFormData] = useState(null);
//   const [uploadedFile, setUploadedFile] = useState(null);

//   useEffect(() => {
//     if (location.state) {
//       setFormData(location.state.formData);
//       setUploadedFile(location.state.uploadedFile);
//       // Handle original image
//       if (location.state.originalImage) {
//         let fileObj = location.state.originalImage;
//         if (typeof fileObj === "string") {
//           setOriginalImage({
//             url: fileObj,
//             id: "original",
//             label: "Original Image",
//             isOriginal: true,
//           });
//         } else {
//           const blobUrl = URL.createObjectURL(fileObj);
//           setOriginalImage({
//             url: blobUrl,
//             id: "original",
//             label: "Original Image",
//             isOriginal: true,
//           });
//           setUploadedFile(fileObj);
//         }
//       }

//       // Set form data
//       if (location.state.formData) {
//         setFormData(location.state.formData);
//       }

//       // Handle generated images
//       if (location.state.generatedImages) {
//         const processed = location.state.generatedImages.map((img, index) => {
//           let url = typeof img === "string" ? img : img.url || "";
//           if (url && !url.startsWith("http") && !url.startsWith("blob:")) {
//             url = backendBaseUrl + url;
//           }
//           return {
//             url,
//             id: img.id || `design-${index}-${Date.now()}`,
//             label: `Design ${index + 1}`,
//           };
//         });
//         setGeneratedImages(processed);
//       }
//     }
//   }, [location.state]);

//   useEffect(() => {
//     return () => {
//       if (originalImage?.url?.startsWith("blob:")) {
//         URL.revokeObjectURL(originalImage.url);
//       }
//       generatedImages.forEach((img) => {
//         if (img.url?.startsWith("blob:")) {
//           URL.revokeObjectURL(img.url);
//         }
//       });
//     };
//   }, [originalImage, generatedImages]);

//   const generateMoreImages = async () => {
//     if (!formData || !uploadedFile) return;

//     setIsLoading(true);
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('user_id', formData.userId); // Replace with actual user ID
//       formDataToSend.append('category', formData.category);
//       formDataToSend.append('type_detail', formData.typeDetail);
//       formDataToSend.append('style', formData.style);
//       formDataToSend.append('ai_strength', formData.aiStrength);
//       formDataToSend.append('uploaded_image', uploadedFile);
//       //formData.append('user_id', userId); 

//       const response = await axios.post(
//         `${backendBaseUrl}/api/generate/more-designs`,
//         formDataToSend,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       if (response.data.success === true) {
//         const newImages = response.data.designs.map((url, index) => ({
//           url: backendBaseUrl + url,
//           id: `more-design-${index}-${Date.now()}`,
//           label: `Additional Design ${generatedImages.length + index + 1}`
//         }));
//         setGeneratedImages([...generatedImages, ...newImages]);
//       }
//     } catch (error) {
//       console.error("Error generating more designs:", error);
//       alert("Failed to generate more designs. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = (imageUrl, label) => {
//     if (!imageUrl) return;
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = `${label.replace(" ", "-")}-${Date.now()}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleDownloadAll = () => {
//     if (originalImage) handleDownload(originalImage.url, originalImage.label);
//     generatedImages.forEach((img) => handleDownload(img.url, img.label));
//   };

//   const getImagePairs = () => {
//     const pairs = [];

//     // First row: Original + first generated image
//     if (originalImage && generatedImages.length > 0) {
//       pairs.push([originalImage, generatedImages[0]]);
//     } else if (originalImage) {
//       pairs.push([originalImage, null]);
//     } else if (generatedImages.length > 0) {
//       pairs.push([generatedImages[0], generatedImages[1] || null]);
//     }

//     // Remaining rows: next pairs of generated images
//     let startIndex = originalImage ? 1 : 2;

//     for (let i = startIndex; i < generatedImages.length; i += 2) {
//       const first = generatedImages[i];
//       const second = generatedImages[i + 1] || null;
//       pairs.push([first, second]);
//     }

//     return pairs;
//   };

//   return (
//     // <div className="bg-[#002628] min-h-screen">
//     <div className="bg-white min-h-screen">

//       {/* Header */}
//       <div className="w-full h-[161px] bg-[linear-gradient(180deg,_#00646A_0%,_#002628_99.99%,_#00B0BA_100%)] rounded-t-xl flex items-center justify-center text-center">
//         <h1 className="text-[38px] font-bold text-white">
//           Generated Image
//         </h1>
//       </div>
//       <div className="max-w-6xl mx-auto">



//         {/* Main Content */}
//         <div className="bg-white rounded-b-xl shadow-lg p-6">
//           {/* Action Bar */}
//           <div className="flex justify-between items-center mb-8">
//             <Link to="/" className="flex items-center text-gray-800 hover:text-[#00B0BA]">
//               <img src={SideArrow} alt="Back" className="w-6 h-6 mr-2" />
//               <span>Back</span>
//             </Link>

//             <div className="flex space-x-6">
//               <button
//                 onClick={handleDownloadAll}
//                 className="flex items-center text-gray-800 hover:text-[#00B0BA]"
//               >
//                 <img src={Download} alt="Download" className="w-6 h-6 mr-2" />
//                 <span>Download All</span>
//               </button>
//               <button className="flex items-center text-gray-800 hover:text-[#00B0BA]">
//                 <img src={Share} alt="Share" className="w-6 h-6 mr-2" />
//                 <span>Share</span>
//               </button>
//               <button
//                 onClick={() => setShowMoreOptions(!showMoreOptions)}
//                 className="flex items-center text-gray-800 hover:text-[#00B0BA]"
//               >
//                 <img src={More} alt="More" className="w-6 h-6" />
//               </button>
//             </div>
//           </div>

//           {showMoreOptions && (
//             <div className="absolute right-8 bg-white shadow-lg rounded-md p-2 z-10 border border-gray-200">
//               <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//                 Save to favorites
//               </button>
//               <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//                 Duplicate design
//               </button>
//               <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
//                 Delete design
//               </button>
//             </div>
//           )}

//           {/* Image Grid */}
//           {isLoading ? (
//             <div className="flex justify-center items-center h-96">
//               <PacmanLoader color="#00B0BA" size={25} />
//               <span className="ml-4 text-gray-700">Generating designs...</span>
//             </div>
//           ) : (
//             <div className="space-y-8">
//               {getImagePairs().map((pair, rowIndex) => (
//                 <div key={`row-${rowIndex}`} className="flex space-x-8">
//                   {pair.map((image, colIndex) => (
//                     <div key={image?.id || `empty-${rowIndex}-${colIndex}`} className="flex-1">
//                       {image ? (
//                         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                           <div className="relative">
//                             <img
//                               src={image.url}
//                               alt={image.label}
//                               className="w-full h-auto max-h-96 object-contain"
//                             />
//                             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 text-center">
//                               {image.label}
//                             </div>
//                             <button
//                               onClick={() => handleDownload(image.url, image.label)}
//                               className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//                             >
//                               <img src={Download} alt="Download" className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
//                           <span className="text-gray-400">Empty Slot</span>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Generate More Button */}
//           <div className="mt-12 text-center">
//             <button
//               onClick={generateMoreImages}
//               disabled={isLoading}
//               className="bg-[#00B0BA] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#00858C] transition-colors disabled:opacity-50"
//             >
//               {isLoading ? "Generating..." : "Generate 2 More Designs"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//Good file 
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import More from "../../assets/product-pg/more.png";
import Download from "../../assets/product-pg/do.png";
import Share from "../../assets/product-pg/share.png";
import axios from "axios";

export default function ImageGeneration() {
  const location = useLocation();
  const navigate = useNavigate();

  const [originalImage, setOriginalImage] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [formData, setFormData] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const backendBaseUrl = "http://localhost:8000";

  // Track if this is an initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (originalImage || generatedImages.length > 0 || formData || uploadedFile) {
      const stateToSave = {
        originalImage,
        generatedImages,
        formData,
        uploadedFile: uploadedFile ? {
          name: uploadedFile.name,
          type: uploadedFile.type,
          size: uploadedFile.size,
          lastModified: uploadedFile.lastModified
        } : null
      };
      localStorage.setItem("imageGenState", JSON.stringify(stateToSave));
    }
  }, [originalImage, generatedImages, formData, uploadedFile]);

  // Load state from location.state or localStorage
  useEffect(() => {
    let state = location.state;

    if (!state) {
      const saved = localStorage.getItem("imageGenState");
      if (saved) {
        state = JSON.parse(saved);
      }
    }

    if (state) {
      setFormData(state.formData || null);

      if (state.originalImage) {
        const fileObj = state.originalImage;
        const url = typeof fileObj === "string" ? fileObj : fileObj.url || "";
        setOriginalImage({
          url,
          id: "original",
          label: "Original Image",
          isOriginal: true,
        });
      }

      if (state.uploadedFile) {
        // Create a dummy file object with metadata
        const file = new File([""], state.uploadedFile.name, {
          type: state.uploadedFile.type,
          lastModified: state.uploadedFile.lastModified
        });
        setUploadedFile(file);
      }

      if (state.generatedImages) {
        const processed = state.generatedImages.map((img, index) => {
          let url = typeof img === "string" ? img : img.url || "";
          if (url && !url.startsWith("http") && !url.startsWith("blob:")) {
            url = backendBaseUrl + url;
          }
          return {
            url,
            id: img.id || `design-${index}-${Date.now()}`,
            label: `Design ${index + 1}`,
          };
        });
        setGeneratedImages(processed);
      }
    }
    setIsInitialLoad(false);
  }, [location.state]);

  // Clean up blob URLs when images change or component unmounts
  useEffect(() => {
    return () => {
      if (originalImage?.url?.startsWith("blob:")) {
        URL.revokeObjectURL(originalImage.url);
      }
      generatedImages.forEach((img) => {
        if (img.url?.startsWith("blob:")) {
          URL.revokeObjectURL(img.url);
        }
      });
    };
  }, [originalImage, generatedImages]);

  // Clear localStorage only when tab is closed or navigating back to home
  useEffect(() => {
    let isInternalNavigation = false;

    const handleBeforeUnload = (e) => {
      // Only clear if not an internal navigation
      if (!isInternalNavigation) {
        localStorage.removeItem("imageGenState");
      }
    };

    const handlePopState = (e) => {
      // Check if we're navigating back to home
      if (window.location.pathname === "/") {
        localStorage.removeItem("imageGenState");
      }
    };

    // Track link clicks to detect internal navigation
    const handleClick = (e) => {
      const target = e.target.closest('a[href]');
      if (target && target.getAttribute('href') !== '/') {
        isInternalNavigation = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const fetchOriginalFile = async () => {
    try {
      const response = await fetch(originalImage.url);
      const blob = await response.blob();
      return new File([blob], uploadedFile.name, { type: uploadedFile.type });
    } catch (error) {
      console.error("Error fetching original file:", error);
      return null;
    }
  };

  const generateMoreImages = async () => {
    if (!formData) return;

    if (!uploadedFile) {
      alert("Image file lost after reload. Please go back and upload again.");
      return;
    }

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user_id", formData.userId);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("type_detail", formData.typeDetail);
      formDataToSend.append("style", formData.style);
      formDataToSend.append("ai_strength", formData.aiStrength);

      // Check if we have the actual file or just metadata
      let fileToUpload = uploadedFile;
      if (uploadedFile.size === 0) {
        // If we only have metadata, fetch the original file from the server
        fileToUpload = await fetchOriginalFile();
        if (!fileToUpload) {
          throw new Error("Could not retrieve original image");
        }
      }
      formDataToSend.append("uploaded_image", fileToUpload);

      const response = await axios.post(
        `${backendBaseUrl}/api/generate/more-designs`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success === true) {
        const newImages = response.data.designs.map((url, index) => ({
          url: backendBaseUrl + url,
          id: `more-design-${index}-${Date.now()}`,
          label: `Additional Design ${generatedImages.length + index + 1}`,
        }));
        setGeneratedImages([...generatedImages, ...newImages]);
      }
    } catch (error) {
      console.error("Error generating more designs:", error);
      alert("Failed to generate more designs. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (imageUrl, label) => {
  if (!imageUrl) return;

  try {
    let blobUrl;

    if (imageUrl.startsWith('data:image')) {
      // ✅ base64 image: convert to blob directly
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      blobUrl = URL.createObjectURL(blob);
    } else {
      // ✅ normal image URL (server or blob:)
      let downloadUrl = imageUrl;
      if (!downloadUrl.startsWith('http') && !downloadUrl.startsWith('blob:')) {
        downloadUrl = `${backendBaseUrl}${downloadUrl}`;
      }

      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error('Failed to fetch image');
      const blob = await response.blob();
      blobUrl = URL.createObjectURL(blob);
    }

    // Create and trigger download link
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${label.replace(/\s+/g, "-")}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 100);
  } catch (error) {
    console.error("Error downloading image:", error);
    alert("Failed to download the image. Please try again.");
  }
};

  const handleDownloadAll = () => {
    const allImages = [];

    if (originalImage) {
      allImages.push({
        url: originalImage.url,
        label: originalImage.label
      });
    }

    generatedImages.forEach((img) => {
      // Ensure the URL is absolute by adding backendBaseUrl if needed
      let imageUrl = img.url;
      if (!imageUrl.startsWith('http') && !imageUrl.startsWith('blob:')) {
        imageUrl = `${backendBaseUrl}${imageUrl}`;
      }
      allImages.push({
        url: imageUrl,
        label: img.label
      });
    });

    // Download images sequentially with proper delays
    const downloadSequentially = async () => {
      for (let i = 0; i < allImages.length; i++) {
        const image = allImages[i];
        try {
          // Fetch the image first to ensure it's accessible
          const response = await fetch(image.url);
          if (!response.ok) throw new Error('Failed to fetch image');

          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);

          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = `${image.label.replace(/\s+/g, '-')}-${Date.now()}.jpg`;
          document.body.appendChild(link);
          link.click();

          // Clean up
          setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
          }, 100);

          // Add delay between downloads except for the last one
          if (i < allImages.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        } catch (error) {
          console.error(`Error downloading ${image.label}:`, error);
          // Continue with next image even if one fails
        }
      }
    };

    downloadSequentially().catch(error => {
      console.error('Download process failed:', error);
      alert('Some images failed to download. Please try again.');
    });
  };

  const getImagePairs = () => {
    const pairs = [];
    if (originalImage && generatedImages.length > 0) {
      pairs.push([originalImage, generatedImages[0]]);
    } else if (originalImage) {
      pairs.push([originalImage, null]);
    } else if (generatedImages.length > 0) {
      pairs.push([generatedImages[0], generatedImages[1] || null]);
    }

    let startIndex = originalImage ? 1 : 2;
    for (let i = startIndex; i < generatedImages.length; i += 2) {
      pairs.push([generatedImages[i], generatedImages[i + 1] || null]);
    }

    return pairs;
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full h-[161px] bg-[linear-gradient(180deg,_#00646A_0%,_#002628_99.99%,_#00B0BA_100%)] rounded-t-xl flex items-center justify-center text-center">
        <h1 className="text-[38px] font-bold text-white">Generated Image</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-b-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/"
              className="flex items-center text-gray-800 hover:text-[#00B0BA]"
              onClick={() => localStorage.removeItem("imageGenState")}
            >
              <img src={SideArrow} alt="Back" className="w-6 h-6 mr-2" />
              <span>Back</span>
            </Link>
            <div className="flex space-x-6">
              <button onClick={handleDownloadAll} className="flex items-center text-gray-800 hover:text-[#00B0BA]">
                <img src={Download} alt="Download" className="w-6 h-6 mr-2" />
                <span>Download All</span>
              </button>
              <button className="flex items-center text-gray-800 hover:text-[#00B0BA]">
                <img src={Share} alt="Share" className="w-6 h-6 mr-2" />
                <span>Share</span>
              </button>
              {/* <button onClick={() => setShowMoreOptions(!showMoreOptions)} className="flex items-center text-gray-800 hover:text-[#00B0BA]">
                <img src={More} alt="More" className="w-6 h-6" />
              </button> */}
              <button className="flex items-center text-gray-800 hover:text-[#00B0BA]">
                <img src={Share} alt="Share" className="w-6 h-6 mr-2" />
                <span>Report</span>
              </button>
            </div>
          </div>

          {/* {showMoreOptions && (
            <div className="absolute right-8 bg-white shadow-lg rounded-md p-2 z-10 border border-gray-200">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Save to favorites</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Duplicate design</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">Delete design</button>
            </div>
          )} */}

          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <PacmanLoader color="#00B0BA" size={25} />
              <span className="ml-4 text-gray-700">Generating designs...</span>
            </div>
          ) : (
            <div className="space-y-8">
              {getImagePairs().map((pair, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex space-x-8">
                  {pair.map((image, colIndex) => (
                    <div key={image?.id || `empty-${rowIndex}-${colIndex}`} className="flex-1">
                      {image ? (
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <div className="relative">
                            <img src={image.url} alt={image.label} className="w-full h-auto max-h-96 object-contain" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 text-center">
                              {image.label}
                            </div>
                            <button
                              onClick={() => handleDownload(image.url, image.label)}
                              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                            >
                              <img src={Download} alt="Download" className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
                          <span className="text-gray-400">Empty Slot</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <button
              onClick={generateMoreImages}
              disabled={isLoading}
              className="bg-[#00B0BA] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#00858C] transition-colors disabled:opacity-50"
            >
              {isLoading ? "Generating..." : "Generate 2 More Designs"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}