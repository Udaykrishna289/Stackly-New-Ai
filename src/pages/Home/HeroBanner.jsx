// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function HeroBanner() {
//   const [changeText, setChangeText] = useState(0);
//   const [showAfterImage, setShowAfterImage] = useState(false);

//   // Rotate text every 1 second
//   useEffect(() => {
//     const textInterval = setInterval(() => {
//       setChangeText((prev) => (prev === 3 ? 0 : prev + 1));
//     }, 1000);

//     return () => clearInterval(textInterval);
//   }, []);

//   // Rotate images every 1 second
//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setShowAfterImage((prev) => !prev);
//     }, 1000);

//     return () => clearInterval(imageInterval);
//   }, []);

//   return (
//     <section
//       className="bg-cover bg-center bg-no-repeat w-full h-auto"
//       style={{ backgroundImage: "url('/home/sec1/banner-bg.png')" }}
//     >
//       <div className="bg-[#0000000f]">
//         {/* Marquee */}
//         <div className="marquee-container">
//           <div className="-content">
//             <span className="marquee-text">
//               Hey! It looks like you are from USA. We support Purchasing Power
//               Parity pricing, so enjoy 50% off on your subscription. Use code:
//               abc589
//             </span>
//             <span className="marquee-text">
//               Hey! It looks like you are from USA. We support Purchasing Power
//               Parity pricing, so enjoy 50% off on your subscription. Use code:
//               abc589
//             </span>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="max-[1000px]:flex-col w-full min-h-screen flex justify-center items-center gap-10 px-[5%] py-[30px]">
//           {/* Left Text */}
//           <div className="max-w-[700px] min-h-[304px] flex flex-col justify-center gap-10 items-start">
//             <h3 className="max-w-[700px] w-full text-5xl font-semibold leading-[100%] text-white max-[500px]:text-4xl">
//               Design Your{" "}
//               <span className="text-[#ffd56b]">
//                 {["Interiors", "Kitchen", "Balcony", "Living Room"][changeText]}
//               </span>
//               <br />
//               Space With AI
//             </h3>
//             <p
//               className="max-w-[524px] w-full min-h-[30px] text-[17px] font-medium leading-[150%] text-neutral-100 max-[500px]:text-sm"
//               style={{ wordSpacing: "3px" }}
//             >
//               Easy to Use, Zero Learning, AI Powered Design Tool to generate
//               Your Own Space Photo-like images in 25 Seconds
//             </p>

//             <Link to="sign-in">
//               <div className="max-w-[305px] w-[305px] h-[50px] flex justify-center items-center bg-[#007b82] text-white shadow-[10px_10px_10px_10px_#2a2a2a29] cursor-pointer rounded-[5px] hover:bg-[#2e9ea4] hover:text-white max-[500px]:h-10">
//                 <p
//                   className="text-lg font-bold leading-[100%] text-center text-white"
//                   style={{ wordSpacing: "2px" }}
//                 >
//                   Design Now!
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Right Image */}
//           <div className="relative w-full max-w-[500px] min-h-[312px] overflow-hidden rounded-lg">
//             {/* BEFORE */}
//             <div
//               className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
//                 showAfterImage ? "opacity-0" : "opacity-100"
//               }`}
//               style={{ backgroundImage: "url('/home/sec1/banner-home.png')" }}
//             >
//               <div className="flex flex-col justify-start items-start gap-1 pl-6 pt-2.5 max-[500px]:p-3">
//                 <div className="bg-[#00000066] px-2.5 py-1.5 rounded">
//                   <p className="text-white text-base font-medium">ORIGINAL ROOM</p>
//                 </div>
//                 <p className="text-sm text-white font-medium pl-1">Before</p>
//               </div>
//             </div>

//             {/* AFTER */}
//             <div
//               className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
//                 showAfterImage ? "opacity-100" : "opacity-0"
//               }`}
//               style={{ backgroundImage: "url('/home/sec1/afterImg.png')" }}
//             >
//               <div className="flex flex-col justify-start items-start gap-1 pl-6 pt-2.5 max-[500px]:p-3">
//                 <div className="bg-[#00000066] px-2.5 py-1.5 rounded">
//                   <p className="text-white text-base font-medium">STACKLYAI</p>
//                 </div>
//                 <p className="text-sm text-white font-medium pl-1">After</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Frame from "../../assets/home/Frame.png"
// import background from "../../assets/home/banner2.png";
// import star from "../../assets/home/Big star.png"



// export default function HeroBanner() {
//   const [changeText, setChangeText] = useState(0);
//   const [showAfterImage, setShowAfterImage] = useState(false);
//   const navigate = useNavigate();

//   //Rotate text every 1 second
//   useEffect(() => {
//     const textInterval = setInterval(() => {
//       setChangeText((prev) => (prev === 3 ? 0 : prev + 1));
//     }, 1000);

//     return () => clearInterval(textInterval);
//   }, []);

//   //Rotate images every 1 second
//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setShowAfterImage((prev) => !prev);
//     }, 1000);

//     return () => clearInterval(imageInterval);
//   }, []);
//   return (
// <section
//   className="bg-cover bg-center bg-no-repeat w-full min-h-[743px] 
//              max-[440px]:flex max-[440px]:flex-col 
//              max-[440px]:w-[440px] 
//              max-[440px]:h-[743px] 
//              max-[440px]:pb-[60px] 
//              max-[440px]:gap-[50px] 
//              -mt-[82px] pt-[82px]"
//   style={{
//     backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
//   }}
// >
//         <div className="h-[46px] marquee-container max-[440px]:w-[440px] max-[440px]:h-[46px]">

//           <div className="marquee-content">
//             <span className="marquee-text text-[16px]">
//               Hey! It looks like you are from USA. We support Purchasing Power
//               Parity pricing, so enjoy 50% off on your subscription. Use code:
//               abc589
//             </span>
//             <span className="marquee-text text-[16px]">
//               Hey! It looks like you are from USA. We support Purchasing Power
//               Parity pricing, so enjoy 50% off on your subscription. Use code:
//               abc589
//             </span>
//           </div>
//         </div>

//         <div className="w-full h-[600px] flex justify-center items-center px-[5%] gap-[20px]
//   max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-[30px] max-[1000px]:py-[30px]">
//           {/* Left Text Section */}
// <div
//   className="w-[611px] h-[427px] text-[48px] flex flex-col justify-center items-start gap-[32px] 
//              max-[1000px]:w-full max-[1000px]:items-center relative"
//   style={{ left: "-280px", opacity: 1, flexShrink: 0 }}
// >


// {/* Only the custom AI-generated text blocks */}
// <div className="flex flex-col gap-[4px] w-[590px] mt-4 max-[440px]:w-[100%]">

//   {/* Text 1: Generate */}
//   <div className="h-[73px]" style={{ opacity: 1 }}>
//    <p
//   className="text-[52px] font-normal leading-[140%] lora-text"
//  style={{
//   background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 67.11%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
// }}

// >
//   Generate
// </p>

//   </div>

//  {/* Text 2: Unique */}
// <div className="h-[73px]" style={{ opacity: 1 }}>
//   <p
//     className="text-[52px] font-normal leading-[140%] lora-text"
//     style={{
//   background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 67.11%)",
  
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
// }}

//   >
//     Unique
//   </p>
// </div>


//   {/* Text 3: AI Image of your */}
//  <div className="h-[73px] relative flex items-center" style={{ opacity: 1 }}>
//   <p
//     className="text-[52px] font-normal leading-[140%] lora-text"
//     style={{
//  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 160.11%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
// }}

//   >
//     AI Image of your
//   </p>

//   {/* Star positioned above the "A" of "AI" */}
//   <div className="w-[15.43px] h-[15.43px] absolute top-[4px] left-[34px] opacity-100 rotate-0">
//     <img
//       src={star}
//       alt="star"
//       className="w-[15.43px] h-[15.43px] opacity-100 rotate-0 
//         [mask-image:linear-gradient(180deg,_#FFFFFF_0%,_#400C84_100%)] 
//         [mask-repeat:no-repeat] 
//         [mask-size:cover]"
//     />
//   </div>
// </div>


// {/* Text 4: Dream House */}

// <div className="h-[95px] -mt-[11px] flex items-center gap-2" style={{ opacity: 1 }}>
//   <p
//     className="text-[68px] font-normal leading-[140%] lancelot-text"
//     style={{
//   background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 160.11%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
// }}

//   >
//     Dream House
//   </p>

//   <div className="w-[40px] h-[40px] opacity-100 rotate-0">
//     <img
//       src={star}
//       alt="star"
//       className="w-[40px] h-[40px] opacity-100 rotate-0 [mask-image:linear-gradient(180deg,_#FFFFFF_0%,_#745899_100%)] [mask-repeat:no-repeat] [mask-size:cover]"
//     />
//   </div>
// </div>




// </div>


//           <div
//   className="w-[604px] h-[103px] flex flex-col gap-[40px] opacity-100 max-[640px]:w-full"
// >
// <div className="w-[604px] h-[27px] opacity-100">
//  <p
//   className="text-[18px] font-normal leading-[100%] text-white 
//              max-[500px]:text-sm max-[1000px]:text-center poppins-font
//              overflow-hidden whitespace-nowrap typing"
// >
//   "Curated interiors powered by AI, designed for unparalleled luxury"
// </p>

// <style>
//   {`
//     @keyframes typing {
//       from { width: 0 }
//       to { width: 100% }
//     }

//     .typing {
//       width: 0;
//       animation: typing 3s steps(50, end) forwards;
//     }
//   `}
// </style>

// </div>


// <div
//   className="w-[245px] h-[44px] flex justify-center items-center cursor-pointer opacity-100"
//   onClick={() => navigate("/sign-in")}
// >
// <div
//   className="flex items-center justify-center gap-[10px] rounded-[30px] border px-[30px] py-[10px]"
//   style={{
//     background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
//     borderWidth: "1px",
//     width: "fit-content",
//   }}
// >
//   {/* Text */}
//   <p
//     className="text-[16px] font-medium leading-[100%] text-white"
//     style={{
//       fontFamily: "Inter, sans-serif",
//       opacity: 1,
//     }}
//   >
//     Generate your style
//   </p>

//   {/* Symbol/Image */}
//   <div className="flex items-center justify-center w-[24px] h-[24px]">
//     <img
//       src={Frame}
//       alt="icon"
//       className="w-[19.5px] h-[19.5px]"
//       style={{
//         filter:
//           "brightness(0) saturate(100%) invert(92%) sepia(56%) saturate(763%) hue-rotate(239deg) brightness(97%) contrast(102%)",
//       }}
//     />
//   </div>



// </div>

// </div>

// {/* star 3 */}
// <div className="w-[20px] h-[20px] opacity-100 rotate-0 absolute top-[-20px] left-[794px] flex items-center justify-center">
//   <img
//     src={star}
//     alt="icon"
//     className="w-[20px] h-[20px] opacity-100 rotate-0"
//     style={{
//       filter:
//         "brightness(0) saturate(100%) invert(72%) sepia(79%) saturate(1681%) hue-rotate(151deg) brightness(99%) contrast(102%)",
//     }}
//   />
// </div>

// {/* star 4 */}
// <div className="w-[20px] h-[20px] opacity-100 rotate-0 absolute top-[451px] left-[834px] flex items-center justify-center">
//   <img
//     src={star}
//     alt="icon"
//     className="w-[20px] h-[20px] opacity-100 rotate-0"
//     style={{
//       filter:
//         "brightness(0) saturate(100%) invert(72%) sepia(79%) saturate(1681%) hue-rotate(151deg) brightness(99%) contrast(102%)",
//     }}
//   />
// </div>


//           </div>

// {/* add here  */}
          
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../../assets/home/Frame.png";
import background from "../../assets/home/banner2.png";
import star from "../../assets/home/Big star.png";

export default function HeroBanner() {
  const [changeText, setChangeText] = useState(0);
  const [showAfterImage, setShowAfterImage] = useState(false);
  const navigate = useNavigate();

  //Rotate text every 1 second
  useEffect(() => {
    const textInterval = setInterval(() => {
      setChangeText((prev) => (prev === 3 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(textInterval);
  }, []);

  //Rotate images every 1 second
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setShowAfterImage((prev) => !prev);
    }, 1000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      className="bg-cover bg-top bg-no-repeat w-full min-h-[743px] 
             max-[440px]:flex max-[440px]:flex-col 
             max-[440px]:w-[440px] 
             max-[440px]:h-[743px] 
             max-[440px]:pb-[60px] 
             max-[440px]:gap-[50px] 
             -mt-[82px] pt-[82px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
      }}
    >
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

      {/* Main Content */}
      <div className="w-full h-[600px] flex justify-center items-center px-[5%] gap-[20px] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-[30px] max-[1000px]:py-[30px]">
        {/* Left Text Section */}
        <div
          className="w-[611px] h-[427px] text-[48px] flex flex-col justify-center items-start gap-[32px] 
             max-[1000px]:w-full max-[1000px]:items-center relative"
          style={{ left: "-280px", opacity: 1, flexShrink: 0 }}
        >
          {/* Text Blocks */}
          <div className="flex flex-col gap-[4px] w-[590px] mt-4 max-[440px]:w-[100%]">
            {/* Text 1: Generate */}
            <div className="h-[73px]" style={{ opacity: 1 }}>
              <p
                className="text-[52px] font-normal leading-[140%] lora-text"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 67.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Generate
              </p>
            </div>

            {/* Text 2: Unique */}
            <div className="h-[73px]" style={{ opacity: 1 }}>
              <p
                className="text-[52px] font-normal leading-[140%] lora-text"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 67.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Unique
              </p>
            </div>

            {/* Text 3: AI Image of your */}
            <div className="h-[73px] relative flex items-center" style={{ opacity: 1 }}>
              <p
                className="text-[52px] font-normal leading-[140%] lora-text"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 160.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Image of your
              </p>

              {/* Star positioned above the "A" of "AI" - Now with rotation */}
              <div className="w-[15.43px] h-[15.43px] absolute top-[4px] left-[34px] opacity-100 animate-[spin_3s_linear_infinite]">
                <img
                  src={star}
                  alt="star"
                  className="w-[15.43px] h-[15.43px] 
                    [mask-image:linear-gradient(180deg,_#FFFFFF_0%,_#400C84_100%)] 
                    [mask-repeat:no-repeat] 
                    [mask-size:cover]"
                />
              </div>
            </div>

            {/* Text 4: Dream House */}
            <div className="h-[95px] -mt-[11px] flex items-center gap-2" style={{ opacity: 1 }}>
              <p
                className="text-[68px] font-normal leading-[140%] lancelot-text"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 160.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dream House
              </p>

              {/* Large star with rotation */}
              <div className="w-[40px] h-[40px] opacity-100 animate-[spin_4s_linear_infinite]">
                <img
                  src={star}
                  alt="star"
                  className="w-[40px] h-[40px] [mask-image:linear-gradient(180deg,_#FFFFFF_0%,_#745899_100%)] [mask-repeat:no-repeat] [mask-size:cover]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-[604px] h-[103px] flex flex-col gap-[40px] opacity-100 max-[640px]:w-full">
            <div className="w-[604px] h-[27px] opacity-100">
              <p
                className="text-[18px] font-normal leading-[100%] text-white 
                 max-[500px]:text-sm max-[1000px]:text-center poppins-font
                 overflow-hidden whitespace-nowrap typing"
              >
                "Curated interiors powered by AI, designed for unparalleled luxury"
              </p>
              <style>
                {`
                  @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                  }
                  .typing {
                    width: 0;
                    animation: typing 3s steps(50, end) forwards;
                  }
                `}
              </style>
            </div>

            {/* Generate Button */}
            <div
              className="w-[245px] h-[44px] flex justify-center items-center cursor-pointer opacity-100"
              onClick={() => navigate("/sign-in")}
            >
              <div
                className="flex items-center justify-center gap-[10px] rounded-[30px] border px-[30px] py-[10px]"
                style={{
                  background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
                  borderWidth: "1px",
                  width: "fit-content",
                }}
              >
                <p
                  className="text-[16px] font-medium leading-[100%] text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    opacity: 1,
                  }}
                >
                  Generate your style
                </p>
                <div className="flex items-center justify-center w-[24px] h-[24px]">
                  <img
                    src={Frame}
                    alt="icon"
                    className="w-[19.5px] h-[19.5px]"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(92%) sepia(56%) saturate(763%) hue-rotate(239deg) brightness(97%) contrast(102%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Stars with Rotation */}
            <div className="w-[20px] h-[20px] opacity-100 animate-[spin_5s_linear_infinite] absolute top-[-20px] left-[794px] flex items-center justify-center">
              <img
                src={star}
                alt="icon"
                className="w-[20px] h-[20px]"
                style={{
                  filter: "brightness(0) saturate(100%) invert(72%) sepia(79%) saturate(1681%) hue-rotate(151deg) brightness(99%) contrast(102%)",
                }}
              />
            </div>

            <div className="w-[20px] h-[20px] opacity-100 animate-[spin_6s_linear_infinite] absolute top-[451px] left-[834px] flex items-center justify-center">
              <img
                src={star}
                alt="icon"
                className="w-[20px] h-[20px]"
                style={{
                  filter: "brightness(0) saturate(100%) invert(72%) sepia(79%) saturate(1681%) hue-rotate(151deg) brightness(99%) contrast(102%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add the spin animation to Tailwind config (or you can add it in your global CSS) */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}