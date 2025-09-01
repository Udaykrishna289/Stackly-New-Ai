// import HowImage from "../../assets/api/how.png";
// const AfterHowItWorks = () => {
//   return (
    // <div className="py-10 bg-gray-50">
    //   <div className="flex flex-col md:flex-row items-start gap-6 max-w-5xl mx-auto">
    //     <img src={HowImage} alt="How It Works" className="w-[413px]" />
    //     <p className="text-[#2A2A2A] font-bold  text-[28px]  max-w-xl mt-[100px] gap-5">
    //       Bring AI-powered design into your app with just a few lines of code. The StacklyAI API makes it easy to process user-submitted images, apply custom styles, and deliver stunning visual results—all in real time.
    //     </p>
    //   </div>

//       <div className="w-full h-auto flex p-[20px] justify-center items-center">

//         <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
//            <div className=" w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">1</div>
//            <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
//                <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Connect your API key to your backend or platform</div>
//            </div>
//         </div>

          
//         <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
//            <div className="mt-[20px w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">2</div>
//            <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
//                <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Send a user-uploaded image with a chosen style prompt</div>
//            </div>
//         </div>

          
//         <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
//            <div className="w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">3</div>
//            <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
//                <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Receive high-quality, styled images in seconds</div>
//            </div>
//         </div>

          
//         <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
//            <div className="w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">4</div>
//            <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
//                <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Display or store them seamlessly within your app</div>
//            </div>
//         </div>
//       </div>     
//     </div>
//   );
// };

// export default AfterHowItWorks;
import React from "react";
import HowImage from "../../assets/api/how.png";

const AfterHowItWorks = () => {
  const messages = [
    "Connect your API key to your backend or platform",
    "Send a user-uploaded image with a chosen style prompt",
    "Receive high-quality, styled images in seconds",
    "Display or store them seamlessly within your app",
  ];

  return (
    <div className="py-10 bg-gray-50 mb-[120px]">
      {/* Top Section with Image and Description */}
      <div className="flex flex-col md:flex-row items-start gap-6 max-w-[1280px] mx-auto px-4">
        <img src={HowImage} alt="How It Works" className="w-full md:w-[413px]" />
        <p className="text-[#2A2A2A] font-bold text-[28px] max-w-[846px] mt-[20px] md:mt-[100px]">
          Bring AI-powered design into your app with just a few lines of code. The StacklyAI API makes it easy to process user-submitted images, apply custom styles, and deliver stunning visual results—all in real time.
        </p>
      </div>

      {/* Steps Section with Numbered Cards */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] max-w-[1280px] mx-auto mt-10">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative"
            >
              {/* Numbered Circle */}
              <div className="w-[130px] h-[133px] rounded-full border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center bg-white z-10 mb-[-30px]">
                {index + 1}
              </div>

              {/* Content Card with Dotted Gradient Border */}
              <div className="relative w-full min-h-[222px] rounded-[30px] px-[20px] pt-[70px] pb-[20px] flex flex-col justify-center items-center">
                {/* Background with Opacity */}
                <div 
                  className="absolute inset-0 rounded-[30px]" 
                  style={{
                    background: "rgba(0, 176, 186, 0.08)",
                  }}
                />
                
                {/* SVG Dotted Border with Gradient */}
                <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                  <svg width="100%" height="100%">
                    <rect 
                      x="0.5" 
                      y="0.5" 
                      width="calc(100% - 1px)" 
                      height="calc(100% - 1px)" 
                      rx="30" 
                      ry="30" 
                      fill="none"
                      stroke="url(#dottedBorder)" 
                      strokeWidth="1" 
                      strokeDasharray="4,4" 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="dottedBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0,176,186,1)" />
                        <stop offset="100%" stopColor="rgba(0,123,130,1)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Card Content */}
                <div className="text-center text-[24px] font-bold text-[#2A2A2A] relative z-10 px-2">
                  {message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterHowItWorks;
