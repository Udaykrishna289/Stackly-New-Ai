// import React from "react";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import DraggableImages from "../../components/DraggableImages";

// export default function Draggable(){
//   return (
//     <section className="w-full bg-[#011213] text-white py-16 px-4 flex flex-col items-center">

//         <div className="flex flex-col gap-16 w-full max-w-7xl text-center">
//             <div className="flex-1">
//             <h3 className="text-[40px] font-semibold leading-[140%] mb-4">
//              Power Your <span className="text-cyan-400">Business</span> with <span className="text-cyan-400">Stackly’s</span> Advanced API   
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Unlock a comprehensive suite of features to enhance your workflows and scale effortlessly.
//             </p>
//             </div>
//         </div>
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
//           {" "}
//           <span className="text-cyan-400"></span>
//         </h2>
//         <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-2"></h2>
//       </div>

//       {/* Features Section */}
//       <div className="flex flex-col gap-16 w-full max-w-7xl">
//         {/* Feature 1 */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="flex-1">
//             <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
//               <span className="text-cyan-400">Room Makeover Tool</span> Tool
              
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Transform any space effortlessly: The Room Makeover tool lets you redesign interiors and exteriors with various styles. Use this feature to create stunning before-and-after visuals, helping clients visualize the full potential of their spaces.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
//             <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
//           </div>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="flex-1">
//             <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
//               <span className="text-cyan-400">Object Removal </span> Feature
              
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Clear out unwanted items instantly: The Object Removal feature allows you to seamlessly erase furniture, decor, or other objects from images. Ideal for renovation previews and real estate staging, this tool provides a clean slate for new design ideas.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
//             <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
//           </div>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text */}
//           <div className="flex-1">
//             <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
//               <span className="text-cyan-400">Style Change </span>Option
//             </h3>
//             <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
//               Explore new designs in seconds: The Style Change option helps you swap colors, textures, and design elements in any image. Perfect for experimenting with different aesthetics, this tool brings your creative visions to life with ease.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
//             <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="mt-16 text-center max-w-[681px] text-[#ffffff] font-normal text-[24px] leading-[180%] align-center">
//         {/* Loved by experts and designed for everyone, our platform brings
//         professional-quality results with ease and simplicity. */}
//       </div>

//       {/* Call to Action */}
      
//       <div className="mt-16 text-center max-w-[681px] text-[#ffffff] font-normal text-[24px] leading-[180%] align-center">
//         {/* Loved by experts and designed for everyone, our platform brings
//         professional-quality results with ease and simplicity. */}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";

export default function Draggable() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    {
      title: "Room Makeover Tool",
      description: "Transform any space effortlessly: The Room Makeover tool lets you redesign interiors and exteriors with various styles. Use this feature to create stunning before-and-after visuals, helping clients visualize the full potential of their spaces.",
      images: { left: dragImg1_2, right: dragImg1_1 }
    },
    {
      title: "Object Removal Feature",
      description: "Clear out unwanted items instantly: The Object Removal feature allows you to seamlessly erase furniture, decor, or other objects from images. Ideal for renovation previews and real estate staging, this tool provides a clean slate for new design ideas.",
      images: { left: dragImg2_2, right: dragImg2_1 }
    },
    {
      title: "Style Change Option",
      description: "Explore new designs in seconds: The Style Change option helps you swap colors, textures, and design elements in any image. Perfect for experimenting with different aesthetics, this tool brings your creative visions to life with ease.",
      images: { left: dragImg3_2, right: dragImg3_1 }
    }
  ];

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="w-full bg-[#011213] text-white py-16 px-4 flex flex-col items-center">
      <div className="flex flex-col gap-4 w-full max-w-7xl text-center items-center">
        <div className="flex-1 flex flex-col items-center">
          <h3
            className="text-[40px] font-semibold leading-[140%] mb-4 
                       text-center text-white
                       max-[440px]:w-[320px] max-[440px]:text-[20px] 
                       max-[440px]:leading-[140%] max-[440px]:font-[700] 
                       max-[440px]:mb-2 max-[440px]:mx-auto max-[440px]:break-words"
          >
            Power Your <span className="text-cyan-400">Business</span> with <br />
            <span className="text-cyan-400">Stackly's</span> Advanced API
          </h3>

          <p
            className="leading-[200%] text-[18px] font-medium text-[#f5f5f5] text-center
                       max-[440px]:w-[400px] max-[440px]:h-[40px] max-[440px]:text-[14px] 
                       max-[440px]:leading-[140%] max-[440px]:font-[500]"
          >
            Unlock a comprehensive suite of features to enhance your workflows and scale effortlessly.
          </p>
        </div>
      </div>

      {/* Desktop View (shows all features) */}
    <div className="hidden md:flex flex-col gap-16 w-full max-w-7xl mt-12">  {/* Added mt-12 for top margin */}
  {features.map((feature, index) => (
    <div key={index} className="flex flex-row items-stretch gap-8 w-full flex-wrap">
      {/* Text */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-[34px] font-semibold leading-[140%] mb-2 text-white">
          <span className="text-cyan-400">{feature.title.split(' ')[0]} </span> 
          {feature.title.split(' ').slice(1).join(' ')}
        </h3>
        <p className="text-[16px] font-medium leading-[180%] text-[#f5f5f5]">
          {feature.description}
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 w-full max-w-[400px] min-w-[200px] h-auto">
        <DraggableImages imageRight={feature.images.right} imageLeft={feature.images.left} />
      </div>
    </div>
  ))}
</div>

      {/* Mobile View (shows one feature at a time with side-by-side layout) */}
     <div className="md:hidden w-full max-w-[400px] relative mt-8">  {/* Added mt-8 for top margin on mobile */}
  {/* Feature Slide */}
  <div className="overflow-hidden">
    <div 
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentFeature * 100}%)` }}
    >
      {features.map((feature, index) => (
        <div key={index} className="w-full flex-shrink-0 px-2">
          <div className="flex flex-row items-stretch gap-4 w-full">
            {/* Text - now on left side */}
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="text-[16px] font-semibold leading-[130%] mb-1 text-white">
                <span className="text-cyan-400">{feature.title.split(' ')[0]} </span> 
                {feature.title.split(' ').slice(1).join(' ')}
              </h3>
              <p className="text-[12px] font-medium leading-[140%] text-[#f5f5f5]">
                {feature.description}
              </p>
            </div>

            {/* Image - now on right side */}
            <div className="w-1/2 h-auto">
              <DraggableImages 
                imageRight={feature.images.right} 
                imageLeft={feature.images.left} 
                containerClass="max-h-[180px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-center mt-6 gap-4">
    <button 
      onClick={prevFeature}
      className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-[#011213] font-bold text-sm"
    >
      &lt;
    </button>
    <div className="flex items-center gap-2">
      {features.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentFeature(index)}
          className={`w-2 h-2 rounded-full ${currentFeature === index ? 'bg-cyan-400' : 'bg-gray-500'}`}
        />
      ))}
    </div>
    <button 
      onClick={nextFeature}
      className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-[#011213] font-bold text-sm"
    >
      &gt;
    </button>
  </div>
</div>
      {/* Bottom Spacer */}
      <div className="mt-16"></div>
    </section>
  );
}