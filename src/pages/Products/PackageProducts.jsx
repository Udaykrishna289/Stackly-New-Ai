import React from "react";
import { Link } from "react-router-dom";
import Coins from "../../assets/product-pg/GroupCoin.png";
import StarLight from "../../assets/product-pg/StarLight.png";
import bg from "../../assets/product-pg/bg.png";
import Ellipseblur from "../../assets/product-pg/section3Bg.png";

import Rectangle from "../../assets/product-pg/Rectangle.png";
import EclicpBlur2 from "../../assets/product-pg/EclicpBlur2.png";

export default function SignUpBanner() {
  return (
// NEW FIGMA DISGINE

<section
  className="w-full mx-auto h-[386px] bg-black relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${Ellipseblur})`,
  }}
>
<div
  className="absolute w-[717px] h-[241px] flex flex-col items-center gap-[32px] opacity-100 top-1/2 left-1/2"
  style={{
    transform: "translate(-50%, -50%)",
  }}
>
  {/* Top child */}
  <div
    className="w-[717px] h-[66px] text-center uppercase text-[42px] leading-[100%] font-normal"
    style={{
      fontFamily: "Lora, serif",
      background: "linear-gradient(180deg, #FFFFFF 18.18%, #F8BD00 87.88%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Join the Pro Experience
  </div>

  {/* Middle child */}
  <div
    className="w-[623px] h-[67px] text-center text-white text-[16px] leading-[140%] tracking-[0.3px] font-normal"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    Unlock advanced AI styles, high-resolution renders, and unlimited design suggestions for your interiors, exteriors, and beyond. Upgrade now and turn your dream spaces into reality without compromise.
  </div>

  {/* Bottom child (button) */}
 <Link to="/sign-in">
  <button
    className="w-[271px] h-[64px] flex items-center justify-center gap-[10px] rounded-full px-[30px] py-[10px]"
    style={{
      background: "linear-gradient(180deg, #FBA716 8.5%, #90600D 100%)",
    }}
  >
    <span
      className="text-white text-[22px] font-semibold leading-[44px] text-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Upgrade to Pro now
    </span>
  </button>
</Link>
</div>

</section>
);
}