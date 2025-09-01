// import React from "react";
// import GraphImage from "../../assets/pricing-pg/Graph.png";

// export default function Graph() {
//   return (
//     <section className="w-full bg-white px-4 py-16 text-center">
//       {/* Heading */}
//       <h2 className="text-[52px] leading-[100%] text-center font-semibold">
//         Daily <span className="text-[#009A98]">Credits</span> Usage
//       </h2>

//       {/* Subheading */}
//       <p className="mt-8 text-[#2A2A2A] max-w-[600px] mx-auto text-[24px] leading-[100%] text-center font-medium">
//         Tracking our community's growth, one day at a time.
//       </p>
//       <p className="mt-4 text-[16px] text-center font-[400] leading-[100%] text-[#B0B0B0]">
//         (Live graph here showing credit activity — label points like “Yesterday”, “Today”, etc.)
//       </p>

//       {/* Graph Container */}
//       <div className="mt-10 max-w-5xl mx-auto bg-white shadow-[0_0.83px_11.64px_0] shadow-[#00000040] border-[9.14px] border-[#007B824A] border-solid rounded-[16.63px] p-4 ">
//         <div className="flex justify-between items-center text-sm mb-4">
//           <span className="text-[#2A2A2A] text-[13.3px] leading-[100%] text-center font-medium">Current Date: <span className="text-[#007B82]">26-03-2025</span></span>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <span className="w-2.5 h-2.5 rounded-full bg-[#007B82]"></span> Designs Used
//               <span className="w-2.5 h-2.5 rounded-full bg-[#00B0BA] ml-4"></span> credits consumed in January
//             </div>
//             <select className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none">
//               <option>January 2025</option>
//               {/* Add more options if needed */}
//             </select>
//             <button className="text-xl font-bold text-[#2a2a2a] hover:text-gray-600">≡</button>
//           </div>
//         </div>

//         {/* Graph Placeholder */}
//         <div className="w-full mt-4">
//           <img
//             src={GraphImage}
//             alt="Credit Usage Graph"
//             className="w-full max-h-[300px] object-contain"
//           />
//         </div>

//         {/* Footer info */}
//         <p className="mt-3 text-[15px] leading-[23.27px] text-center font-medium text-[#2A2A2A]">
//           Total credits consumed in January: <span className="text-[#009A98] font-medium">850</span>
//         </p>
//       </div>

//       {/* Final note */}
//       <p className="mt-8 text-xs text-[#2a2a2a] max-w-[973px] font-[400] text-[18px] mx-auto">
//         These numbers reflect the real impact of Stackly.AI — developers, teams, and creators building smarter every day.
//       </p>
//     </section>
//   );
// }

import React from "react";
import GraphImage from "../../assets/pricing-pg/Graph.png";

export default function Graph() {
  return (
    <section
  className="bg-white px-4 py-16 text-center 

    min-[441px]:max-[768px]:w-[768px]
    min-[441px]:max-[768px]:h-[789.09px]
    min-[441px]:max-[768px]:gap-[32px]
    min-[441px]:max-[768px]:pt-[60px]
    min-[441px]:max-[768px]:pr-[40px]
    min-[441px]:max-[768px]:pb-[60px]
    min-[441px]:max-[768px]:pl-[40px]
    min-[441px]:max-[768px]:mt-[-40px]"
>

      {/* Heading */}
<div
  className="
    max-[440px]:flex max-[440px]:flex-col max-[440px]:items-center max-[440px]:justify-center

    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[110px]
    min-[441px]:max-[768px]:gap-[16px]
  "
>

<h2
  className="text-[32px] leading-[100%] text-center font-semibold

             max-[440px]:w-[288px] max-[440px]:h-[24px]
             max-[440px]:text-[20px] max-[440px]:leading-[100%]
             max-[440px]:font-['Inter'] max-[440px]:font-semibold max-[440px]:text-center

             min-[441px]:max-[768px]:w-[688px]
             min-[441px]:max-[768px]:h-[29px]
             min-[441px]:max-[768px]:text-[24px]
             min-[441px]:max-[768px]:font-['Inter']
             min-[441px]:max-[768px]:font-semibold
             min-[441px]:max-[768px]:text-center
             min-[441px]:max-[768px]:leading-[100%]"
>
  Daily <span className="text-[#009A98]">Credits</span> Usage
</h2>


  {/* Subheading */}
<div
  className="
    flex flex-col items-center justify-center

    min-[441px]:max-[768px]:w-[688px]
    min-[441px]:max-[768px]:h-[65px]
    min-[441px]:max-[768px]:gap-[8px]
    min-[441px]:max-[768px]:opacity-100
  "
>
  <p
    className="mt-8 text-[#2A2A2A] max-w-[600px] mx-auto text-[24px] leading-[100%] text-center font-medium

               max-[440px]:w-[288px] max-[440px]:h-[37px]
               max-[440px]:text-[16px] max-[440px]:leading-[100%]
               max-[440px]:font-['Inter'] max-[440px]:font-medium max-[440px]:text-center

               min-[441px]:max-[768px]:w-[688px]
               min-[441px]:max-[768px]:h-[37px]
               min-[441px]:max-[768px]:text-[18px]
               min-[441px]:max-[768px]:leading-[100%]
               min-[441px]:max-[768px]:font-['Inter']
               min-[441px]:max-[768px]:font-medium
               min-[441px]:max-[768px]:text-center"
  >
    Tracking our community's growth, one day at a time.
  </p>

  <p
    className="mt-4 text-[18px] text-center font-[400] leading-[100%] text-[#B0B0B0]

               max-[440px]:w-[288px] max-[440px]:h-[33px]
               max-[440px]:text-[12px] max-[440px]:leading-[140%]
               max-[440px]:font-['Inter'] max-[440px]:font-[400] max-[440px]:text-center

               min-[441px]:max-[768px]:w-[688px]
               min-[441px]:max-[768px]:h-[20px]
               min-[441px]:max-[768px]:text-[14px]
               min-[441px]:max-[768px]:leading-[140%]
               min-[441px]:max-[768px]:font-['Inter']
               min-[441px]:max-[768px]:font-[400]
               min-[441px]:max-[768px]:text-center"
  >
    (Live graph here showing credit activity — label points like “Yesterday”, “Today”, etc.)
  </p>
</div>

</div>


      {/* Graph Container */}
<div
  className="mt-10 max-w-5xl mx-auto bg-white shadow-[0_0.83px_11.64px_0] shadow-[#00000040] 
             border-[9.14px] border-[#007B824A] border-solid rounded-[16.63px] p-4

             max-[440px]:w-[382px] max-[440px]:h-[306px]
             max-[440px]:rounded-[5.7px] max-[440px]:border-[3.14px]

             min-[441px]:max-[768px]:w-[658px]
             min-[441px]:max-[768px]:h-[527.09px]
             min-[441px]:max-[768px]:rounded-[9.82px]
             min-[441px]:max-[768px]:border-[4px]
             min-[441px]:max-[768px]:opacity-100"
>

<div
  className="flex justify-between items-center text-sm mb-4
             max-[440px]:flex-col max-[440px]:items-center max-[440px]:gap-[8px]
             min-[441px]:max-[768px]:hidden"
>

        {/* Current Date */}
 <span
  className="text-[#2A2A2A] text-[13.3px] leading-[100%] font-medium
             max-[440px]:flex max-[440px]:flex-col 
             max-[440px]:items-start max-[440px]:text-left
             max-[440px]:w-[75px] max-[440px]:h-[34px] max-[440px]:gap-[4px] 
             max-[440px]:self-start"
>
  <span className="max-[440px]:w-[75px] max-[440px]:h-[15px]
                   max-[440px]:text-[12px] max-[440px]:leading-[100%]
                   max-[440px]:font-['Inter'] max-[440px]:font-[400] max-[440px]:text-left">
    Current Date:
  </span>
  <span className="text-[#007B82] max-[440px]:w-[75px] max-[440px]:h-[15px]
                   max-[440px]:text-[12px] max-[440px]:leading-[100%]
                   max-[440px]:font-['Inter'] max-[440px]:font-[500] max-[440px]:text-left">
    26-03-2025
  </span>
  </span>
 


          <div className="flex items-center gap-4">


            {/* hide the div in tablet */}
<div
  className="flex items-center gap-2 text-xs text-gray-500

             max-[440px]:flex-col max-[440px]:w-[178px] max-[440px]:h-[36px] max-[440px]:gap-[4px]

             min-[441px]:max-[768px]:hidden"
>


  {/* First Row */}
  <div className="flex items-center gap-1 max-[440px]:gap-0.5 max-[440px]:w-[178px]">
    <span className="w-2.5 h-2.5 rounded-full bg-[#007B82] ml-4 max-[440px]:ml-0 max-[440px]:w-[8px] max-[440px]:h-[8px]"></span>
    <span className="max-[440px]:text-[12px] max-[440px]:leading-[7.98px]">
      Designs Used
    </span>
  </div>

  {/* Second Row */}
  <div className="flex items-center gap-[4px] max-[440px]:w-[178px] max-[440px]:h-[19px]">
    <span className="w-2.5 h-2.5 rounded-full bg-[#00B0BA] ml-4 max-[440px]:ml-0 max-[440px]:w-[8px] max-[440px]:h-[8px]"></span>
    <span className="max-[440px]:w-[166px] max-[440px]:h-[19px] max-[440px]:text-[12px] max-[440px]:leading-[120%] max-[440px]:font-[400]">
      credits consumed in January
    </span>
  </div>
</div>


          <select
  className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none
             max-[440px]:w-[116px] max-[440px]:h-[32px] max-[440px]:rounded-[2.85px]
             max-[440px]:border-[0.29px] max-[440px]:px-[4px] max-[440px]:gap-[4px]
             max-[440px]:text-[12px] max-[440px]:font-medium max-[440px]:leading-[7.98px]
             max-[440px]:text-center max-[440px]:-mt-[110px]"
>
  <option>January 2025</option>
</select>


         <button
  className="text-xl font-bold text-[#2a2a2a] hover:text-gray-600
             max-[440px]:w-[24px] max-[440px]:h-[24px] relative
             max-[440px]:-mt-[120px]"  
>
  <span
    className="block max-[440px]:absolute max-[440px]:w-[18px] max-[440px]:h-[12px] 
               max-[440px]:top-[6px] max-[440px]:left-[3px]"
  >
    ≡
  </span>
</button>


          </div>
        </div>


        {/* 👇 Duplicate - shown only on tablet */}
<div className="hidden min-[441px]:max-[768px]:flex flex-col gap-4">
  <div className="flex justify-between items-center text-sm mb-4">
  <div
  className="hidden min-[441px]:max-[768px]:flex min-[441px]:max-[768px]:flex-col 
             min-[441px]:max-[768px]:gap-[20.67px] min-[441px]:max-[768px]:w-[306.61px] 
             min-[441px]:max-[768px]:h-[132.41px] min-[441px]:max-[768px]:relative 
             min-[441px]:max-[768px]:top-[36.17px] min-[441px]:max-[768px]:left-[25.84px] 
             text-[#2A2A2A] text-[13.3px] leading-[100%] font-medium"
>

  {/* Current Date */}
  <span
  className="flex flex-col text-[#2A2A2A] text-[13.3px] leading-[100%] font-medium 
             w-[129.19px] h-[49.73px] gap-[6.89px] opacity-100"
>
  <span>Current Date:</span>
  <span className="text-[#007B82]">26-03-2025</span>
</span>



  {/* Designs & Credits */}
 <div className="flex flex-col gap-[6.89px] text-xs text-gray-500 ml-4 
                w-[306.61px] h-[62.01px] opacity-100">

    {/* Designs Used */}
    <div className="flex items-center gap-1">
      <span className="w-2.5 h-2.5 rounded-full bg-[#007B82]"></span>
      <span>Designs Used</span>
    </div>

    {/* Credits Consumed */}
    <div className="flex items-center gap-1">
      <span className="w-2.5 h-2.5 rounded-full bg-[#00B0BA]"></span>
      <span>credits consumed in January</span>
    </div>
  </div>
</div>

  <div className="flex items-center gap-[20.67px] w-[263.54px] h-[55.12px] opacity-100">
      

      {/* Dropdown */}
      <select className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none">
        <option>January 2025</option>
      </select>

      {/* Button */}
     <button
  className="w-[40px] h-[40px] text-xl font-bold text-[#2a2a2a] hover:text-gray-600 opacity-100"
>
  <span>≡</span>
</button>

    </div>
  </div>
</div>

        {/* Graph Placeholder */}
       
<div
  className="w-full mt-4 max-[440px]:mt-[19px]

             min-[441px]:max-[768px]:w-[620.13px]
             min-[441px]:max-[768px]:h-[216.84px]
             min-[441px]:max-[768px]:relative
             min-[441px]:max-[768px]:top-[19.09px]
             min-[441px]:max-[768px]:left-[5.67px]
             min-[441px]:max-[768px]:opacity-100"
>

  <img
    src={GraphImage}
    alt="Credit Usage Graph"
    className="w-full max-h-[300px] object-contain"
  />
</div>

        {/* Footer info */}
<p className="mt-3 text-[15px] leading-[23.27px] text-center font-medium text-[#2A2A2A]

             max-[440px]:relative max-[440px]:w-[228px] max-[440px]:mx-auto max-[440px]:mt-12
             max-[440px]:text-[12px] max-[440px]:leading-[7.98px] max-[440px]:text-center
             max-[440px]:font-inter max-[440px]:font-medium

             min-[441px]:max-[768px]:w-[304px]
             min-[441px]:max-[768px]:h-[19px]
             min-[441px]:max-[768px]:text-[16px]
             min-[441px]:max-[768px]:leading-[100%]
             min-[441px]:max-[768px]:text-center
             min-[441px]:max-[768px]:font-['Inter']
             min-[441px]:max-[768px]:font-medium
             min-[441px]:max-[768px]:opacity-100
             min-[441px]:max-[768px]:relative min-[441px]:max-[768px]:top-[50.58px] min-[441px]:max-[768px]:left-[176.63px]"
>
  Total credits consumed in January: <span className="text-[#009A98] font-bold">850</span>
</p>


      </div>

      {/* Final note */}
     <p className="mt-8 text-xs text-[#2a2a2a] max-w-[973px] font-[400] text-[18px] mx-auto max-[440px]:hidden min-[441px]:max-[768px]:hidden">
  These numbers reflect the real impact of Stackly.AI — developers, teams, and creators building smarter every day.
</p>

    </section>
  );
}