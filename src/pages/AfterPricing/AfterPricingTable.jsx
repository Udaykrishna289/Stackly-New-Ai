import React from "react";
import Tik from "../../assets/pricing-pg/tik.png";
import Silver from "../../assets/pricing-pg/silver.png";
import Page from "../../assets/pricing-pg/page.png";
import Gold from "../../assets/pricing-pg/grpGold.png";
import BgImage from "../../assets/pricing-pg/bg-plan.png";
import { Link } from "react-router-dom";

export default function AfterPricingTable() {
  return (
    <div>
      <section
  className="w-full min-h-[1080px] flex flex-col justify-center items-center gap-[40px] py-[50px] px-[50px] bg-cover bg-no-repeat bg-center bg-fixed"
  style={{ 
    backgroundImage: `url(${BgImage})`,
    backgroundColor: 'gray' // fallback
  }}
>
        <div className="max-w-[922px] min-h-[64px] text-[48px] text-[black] font-bold ">
          Find the Perfect Plan for You
        </div>
        <div className="max-w-[759px] min-h-[28px] font-[400] text-[18px] leading-[28px] text-center text-[#b0b0b0]">
          Start free or unlock premium features—choose what fits your journey
          best.
        </div>

        <div className="w-full flex justify-around">
          <div>
            <div className="w-[413px] min-w-[340px] min-h-[819px] rounded-[12px] border-[1px] border-solid border-[white] px-[20px] py-[40px] flex flex-col justify-start items-center gap-[50px]  shadow-[0_2px_12px_0] shadow-[#007B8229] relative top-[115px]">
              <div className="w-[373px] min-h-[254px] flex flex-col justify-start items-start gap-[34px]">
                <div className="w-[360px] min-h-[32px] font-bold text-[32px] text-[#007B82]">
                  Basic <span className="text-[black]"> (Free) </span>
                </div>
                <div className="font-bold text-[32px] text-[#2a2a2a] leading-4x1">
                  $0{" "}
                  <span className="font-[400] text-lg leading-lg text-[#2A2A2AB2]">
                    /per month
                  </span>
                </div>
                <div className="font-[400] text-[16px] text-[#2A2A2AB2]">
                  Perfect for personal or casual users who want a simple idea of
                  interior design.
                </div>
                <Link to="">
                  <div className="w-[373px] h-[46px] rounded-[5px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center">
                    Get Started
                  </div>
                </Link>
              </div>

              <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

              <div className="w-[373px] min-h-[420px] flex flex-col justify-start items-start gap-[24px]">
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    10 Room Designs per month
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Limited AI-generated layouts
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Basic furniture suggestions
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Download SD images,no advanced tools
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Email support (Standard)
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    No customization options
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    No revision support
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Watermark images
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[414px] flex justify-center mb-6">
              <div className="w-[374px] h-[90px] rounded-[12px] border[1px] border-solid border-[#007B82] bg-[#001E20] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_16px_0] shadow-inner-[#FFFFFF14] font-bold text-[28px] leading-[100%] text-[#00D1DD] flex flex-col justify-center items-center">
                Get 10% OFF
                <div className="font-medium text-[17px] text-white">
                  On Silver Memberships!
                </div>
              </div>
            </div>

            <div className="w-[414px] min-h-[1013px] min-w-[340px] rounded-[12px] border-[2px] border-solid border-[#B0B0B0] px-[20px] py-[40px] bg-[white] shadow-[0_2px_12px_0] shadow-[#007B8229] gap-[50px] flex flex-col">
              <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start">
                <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start gap-[34px]">
                  <div className="w-[360px] h-[32px] flex justify-between">
                    <div className="font-bold text-[32px] leading-xl text-[#CECECE]">
                      silver
                    </div>
                    <img
                      src={Silver}
                      alt="silver"
                      className="w-[85.24px] h-[80px]"
                    />
                  </div>
                  <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[#1A1A1A]">
                    $29 or ₹2,399{" "}
                    <span className="font-[400] text-lg leading-lg text-[#2A2A2AB2]">
                      {" "}
                      /per month
                    </span>
                  </div>
                  <div className="font-[400] text-[16px] text-[#2A2A2AB2]">
                    Ideal for homeowners or renters looking for more creative
                    control and polished designs.
                  </div>
                  <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-white shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
                    <div className="font-medium text-[14px] leading-[100%] text-center text-[#2A2A2A]">
                      Use code
                    </div>
                    <div className="w-[163px] min-h-[27px] flex gap-[12px]">
                      <img
                        src={Page}
                        alt="page"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-bold text-[22px] text-[#007B82]">
                        STACKLY10
                      </div>
                    </div>
                  </div>
                  <Link to="/AfterConformationPage">
                    {" "}
                    <div className="w-[373px] h-[46px] rounded-[5px] border-[1px] border-solid border-[#007B82] text-[#007B82] flex justify-center items-center">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

              <div className="w-[374px] min-h-[504px] flex flex-col justify-start items-start gap-[24px]">
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    50 Room Designs per month
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Advanced AI layout suggestions
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Access to premium themes & colour palettes
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Furniture & decor recommendations
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    High-resolution image download
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    25+ design revisions per room
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    3D walk-through not included
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    No dedicated designer session
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[414px] flex justify-center mb-6">
              <div className="w-[374px] h-[90px] rounded-[12px] border[1px] border-solid border-[#007B82] bg-[#001E20] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_16px_0] shadow-inner-[#FFFFFF14] font-bold text-[28px] leading-[100%] text-[#00D1DD] flex flex-col justify-center items-center">
                Get 20% OFF
                <div className="font-medium text-[17px] text-white">
                  On Gold Memberships!
                </div>
              </div>
            </div>

            <div className="w-[414px] min-h-[1013px] min-w-[340px] rounded-[12px] border-[3px] border-solid border-[#FFB700] px-[20px] py-[40px] bg-[white] shadow-[0_2px_12px_0] shadow-[#007B8229] gap-[50px] flex flex-col">
              <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start">
                <div className="w-[374px] min-h-[364px] flex flex-col justify-start items-start gap-[34px]">
                  <div className="w-[360px] h-[32px] flex justify-between">
                    <div className="font-bold text-[32px] leading-xl text-[#FFB700]">
                      Gold <span className="text-[18px]">Most Popular</span>
                    </div>
                    <img
                      src={Gold}
                      alt="silver"
                      className="w-[85.24px] h-[80px]"
                    />
                  </div>
                  <div className="w-[374px] h-[52px] font-bold text-[32px] leading-4x1 text-[#1A1A1A]">
                    $59 or ₹4,799{" "}
                    <span className="font-[400] text-lg leading-lg text-[#2A2A2AB2]">
                      {" "}
                      /per month
                    </span>
                  </div>
                  <div className="font-[400] text-[16px] text-[#2A2A2AB2]">
                    Best for professionals, renovators, or anyone seeking
                    top-tier results and personalization.
                  </div>
                  <div className="w-[374px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-white shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_12px_0] shadow-inner-[#FFFFFF14]">
                    <div className="font-medium text-[14px] leading-[100%] text-center text-[#2A2A2A]">
                      Use code
                    </div>
                    <div className="w-[163px] min-h-[27px] flex gap-[12px]">
                      <img
                        src={Page}
                        alt="page"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-bold text-[22px] text-[#007B82]">
                        STACKLY10
                      </div>
                    </div>
                  </div>
                  <Link to="/AfterConformationPage1">
                    <div className="w-[373px] h-[46px] rounded-[5px] border-[1px] border-solid border-[#007B82] text-[white] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-[373px] h-[1px] border-[1px] border-dashed border-[#1A1A1A2E]"></div>

              <div className="w-[373px] min-h-[608px] flex flex-col justify-start items-start gap-[24px]">
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Unlimited Room Designs
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Commercial use upto 3-5 members
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Fully customized AI designs with layout and lighting
                    suggestions
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Access to all premium themes + seasonal collections
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    3D walk-through visualizations
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    High-resolution downloads + mood boards
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Unlimited design revisions
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Dedicated 1-on-1 consultation with expert designern
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Priority support (Live chat + Email)
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                  <div className="font-medium text-lg leading-lg text-[#2a2a2a]">
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
