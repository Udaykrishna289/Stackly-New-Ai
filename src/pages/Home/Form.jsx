// import React, { useContext, useRef, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import Lock from "../../assets/product-pg/lock.png";
// import Galley from "../../assets/product-pg/gallery.png";
// import I from "../../assets/product-pg/i.png";
// import Magic from "../../assets/product-pg/magic.png";

// export default function Form({ imageValue, id }) {
//   const { userInfo } = useContext(UserContext);
//   const navigate = useNavigate();
//   const inpRef = useRef(null);

//   const [activeTab, setActiveTab] = useState("Interiors");
//   const [formData, setFormData] = useState({
//     buildingType: "",
//     roomType: "",
//     roomStyle: "",
//     noOfDesign: "1",
//     aiTouch: "Low",
//   });
//   const [imgURL, setImgURL] = useState(null);

//   useEffect(() => {
//     if (imageValue) {
//       setImgURL(imageValue);
//     }
//   }, [imageValue]);

//   const tabs = [
//     { name: "Interiors", icon: Interior, disabled: false },
//     { name: "Exteriors", icon: Home, disabled: false },
//     { name: "Outdoors", icon: Tree, disabled: false },
//     { name: "Upgrade to Unlock", icon: Lock, disabled: true },
//   ];

//   const roomTypes = {
//     Interiors: [
//       "Living room",
//       "Bedroom",
//       "Kitchen",
//       "Dining Room",
//       "Study Room",
//       "Home Office",
//       "Family Room",
//       "Kids Room",
//       "Balcony",
//     ],
//     Exteriors: [
//       "Front Yard",
//       "Backyard",
//       "Garden",
//       "Patio",
//       "Deck",
//       "Pool Area",
//       "Driveway",
//     ],
//     Outdoors: [
//       "Park",
//       "Camping Site",
//       "Beach",
//       "Mountain View",
//       "Forest",
//       "Lake Side",
//     ],
//   };

//   const styles = [
//     "Modern",
//     "Tropical",
//     "Rustic",
//     "Tribal",
//     "Cyberpunk",
//     "Zen",
//     "Japanese Design",
//     "Biophilic",
//     "Christmas",
//     "Bohemian",
//     "Contemporary",
//     "Maximalist",
//     "Vintage",
//     "Baroque",
//     "Farmhouse",
//     "Minimalist",
//     "Gaming Room",
//     "French Country",
//     "Art Deco",
//     "Art Nouveau",
//     "Halloween",
//     "Ski Chalet",
//     "Sketch",
//     "Scandinavian",
//     "Industrial",
//     "Neoclassic",
//     "Medieval",
//     "Shabby Chic",
//     "Eclectic",
//     "Asian Traditional",
//     "Hollywood Glam",
//     "Western Traditional",
//     "Transitional",
//   ];

//   const changeImage = (e) => {
//     if (!userInfo?.userId) {
//       navigate("/sign-in");
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     if (!userInfo?.userId) {
//       navigate("/sign-in");
//       return;
//     }
//     const file = e.dataTransfer.files[0];

//     if (file && file.type.startsWith("image/")) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     } else {
//       alert("Please drop only image files.");
//     }
//   };

//   const handleChange = (value, key) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!userInfo?.userId) {
//       navigate("/sign-in");
//       return;
//     }
//     if (
//       formData.aiTouch &&
//       formData.noOfDesign &&
//       formData.roomStyle &&
//       formData.roomType &&
//       formData.buildingType &&
//       imgURL
//     ) {
//       console.log("Form Data:", formData);
//       console.log("Image URL:", imgURL);
//       alert("Design generation started!");
//       setFormData({
//         buildingType: "",
//         roomType: "",
//         roomStyle: "",
//         noOfDesign: "1",
//         aiTouch: "Low",
//       });
//       setImgURL(null);
//     } else {
//       alert("Please fill out all the fields!");
//     }
//   };

//   return (

//     //add some responsive

//     <section className="w-full min-h-screen pb-[50px] px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
//       {/* Header */}
//       <div className="w-full max-w-4xl text-center space-y-2">
//         <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-snug">
//           Let AI Style It
//         </h1>
//         <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-white leading-snug">
//           Upload a photo to begin your AI-powered room design
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.name}
//             className="w-[clamp(120px,15vw,200px)] max-w-[200px] h-[clamp(100px,12vh,128px)] flex flex-col justify-center items-center gap-2 cursor-pointer"
//             onClick={() => {
//               if (tab.name === "Upgrade to Unlock") {
//                 alert("Please upgrade your account to access this feature");
//               } else {
//                 setActiveTab(tab.name);
//                 setFormData((prev) => ({
//                   ...prev,
//                   roomType: "",
//                   buildingType: "",
//                 }));
//               }
//             }}
//           >
//             <div
//               className={`w-[clamp(60px,6vw,77px)] aspect-square border-2 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
//                 activeTab === tab.name
//                   ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
//                   : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
//               }`}
//             >
//               <img
//                 src={tab.icon}
//                 alt={tab.name}
//                 className="w-full h-auto max-w-[60%] max-h-[60%] object-contain"
//               />
//             </div>
//             <p className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] font-semibold text-center">
//               {tab.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-10 items-start justify-between">
//         {/* Upload */}
//         <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
//           <div
//             className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer"
//             onClick={() => inpRef.current.click()}
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             {imgURL ? (
//               <img
//                 src={imgURL}
//                 alt="Preview"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             ) : (
//               <div className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2">
//                 <div className="w-[clamp(40px,5vw,70px)] aspect-square rounded-full p-2 bg-[#FFFFFF1A] flex justify-center items-center">
//                   <img src={Galley} alt="gallery" className="w-full h-auto" />
//                 </div>
//                 <p className="text-[#FFFFFFB2] text-center text-[clamp(0.9rem,2vw,1.5rem)] leading-snug">
//                   Drag & drop or click to upload a photo
//                 </p>
//               </div>
//             )}
//             <input
//               type="file"
//               ref={inpRef}
//               onChange={changeImage}
//               accept="image/*"
//               className="hidden"
//             />
//           </div>

//   <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
//     <div className="w-[24px] h-[24px]">
//       <img src={I} alt="i" />
//     </div>
//     <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
//       Photo guide
//     </div>
//   </div>
// </div>

//         {/* Form Controls */}
// <form
//   onSubmit={handleSubmit}
//   className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6"
// >
//   {/* Building Type */}
//   <div className="space-y-2">
//     <label className="text-white text-lg">Choose Building Type</label>
//     <div className="flex flex-col sm:flex-row gap-4">
//       {["Commercial", "Residential"].map((type) => (
//         <div
//           key={type}
//           className={`flex-1 flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
//             formData.buildingType === type
//               ? "bg-white text-[#007B82]"
//               : "bg-[#00000033] text-[#FFFFFF80]"
//           }`}
//           onClick={() => handleChange(type, "buildingType")}
//         >
//           <span>{type}</span>
//           <input
//             type="radio"
//             checked={formData.buildingType === type}
//             onChange={() => {}}
//           />
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Dynamic Fields */}
//   {[
//     {
//       label: "Select Room Type",
//       name: "roomType",
//       options: roomTypes[activeTab],
//     },
//     { label: "Pick a Style", name: "roomStyle", options: styles },
//     {
//       label: "Number of designs",
//       name: "noOfDesign",
//       options: Array.from({ length: 9 }, (_, i) => i + 1),
//     },
//   ].map((field) => (
//     <div key={field.name} className="space-y-2">
//       <label className="text-white text-lg">{field.label}</label>
//       <select
//         name={field.name}
//         value={formData[field.name]}
//         onChange={(e) => handleChange(e.target.value, field.name)}
//         className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//       >
//         <option value="">Select {field.name}</option>
//         {field.options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   ))}

//   {/* AI Strength */}
//   <div className="space-y-2">
//     <label className="text-white text-lg">AI Styling Strength</label>
//     <div className="flex flex-wrap gap-3">
//       {["Very Low", "Low", "Medium", "High"].map((level) => (
//         <div
//           key={level}
//           className={`flex-1 min-w-[120px] px-4 py-2 rounded-md cursor-pointer text-center ${
//             formData.aiTouch === level
//               ? "bg-white text-[#007B82]"
//               : "bg-[#00000033] text-[#FFFFFF80]"
//           }`}
//           onClick={() => handleChange(level, "aiTouch")}
//         >
//           {level}
//         </div>
//       ))}
//     </div>
//   </div>
// </form>
//   </div>
//   <div
//     className="w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center cursor-pointer"
//     style={{
//       backgroundImage: `
//     linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)

//     `,
//     }}
//   >
//     <button
//       type="submit"
//       className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white"
//     >
//       <span>
//         <img src={Magic} alt="magic" />
//       </span>
//       Generate Design
//     </button>
//   </div>
// </section>
//   );
// }
import React, { useContext, useRef, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Interior from "../../assets/product-pg/Vector.png";
import Home from "../../assets/product-pg/home.png";
import Tree from "../../assets/product-pg/tree.png";
import Lock from "../../assets/product-pg/lock.png";
import Galley from "../../assets/product-pg/gallery.png";
import I from "../../assets/product-pg/i.png";
import Magic from "../../assets/product-pg/magic.png";

export default function Form({ imageValue, id }) {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const inpRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Interiors");
  const [formData, setFormData] = useState({
    buildingType: "",
    roomType: "",
    roomStyle: "",
    noOfDesign: "1",
    aiTouch: "Low",
  });
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (imageValue) {
      setImgURL(imageValue);
    }
  }, [imageValue]);

  const tabs = [
    { name: "Interiors", icon: Interior, disabled: false },
    { name: "Exteriors", icon: Home, disabled: false },
    { name: "Outdoors", icon: Tree, disabled: false },
    { name: "Upgrade to Unlock", icon: Lock, disabled: true },
  ];

  const roomTypes = {
    Interiors: [
      "Living room",
      "Bedroom",
      "Kitchen",
      "Dining Room",
      "Study Room",
      "Home Office",
      "Family Room",
      "Kids Room",
      "Balcony",
    ],
    Exteriors: [
      "Front Yard",
      "Backyard",
      "Garden",
      "Patio",
      "Deck",
      "Pool Area",
      "Driveway",
    ],
    Outdoors: [
      "Park",
      "Camping Site",
      "Beach",
      "Mountain View",
      "Forest",
      "Lake Side",
    ],
  };

  const styles = [
    "Modern",
    "Tropical",
    "Rustic",
    "Tribal",
    "Cyberpunk",
    "Zen",
    "Japanese Design",
    "Biophilic",
    "Christmas",
    "Bohemian",
    "Contemporary",
    "Maximalist",
    "Vintage",
    "Baroque",
    "Farmhouse",
    "Minimalist",
    "Gaming Room",
    "French Country",
    "Art Deco",
    "Art Nouveau",
    "Halloween",
    "Ski Chalet",
    "Sketch",
    "Scandinavian",
    "Industrial",
    "Neoclassic",
    "Medieval",
    "Shabby Chic",
    "Eclectic",
    "Asian Traditional",
    "Hollywood Glam",
    "Western Traditional",
    "Transitional",
  ];

  const changeImage = (e) => {
    if (!userInfo?.userId) {
      navigate("/sign-in");
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!userInfo?.userId) {
      navigate("/sign-in");
      return;
    }
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    } else {
      alert("Please drop only image files.");
    }
  };

  const handleChange = (value, key) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInfo?.userId) {
      navigate("/sign-in");
      return;
    }
    if (
      formData.aiTouch &&
      formData.noOfDesign &&
      formData.roomStyle &&
      formData.roomType &&
      formData.buildingType &&
      imgURL
    ) {
      console.log("Form Data:", formData);
      console.log("Image URL:", imgURL);
      alert("Design generation started!");
      setFormData({
        buildingType: "",
        roomType: "",
        roomStyle: "",
        noOfDesign: "1",
        aiTouch: "Low",
      });
      setImgURL(null);
    } else {
      alert("Please fill out all the fields!");
    }
  };

  return (
    <section className="w-full min-h-screen pb-12 px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-4xl text-center space-y-2">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-snug">
          Let AI Style It
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-white leading-snug">
          Upload a photo to begin your AI-powered room design
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`w-[clamp(120px,15vw,200px)] max-w-[200px] h-[clamp(100px,12vh,128px)] flex flex-col justify-center items-center gap-2 cursor-pointer ${
              tab.disabled ? "opacity-40 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (tab.disabled) {
                alert("Please upgrade your account to access this feature");
              } else {
                setActiveTab(tab.name);
                setFormData((prev) => ({
                  ...prev,
                  roomType: "",
                  buildingType: "",
                }));
              }
            }}
          >
            <div
              className={`w-[clamp(60px,6vw,77px)] aspect-square border-2 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
                activeTab === tab.name
                  ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
                  : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
              }`}
            >
              <img
                src={tab.icon}
                alt={tab.name}
                className="w-full h-auto max-w-[60%] max-h-[60%] object-contain"
              />
            </div>
            <p className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] font-semibold text-center">
              {tab.name}
            </p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div
        className="w-full max-w-7xl flex flex-col xl:flex-row gap-10 items-start justify-between"
        id="form-section"
      >
        {/* Upload */}
        <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
          <div
            className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer"
            onClick={() => inpRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {imgURL ? (
              <img
                src={imgURL}
                alt="Preview"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2">
                <div className="w-[clamp(40px,5vw,70px)] aspect-square rounded-full p-2 bg-[#FFFFFF1A] flex justify-center items-center">
                  <img src={Galley} alt="gallery" className="w-full h-auto" />
                </div>
                <p className="text-[#FFFFFFB2] text-center text-[clamp(0.9rem,2vw,1.5rem)] leading-snug">
                  Drag & drop or click to upload a photo
                </p>
              </div>
            )}
            <input
              type="file"
              ref={inpRef}
              onChange={changeImage}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
            <div className="w-[24px] h-[24px]">
              <img src={I} alt="i" />
            </div>
            <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
              Photo guide
            </div>
          </div>
        </div>

        {/* Inputs */}
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6"
        >
          {/* Building Type */}
          <div className="space-y-2">
            <label className="text-white text-lg">Choose Building Type</label>
            <div className="flex flex-col sm:flex-row gap-4">
              {["Commercial", "Residential"].map((type) => (
                <div
                  key={type}
                  className={`flex-1 flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
                    formData.buildingType === type
                      ? "bg-white text-[#007B82]"
                      : "bg-[#00000033] text-[#FFFFFF80]"
                  }`}
                  onClick={() => handleChange(type, "buildingType")}
                >
                  <span>{type}</span>
                  <input
                    type="radio"
                    checked={formData.buildingType === type}
                    onChange={() => {}}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Fields */}
          {[
            {
              label: "Select Room Type",
              name: "roomType",
              options: roomTypes[activeTab],
            },
            { label: "Pick a Style", name: "roomStyle", options: styles },
            {
              label: "Number of designs",
              name: "noOfDesign",
              options: Array.from({ length: 9 }, (_, i) => i + 1),
            },
          ].map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="text-white text-lg">{field.label}</label>
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={(e) => handleChange(e.target.value, field.name)}
                className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
              >
                <option value="">Select {field.name}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* AI Strength */}
          <div className="space-y-2">
            <label className="text-white text-lg">AI Styling Strength</label>
            <div className="flex flex-wrap gap-3">
              {["Very Low", "Low", "Medium", "High"].map((level) => (
                <div
                  key={level}
                  className={`flex-1 min-w-[120px] px-4 py-2 rounded-md cursor-pointer text-center ${
                    formData.aiTouch === level
                      ? "bg-white text-[#007B82]"
                      : "bg-[#00000033] text-[#FFFFFF80]"
                  }`}
                  onClick={() => handleChange(level, "aiTouch")}
                >
                  {level}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      <div
        className="w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center cursor-pointer"
        style={{
          backgroundImage: `
        linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)
        
        `,
        }}
      >
        <button
          type="submit"
          className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white"
        >
          <span>
            <img src={Magic} alt="magic" />
          </span>
          Generate Design
        </button>
      </div>
    </section>
  );
}