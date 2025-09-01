import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import sec1bg from "../../assets/product-pg/sec1bg.jpg";
import arrow from "../../assets/home/Arrow.png";
import group from "../../assets/product-pg/groupimg.png";
import drag1 from "../../assets/product-pg/drag1.png";
import drag2 from "../../assets/product-pg/drag2.png";
import drag3 from "../../assets/product-pg/drag3.png";
import drag4 from "../../assets/product-pg/drag4.png";
import drag5 from "../../assets/product-pg/drag5.png";
import drag6 from "../../assets/product-pg/drag6.png";
import drag7 from "../../assets/product-pg/drag7.png";
import drag8 from "../../assets/product-pg/drag8.png";
import drag9 from "../../assets/product-pg/drag9.png";
import drag10 from "../../assets/product-pg/drag10.png";

export default function HeroProducts() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeRef = useRef(null);

  const images = [drag1, drag2, drag3, drag4, drag5, drag6, drag7, drag8, drag9, drag10];
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Handle image click to open pop-up and pause marquee
  //   const handleImageHover = (index) => {
  //   setSelectedImageIndex(index);
  //   setIsPopUpOpen(true);
  //   setIsMarqueePaused(true);
  // };
  let hoverTimer = null;

  const handleMouseEnter = (index) => {
    hoverTimer = setTimeout(() => {
      setSelectedImageIndex(index);
      setIsPopUpOpen(true);
      setIsMarqueePaused(true);
    }, 800); // 0.8 second hold
  };
  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  };

  // Close pop-up and resume marquee
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
    setIsMarqueePaused(false);
  };

  // Navigate to previous image in slider
  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to next image in slider
  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Pause/resume marquee animation based on isMarqueePaused
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      marquee.style.animationPlayState = isMarqueePaused ? "paused" : "running";
    }
  }, [isMarqueePaused]);

  // Pop-up animation variants
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // Slider image animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
     <>
    <link rel="preload" href={sec1bg} as="image" />
    <section
        className="relative w-full h-[1187px] opacity-100 -mt-[82px] pt-[82px] overflow-hidden bg-[#0D0D0D]" // Fallback background color
      >
        {/* Blur background image */}
        <img
          src={sec1bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager" // Load immediately
        />
      {/* Marquee Section */}
      <div className="h-[46px] marquee-container max-[440px]:w-[440px] max-[440px]:h-[46px]">
        <div className="marquee-content">
          <span className="marquee-text text-[16px] mr-8">
            Hey! It looks like you are from USA. We support Purchasing Power
            Parity pricing, so enjoy 50% off on your subscription. Use code:
            abc589
          </span>
          <span className="marquee-text text-[16px]">
            Hey! It looks like you are from USA. We support Purchasing Power
            Parity pricing, so enjoy 50% off on your subscription. Use code:
            abc589
          </span>
        </div>
      </div>
      {/* Main Centered Content */}
      <div className="absolute top-[203px] left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[64px]">
        {/* Hero Section */}
        <div className="w-full max-w-[836px] mx-auto flex flex-col items-center gap-[30px] text-white text-center">
          <div className="h-[27px]">
            <p className="text-[16px] sm:text-[18px] leading-[100%] font-poppins font-[400]">
              STACKLY AI
            </p>
          </div>
          <div>
            <h1 className="lora-text text-[32px] sm:text-[42px] md:text-[52px] leading-[110%] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CDA8FC]">
              Smarter Design for Every Space You Live and Love
            </h1>
          </div>
          <div>
            <p className="font-[Inter] font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[140%]">
              Experience intelligent design solutions crafted to enhance
              interiors, exteriors and outdoor spaces with seamless AI precision
            </p>
          </div>
          <Link to="/sign-in">
            <div className="w-[158px] h-[44px] px-[30px] py-[10px] gap-[10px] flex items-center justify-center rounded-[30px] border border-[#C22CA299] bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)] cursor-pointer">
              <div className="w-[64px] h-[19px] text-white text-[16px] leading-[100%] font-medium font-[Inter]">
                Try Now
              </div>
              <div className="w-[24px] h-[24px]">
                <img src={arrow} alt="icon" className="w-full h-full" />
              </div>
            </div>
          </Link>
        </div>
        {/* Latest Design Trends Section */}
        <div className="w-full flex flex-col items-center gap-[48px]">
          {/* Title */}
          <div className="w-full max-w-[727px] h-[94px] flex flex-col items-center gap-[12px] text-center">
            <p className="text-white text-[52px] leading-[140%] font-[400] lancelot-text">
              Latest Design Trends
            </p>
            <p className="text-white text-[18px] leading-[100%] font-[400] poppins-text">
              Curated ideas for modern living
            </p>
          </div>
          {/* Image Marquee Section */}
          <div className="relative w-screen max-w-none h-[449.14px] overflow-hidden -mx-[calc((100vw-100%)/2)]">
            {/* Marquee Track */}
            <div
              ref={marqueeRef}
              className="absolute flex gap-0 h-full animate-marquee whitespace-nowrap"
              style={{ animation: "marquee-latest 20s linear infinite" }}
            >
              {/* First Column */}
              <div className="inline-block h-full w-[286.5px] mr-[6px]">
                <div className="relative w-full h-[250.98px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
                  <img
                    src={drag1}
                    alt="Image 1"
                    className="absolute top-[-68px] w-full h-[383px] object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="w-full h-[192.16px] mt-[6px] overflow-hidden group cursor-pointer">
                  <img
                    src={drag2}
                    alt="Image 2"
                    className="w-full h-full object-cover border border-gray-300 transition-transform duration-500 group-hover:scale-110"
                    style={{ borderWidth: "0.58px" }}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
              {/* Second Column */}
              <div className="inline-block h-full w-[573px] mr-[6px]">
                <div className="flex gap-[6px] w-full h-[192.16px] mb-[6px]">
                  <div
                    className="w-[286.5px] h-full border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag3}
                      alt="Image 3"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div
                    className="w-[280px] h-full border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag4}
                      alt="Image 4"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(3)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
                <div
                  className="w-full h-[250.98px] border border-gray-300 overflow-hidden group cursor-pointer"
                  style={{ borderWidth: "0.58px" }}
                >
                  <img
                    src={drag5}
                    alt="Image 5"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
              {/* Third Column */}
              <div className="inline-block h-full w-[573px] mr-[6px]">
                <div
                  className="w-full h-[250.98px] border border-gray-300 overflow-hidden group cursor-pointer"
                  style={{ borderWidth: "0.58px" }}
                >
                  <img
                    src={drag6}
                    alt="Image 6"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="flex gap-[6px] mt-[6px]">
                  <div
                    className="w-[286.5px] h-[192.16px] border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag7}
                      alt="Image 7"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(6)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div
                    className="w-[280px] h-[192px] border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag8}
                      alt="Image 8"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(7)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
              </div>
              {/* Fourth Column */}
              <div className="inline-block h-full w-[573px] mr-[6px]">
                <div className="w-full h-[192.16px] overflow-hidden group cursor-pointer">
                  <img
                    src={drag9}
                    alt="Image 9"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(8)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="w-full h-[250.98px] border-[0.58px] mt-[6px] border-gray-300 overflow-hidden group cursor-pointer">
                  <img
                    src={drag10}
                    alt="Image 10"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(9)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
              {/* Duplicate content for seamless looping */}
              <div className="inline-block h-full w-[286.5px] mr-[6px]">
                <div className="relative w-full h-[250.98px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
                  <img
                    src={drag1}
                    alt="Image 1"
                    className="absolute top-[-68px] w-full h-[383px] object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="w-full h-[192.16px] mt-[6px] overflow-hidden group cursor-pointer">
                  <img
                    src={drag2}
                    alt="Image 2"
                    className="w-full h-full object-cover border border-gray-300 transition-transform duration-500 group-hover:scale-110"
                    style={{ borderWidth: "0.58px" }}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
              <div className="inline-block h-full w-[573px] mr-[6px]">
                <div className="flex gap-[6px] w-full h-[192.16px] mb-[6px]">
                  <div
                    className="w-[286.5px] h-full border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag3}
                      alt="Image 3"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div
                    className="w-[280px] h-full border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag4}
                      alt="Image 4"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(3)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
                <div
                  className="w-full h-[250.98px] border border-gray-300 overflow-hidden group cursor-pointer"
                  style={{ borderWidth: "0.58px" }}
                >
                  <img
                    src={drag5}
                    alt="Image 5"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
              <div className="inline-block h-full w-[573px] mr-[6px]">
                <div
                  className="w-full h-[250.98px] border border-gray-300 overflow-hidden group cursor-pointer"
                  style={{ borderWidth: "0.58px" }}
                >
                  <img
                    src={drag6}
                    alt="Image 6"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="flex gap-[6px] mt-[6px]">
                  <div
                    className="w-[286.5px] h-[192.16px] border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag7}
                      alt="Image 7"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(6)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div
                    className="w-[280px] h-[192px] border border-gray-300 overflow-hidden group cursor-pointer"
                    style={{ borderWidth: "0.58px" }}
                  >
                    <img
                      src={drag8}
                      alt="Image 8"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={() => handleMouseEnter(7)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
              </div>
              <div className="inline-block h-full w-[573px] mr-[6px]">
                <div className="w-full h-[192.16px] overflow-hidden group cursor-pointer">
                  <img
                    src={drag9}
                    alt="Image 9"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(8)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="w-full h-[250.98px] border-[0.58px] mt-[6px] border-gray-300 overflow-hidden group cursor-pointer">
                  <img
                    src={drag10}
                    alt="Image 10"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={() => handleMouseEnter(9)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pop-up Modal */}
      <AnimatePresence>
        {isPopUpOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePopUp}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden max-w-[55vw] max-h-[65vh]"
              variants={popUpVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={handleClosePopUp}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  src={images[selectedImageIndex]}
                  alt={`Image ${selectedImageIndex + 1}`}
                  className="w-[1025px] h-[441px] object-cover" // fills popup completely
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:scale-125 transition-transform duration-200 drop-shadow-lg"
                  onClick={handlePrevImage}
                >
                  ‹
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:scale-125 transition-transform duration-200 drop-shadow-lg"
                  onClick={handleNextImage}
                >
                  ›
                </button>
              </AnimatePresence>
            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

      {/* Inline CSS for marquee animation */}
      <style>{`
        @keyframes marquee-latest {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee-latest 20s linear infinite;
        }
      `}</style>
    </section>
    </>
  );
}