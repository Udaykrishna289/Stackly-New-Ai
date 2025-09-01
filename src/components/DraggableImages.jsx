import React, { useRef, useState, useEffect } from "react";

import centerIcon from "../assets/home/draggableImgSection/Logo.png";

const DraggableImages = ({ imageLeft, imageRight }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50); // percent

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setPosition(percent);
  };

  const handleTouchMove = (e) => {
    handleMouseMove(e.touches[0]);
  };

  const startDrag = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", stopDrag);
  };

  useEffect(() => {
    return () => stopDrag(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className=" relative w-full aspect-video overflow-hidden rounded-lg"
    >
      {/* Left image */}
      <img
        src={imageRight}
        alt="Left"
        draggable={false}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Right image */}
      <img
        src={imageLeft}
        alt="Right"
        draggable={false}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-20"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      />

      {/* Vertical divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-30"
        style={{ left: `${position}%`, transform: "translateX(-1px)" }}
      />

      {/* Center draggable icon image */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] z-40 cursor-pointer select-none flex items-center justify-center bg-[#00B0BA] rounded-full"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        role="slider"
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
      >

        <img src={centerIcon} alt="" draggable={false} />
        
      </div>
    </div>
  );
};

export default DraggableImages;
