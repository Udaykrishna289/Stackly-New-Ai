// import React from "react";
// import HeroProducts from "./HeroProducts";
// import CarouselProducts from "./CarouselProducts";
// import DraggableImages from "./DraggableImagesProducts";
// import PackageProducts from "./PackageProducts";
// import Form from "../Home/Form";
// import ImageGeneration from "./ImageGeneration";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import BasicForm from "../Home/BasicForm";


// export default function Products() {
//   const location = useLocation();
//   const [selectedImage, setSelectedImage] = useState("");

//   useEffect(() => {
//     if (location.state?.scrollToForm) {
//       // Small timeout to ensure DOM is ready
//       const timer = setTimeout(() => {
//         const formElement = document.getElementById("form-section");
//         if (formElement) {
//           formElement.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }, 50);

//       // Set the selected image if passed via state
//       if (location.state?.originalImage) {
//         setSelectedImage(location.state.originalImage);
//       }

//       // Clear the state after scrolling
//       window.history.replaceState({}, document.title);

//       return () => clearTimeout(timer);
//     }
//   }, [location.state]);

//   return (
//     <div>
//       <HeroProducts />
//       <CarouselProducts />
//       <DraggableImages />
//       <BasicForm id="form-section" imageValue={selectedImage} />
//       <PackageProducts />
     
//     </div>
//   );
// }
import React from "react";
import HeroProducts from "./HeroProducts";
import CarouselProducts from "./CarouselProducts";
import DraggableImages from "./DraggableImagesProducts";
import PackageProducts from "./PackageProducts";
import Form from "../Home/Form";
import ImageGeneration from "./ImageGeneration";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import BasicForm from "../Home/BasicForm";


export default function Products() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (location.state?.scrollToForm) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => {
        const formElement = document.getElementById("form-section");
        if (formElement) {
          formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);

      // Set the selected image if passed via state
      if (location.state?.originalImage) {
        setSelectedImage(location.state.originalImage);
      }

      // Clear the state after scrolling
      window.history.replaceState({}, document.title);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div>
      <HeroProducts />
      {/* <CarouselProducts /> */}
      {/* <DraggableImages /> */}
      {/* <BasicForm id="form-section" imageValue={selectedImage} /> */}
      <PackageProducts />
     
    </div>
  );
}