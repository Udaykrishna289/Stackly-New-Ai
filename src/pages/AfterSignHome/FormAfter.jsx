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
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FormDataContext } from "../../context/FormDataContext";
import Frame from "../../assets/home/Frame.png";
import CanvasImg from "../../assets/afterHome/CanvasImg.png";
import CanvasUplod from "../../assets/afterHome/CanvasUplod.png";
import Upload from "../../assets/home/upload.png";
const CloseIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E";

export default function Form({ selectedImage }) {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const inpRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("Interiors");
  const [imgFile, setImgFile] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const backendBaseUrl = "http://localhost:8000";
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 8 });
  const [strength, setStrength] = useState("LOW");

  const [formData, setFormData] = useState({
    // buildingType: "",
    roomType: "",
    roomStyle: "",
    numDesigns: "1",
    aiStrength: "Low",
    houseAngle: "",
    spaceType: "",
  });

  const [imgURL, setImgURL] = useState(null);

  const tabs = [
    { name: "Interiors", icon: Interior },
    { name: "Exteriors", icon: Home },
    { name: "Outdoors", icon: Tree },
  ];

  const roomTypes = {
    Interiors: [
      "classic", "modern", "minimal", "scandinavian", "contemporary",
      "industrial", "japandi", "bohemian", "coastal", "modern luxury",
      "tropical resort", "japanese zen",
    ],
    Exteriors: [
      "classic", "modern", "bohemian", "coastal", "international",
      "elephant", "stone clad", "glass house", "red brick",
      "painted brick", "wood accents", "industrial",
    ],
    Outdoors: [
      "modern", "contemporary", "traditional", "rustic",
      "scandinavian", "classic garden", "coastal outdoor",
      "farmhouse", "cottage garden", "industrial", "beach",
    ],
  };

  const styles = {
    Interiors: [
      "Living room", "Bedroom", "Kitchen", "Home office", "Dining room",
      "Study room", "Family room", "Kid room", "Balcony",
    ],
    Exteriors: ["Front side", "Back side", "Left side", "Right side"],
    Outdoors: [
      "Front Yard", "Backyard", "Balcony", "Terrace/Rooftop",
      "Driveway/Parking Area", "Walkway/Path", "Lounge", "Porch",
      "Fence", "Garden",
    ],
  };

  const handleDragOver = (e) => e.preventDefault();

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImgFile(file);
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    } else {
      alert("Please upload only image files.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImgFile(file);
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    } else {
      alert("Please drop only image files.");
    }
  };

  const handleChange = (value, key) => {
    if (key === "roomType" && activeTab === "Exteriors") {
      setFormData(prev => ({ ...prev, [key]: value }));
    } else {
      setFormData(prev => ({ ...prev, [key]: value.toLowerCase() }));
    }
  };

  const handleTabChange = (tabName) => {
    if (tabName === "Upgrade to Unlock") {
      alert("Please upgrade your account to access this feature");
    } else {
      setActiveTab(tabName);
      setVisibleRange({ start: 0, end: 8 });
      setFormData({
        // buildingType: "",
        roomType: "",
        roomStyle: "",
        numDesigns: "1",
        aiStrength: "low",
        houseAngle: "",
        spaceType: "",
      });
    }
  };

  const handleNext = () => {
    const currentStyles = styles[activeTab];
    const newEnd = Math.min(visibleRange.end + 1, currentStyles.length);
    const newStart = newEnd > visibleRange.end ? visibleRange.start + 1 : visibleRange.start;

    setVisibleRange({
      start: newStart,
      end: newEnd
    });
  };

  const handlePrev = () => {
    const newStart = Math.max(visibleRange.start - 1, 0);
    const newEnd = newStart < visibleRange.start ? visibleRange.end - 1 : visibleRange.end;

    setVisibleRange({
      start: newStart,
      end: newEnd
    });
  };

  const getPositionClass = () => {
    if (strength === "LOW") return "left-0";
    if (strength === "MEDIUM") return "left-1/2 -translate-x-1/2";
    if (strength === "HIGH") return "right-0";
  };

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });

  const handleSubmit = async (e) => { 
  e.preventDefault();
  setIsLoading(true);
  setProgress(0);

  const progressInterval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 90) {
        clearInterval(progressInterval);
        return prev;
      }
      return prev + 10;
    });
  }, 1000);

  try {
    if (!imgFile) throw new Error("Please upload an image first!");

    const formDataToSend = new FormData();
    formDataToSend.append("image", imgFile);
    formDataToSend.append("design_style", formData.roomStyle);
    formDataToSend.append("ai_strength", formData.aiStrength);
    formDataToSend.append("num_designs", formData.numDesigns.toString());

    // ✅ Safe userId fetch
    let userId = localStorage.getItem("userId");
    if (!userId) {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        userId = userInfo?.userId || null;
      } catch {
        userId = null;
      }
    }

    if (!userId) {
      alert("User not logged in.");
      setIsLoading(false);
      return;
    }

    formDataToSend.append("user_id", userId);

    let endpoint = "";
    let typeDetail = "";

    switch (activeTab) {
      case "Interiors":
        endpoint = "generate-interior-design";
        formDataToSend.append("room_type", formData.roomType);
        typeDetail = formData.roomType;
        break;
      case "Exteriors":
        endpoint = "generate-exterior-design";
        formDataToSend.append("house_angle", formData.roomType);
        typeDetail = formData.roomType;
        break;
      case "Outdoors":
        endpoint = "generate-outdoor-design";
        formDataToSend.append("space_type", formData.roomType);
        typeDetail = formData.roomType;
        break;
      default:
        throw new Error("Invalid design category selected.");
    }

    const response = await axios.post(
      `http://localhost:8000/api/${endpoint}/`,
      formDataToSend,
      {
        onUploadProgress: (progressEvent) => {
          const uploadPercent = Math.round((progressEvent.loaded * 50) / progressEvent.total);
          setProgress(uploadPercent);
        },
      }
    );

    for (let i = 50; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(i);
    }

    if (response.data.success) {
      const designs = Array.isArray(response.data.designs)
        ? response.data.designs.map(url => ({
            url: url.startsWith("http") ? url : backendBaseUrl + url,
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          }))
        : [];

      const base64Image = await toBase64(imgFile);

      if (formData.numDesigns === "1") {
        // Show generated image on the same page
        setGeneratedImages(designs);
      } else {
        // Redirect to /ImageGeneration with state
        const navState = {
          originalImage: base64Image,
          uploadedFile: imgFile,
          generatedImages: designs,
          formData: {
            userId: userId,
            category: activeTab.toLowerCase(),
            typeDetail: typeDetail,
            style: formData.roomStyle,
            aiStrength: formData.aiStrength,
            numDesigns: formData.numDesigns
          }
        };

        localStorage.setItem("imageGenState", JSON.stringify(navState));
        navigate("/ImageGeneration", { state: navState });
      }
    } else {
      throw new Error(response.data.message || "Design generation failed");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Failed to connect to server";
    alert(`Error: ${errorMessage}`);
  } finally {
    clearInterval(progressInterval);
    setIsLoading(false);
  }
};

// ✅ Keep selected image + safe fallback for profile picture
useEffect(() => {
  if (selectedImage) {
    setImgURL(selectedImage); // Display in upload box
    fetch(selectedImage)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "previous-image.png", { type: blob.type });
        setImgFile(file); // Set as upload file
      })
      .catch(() => {
        console.error("Failed to load selected image.");
      });
  }
}, [selectedImage]);

  return (
    <section
      className="w-full h-[1268px] bg-black opacity-100 -mt-[82px] pt-[82px] overflow-hidden"
      style={{ transform: "rotate(0deg)" }}
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center mt-[75px] gap-[16px]">
        {/* Top text */}
        <h1 className="text-center text-[28px] sm:text-[34px] font-[400] leading-[100%] text-white lora-text">
          Elevate Your Space with{" "}
          <span
            className="bg-clip-text text-transparent lora-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #8A38F5 0%, #C22CA2 97.12%)",
            }}
          >
            AI
          </span>
        </h1>

        {/* Middle text */}
        <div
          className="text-[16px] sm:text-[18px] text-[#6D6D6D] text-center"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: "140%",
          }}
        >
          Upload a photo and let AI create a stunning makeover
        </div>

        {/* Bottom text */}
        <div
          className="text-[14px] sm:text-[16px] text-white text-center"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: "140%",
          }}
        >
          Free Trial ( 9 of 10 renders left)
        </div>
      </div>
      {/* Tabs */}
      <div className="w-full max-w-[352px] h-[84px] flex gap-[20px] sm:gap-[72px] mx-auto mt-8">

        {tabs.map((tab) => (
          <div
            key={tab.name}
            className="w-full h-[84px] flex flex-col gap-[8px] opacity-100"
            onClick={() => handleTabChange(tab.name)}
          >

            <div
              className={`w-[52px] h-[52px] rounded-full border-[2px] border-solid border-[#FFFFFF] shadow-[0_0_8px_#8A38F580] bg-gradient-to-b from-[#8120FF] to-[#4D1399] mx-auto flex items-center justify-center
    max-[440px]:w-[32px] max-[440px]:h-[32px]
    max-[440px]:rounded-full max-[440px]:border-[0.9px] max-[440px]:opacity-100
    ${activeTab === tab.name
                  ? "border-white bg-gradient-to-l from-[#7A1FF133]  to-[#8120FF]"
                  : "border-[#8A38F533] bg-[#8A38F533] hover:border-blue-300"
                }`}
            >
              <img
                src={tab.icon}
                alt={tab.name}
                className="w-[26px] h-[19px] object-contain
               max-[440px]:w-[17.97px] max-[440px]:h-[13.07px] max-[440px]:opacity-100"
              />
            </div>
            <p
              className="
    text-white 
    font-[500] font-poppins text-[16px] leading-[100%] tracking-[0%] text-center
    w-[66px] h-[24px] 
    max-[440px]:w-[56px] max-[440px]:h-[17px] max-[440px]:text-[12px] max-[440px]:leading-[140%] max-[440px]:opacity-100
  "
            >
              {tab.name}
            </p>

          </div>
        ))}
      </div>
       <div className="w-full h-[32px] opacity-100 rotate-0 flex justify-center items-center mt-10">
      <div className="w-[1080px] h-[32px] opacity-100 rotate-0 bg-black flex items-center relative overflow-hidden">
        <div
          className="flex gap-[28px] transition-transform duration-300"
          style={{
            transform: `translateX(-${visibleRange.start * (100 / 8)}%)`,
            width: `${Math.ceil(styles[activeTab].length / 8) * 100}%`,
            marginRight: '16px',
          }}
        >
          {[...Array(3)].map((_, copyIndex) => (
            <React.Fragment key={`copy-${copyIndex}`}>
              {styles[activeTab].map((style) => (
                <span
                  key={`${style}-${copyIndex}`}
                  className={`text-white text-sm cursor-pointer px-4 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                    formData.roomType === style.toLowerCase()
                      ? 'bg-white/10 border-white'
                      : 'bg-[#0B0B0B] border-[#6D6D6D]'
                  }`}
                  style={{ border: "1px solid" }}
                  onClick={() => handleChange(style.toLowerCase(), "roomType")}
                >
                  {style}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
   

        {/* Next button moved to parent div with proper spacing */}
        <button
          className="ml-4 flex items-center justify-center rounded-full transition"
          onClick={handleNext}
          style={{
            width: "32px",
            height: "32px",
            opacity: 1,
            borderRadius: "40px",
            borderWidth: "1px",
            background: "#7A1FF133",
            border: "1px solid #FFFFFF",
            boxShadow: "0px 0px 8px 0px #8A38F51F",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              width: "12px",   // bigger size
              height: "12px",
            }}
          >
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* upload box 2 */}
      <div className="w-[590px] h-[474px] opacity-100 absolute right-0 top-1/2 transform -translate-y-1/2 bg-black flex flex-col gap-[24px] mr-8 mt-[220px]">
        {/* content-1 */}
        <div className="w-[590px] h-[22px] text-white font-poppins font-medium text-[16px] leading-[140%]">
          Generated Image
        </div>
        {/* content-2 */}
        <div className="w-[590px] h-[358px] rounded-[8px] border border-dashed border-[#6D6D6D] bg-[#6D6D6D1A] relative">

          <div className="w-[590px] h-[350px] rounded-[8px] relative flex items-center justify-center overflow-hidden">
  {generatedImages.length > 0 ? (
    <img
      src={generatedImages[0].url}
      alt="Generated"
      className="max-w-full max-h-full object-contain rounded-lg"
    />
  ) : (
    <div className="w-[52px] h-[52px] rounded-[40px] bg-white/10 flex items-center justify-center">
      <img src={CanvasImg} alt="Canvas" className="w-[26px] h-[26px] object-contain" />
    </div>
  )}
</div>

        </div>
        {/* content-3 */}
        <div className="w-[590px] h-[44px] flex gap-[24px] opacity-100">

          {/* Left child div */}
          <button
            type="submit"
            className="w-[283px] h-[44px] rounded-[30px] border border-[#C22CA299] flex items-center justify-center gap-[8px] px-[30px] py-[10px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
            style={{
              background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
            }}
          >
            <span className="text-white text-[16px] font-poppins font-normal leading-[100%]">
              Create Again
            </span>
            <img
              src={Frame}
              alt="Frame Icon"
              className="w-[24px] h-[24px] object-contain transition-transform duration-300 group-hover:rotate-12"
            />
          </button>
          {/* Right child div */}
          <button
            type="button"
            className="w-[283px] h-[44px] rounded-[30px] border border-[#8A38F5] flex items-center justify-center gap-[8px] px-[30px] py-[10px] bg-[#8A38F580] group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8A38F5] hover:to-[#C22CA2] hover:scale-105 hover:shadow-lg"
          >
            <span className="text-white text-[16px] font-poppins font-normal leading-[100%] transition-colors duration-300 z-[10]">
              Download
            </span>

            <img
              src={CanvasUplod}
              alt="Frame Icon"
              className="w-[24px] h-[24px] object-contain z-[10]"
            />
          </button>
        </div>
      </div>
      {/* Form Section */}
      <div className="flex flex-col xl:flex-row items-start justify-between ml-10 mt-20 
                w-[590px] h-[686px] gap-6 opacity-100 rotate-0">

        {/* Upload Box */}
        <div
          className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4 ml-[190px]
             max-[440px]:w-[329px] max-[440px]:h-[341.547px] max-[440px]:gap-[16px] max-[440px]:opacity-100 
             max-[440px]:mx-auto max-[440px]:justify-center max-[440px]:items-center"
        >
          <div className="w-[590px] h-[22px] text-white font-poppins font-medium text-[16px] leading-[140%] flex items-center pl-4">
            Upload Image
          </div>

          <div
            className="
    w-[590px] h-[358px] 
    flex justify-center items-center 
    cursor-pointer relative 
    rounded-[8px] 
    border border-dashed
  "
          >
            <div
              className="w-full h-full flex justify-center items-center relative
             max-[440px]:w-[329px] max-[440px]:h-[285.547px] max-[440px]:px-[50.69px] max-[440px]:py-[96.22px]"
              onClick={() => inpRef.current.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              style={{
                background: "#6D6D6D1A",
                borderColor: "#6D6D6D",
                borderWidth: "1px",
                borderRadius: "8px",
                borderStyle: "dashed",
                opacity: 1,
              }}
            >
              {imgURL ? (
                <>
                  {!isImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF1A] rounded-xl">
                      <p className="text-[#FFFFFFB2]">Loading image...</p>
                    </div>
                  )}
                  <div className="cursor-default relative h-full w-full flex justify-center items-center rounded-xl p-4">
                    <div className="relative h-full w-full flex justify-center items-center rounded-xl overflow-hidden">
                      <img
                        src={imgURL}
                        alt="Preview"
                        className={`max-w-[calc(100%-8px)] max-h-[calc(100%-8px)] object-contain ${isImageLoaded ? "block" : "hidden"}`}
                        onLoad={() => setIsImageLoaded(true)}
                        onError={() => setIsImageLoaded(false)}
                      />
                    </div>

                    {/* Close button */}
                    <svg
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgURL(null);
                        setIsImageLoaded(false);
                      }}
                      className="absolute p-1 w-7 h-7 rounded-full bg-black/70 fill-white top-3 right-3 cursor-pointer hover:bg-black/90 transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                  {isLoading && (
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center rounded-xl">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#FFFFFF20"
                            strokeWidth="8"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (283 * progress) / 100}
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xl font-bold">{progress}%</span>
                        </div>
                      </div>
                      <p className="text-white text-lg text-center">
                        {progress < 100 ? "Rendering..." : "Finalizing designs..."}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2
                    max-[440px]:w-[145px] max-[440px]:h-[81px] max-[440px]:opacity-100"
                >

                  <div
                    className="w-[37px] h-[28px]  flex justify-center items-center
             max-[440px]:w-[36px] max-[440px]:h-[36px] max-[440px]:px-[9.31px] max-[440px]:py-[8.28px] 
             max-[440px]:rounded-[20.69px] max-[440px]:opacity-100"
                  >
                    <img
                      src={Upload}
                      alt="gallery"
                      className="w-[38px] h-[38px] object-contain 
               max-[440px]:w-[16.23px] max-[440px]:h-[13.01px] max-[440px]:opacity-100"
                    />
                  </div>

                  <p
                    className="w-[162px] h-[44px] text-white/70 text-center font-poppins font-normal 
             text-[16px] leading-[140%] tracking-[0] opacity-100"
                  >
                    Drag & drop or click to upload a photo
                  </p>
                </div>
              )}
              <input
                type="file"
                name="image"
                ref={inpRef}
                onChange={changeImage}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6"
          >
            {/* Building Type (only for Interior) */}
            {activeTab === "Interiors" && (
              <div className="space-y-2">

              </div>
            )}
            {/* Room Type & Number of Designs in One Line */}
            <div
              className="flex max-[440px]:flex-col w-[590px] h-[96px] opacity-100 gap-[18px]  ml-[-210px]"
              style={{ transform: "rotate(0deg)" }}
            >
              {/* Select Room Type */}

              <div
                className="space-y-2 relative w-[286px] h-[76px] opacity-100 flex flex-col gap-[12px]"
                style={{ transform: "rotate(0deg)" }}
              >
                <label
                  className="
    text-white 
    text-[16px] 
    max-[440px]:text-[14px] 
    font-poppins 
    font-normal 
    leading-[140%] 
    w-[286px] 
    h-[22px] 
    opacity-100 
    tracking-[0]
  "
                >
                  {activeTab === "Interiors"
                    ? "Select Room Style"
                    : activeTab === "Exteriors"
                      ? "Select House Angle"
                      : "Select Space"}
                </label>

                <div className="relative w-[286px]">
                  <select
                    name="roomType"
                    value={formData.roomStyle}
                    onChange={(e) => handleChange(e.target.value, "roomStyle")}
                    className="
      w-full h-[42px]
      rounded bg-[#781EED33] text-white cursor-pointer
      px-4 pr-10 py-2 appearance-none
      focus:outline-none focus:ring-2 focus:ring-[#781EED]
    "
                    required
                  >
                    <option value="" className="text-black">
                      Select Room Style
                    </option>
                    {roomTypes[activeTab].map((room) => (
                      <option key={room} value={room.toLowerCase()} className="text-black">
                        {room}
                      </option>
                    ))}
                  </select>
                  {/* Dropdown arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
        111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 
        010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Number of Designs */}
              <div className="space-y-2 relative w-[286px] h-[76px] flex flex-col gap-[12px]">
                <label className="w-[286px] h-[22px] text-white text-[16px] max-[440px]:text-[14px] font-poppins font-normal leading-[140%] tracking-[0] opacity-100">
                  Number of Designs
                </label>
                <div className="relative w-[286px]">
                  <select
                    name="numDesigns"
                    value={formData.numDesigns}
                    onChange={(e) => handleChange(e.target.value, "numDesigns")}
                    className="
        w-full h-[42px]
        rounded bg-[#781EED33] text-white cursor-pointer
        px-4 pr-10 py-2 appearance-none
        focus:outline-none focus:ring-2 focus:ring-[#781EED]
      "
                    required
                  >
                    {/* Placeholder option (same style as Room Type) */}
                    <option value="" className="text-black">
                      Number of designs
                    </option>
                    {[...Array(12).keys()].map((num) => (
                      <option key={num + 1} value={num + 1} className="text-black">
                        {num + 1}
                      </option>
                    ))}
                  </select>
                  {/* Dropdown arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
          111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 
          010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* AI Strength */}
<div className="w-[590px] h-[84px] flex flex-col gap-[12px] opacity-100 rotate-0  ml-[-210px]">
  <label className="text-white text-lg">AI Styling Strength</label>

  {/* Slider with Circle */}
  <div className="relative w-full h-[8px] rounded-[16px] bg-[#6D6D6D33]">
    <div
      className={`absolute top-1/2 -translate-y-1/2 w-[24px] h-[24px] rounded-[30px] 
        bg-gradient-to-tr from-[#8A38F5] to-[#C22CA2] flex items-center justify-center transition-all duration-500
        ${formData.aiStrength === "low" ? "left-0" : formData.aiStrength === "medium" ? "left-1/2" : "right-0"}`}
    >
      <img
        src={Frame}
        alt="icon"
        className="w-[12px] h-[12px] border border-white rounded-[2px]"
      />
    </div>
  </div>

  {/* Labels */}
  <div className="flex justify-between w-full mt-2">
    {["Low", "Medium", "High"].map((level) => (
      <span
        key={level}
        className={`text-white text-sm cursor-pointer ${
          formData.aiStrength === level.toLowerCase() ? "font-semibold" : "font-normal"
        }`}
        onClick={() => handleChange(level.toLowerCase(), "aiStrength")}
      >
        {level}
      </span>
    ))}
  </div>
</div>
            
          </form>
        </div >

      </div>
      {/* Form Controls */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-[590px] h-[44px] flex items-center justify-center gap-[10px] 
             rounded-[30px] border border-white/50 px-[30px] py-[10px] 
             bg-gradient-to-r from-[rgba(138,56,245,0.5)] to-[rgba(194,44,162,0.5)] 
             text-white font-poppins font-normal text-[16px] leading-[100%]
             hover:opacity-90 transition -mt-8  ml-[95px]"
      >
        <span>Create magic</span>
        <img
          src={Frame}
          alt="icon"
          className="w-[24px] h-[24px] opacity-100"
        />
      </button>
    </section >
  );
}