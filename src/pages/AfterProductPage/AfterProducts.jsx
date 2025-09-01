import AfterForm from "../AfterSignHome/FormAfter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import BasicForm from "../Home/BasicForm";
import HeroAfterProducts from "./HeroAfterProduct";
import AfterCarouselProducts from "./AfterCarouselProduct";
import AfterDraggableImagesProducts from "./AfterDraggableImageProducts";
import AfterPackageProducts from "./AfterPackageProducts";

export default function AfterProducts() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  useEffect(() => {
    if (location.state?.scrollToForm) {
      // Add slight delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const formElement = document.getElementById("AfterForm-section");
        if (formElement) {
          formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100); // Increased delay slightly

      // Verify the image exists before setting state
      if (location.state?.originalImage) {
        // Create image element to verify it loads
        const img = new Image();
        img.src = location.state.originalImage;
        img.onload = () => setSelectedImage(location.state.originalImage);
        img.onerror = () => setSelectedImage(null);
      }

      if (location.state?.selectedRoom) {
        setSelectedRoom(location.state.selectedRoom);
      }

      window.history.replaceState({}, document.title);
      return () => clearTimeout(timer);
    }
  }, [location.state]);
 
  return (
    <div>
      <HeroAfterProducts />
      {/* <AfterCarouselProducts />
      <AfterDraggableImagesProducts /> */}
      {/* <AfterForm
        id="AfterForm-section"
        imageValue={selectedImage}
        selectedRoom={selectedRoom}
      /> */}
      {/* <AfterPackageProducts /> */}
    </div>
  );
}