import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

export default function FormDataContextProvider(props) {
  const [formData, setFormData] = useState({
    buildingType: "",
    roomType: "",
    roomStyle: "",
    noOfDesign: "1",
    aiTouch: "Low",
    houseAngle: "",
    spaceType: "",
  });

  const [imgURL, setImgURL] = useState(null);

  return (
    <FormDataContext.Provider
      value={{ imgURL, setImgURL, formData, setFormData }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
}