import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Banner1 from "../../assets/pricing-pg/banner1.png";
import Banner2 from "../../assets/pricing-pg/banner2.png";
import AfterCreditStats from "./AfterCreditStats";
import AfterGraph from "./AfterGraph";
import AfterPricingTable from "./AfterPricingTable";
import AfterPricingFaq from "./AfterPricingFaq";
import AfterBilling from "./AfterBilling";
import AfterPayment from "./AfterPayment";
import AfterUiPlans from "./AfterUiPlans";
import AfterConformationPage from "./AfterConformationPage";
import AfterPay from "./AfterPay";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import Bg1 from "../../assets/afterHome/insBg.png";
import img1 from "../../assets/afterHome/img1.png";
import img2 from "../../assets/afterHome/img2.png";
import img3 from "../../assets/afterHome/img3.png";
import img4 from "../../assets/afterHome/img4.png";

export default function ImageSection() {
  const [bgImg, setBgImg] = useState(Bg1); // default background

 const images = [
  { top: 433, left: 352.73, rotate: -12, src: img1, z: 1 },
  { top: 448.43, left: 531.5, rotate: 8.09, src: img2, z: 3 }, // higher z-index
  { top: 442.41, left: 671.28, rotate: 12.53, src: img3, z: 2 },
  { top: 452.02, left: 856.29, rotate: -9.26, src: img4, z: 1 },
];
 
  return (
    <div>
     <div
      className="w-[1440px] h-[750px] bg-cover bg-center -mt-[82px] pt-[82px] overflow-hidden relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

         <div
          className="w-[939px] h-[123px] mx-auto relative flex flex-col items-center gap-[34px] opacity-100  "
          style={{ top: "146px" }}
        >
          {/* Top H2 Text */}
          <h2 className="w-[939px] h-[57px] text-center text-white text-[52px] lancelot-text capitalize opacity-100">
            Unveil the art of modern living.
          </h2>

          {/* Bottom P Text */}
          <p className="w-[573px] h-[56px] text-center text-white text-[22px] lora-text  font-medium capitalize opacity-100">
            Discover curated spaces, smart ideas, and timeless style crafted to inspire your everyday.
          </p>
        </div>

        {/* img container */}
<div className="relative w-full h-full -mt-[200px]">
     
{images.map((img, i) => (
  <div
    key={i}
    className="absolute w-[201.71px] h-[201.71px] rounded-[22px] border-[5.48px] border-[#FFFFFF33] overflow-hidden opacity-100 transition-transform duration-300 hover:scale-105"
    style={{
      top: `${img.top}px`,
      left: `${img.left}px`,
      transform: `rotate(${img.rotate}deg)`,
      boxShadow:
        "8.77px 8.77px 4.39px 0px #00000040 inset, -8.77px -8.77px 4.39px 0px #00000040 inset",
      zIndex: img.z, // control stacking
    }}
    onMouseEnter={() => setBgImg(img.src)}
    onMouseLeave={() => setBgImg(Bg1)}
  >
    <img
      src={img.src}
      alt={`img-${i}`}
      className="w-full h-full object-cover"
    />
  </div>
))}
      </div>
      </div>
       <AfterCreditStats />
    </div>
  );
}