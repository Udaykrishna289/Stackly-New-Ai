// import React from 'react'
// import SideArrow from "../../assets/pricing-pg/sideArrow.png"
// import Tick from "../../assets/pricing-pg/tick.png"
// import Tick1 from "../../assets/pricing-pg/tick1.png"
// import Paper from "../../assets/pricing-pg/paper.png"
// import { Link } from 'react-router-dom';

// export default function Billing() {
//   return (
//     <div>
//       <div
//         className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover
//       "
//         style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
//       >
//         <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
//           <div className="w-full min-h-[50px] flex justify-start">
//             <Link to="/UiPlans">
//               <div className="w-[70px] flex justify-center items-center">
//                 <img
//                   src={SideArrow}
//                   alt="Arrow"
//                   className="w-[24px] h-[24px]"
//                 />
//                 <div className="font-medium text-[20px] leading-[156%] text-[#2A2A2A]">
//                   Back
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
//             <div className="w-full min-h-[76px] flex justify-center items-center">
//               <div className="w-[822px] h-[76px] flex justify-start items-center">
//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
//                     Billing Info
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className=" w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-[#B0B0B0]">
//                     Payment Method
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#B0B0B0]">
//                     Success
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-[1160px] h-[544px] flex justify-between items-start gap-[18px]">
//               <div className="w-[716px] h-[544px] flex justify-start items-start flex-col gap-[30px]">
//                 <div className="w-[716px] h-[37px] font-semibold text-[24px] leading-[156%] text-[#007B82] ">
//                   Billing Information
//                 </div>

//                 <div className="w-[716px] h-[477px] flex flex-col justify-start items-start gap-[12px]">
//                   <div className="w-[716px] h-[42px] flex justify-between items-center gap-[16px]">
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Basic
//                         <input
//                           type="radio"
//                           className="accent-[#007B82]  w-[308px]"
//                           name="premium"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400]  text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Silver
//                         <input
//                           type="radio"
//                           className="accent-[#007B82] w-[308px]"
//                           name="premium"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Gold
//                         <input
//                           type="radio"
//                           className="accent-[#007B82] w-[308px]"
//                           name="premium"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-[472px] h-[42px] flex justify-between items-center gap-[16px]">
//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
//                         Monthly
//                         <input
//                           type="radio"
//                           className="accent-[#007B82]  w-[278px]"
//                           name="Durations"
//                         />
//                       </div>
//                     </div>

//                     <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
//                       <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center">
//                         Yearly
//                         <input
//                           type="radio"
//                           className="accent-[#007B82] w-[278px] "
//                           name="Durations"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div className="w-[716px] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"> */}
//                   <input
//                     type="name"
//                     className="w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
//                     placeholder="Full Name"
//                   />

//                   <input
//                     type="name"
//                     className="w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
//                     placeholder="Email"
//                   />

//                   <div className="w-[716px] h-[52px]  flex justify-between items-start gap-[16px]">
//                     <input
//                       type="text"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="Address"
//                     />
//                     <input
//                       type="number"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="Phone Number"
//                     />
//                     <input
//                       type="text"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="City"
//                     />
//                   </div>

//                   <div className="w-[716px] h-[52px] flex justify-between items-start gap-[16px]">
//                     <input
//                       type="text"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="State/Province"
//                     />
//                     <input
//                       type="number"
//                       className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
//                       placeholder="Zip/Postal Code"
//                     />
//                     <div className="w-[228px] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] flex justify-between items-center  overflow-hidden px-[20px] cursor-pointer">
//                       <select
//                         name=""
//                         id=""
//                         className="w-[208px] cursor-pointer"
//                       >
//                         <option value="">IND</option>
//                         <option value="">USA</option>
//                       </select>
//                     </div>
//                   </div>

//                   <input
//                     type="name"
//                     className="w-[716px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
//                     placeholder="Enter Coupen Code"
//                   />

//                   <Link to="/Pay">
//                     <div className="w-[716px] h-[49px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] text-[white] text-[16px] text-bold leading-[35px] tracking-[0px] text-center flex justify-center items-center">
//                       Continue
//                     </div>
//                   </Link>
//                 </div>
//               </div>

//               {/* right */}
//               <div className="w-[426px] h-[504px] border-[1.5px] flex flex-col justify-center items-center gap-[px]">
//                 <div className="w-[384.54px] h-[327.96px] rounded-[16px] bg-[#007B82B2] backdrop-blur-32 px-[20px] py-[50px] gap-[20px] flex flex-col justify-start">
//                   <div className="font-semibold text-[24px] leading-[100%] text-[white]">
//                     Plan Details
//                   </div>

//                   <div className="w-[334.79px] h-[192.92px] rounded-[16px] p-[16px] bg-[#007B82] flex flex-col justify-center items-center ">
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Plan Name
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         Silver
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Price
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         $29.00
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Duration
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         One Month
//                       </div>
//                     </div>
//                     <div className="w-[303px] h-[128px] flex">
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
//                         Discount
//                       </div>
//                       <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
//                         (Use code)
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[384.54px] h-[176.04px] rounded-[16px] bg-[#007B82B2] flex items-end py-5 px-5">
//                   <div className="w-[334.79px] h-[66.32px] flex justify-between items-center">
//                     <div className="w-[84px] h-[55px] flex flex-col justify-center items-center">
//                       <div className="w-[77px] h-[17px] font-[400] text-[14px] leading-[100%] text-white">
//                         Grand Total
//                       </div>
//                       <div className="font-[600] text-[25px] leading-[100%] text-[white]">
//                         $29.00
//                       </div>
//                     </div>

//                     <div className="w-[38px] h-[51px]">
//                       <img src={Paper} alt="page-icon" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute top-[480px] right-[450px]"></div>
//                 <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute  top-[480px] right-[70px]"></div>
//                 <div className="w-[60%] border-[2px] border-dashed border-white absolute top-[505px]"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react'
import SideArrow from "../../assets/pricing-pg/sideArrow.png"
import Tick from "../../assets/pricing-pg/tick.png"
import Tick1 from "../../assets/pricing-pg/tick1.png"
import Paper from "../../assets/pricing-pg/paper.png"
import { Link } from 'react-router-dom';

export default function Billing() {
  return (
    <div>
      <div
        className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover
      "
        style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
      >
        <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
          <div className="w-full min-h-[50px] flex justify-start">
            <Link to="/UiPlans">
              <div className="w-[70px] flex justify-center items-center">
                <img
                  src={SideArrow}
                  alt="Arrow"
                  className="w-[24px] h-[24px]"
                />
                <div className="font-medium text-[20px] leading-[156%] text-[#2A2A2A]">
                  Back
                </div>
              </div>
            </Link>
          </div>

          <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
            <div className="w-full min-h-[76px] flex justify-center items-center">
              <div className="w-[822px] h-[76px] flex justify-start items-center">
                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
                  <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
                    Billing Info
                  </div>
                </div>

                <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
                  <div className=" w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-[#B0B0B0]">
                    Payment Method
                  </div>
                </div>

                <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
                  <div className="font-semibold text-[16px] leading-[56%] text-[#B0B0B0]">
                    Success
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[1160px] h-[544px] flex justify-between items-start gap-[18px]">
              <div className="w-[716px] h-[544px] flex justify-start items-start flex-col gap-[30px]">
                <div className="w-[716px] h-[37px] font-semibold text-[24px] leading-[156%] text-[#007B82] ">
                  Billing Information
                </div>

                <div className="w-[716px] h-[477px] flex flex-col justify-start items-start gap-[12px]">
                  <div className="w-[716px] h-[42px] flex justify-between items-center gap-[16px]">
                    <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
                      <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
                        Basic
                        <input
                          type="radio"
                          className="accent-[#007B82]  w-[308px]"
                          name="premium"
                        />
                      </div>
                    </div>
                    <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
                      <div className="font-[400]  text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
                        Silver
                        <input
                          type="radio"
                          className="accent-[#007B82] w-[308px]"
                          name="premium"
                        />
                      </div>
                    </div>
                    <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
                      <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
                        Gold
                        <input
                          type="radio"
                          className="accent-[#007B82] w-[308px]"
                          name="premium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-[472px] h-[42px] flex justify-between items-center gap-[16px]">
                    <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
                      <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center ">
                        Monthly
                        <input
                          type="radio"
                          className="accent-[#007B82]  w-[278px]"
                          name="Durations"
                        />
                      </div>
                    </div>

                    <div className="w-[228px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#007B82] bg-[white] flex justify-between items-center px-[16px] py-[10px]">
                      <div className="font-[400] text-[14px] leading-[140%] text-[#007B82] flex justify-between items-center">
                        Yearly
                        <input
                          type="radio"
                          className="accent-[#007B82] w-[278px] "
                          name="Durations"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="w-[716px] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"> */}
                  <input
                    type="name"
                    className="w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
                    placeholder="Full Name"
                  />

                  <input
                    type="name"
                    className="w-[716px] h-[52px] placeholder:text-[#2A2A2A] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
                    placeholder="Email"
                  />

                  <div className="w-[716px] h-[52px]  flex justify-between items-start gap-[16px]">
                    <input
                      type="text"
                      className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
                      placeholder="Address"
                    />
                    <input
                      type="number"
                      className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
                      placeholder="City"
                    />
                  </div>

                  <div className="w-[716px] h-[52px] flex justify-between items-start gap-[16px]">
                    <input
                      type="text"
                      className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
                      placeholder="State/Province"
                    />
                    <input
                      type="number"
                      className="w-[228px] placeholder:text-[#2A2A2A] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px]"
                      placeholder="Zip/Postal Code"
                    />
                    <div className="w-[228px] bg-white h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] flex justify-between items-center  overflow-hidden px-[20px] cursor-pointer">
                      <select
                        name=""
                        id=""
                        className="w-[208px] cursor-pointer"
                      >
                        <option value="">IND</option>
                        <option value="">USA</option>
                      </select>
                    </div>
                  </div>

                  <input
                    type="name"
                    className="w-[716px] placeholder:text-[#2A2A2A] h-[52px] rounded-[12px] border-[1px] border-solid border-[#007B82] px-[20px] py-[14px] flex justify-start items-center text-[14px] leading-[24px] tracking-[0.3px] font-[400] text-[#2A2A2A] bg-white"
                    placeholder="Enter Coupen Code"
                  />

                  <Link to="/Pay">
                    <div className="w-[716px] h-[49px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] text-[white] text-[16px] text-bold leading-[35px] tracking-[0px] text-center flex justify-center items-center">
                      Continue
                    </div>
                  </Link>
                </div>
              </div>

              {/* right */}
              <div className="w-[426px] h-[504px] border-[1.5px] flex flex-col justify-center items-center gap-[px]">
                <div className="w-[384.54px] h-[327.96px] rounded-[16px] bg-[#007B82B2] backdrop-blur-32 px-[20px] py-[50px] gap-[20px] flex flex-col justify-start">
                  <div className="font-semibold text-[24px] leading-[100%] text-[white]">
                    Plan Details
                  </div>

                  <div className="w-[334.79px] h-[192.92px] rounded-[16px] p-[16px] bg-[#007B82] flex flex-col justify-center items-center ">
                    <div className="w-[303px] h-[128px] flex">
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                        Plan Name
                      </div>
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                        Silver
                      </div>
                    </div>
                    <div className="w-[303px] h-[128px] flex">
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                        Price
                      </div>
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                        $29.00
                      </div>
                    </div>
                    <div className="w-[303px] h-[128px] flex">
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                        Duration
                      </div>
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                        One Month
                      </div>
                    </div>
                    <div className="w-[303px] h-[128px] flex">
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-[white] font-medium">
                        Discount
                      </div>
                      <div className="w-[50%] h-[32px] flex justify-start items-center text-white font-semibold">
                        (Use code)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[384.54px] h-[176.04px] rounded-[16px] bg-[#007B82B2] flex items-end py-5 px-5">
                  <div className="w-[334.79px] h-[66.32px] flex justify-between items-center">
                    <div className="w-[84px] h-[55px] flex flex-col justify-center items-center">
                      <div className="w-[77px] h-[17px] font-[400] text-[14px] leading-[100%] text-white">
                        Grand Total
                      </div>
                      <div className="font-[600] text-[25px] leading-[100%] text-[white]">
                        $29.00
                      </div>
                    </div>

                    <div className="w-[38px] h-[51px]">
                      <img src={Paper} alt="page-icon" />
                    </div>
                  </div>
                </div>
                <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute top-[480px] right-[450px]"></div>
                <div className="w-[50px] h-[50px] rounded-[50px] bg-white absolute  top-[480px] right-[70px]"></div>
                <div className="w-[60%] border-[2px] border-dashed border-white absolute top-[505px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}