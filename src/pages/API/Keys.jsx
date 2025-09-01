import React from "react";
import keyImage from "../../assets/api/key.png";
import rightL from "../../assets/api/rightl.png";
import rightLs from "../../assets/api/rightls.png";
import leftB from "../../assets/api/leftb.png";
import leftT from "../../assets/api/leftt.png";
 

export default function Keys() {
  return (
    <div className="relative w-full h-[856px] bg-white flex items-center justify-center overflow-hidden">
    {/* Curve decorations */}
    {/* <img
      src={rightL}
      alt="curve"
      className="absolute top-[-200px] right-[-600px] w-[719.82px] h-[719.82px] rotate-[0deg] border border-[#66747F4D]"
    />
    <img
      src={rightLs}
      alt="curve"
      className="absolute top-[0px] right-[-0px] w-[240.09px] h-[240.09px] rotate-[-90deg] border border-[#66747F4D]"
    />
    <img
      src={leftT}
      alt="curve"
      className="absolute top-[0px] left-[0px] w-[240.09px] h-[240.09px] rotate-[80deg] border border-[#66747F4D]"
    />
    <img
      src={leftB}
      alt="curve"
      className="absolute top-[170px] left-[50px] w-[120.05px] h-[120.05px] rotate-[-180deg] border border-[#66747F4D]"
    /> */}

    {/* Content */}
    <div className="z-10 flex flex-col items-center">
      {/* Title */}
      <h2 className="w-[895px] h-[64px] font-[700] font-bold text-[48px] leading-[64px] text-center text-[#2a2a2a]">
        What Is an <span className="text-[#009A98]">API Key?</span>
      </h2>

      {/* Subtitle */}
      <p className="w-[895px] h-[64px] font-[400] text-[20px] leading-[32px] text-center text-[#2a2a2a] mt-4">
        An API key is your unique access code to authenticate and use StacklyAI’s <br />rendering engine from your own app or system.
      </p>

      {/* Content Row */}
      <div className="flex items-center gap-[200px] mt-10">
        {/* Info Cards */}
        <div className="w-[630px] h-[385px] flex flex-col justify-between">
          {/* Card 1 */}
          <div className="w-[616px] h-[100px] bg-[#ABB2BB4]  border-solid border-[3px] border-[#00B0BA] rounded-[30px] flex items-center justify-center">
            <p className="w-[489px] h-[36px] font-semibold text-[20px] leading-[36px] text-center text-[#2a2a2a]">
              Each key is linked to a team or client
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[616px] h-[136px] bg-[#ABB2BB4] border-solid border-[3px] border-[#00B0BA] rounded-[30px] flex items-center justify-center">
            <p className="w-[100%] max-w-[342px] text-center font-semibold text-[20px] leading-[36px]  text-[#2A2A2A]">
              It tracks the number of images generated (design credits)
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[616px] h-[136px] bg-[#ABB2BB4] border-solid border-[3px] border-[#00B0BA] rounded-[30px] flex items-center justify-center">
            <p className="w-[342px] text-center font-semibold text-[20px] leading-[36px] text-center text-[#2a2a2a]">
              You can monitor usage and manage limits for each key
            </p>
          </div>
        </div>

        {/* Illustration */}
        <img
          src={keyImage}
          alt="API Key Illustration"
          className="w-[644px] h-[634]"
        />
      </div>
    </div>
  </div>
  );
}
