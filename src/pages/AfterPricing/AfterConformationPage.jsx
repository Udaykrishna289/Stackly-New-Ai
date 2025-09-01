import React from "react";
import { Link } from "react-router-dom";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import Tik from "../../assets/pricing-pg/tik.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import Paper from "../../assets/pricing-pg/paper.png";
import LArrow from "../../assets/pricing-pg/Larrow.png";

export default function AfterConformationPage() {
  return (
    <div>
      <section
        className="w-full h-[736px] p-[50px] flex flex-col justify-start items-start] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/PricingPg/CPage.png")' }}
      >
        <Link to="/AfterHeroPricing#afteruiplans">
          <div className="w-[52px] h-[52px] rounded-[48px] px-[17px] py-[8px] bg-[#FFFFFF1A] flex justify-center items-center fill-[#007B82] text-[#007B82]">
            <img src={LArrow} alt="" />
          </div>
        </Link>

        <div className="w-full h-[600px] flex  justify-center items-center gap-[52px]">
          <div className="w-[497px] h-[374px] flex flex-col justify-start items-start gap-[52px]">
            <div className="w-[497px] h-[90px] flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[497px] h-[48px] text-[40px] leading-[100%] text-white font-[400]">
                Silver Plan
              </div>
              <div className="w-[497px] h-[24px] text-[20px] leading-[100%] font-[400] text-white">
                Get ready to unlock Silver Subscription benefits
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-2">
                <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                <div className="font-medium text-lg leading-lg text-[white]">
                  High-resolution image download
                </div>
              </div>
              <div className="flex gap-2">
                <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                <div className="font-medium text-lg leading-lg text-[white]">
                  Advanced AI layout suggestions
                </div>
              </div>
              <div className="flex gap-2">
                <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                <div className="font-medium text-lg leading-lg text-[white]">
                  Access to premium themes & colour palettes
                </div>
              </div>
              <div className="flex gap-2">
                <img src={Tik} alt="tik" className="w-[28px] h-[28px]" />
                <div className="font-medium text-lg leading-lg text-[white]">
                  High-resolution image download
                </div>
              </div>
              <Link>
                {" "}
                <div className="flex gap-2">
                  <img
                    src={Rarrow}
                    alt="tik"
                    className="w-[15px] h-[20px] flex items-center justify-center"
                  />
                  <div className="font-medium text-lg leading-lg text-[white]">
                    See 4 more
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[455px] h-[463px] flex flex-col justify-center items-center gap-[10px]">
            <div className="w-[410px] h-[300px] rounded-[18px] bg-[#007B824D] backdrop-blur-[35.4px] p-[20px] flex flex-col gap-[30px]">
              <div className="font-semibold text-[white] text-[20px] leading-[100%]">
                Plan Details
              </div>
              <div className="w-[357px] h-[177px] rounded-[18px] p-[18px] bg-[#007B82]">
                <div className="w-[303px] h-[35px] flex">
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                    Plan Name
                  </div>
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                    Silver
                  </div>
                </div>
                <div className="w-[303px] h-[35px] flex">
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                    Price
                  </div>
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                    $29.00
                  </div>
                </div>
                <div className="w-[303px] h-[35px] flex">
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                    Duration
                  </div>
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                    One Month
                  </div>
                </div>
                <div className="w-[303px] h-[35px] flex">
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                    Discount
                  </div>
                  <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                    10%
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[366px] border-[1.66px] border-dashed border-white"></div>
            <div className="w-[410.45px] h-[161.52px] rounded-[18px] bg-[#007B824D] flex justify-center items-center p-[20px]">
              <div className="w-[334.79px] h-[66.32px] flex justify-between items-center">
                <div className="w-[84px] h-[55px] flex flex-col justify-center items-center">
                  <div className="w-[77px] h-[17px] font-[400] text-[14px] leading-[100%] text-white">
                    Grand Total
                  </div>
                  <div className="font-[600] text-[25px] leading-[100%] text-[white]">
                    ₹29.20
                  </div>
                </div>

                <div className="w-[38px] h-[51px]">
                  <img src={Paper} alt="page-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/AfterBilling">
          {" "}
          <div className="text-white w-[590px] h-[62px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center font-semibold text-[20px] text-center ml-[150px]">
            Confirm Payment
          </div>
        </Link>
      </section>
    </div>
  );
}
