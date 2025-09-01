import React from "react";
import LArrow from "../../assets/pricing-pg/Larrow.png";
import DarkPg from "../../assets/pricing-pg/darkPg.png";
import Strip from "../../assets/pricing-pg/strip.png";

import { Link } from "react-router-dom";

export default function AfterPay() {
  return (
    <div>
      <section className="w-full h-[736px] flex">
        {/* left  */}

        <div
          className="w-[586px] h-[736px] bg-center bg-cover bg-no-repeat p-[30px] flex justify-start items-start"
          style={{ backgroundImage: 'url("/PricingPg/PayPg.png")' }}
        >
          <div className="w-[489px] h-[279px] flex gap-[32px]">
            <Link to="/AfterBilling">
              <div className="w-[52px] h-[52px] rounded-[48px] px-[17px] py-[8px] bg-[#FFFFFF1A] flex justify-center items-center fill-[#007B82] text-[#007B82]">
                <img src={LArrow} alt="" />
              </div>
            </Link>
            <div className="w-[405px] h-[279px] flex flex-col items-start justify-start gap-[52px]">
              <div className="w-[405px] h-[137px] flex flex-col gap-[18px]">
                <div className="w-[405px] h-[29px] text-[white] font-[400] text-[24px] leading-[100%]">
                  Your Plan
                </div>
                <div className="w-[405px] h-[48px] font-semibold text-[40px] text-[white]">
                  $29.00
                </div>
                <div className="w-[405px] h-[24px] font-[400] text-[20px] leading-[100%] text-white">
                  Enjoy your subscription, unless you cancel.
                </div>
              </div>

              <div className="w-[405px] h-[90px] rounded-[12px] px-[78px] py-[18px] flex flex-col justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0_2px_12px_0] shadow-[#007B8229] shadow-inner-[2px_2px_16px_0] shadow-inner-[#FFFFFF14]">
                <div className="w-[218px] h-[17px] text-center font-medium text-[14px] leading-100% text-white ">
                  COUPON APPLIED{" "}
                </div>
                <div className="w-[163px] min-h-[27px] flex gap-[12px]">
                  <img
                    src={DarkPg}
                    alt="page"
                    className="w-[24px] h-[24px] text-[#00B0BA]"
                  />
                  <div className="font-bold text-[22px] text-[#00b0ba]">
                    STACKLY10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="w-full h-736px p-[50px] flex justify-start items-start">
          <div className="w-[590px] h-[661px] flex flex-col justify-start items-start gap-[40px]">
            <div className="w-[590px] h-[31px] font-semibold text-[26px] leading-[100%] text-[#007B82]">
              Complete to enjoy your subscription
            </div>

            <div className="w-[590px] h-[590px] flex flex-col justify-start items-start gap-[32px]">
              <div className="w-[590px] h-[137px] flex flex-col justify-start items-start gap-[16px]">
                <div className="w-[590px] h-[24px] font-[400] text-[20px] leading-[100%] text-black">
                  Billing Frequency
                </div>
                <div className="w-[590px] h-[97px] flex justify-between items-center gap-[57px]">
                  <div className="w-[275px] h-[97ppx] rounded-[11px] border-[1px] border-solid border-black p-[30px] flex flex-col justify-start items-start gap-[14px]">
                    <div className="w-[243px] h-[22px] font-[400] text-[18px] leading-[100%] text-black">
                      Pay monthly
                    </div>
                    <div className="w-[243px] h-[29px] flex gap-[14px]">
                      <div className="w-[131px] h-[29px] font-semibold text-[24px] leading-[100%] text-black">
                        $29/month
                      </div>
                      <div className="w-[98px] h-[23px] rounded-[4px] px-[6px] py-[2px] bg-[#17AB0C] text-[16px] font-semibold text-white flex justify-center items-center">
                        Saved 20%
                      </div>
                    </div>
                  </div>
                  <div className="w-[236px] h-[97px] rounded-[11px] border-[1px] border-solid border-[#474748] p-[16px] flex flex-col justify-start items-start gap-[14px]">
                    <div className="w-[204px] h-[22px] font-[400] text-[18px] leading-[100%] text-[#474748]">
                      Pay monthly
                    </div>
                    <div className="w-[204px] h-[29px] font-semibold text-[24px] text-[#474748] leading-[100%]">
                      $59/month
                    </div>
                  </div>
                </div>
              </div>

              {/* email  */}
              <div className="w-[590px] h-[87px] flex flex-col gap-[12px] ">
                <div className="w-[590px] h-[25px] font-[400] text-[20px] leading-[26px] text-[black]">
                  Email <span className="text-red-700">*</span>
                </div>
                <input
                  type="email"
                  placeholder="ramprakash@example.com"
                  className="w-[590px] h-[50px] placeholder:text-[black] px-[20px] rounded-[10px] border-[1px] border-solid border-[#9D9C9C] bg-[#F9F9F9]"
                />
              </div>

              {/* card  */}

              <div className="w-[530px] h-[87px] flex justify-between gap-[32px]">
                <div className="w-[249px] h-[87px] flex flex-col gap-[12px] justify-start items-start">
                  <div className="w-[249px] h-[25px] font-[400] text-[20px] leading-[26px] text-[black]">
                    Card Number<span className="text-red-700">*</span>
                  </div>
                  <input
                    type="number"
                    placeholder="4232 XXXX XXXX"
                    className="w-[249px] h-[50px] placeholder:text-[black] rounded-[10px] border-[1px] border-solid border-[#9D9C9C] bg-[#F9F9F9] p-[12px] flex justify-start items-center gap-[10px]"
                  />
                </div>
                <div className="w-[249px] h-[87px] flex flex-col gap-[12px] justify-start items-start">
                  <div className="w-[249px] h-[25px] font-[400] text-[20px] leading-[26px] text-[black]">
                    CVV<span className="text-red-700">*</span>
                  </div>
                  <input
                    type="number"
                    placeholder="4XX"
                    className="w-[249px] h-[50px] placeholder:text-[black] rounded-[10px] border-[1px] border-solid border-[#9D9C9C] bg-[#F9F9F9] p-[12px] flex justify-start items-center gap-[10px]"
                  />
                </div>
                <div></div>
              </div>

              {/* coupon  */}

              <div className="w-[249px] h-[87px] flex flex-col justify-start items-start gap-[12px]">
                <div className="w-[249px] h-[25px] font-[400] text-[20px] leading-[26px] text-[#2A2A2A]">
                  Coupon
                </div>
                <div className="w-[249px] h-[50px] rounded-[10px] border-[1px] border-solid border-[#9D9C9C] bg-[#F9F9F9] p-[12px] flex justify-between items-center">
                  <div className="w-[88px] h-[26px] font-[400] text-[16px] leading-[26px] text-[black]">
                    STACKLY10
                  </div>
                  <div className="w-[72px] h-[23px] rounded-[4px] px-[6px] py-[2px] flex justify-center items-center gap-[10px] bg-[#17AB0C] text-white font-semibold text-[16px] leading-[100%]">
                    Applied
                  </div>
                </div>
              </div>
            </div>

            {/* button  */}

            <Link to="">
              <div className="w-[590px] h-[49px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-white font-semibold text-[20px]">
                Pay Now
              </div>
            </Link>

            <div className="w-[590px] h-[19px] flex justify-center items-center gap-[4px]">
              <div className="font-medium text-[16px] leading-[100%] text-center text-[#9F9F9F]">
                Powered by
              </div>
              <img src={Strip} alt="strip" className="w-[38px] h-[16px]" />
              <div className="font-[400] text-[16px] text-center underline text-[#007B82]">
                Terms
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
