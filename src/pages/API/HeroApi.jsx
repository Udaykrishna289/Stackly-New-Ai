import React from 'react'
import apiBackground from '../../assets/api/back.png';
import buttonkey from '../../assets/api/Key1.png'
import Keys from './Keys';
import ApiIntegrate from './ApiIntegrate';
import Plan from './Plan';
import ApiAccess from './ApiAccess';
import HowItWorks from './HowItWorks';
import CustomAPIPlan from './CustomApiPlan';
import Draggable from './Draggable';
import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m1.jpg";
import sec14Img4 from "../../assets/home/sec14/m2.jpg";
import sec14Img5 from "../../assets/home/sec14/m3.jpg";
import ApiFaq from './ApiFaq';
import keyImage from "../../assets/api/key.png";
import apibg from "../../assets/api/API3.png";

import { Link } from 'react-router-dom';



export default function HeroApi() {

  const faqs = [
    {
      question: "How do I get started with StacklyAI APIs?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: " What image formats do StacklyAI APIs support?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
  ];


  return (
  <div>
{/* NEW FIGMA DISGINE */}
<section
  className="w-full -mt-[75px] pt-[75px] flex flex-col items-center bg-no-repeat bg-top bg-black"
  style={{
    backgroundImage: `url(${apibg})`,
    backgroundSize: "100% auto", // scales height with content
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
>

  {/* Marquee Section */}
  <div className="w-full h-[46px] mb-3 ">
    <div className="marquee-container w-full h-full overflow-hidden whitespace-nowrap">
      <div className="marquee-content animate-marquee inline-block">
        <span className="marquee-text text-[16px] px-4">
          Hey! It looks like you are from USA. We support Purchasing Power
          Parity pricing, so enjoy 50% off on your subscription. Use code: abc589
        </span>
        <span className="marquee-text text-[16px] px-4 ml-[80px]">
          Hey! It looks like you are from USA. We support Purchasing Power
          Parity pricing, so enjoy 50% off on your subscription. Use code: abc589
        </span>
      </div>
    </div>
  </div>

  {/* Centered Content Block */}
  <div className="w-full max-w-[836px] h-[281px] flex flex-col items-center gap-[40px] mt-[90px] px-4 text-center">
    
    {/* Heading */}
    <div className="w-full h-[107px]">
      <h1 className="text-[42px] text-white font-[600] leading-[100%] font-['Lora']">
        Transform Spaces in Real Time with StacklyAI
      </h1>
    </div>

    {/* Subheading */}
    <div className="w-full h-[50px]">
      <p className="text-[18px] text-[#E0E0E0] font-[500] leading-[140%] font-['Poppins']">
        Experience intelligent design solutions crafted to enhance interiors, exteriors
        <br />
        and outdoor spaces with seamless AI precision
      </p>
    </div>

    {/* Button */}
    <Link to="/sign-in">
     <div className="w-[212px] h-[44px] flex items-center gap-[10px] px-[30px] py-[10px] rounded-[30px] border border-white bg-gradient-to-r from-[rgba(138,56,245,0.5)] to-[rgba(194,44,162,0.5)]">
       {/* Right Child: Text */}
      <div className="w-[118px] h-[19px] flex items-center">
        <span className="text-white text-[16px] leading-[100%] font-medium font-['Inter']">
          Get API Access
        </span>
      </div>
      {/* Left Child: Image */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <img src={buttonkey} alt="Key" className="w-full h-full object-contain" />
      </div>
      </div>
    </Link>

  </div>

 <ApiIntegrate />
  <CustomAPIPlan />
   
</section>

 

 
      {/* section-3  */}

      {/* <Keys /> */}

      {/* section 4  */}

     

      {/* section-5  */}

      {/* <Plan /> */}

      {/* section-6  */}

      {/* <ApiAccess /> */}

      {/* section-7  */}

      {/* <HowItWorks /> */}

      {/* section-8  */}

      

      {/* section-9  */}

     
      {/* section-14  */}

      {/* <ApiFaq faqs={faqs} /> */}
    </div>
  );
}