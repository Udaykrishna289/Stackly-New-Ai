//HeroAfterHome.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "../../pages/AfterSignHome/FormAfter"; // ✅ Import your actual form
import G1 from "../../assets/afterHome/g1.png"
import G2 from "../../assets/afterHome/g2.png";
import G3 from "../../assets/afterHome/g3.png";
import G4 from "../../assets/afterHome/g4.png";
import G5 from "../../assets/afterHome/g5.png";
import G6 from "../../assets/afterHome/g6.png";
import L1 from "../../assets/afterHome/l1.png";
import L2 from "../../assets/afterHome/l2.png";
import L3 from "../../assets/afterHome/l3.png";
import L4 from "../../assets/afterHome/l4.png";
import Line from "../../assets/afterHome/line.png";
import DraggableAfter from "../../pages/AfterSignHome/DraggableAfter"
import FormAfter from "../../pages/AfterSignHome/FormAfter"
import AfterFaq from "../../pages/AfterSignHome/AfterFaq"
import ExteriorForm from "./ExteriorForm";
import OutdoorForm from "./OutdoorForm";
import sec5 from "../../assets/afterHome/sec5.png";


export default function HeroAfterHome() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "/AfterHome/ahome1.png",
    "/AfterHome/ahome2.png",
    "/AfterHome/ahome3.png",
    "/AfterHome/ahome4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const formAfterRef = useRef(null);

  const scrollToForm = () => {
    formAfterRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); //every 2 second section 1 background image will be change.

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div>
   

      {/* section-6  */}

      <div ref={formAfterRef}>
        <Form selectedImage={selectedImage} />
      </div>

{/* <DraggableAfter
        formRef={formAfterRef}
        setSelectedImage={(img) => {
          setSelectedImage(null); // Force reset
          setTimeout(() => setSelectedImage(img), 10); // Then set actual image
        }}
      /> */}
   
    </div>
  );
}