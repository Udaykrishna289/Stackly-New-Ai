// import React from "react";
// import Close from "../../assets/api/close.png"

// const ApiAccess = () => {
//   return (
//     <div className="w-full flex justify-center items-center px-4 py-10 bg-white">
//       <div className=" w-full max-w-[1280px] min-h-[809px] rounded-[30px] border border-[#FCFCFC] px-6 py-12 bg-[#FCFCFC] shadow-[0_0_4px_0] shadow-[#00000040] relative">
//         {/* Heading */}
//         <h2 className="h-[64px] text-center text-[44px] font-bold leading-[64px]">
//           Your Current <span className="text-[#009A98]">API</span> Access
//         </h2>
//         <p className=" h-[28px] text-center text-[18px] leading-[28px] text-[#2A2A2A] mt-2">
//           Stay in control of your integration with clear access details and key usage limits.
//         </p>

//         {/* Content */}
//         <div className="mt-10 flex justify-center relative">
//           {/* Center card */}
//           <div className="w-[413px] h-[400px] rounded-[40px] shadow-[0px_2px_12Px_0px] shadow-[#007B8229] border border-[#007B8229] flex flex-col justify-center items-center shadow-inner-[#FFFFFF14] text-center px-4 bg-white">
//             <h3 className="text-[#009A98] font-bold text-[32px] mb-[20px]">API Keys Left</h3>
//             <p className="text-[58px] font-semibold mt-2 leading-[100%] text-center text-[#2A2A2A] mb-[10px]">14</p>
//             <p className="uppercase text-[18px] text-center font-medium leading-[100%] text-[#2A2A2A] ">Fourteen</p>
//             <p className="text-[13px] font-medium leading-[100%] text-center text-[#2A2A2A] mt-[50px]">Stay updated on your remaining balance.</p>
//           </div>

//           {/* Side badge */}
//           <div className="w-[306px] h-[112px]  absolute -top-6 right-6 bg-white rounded-[20.92px] shadow-[#ABB2BB40] shadow-[0_6.54px_12.2px_0] border border-[#E0E0E0] px-5 py-3 text-sm text-[#2A2A2A]">
//             <div className="w-[100%] flex justify-end">
//                 <img src={Close} alt="close" />
//             </div>
//             <div className="h-[60px] w-[100%] flex items-center justify-center font-bold text-[16px] leading-[100%] text-center">
//             Total Assigned :{" "}
//             <span className="text-[#009A98] font-bold text-[16px] leading-[100%] cursor-pointer hover:underline">
//               6 keys
//             </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApiAccess;
import React from "react";
import Close from "../../assets/api/close.png"

const ApiAccess = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-10 bg-white">
      <div className=" w-full max-w-[1280px] min-h-[809px] rounded-[30px] border border-[#FCFCFC] px-6 py-12 bg-[#FCFCFC] shadow-[0_0_4px_0] shadow-[#00000040] relative">
        {/* Heading */}
        <h2 className="h-[64px] text-center text-[44px] font-bold leading-[64px]">
          Your Current <span className="text-[#009A98]">API</span> Access
        </h2>
        <p className=" h-[28px] text-center text-[18px] leading-[28px] text-[#2A2A2A] mt-2">
          Stay in control of your integration with clear access details and key usage limits.
        </p>

        {/* Content */}
        <div className="mt-10 flex justify-center relative">
          {/* Center card */}
          <div className="w-[413px] h-[400px] rounded-[40px] shadow-[0px_2px_12Px_0px] shadow-[#007B8229] border border-[#007B8229] flex flex-col justify-center items-center shadow-inner-[#FFFFFF14] text-center px-4 bg-white">
            <h3 className="text-[#009A98] font-bold text-[32px] mb-[20px]">API Keys Left</h3>
            <p className="text-[58px] font-semibold mt-2 leading-[100%] text-center text-[#2A2A2A] mb-[10px]">14</p>
            <p className="uppercase text-[18px] text-center font-medium leading-[100%] text-[#2A2A2A] ">Fourteen</p>
            <p className="text-[13px] font-medium leading-[100%] text-center text-[#2A2A2A] mt-[50px]">Stay updated on your remaining balance.</p>
          </div>

          {/* Side badge */}
          <div className="w-[306px] h-[112px]  absolute -top-6 right-6 bg-white rounded-[20.92px] shadow-[#ABB2BB40] shadow-[0_6.54px_12.2px_0] border border-[#E0E0E0] px-5 py-3 text-sm text-[#2A2A2A]">
            <div className="w-[100%] flex justify-end">
                <img src={Close} alt="close" />
            </div>
            <div className="h-[60px] w-[100%] flex items-center justify-center font-bold text-[16px] leading-[100%] text-center">
            Total Assigned :{" "}
            <span className="text-[#009A98] font-bold text-[16px] leading-[100%] cursor-pointer hover:underline">
              6 keys
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiAccess;