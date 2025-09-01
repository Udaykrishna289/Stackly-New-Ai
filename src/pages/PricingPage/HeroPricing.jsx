// import React from "react";
// import { CheckCircle2 } from "lucide-react";
// import Banner1 from "../../assets/pricing-pg/banner1.png";
// import Banner2 from "../../assets/pricing-pg/banner2.png";
// import CreditStats from "./CreditStats";
// import Graph from "./Graph";
// import PricingTable from "./PricingTable";
// import PricingFaq from "./PricingFaq";
// import Billing from "./Billing";
// import Payment from "./Payment";
// import UiPlans from "./UiPlans";
// import ConformationPage from "./ConformationPage";
// import Pay from "./Pay";
// import { Link } from "react-router-dom";

// export default function HeroPricing() {

//       const features = [
//         "Unlimited Designs",
//         "High-Resolution 4K Images",
//         "Watermark-Free Downloads",
//         "Highly Advanced AI Designs",
//         "24/7 Support Assistance",
//         "Cancel Anytime",
//       ];

//   return (
//     <div>
//       {/* section-1  */}

//       <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-black overflow-hidden">
//         <div className="absolute inset-0 z-0 rotate-[45deg] scale-[2] origin-center">
//           <img
//             src={Banner1}
//             alt="Diagonal Grid 1"
//             className="absolute top-[-190px] left-[20%] w-[1000px] max-w-none"
//           />
//           <img
//             src={Banner2}
//             alt="Diagonal Grid 2"
//             className="absolute top-[230px] left-[-10%] w-[1300px] max-w-none"
//           />
//         </div>

//         <div className="relative z-10 text-center text-white px-4">
//           <h2 className="text-[50px]  font-bold leading-[100%] text-center">
//             See How <span className="text-teal-400">Stackly.AI</span> Powers
//             Innovation
//           </h2>
//           <p className="mt-8 text-[22px]  max-w-[937px] mx-auto text-white font-medium text-center">
//             Trusted by thousands of creators, developers, and teams. Explore
//             live usage stats and see how our community is growing every day.
//           </p>
//         </div>
//       </section>

//       {/* section-2  */}

//       <CreditStats />

//       {/* section-3  */}

//       <Graph />

//       {/* section-4  */}

//       <section className="bg-[#001E20] text-white text-center py-16 px-4 mb-[120px]">
//         {/* Heading */}
//         <h2 className="text-[44px] font-semibold leading-[140%] text-center mb-6">
//           Ready to Experience the Power?
//         </h2>

//         {/* CTA Button */}
//         <Link to="/Sign-in">
//           {" "}
//           <button className="bg-gradient-to-r from-[#00B0BA] via-[black] to-[#007B82] hover:from-cyan-600  text-white font-bold py-3 px-8 rounded-md text-[20px] transition-all duration-300">
//             Get Started for Free
//           </button>
//         </Link>

//         {/* Subtext */}
//         <p className="mt-6 text-[16px] leading-[28px] font-[400] text-[#f5f5f5] ">
//           No credit card needed. Sign up and explore your free credits today.
//         </p>
//       </section>

//       {/* section-5  */}
//       {/* <PricingTable /> */}
//       <UiPlans />

//       {/* section-6  */}

//       <div className="bg-[#001E20] text-white py-12 px-4 md:px-16 text-center mt-[120px]">
//         <h2 className="text-[48px] font-bold leading-[64px] text-center text-[white]">
//           Why Upgrade to Premium?
//         </h2>

//         <div className="inline-block mb-8">
//           <span className="bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[22px] leading-[44px] text-center text-white text-sm font-semibold px-[30px] py-[10px] rounded-[50px] relative top-[55px]">
//             Features of Paid Plans
//           </span>
//         </div>

//         <div className="border-[1px] border-solid border-teal-700 rounded-[30px] px-[60px] py-[80px] max-w-[1200px] mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
//             {features.map((feature, idx) => (
//               <div key={idx} className="flex items-start gap-2">
//                 <CheckCircle2 className="text-teal-400 w-5 h-5 mt-1" />
//                 <span className="text-[20px] leading-[44px] text-center font-medium">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* section-7  */}

//       <PricingFaq />

//       {/* section 8  */}
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Banner1 from "../../assets/pricing-pg/GroupCollage.png";
import Banner2 from "../../assets/pricing-pg/GroupCollage.png";
import Frame from "../../assets/pricing-pg/Frame.png";
import pricingBG from "../../assets/pricing-pg/pricingBG.png";
import BannerImg from "../../assets/pricing-pg/bannerSec2.png";
import scrol from "../../assets/pricing-pg/scrol.png";
import GraphImage from "../../assets/pricing-pg/Graph.png";
import sec4Bg from "../../assets/pricing-pg/sec4Bg.png";

import arrow from "../../assets/home/Arrow.png";
import CreditStats from "./CreditStats";
import Graph from "./Graph";
import PricingTable from "./PricingTable";
import PricingFaq from "./PricingFaq";
import Billing from "./Billing";
import Payment from "./Payment";
import UiPlans from "./UiPlans";
import ConformationPage from "./ConformationPage";
import Pay from "./Pay";
import { Link } from "react-router-dom";

export default function HeroPricing() {
  const features = [
    "Unlimited Designs",
    "High-Resolution 4K Images",
    "Watermark-Free Downloads",
    "Highly Advanced AI Designs",
    "24/7 Support Assistance",
    "Cancel Anytime",
  ];
const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate months for the current year automatically
  const months = monthNames.map((month) => `${month} ${currentYear}`);

  // Default: Current month/year
  const defaultMonth = `${monthNames[currentDate.getMonth()]} ${currentYear}`;
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div>
      {/* section-1 */}
     <section
  className="relative w-full h-auto  -mt-[75px] pt-[75px]  mx-auto  opacity-100 bg-black"
>
  <div
  className="absolute w-[604px] h-[604px] rounded-full bg-[#8A38F580] opacity-100 pointer-events-none"
  style={{
    top: "-467px",
    left: "-258px",
    transform: "rotate(0deg)",
    filter: "blur(200px)",
  }}
></div>
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

<div className="w-[1231px] h-[200px] flex items-center gap-[49px] opacity-100 absolute top-[216px] left-[123px]">

  {/* Left Child */}
  <div className="w-[474px] h-[200px] opacity-100">
    <h2 className="font-[Lora] font-semibold text-[52px] leading-[100%] tracking-[0] text-white">
      Discover How <br />
      <span className="text-purple-400">Stackly.AI</span> Drives <br />
      Innovation
    </h2>
  </div>

  {/* Right Child */}
  <div className="w-[708px] h-[136px] gap-[20px] opacity-100 flex flex-col justify-center text-white">
  {/* Top child: paragraph */}
  <p className="w-[708px] h-[72px] font-[Inter] font-normal text-[20px] leading-[140%] text-white opacity-100">
    Trusted by thousands of designers, homeowners, and teams worldwide. Explore real-time usage stats and watch our community transform spaces every day.
  </p>

  {/* Bottom child: Button */}
  <div className="w-[158px] h-[44px]">
    
  <div
    className="w-[158px] h-[44px] rounded-[30px] gap-[10px] px-[30px] py-[10px] flex items-center justify-center"
    style={{
      background: 'linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)',
      border: '1px solid #C22CA299',
    }}
  >
    <Link
  to="/sign-in"
  className="flex items-center gap-2" // flex row with space between
>
  {/* Text */}
  <span className="text-white font-inter font-medium text-[16px] leading-[100%]">
    Try Now
  </span>

  {/* Icon */}
  <div className="w-[24px] h-[24px]">
    <img src={arrow} alt="arrow" className="w-full h-full object-contain" />
  </div>
</Link>
  </div>
  
</div>


</div>

</div>

 <CreditStats />

 {/* GRAPH JSX */}
{/* GRAPH JSX */}
        <div className="w-full h-[816px] gap-[32px] opacity-100 relative top-[1200px]">
          {/* Heading */}
          <div className="w-[666px] h-[138px] flex flex-col gap-[18px] text-white mx-auto">
            <div className="w-full h-[66px]">
              <h2 className="text-[52px] font-semibold leading-[100%] font-[Lora] text-center">
                Growing Bigger, Every Day
              </h2>
            </div>
            <div className="w-full h-auto mb-[32px]">
              <p className="text-[18px] font-normal leading-[150%] text-center font-[Poppins]">
                Live graph displaying your credit activity over time, with
                labeled points such as “Yesterday,” “Today,” and others for easy
                tracking.
              </p>
            </div>
          </div>

          {/* Graph Container */}
          <div className="w-full h-auto flex flex-col items-center gap-[8px]">
            <div className="w-[1280px] h-[612px] rounded-[20px] border border-[#8A38F599]">
              <div className="w-full h-full rounded-[20px] bg-[#8A38F51A] shadow-[0px_0px_6px_0px_#00000040] pt-[44px]">
                <div className="w-[1139px] h-[63px] mx-auto flex justify-between items-center">
                  {/* Left Info */}
                  <div className="w-[372.6px] h-[63px] flex flex-col gap-[12px] items-start justify-center">
                    <div className="h-[27px]">
                      <p className="text-white text-[16px] font-medium leading-[100%] font-[Poppins]">
                        Current Date : {currentDate.toLocaleDateString()}
                      </p>
                    </div>
                    <div className="h-[24px] flex gap-[12px] items-center">
                      <div className="w-[125.3px] h-[24px] flex items-center gap-[4px]">
                        <div className="w-[13.3px] h-[13.3px] bg-white rounded-full"></div>
                        <div className="w-[108px] h-[24px] flex items-center justify-center">
                          <span className="text-white text-[16px] font-normal font-[Poppins]">
                            Designs Used
                          </span>
                        </div>
                      </div>
                      <div className="w-[253.3px] h-[24px] flex items-center gap-[4px]">
                        <div
                          className="w-[13.3px] h-[13.3px] rounded-full"
                          style={{
                            background:
                              "linear-gradient(180deg, #8A38F5 0%, #51218F 100%)",
                          }}
                        ></div>
                        {/* Right Child */}
                        <div className="flex items-center gap-[4px]">
                          {/* Gradient Dot */}
                          <div
                            className="w-[13.3px] h-[13.3px] rounded-full flex-shrink-0"
                            style={{
                              background:
                                "linear-gradient(180deg, #8A38F5 0%, #51218F 100%)",
                            }}
                          ></div>

                          {/* Text beside dot */}
                          <span className="text-white text-[16px] font-normal font-[Poppins] whitespace-nowrap">
                            Credits consumed in {selectedMonth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Month Selector */}
                  <div className="flex items-center gap-[18px]">
                    {/* Month Selector */}
                    <div className="relative">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-[200px] h-[44px] flex items-center justify-center gap-[10px] rounded-[30px] border border-[#C22CA299] px-[30px] py-[10px] text-white text-[16px] font-medium font-[Inter]"
                        style={{
                          background:
                            "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
                        }}
                      >
                        {selectedMonth}
                        <svg
                          className={`w-[18px] h-[18px] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="absolute mt-2 w-[200px] bg-[#C22CA2] text-white rounded-lg border border-gray-600 shadow-lg z-50"
                        >
                          {months.map((month) => (
                            <div
                              key={month}
                              onClick={() => {
                                setSelectedMonth(month);
                                setIsOpen(false);
                              }}
                              className="px-4 py-2 hover:bg-[#8A38F5] cursor-pointer"
                            >
                              {month}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Menu Icon Circle */}
                    <div className="w-[36px] h-[36px] rounded-full bg-transparent flex items-center justify-center border border-white cursor-pointer">
                      <div className="w-[27px] h-[18px] flex flex-col justify-between">
                        <span className="block h-[2px] w-full bg-white rounded"></span>
                        <span className="block h-[2px] w-full bg-white rounded"></span>
                        <span className="block h-[2px] w-full bg-white rounded"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative flex justify-center -top-[464px]">
              <div className="w-[1044px] h-[350px]">
                <img
                  src={GraphImage}
                  alt="Graph"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
  {/* Bottom Text */}
 <div className="w-[1280px] h-[26px] text-center text-white relative -top-[350px]">
  <p className="font-[Inter] text-[18px] font-normal leading-[100%]">
    *These numbers reflect the real impact of Stackly.Ai developers, teams, and creators building smarter every day.
  </p>
</div>
</div>
</div>

<div className="mt-[1210px]"> {/* You can adjust the 200px value as needed */}
  <UiPlans />
</div>



{/* section-6  */}

     <div
  className="
    h-[478px] text-white py-12 px-4 md:px-16 text-center  

    max-[440px]:bg-transparent max-[440px]:flex max-[440px]:flex-col 
    max-[440px]:w-[440px] max-[440px]:h-[486px] 
    max-[440px]:pt-[40px] max-[440px]:pr-[20px] 
    max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
    max-[440px]:gap-[48px]

    /* Tablet styles (441px to 768px) */
    min-[441px]:max-[768px]:w-[768px]
    min-[441px]:max-[768px]:h-[484px]
    min-[441px]:max-[768px]:gap-[48px]
    min-[441px]:max-[768px]:pt-[60px]
    min-[441px]:max-[768px]:pr-[40px]
    min-[441px]:max-[768px]:pb-[60px]
    min-[441px]:max-[768px]:pl-[40px]
  "
  style={{
    backgroundImage: `url(${sec4Bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>



     <h2
  className="
    text-[32px] font-bold leading-[64px] text-center text-white 
    max-[440px]:text-[20px] max-[440px]:leading-[140%] 
    max-[440px]:w-[400px] max-[440px]:h-[28px] max-[440px]:mx-auto

    /* Tablet styles */
    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[34px]
    min-[441px]:max-[768px]:text-[24px]
    min-[441px]:max-[768px]:font-[700]
    min-[441px]:max-[768px]:leading-[140%]
    min-[441px]:max-[768px]:text-center
  "
  style={{
    fontFamily: "Inter",
    fontWeight: 700,
    fontStyle: "normal",
    letterSpacing: "0%",
    opacity: 1,
    transform: "rotate(0deg)",
  }}
>
  Why Upgrade to <span className="text-[#FFB900]">Pro</span>?
</h2>


 <div className="hidden [@media(min-width:441px)]:block ">
          <div className="mt-[-10px] inline-block mb-8">
           <span
  className="
    w-[295px] h-[64px] text-[22px] leading-[44px] text-center text-white 
    text-sm font-semibold px-[30px] py-[10px] rounded-[50px] relative top-[32px]

    /* Tablet styles */
    min-[441px]:max-[768px]:w-[207px]
    min-[441px]:max-[768px]:h-[38px]
    min-[441px]:max-[768px]:px-[12px]
    min-[441px]:max-[768px]:py-[8px]
    min-[441px]:max-[768px]:rounded-[50px]
  "
  style={{
    background: "linear-gradient(180deg, #FBA716 8.5%, #90600D 100%)",
    opacity: 1,
    transform: "rotate(0deg)",
  }}
>

              Features of Paid Plans
            </span>
          </div>

   <div
  className="
    rounded-[30px] 
    px-[60px] py-[80px] max-w-[1200px] mx-auto

    /* Tablet styles */
    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[282px]
    min-[441px]:max-[768px]:rounded-[30px]
    min-[441px]:max-[768px]:gap-[10px]
    min-[441px]:max-[768px]:p-[10px]
  "
>


           <div
  className="
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left

    /* Tablet styles */
    min-[441px]:max-[768px]:w-[668px]
    min-[441px]:max-[768px]:h-[262px]
    min-[441px]:max-[768px]:gap-[50px]
    min-[441px]:max-[768px]:p-[35px_8px]
  "
>

              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  {/* Square with gradient and transparent check */}
                  <div
                    className="w-[24px] h-[24px] mt-2 ml-7 flex items-center justify-center rounded-[5px]"
                    style={{
                      background: "linear-gradient(180deg, #FBA716 41.67%, #95630D 133.33%)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent"
                      />
                    </svg>
                  </div>

                  <span className="text-[20px] leading-[44px] text-center font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* MOBILE */}
        <div className="[@media(min-width:441px)]:hidden -mt-[40px]">

      



          <div className="w-full flex justify-center mt-[-15px]">
            <div
              className="inline-block mb-8 flex items-center justify-center 
             w-full"
            >
           <span
  className="whitespace-nowrap text-white font-[400] text-[14px] leading-[140%] tracking-[0] 
             font-['Inter'] px-[30px] py-[10px] rounded-[50px] 
             relative top-[55px] flex justify-center items-center"
  style={{
    background: "linear-gradient(180deg, #FBA716 8.5%, #90600D 100%)"
  }}
>
  Features of Paid Plans
</span>

            </div>

          </div>


          <div
            className="flex flex-row w-[400px] h-[330px] border-[1px] border-solid border-teal-700 
             rounded-[30px] p-[10px] gap-[10px]"
          >
            <div className="grid grid-cols-2 gap-y-6 gap-x-20 w-full max-w-[550px] mx-auto py-[45px] px-[8px] text-left">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-[#FBA716] w-[24px] h-[24px] rounded-md flex items-center justify-center mt-[4px]">
                    <CheckCircle2 className="w-[14px] h-[14px] text-white" />
                  </div>
                  <span className="w-[126px] text-left font-['Inter'] font-medium text-[14px] leading-[140%] text-[#FFFFFF]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>




          </div>
        </div>
      </div>
</section>

      {/* section-7 */}
      {/* <PricingFaq /> */}
      {/* section 8  */}
    </div>
  );
}