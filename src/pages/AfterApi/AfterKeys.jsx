import React from "react";
import keyImage from "../../assets/api/key.png";
import rightL from "../../assets/api/rightl.png";
import rightLs from "../../assets/api/rightls.png";
import leftB from "../../assets/api/leftb.png";
import leftT from "../../assets/api/leftt.png";

export default function AfterKeys() {
  return (
    <div className="relative w-full min-h-[856px] bg-white flex items-center justify-center overflow-hidden py-10 md:py-0">
      {/* Border Images - All preserved */}
      <img 
        src={leftT} 
        alt="" 
        className="absolute left-0 top-0 w-[100px] md:w-auto h-auto" 
      />
      <img 
        src={leftB} 
        alt="" 
        className="absolute left-0 bottom-0 w-[100px] md:w-auto h-auto" 
      />
      <img 
        src={rightL} 
        alt="" 
        className="absolute right-0 top-0 w-[100px] md:w-auto h-auto" 
      />
      <img 
        src={rightLs} 
        alt="" 
        className="absolute right-0 bottom-0 w-[100px] md:w-auto h-auto" 
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center px-4 w-full max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="w-full max-w-[895px] font-bold text-[32px] md:text-[48px] leading-[48px] md:leading-[64px] text-center text-[#2a2a2a]">
          What Is an <span className="text-[#009A98]">API Key?</span>
        </h2>

        {/* Subtitle */}
        <p className="w-full max-w-[895px] font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-center text-[#2a2a2a] mt-4">
          An API key is your unique access code to authenticate and use StacklyAI's rendering engine from your own app or system.
        </p>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[200px] mt-10 w-full">
          {/* Info Cards */}
          <div className="w-full max-w-[630px] flex flex-col justify-between gap-6">
            {/* Card 1 */}
            <div className="w-full max-w-[616px] min-h-[100px] bg-[#ABB2BB4] border-solid border-[3px] border-[#00B0BA] rounded-[30px] flex items-center justify-center p-4">
              <p className="font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[36px] text-center text-[#2a2a2a]">
                Each key is linked to a team or client
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[616px] min-h-[136px] bg-[#ABB2BB4] border-solid border-[3px] border-[#00B0BA] rounded-[30px] flex items-center justify-center p-4">
              <p className="font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[36px] text-center text-[#2A2A2A]">
                It tracks the number of images generated (design credits)
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[616px] min-h-[136px] bg-[#ABB2BB4] border-solid border-[3px] border-[#00B0BA] rounded-[30px] flex items-center justify-center p-4">
              <p className="font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[36px] text-center text-[#2a2a2a]">
                You can monitor usage and manage limits for each key
              </p>
            </div>
          </div>

          {/* Illustration */}
          <img
            src={keyImage}
            alt="API Key Illustration"
            className="w-full max-w-[644px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
