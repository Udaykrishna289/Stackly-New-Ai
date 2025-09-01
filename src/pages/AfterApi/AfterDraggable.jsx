import React from "react";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";

export default function AfterDraggable() {
  return (
    <section className="w-full bg-[#011213] text-white py-16 px-4 flex flex-col items-center">
      <div className="flex flex-col gap-16 w-full max-w-7xl text-center">
        <div className="flex-1">
          <h3 className="text-[40px] font-semibold leading-[140%] mb-4">
            Power Your <span className="text-cyan-400">Business</span> with{" "}
            <span className="text-cyan-400">Stackly’s</span> Advanced API
          </h3>
          <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
            Unlock a comprehensive suite of features to enhance your workflows
            and scale effortlessly.
          </p>
        </div>
      </div>
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          {" "}
          <span className="text-cyan-400"></span>
        </h2>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-2"></h2>
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-16 w-full max-w-7xl">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
              <span className="text-cyan-400">Room Makeover Tool</span> Tool
            </h3>
            <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
              Transform any space effortlessly: The Room Makeover tool lets you
              redesign interiors and exteriors with various styles. Use this
              feature to create stunning before-and-after visuals, helping
              clients visualize the full potential of their spaces.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
            <DraggableImages imageRight={dragImg1_1} imageLeft={dragImg1_2} />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
              <span className="text-cyan-400">Object Removal </span> Feature
            </h3>
            <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
              Clear out unwanted items instantly: The Object Removal feature
              allows you to seamlessly erase furniture, decor, or other objects
              from images. Ideal for renovation previews and real estate
              staging, this tool provides a clean slate for new design ideas.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
            <DraggableImages imageRight={dragImg2_1} imageLeft={dragImg2_2} />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-[34px] font-semibold leading-[140%] mb-4">
              <span className="text-cyan-400">Style Change </span>Option
            </h3>
            <p className="leading-[200%] text-[18px] font-medium text-[#f5f5f5]">
              Explore new designs in seconds: The Style Change option helps you
              swap colors, textures, and design elements in any image. Perfect
              for experimenting with different aesthetics, this tool brings your
              creative visions to life with ease.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[500px] min-w-[300px] w-full">
            <DraggableImages imageRight={dragImg3_1} imageLeft={dragImg3_2} />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-16 text-center max-w-[681px] text-[#ffffff] font-normal text-[24px] leading-[180%] align-center">
        {/* Loved by experts and designed for everyone, our platform brings
        professional-quality results with ease and simplicity. */}
      </div>

      {/* Call to Action */}

      <div className="mt-16 text-center max-w-[681px] text-[#ffffff] font-normal text-[24px] leading-[180%] align-center">
        {/* Loved by experts and designed for everyone, our platform brings
        professional-quality results with ease and simplicity. */}
      </div>
    </section>
  );
}
