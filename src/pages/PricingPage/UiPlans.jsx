import React, { useState } from "react";
import Tik from "../../assets/pricing-pg/tik.png";
import Silver from "../../assets/pricing-pg/silver.png";
import Gold from "../../assets/pricing-pg/grpGold.png";
import DarkPg from "../../assets/pricing-pg/darkPg.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import BG from "../../assets/pricing-pg/Pricing1.png"; // <-- Background image
import { Link } from "react-router-dom";

export default function AfterUiPlans() {
  const [showSilverMore, setShowSilverMore] = useState(false);
  const [showGoldMore, setShowGoldMore] = useState(false);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const [currentTabletPlanIndex, setCurrentTabletPlanIndex] = useState(0);

  const toggleSilverMore = () => setShowSilverMore(!showSilverMore);
  const toggleGoldMore = () => setShowGoldMore(!showGoldMore);

  const BasicPlan = ({ mobile = false }) => (
    <div
      className={`${
        mobile ? "w-[340px]" : "w-full"
      } rounded-[12px] p-5 bg-[#000000] border-[2px] border-solid border-[#FFFFFF33] shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}
    >
      {/* Basic Plan Content */}
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-center">
          <div className="font-bold text-2xl text-[#FFFFFF]">
            Basic <span className="text-white text-lg">(Free)</span>
          </div>
        </div>

        <p className="text-white text-sm text-center w-full">
          Perfect for personal or casual users who want a simple idea of
          interior design.
        </p>

        <div className="flex justify-center">
          <div className="text-white font-bold text-2xl">
            $0 <span className="text-base font-normal">/per month</span>
          </div>
        </div>

        <Link to="/Sign-in">
          <div
            className="w-full h-[42px] gap-[10px] rounded-[30px] border border-[#C22CA299] 
             px-[30px] py-[10px] text-white flex justify-center items-center 
             bg-gradient-to-r from-[#8A38F580] to-[#C22CA280]
             hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white"
          >
            Purchase
          </div>
        </Link>
      </div>
      <hr className="border-dashed border-[#C99FFF]" />
      <div className="flex flex-col gap-4 mt-4">
        {[
          "10 Room Designs per month",
          "Limited AI-generated layouts",
          "Basic furniture suggestions",
          "Download SD images, no advanced tools",
          "Email support (Standard)",
          "No customization options",
          "No revision support",
          "Watermark images",
        ].map((item, idx) => (
          <div className="flex gap-2 items-start" key={idx}>
            <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#8A38F5_0%,#C22CA2_100%)] rounded-[4px] flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SilverPlan = ({ mobile = false }) => (
    <div
  className={`${
    mobile ? "w-[340px]" : "w-full"
  } rounded-[12px] p-5 bg-[#000000] border-[2px] border-solid border-[#FFFFFF33] flex flex-col gap-6 backdrop-blur-[6px]`}
  style={{
    background:
      "linear-gradient(180deg, rgba(72, 32, 126, 0.8) 0%, rgba(0, 0, 0, 0.8) 77.57%)",
    boxShadow:
      "8px 8px 4px 0px #00000029 inset, -8px -8px 4px 0px #00000029 inset",
  }}
>
      {/* Silver Plan Content */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <h3 className="text-white text-2xl font-bold">Premium</h3>
        </div>

        <p className="text-white text-sm text-center w-full">
          Ideal for homeowners or renters looking for more creative control and
          polished designs.
        </p>

        <div className="text-white text-2xl font-bold text-center w-full">
          $29 or ₹2,399{" "}
          <span className="text-base font-normal">/per month</span>
        </div>

        <div className="bg-[#8A38F51A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
          <p className="text-xs font-medium">Use code (Get 10%OFF)</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <img
              src={DarkPg}
              alt="page"
              className="w-4 h-4 filter brightness-0 invert"
            />
            <span className="font-bold text-lg text-white">STACKLY10</span>
          </div>
        </div>
        <Link to="/Sign-in">
          <div
            className="w-full h-[42px] gap-[10px] rounded-[30px] border-[1px] border-solid border-[#C22CA299] 
             px-[30px] py-[10px] text-[#C22CA2] flex justify-center items-center 
             bg-[#FFFFFF]
             hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white"
          >
            Purchase
          </div>
        </Link>
      </div>
      <hr className="border-dashed border-[#C99FFF]" />
      <div className="flex flex-col gap-4 mt-4">
        {[
          "50 Room Designs per month",
          "Advanced AI layout suggestions",
          "Access to premium themes & colour palettes",
          "Furniture & decor recommendations",
          "High-resolution image download",
        ]
          .concat(
            showSilverMore
              ? [
                  "Priority email support",
                  "Basic customization options",
                  "Limited revisions (up to 3)",
                  "No watermark on images",
                ]
              : []
          )
          .map((item, idx) => (
            <div className="flex gap-2 items-start" key={idx}>
              <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#8A38F5_0%,#C22CA2_100%)] rounded-[4px] flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">{item}</span>
            </div>
          ))}
        <button
          className="flex gap-2 items-center cursor-pointer text-white"
          onClick={toggleSilverMore}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 h-4 transition-transform ${
              showSilverMore ? "rotate-90" : ""
            }`}
          >
            <path
              d="M8 5L15 12L8 19"
              stroke="#8A38F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">
            {showSilverMore ? "Show less" : "See 4 more"}
          </span>
        </button>
      </div>
    </div>
  );

  const GoldPlan = ({ mobile = false }) => (
    <div
      className={`${
        mobile ? "w-[340px]" : "w-full"
      } relative rounded-[12px] p-5 bg-[#000000] border-[2px] border-solid border-[#FFFFFF33] flex flex-col gap-6`}
    >
      {/* Gold Plan Content */}
      <span className="absolute top-0 right-0 bg-gradient-to-b from-[#FFAA17] to-[#99660E] px-2 py-1 text-white text-xs font-medium rounded-tr-md rounded-bl-lg">
        Most Popular
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <h3 className="text-[#FFFFFF] text-2xl font-bold">Pro</h3>
        </div>

        <p className="text-white text-sm text-center w-full">
          Best for professionals, renovators, or anyone seeking top-tier results
          and personalization.
        </p>
        <div className="text-white mb-1 text-2xl font-bold text-center w-full">
          $59 or ₹4,799{" "}
          <span className="text-base font-normal">/per month</span>
        </div>

        <div className="bg-[#8A38F51A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
          <p className="text-xs font-medium text-white">
            Use code (Get 10%OFF)
          </p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <img
              src={DarkPg}
              alt="page"
              className="w-4 h-4 invert brightness-0"
            />
            <span className="font-bold text-lg" style={{ color: "#ffffff" }}>
              STACKLY20
            </span>
          </div>
        </div>
        <Link to="/Sign-in">
          <div
            className="w-full h-[42px] gap-[10px] rounded-[30px] border border-[#C22CA299] 
             px-[30px] py-[10px] text-white flex justify-center items-center 
             bg-gradient-to-r from-[#8A38F580] to-[#C22CA280]
             hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white"
          >
            Purchase
          </div>
        </Link>
      </div>
      <hr className="border-dashed border-[#C99FFF]" />
      <div className="flex flex-col gap-4 mt-4">
        {[
          "Unlimited Room Designs",
          "Commercial use upto 3-5 members",
          "Fully customized AI designs with layout and lighting suggestions",
          "Unlimited design revisions",
          "3D walk-through visualizations",
        ]
          .concat(
            showGoldMore
              ? [
                  "Dedicated support with 24-hour response time",
                  "Advanced customization tools",
                  "Export designs in multiple formats",
                  "Access to exclusive design templates",
                ]
              : []
          )
          .map((item, idx) => (
            <div className="flex gap-2 items-start" key={idx}>
              <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[linear-gradient(180deg,#FBA716_41.67%,#95630D_157.14%)] rounded-[4px] flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">{item}</span>
            </div>
          ))}
        <button
          className="flex gap-2 items-center cursor-pointer text-white"
          onClick={toggleGoldMore}
        >
          <svg
            width="10.4"
            height="18.8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 h-4 transition-transform ${
              showGoldMore ? "rotate-90" : ""
            }`}
          >
            <path
              d="M8 5L15 12L8 19"
              stroke="#8A38F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">
            {showGoldMore ? "Show less" : "See 4 more"}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <section
          className="w-full py-12 px-4 bg-cover bg-top bg-no-repeat max-[440px]:-mt-[2239px]"
          style={{
            backgroundImage: `url(${BG})`,
            backgroundColor: "#000", // fallback black
          }}
         
        >
          <div className="hidden max-[440px]:block w-[168px] h-[168px] bg-[#00B0BA66] mx-auto mb-6 rounded-full blur-[124px]"></div>
    
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 max-[440px]:-mt-[185px]">
            <div className="text-center">
             <h2
      className="lora-text text-white leading-[1.2] font-medium mb-4 max-w-2xl mx-auto 
        text-[32px] md:text-4xl 
        max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:leading-[100%] max-[440px]:text-center
        min-[441px]:max-[768px]:w-full min-[441px]:max-[768px]:h-auto min-[441px]:max-[768px]:text-[24px]"
    >
      Find the right plan that <br className="hidden min-[769px]:inline" /> suits your needs
    </h2>
    
              <p
                className="text-white text-[20px] md:text-xl mx-auto 
                max-[440px]:w-[400px] max-[440px]:h-[44px] max-[440px]:text-[16px] 
                max-[440px]:leading-[140%] max-[440px]:text-center max-[440px]:whitespace-normal
                min-[441px]:max-[768px]:w-full min-[441px]:max-[768px]:h-auto min-[441px]:max-[768px]:text-[18px]"
                style={{ fontFamily: 'Inter', fontWeight: 400 }}
              >
                Start free or unlock premium features. Choose what fits your journey best.
              </p>
            </div>
    
             {/* Mobile Slider */}
            <div className="w-full md:hidden flex flex-col items-center">
              {/* Slider Wrapper with Fixed Width */}
              <div className="overflow-hidden w-[366px]">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentPlanIndex * 366}px)`, // shift based on fixed width
                  }}
                >
                  {[<BasicPlan mobile />, <SilverPlan mobile />, <GoldPlan mobile />].map((Plan, index) => (
                    <div key={index} className="w-[366px] flex-shrink-0 px-2">
                      {Plan}
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Slide Buttons */}
              <div className="flex justify-center items-center gap-4 mt-6">
                {/* Left Arrow */}
                <button
                  onClick={() => setCurrentPlanIndex((prev) => (prev > 0 ? prev - 1 : 0))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous plan"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#2A2A2A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
    
                {/* Dots */}
                <div className="flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPlanIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentPlanIndex === index ? 'bg-cyan-400' : 'bg-gray-400'
                        }`}
                      aria-label={`Go to plan ${index + 1}`}
                    />
                  ))}
                </div>
    
                {/* Right Arrow */}
                <button
                  onClick={() => setCurrentPlanIndex((prev) => (prev < 2 ? prev + 1 : 2))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next plan"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
            {/* Tablet Slider (441px-768px) */}
            <div className="hidden min-[441px]:max-[768px]:flex flex-col items-center w-full">
    
              <div className="overflow-hidden w-[366px]">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentTabletPlanIndex * 366}px)` }}
                >
                  {[<BasicPlan mobile />, <SilverPlan mobile />, <GoldPlan mobile />].map((Plan, index) => (
                    <div key={index} className="w-[366px] flex-shrink-0 px-2">
                      {Plan}
                    </div>
                  ))}
                </div>
              </div>
    
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentTabletPlanIndex((prev) => (prev > 0 ? prev - 1 : 0))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous plan"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTabletPlanIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentTabletPlanIndex === index ? 'bg-cyan-400' : 'bg-gray-400'}`}
                      aria-label={`Go to plan ${index + 1}`}
                    />
                  ))}
                </div>
    
                <button
                  onClick={() => setCurrentTabletPlanIndex((prev) => (prev < 2 ? prev + 1 : 2))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next plan"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
    
            {/* Desktop Layout (769px and above) */}
           <div className="hidden min-[769px]:grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              <BasicPlan />
              <SilverPlan />
              <GoldPlan />
            </div>
          </div>
        </section>
  );
}
