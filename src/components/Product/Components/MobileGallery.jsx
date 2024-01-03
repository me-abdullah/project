import { IconButton } from "@mui/material";
import React, { useState,useEffect } from "react";

import NextIcon from "./Icons/NextIcon";
import PreviousIcon from "./Icons/PreviousIcon";



const MobileGallery = ({IMAGES,prod1,sendDataToParent1}) => {
  const [currentMobileImage, setCurrentMobileImage] = useState(prod1);
  const [mobileImageIndex, setMobileImageIndex] = useState(1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);


  const handleIncrement = () => {
    if (mobileImageIndex === IMAGES.length - 1) {
      setCurrentMobileImage(IMAGES[0]);
      setMobileImageIndex(0);

      console.log(currentMobileImage)

    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex + 1]);
      setMobileImageIndex(mobileImageIndex + 1);

      console.log(currentMobileImage)
    }
  };

  const handleDecrement = () => {
    if (mobileImageIndex === 0) {
      setCurrentMobileImage(IMAGES[IMAGES.length - 1]);
      setMobileImageIndex(IMAGES.length - 1);

      console.log(currentMobileImage)
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex - 1]);
      setMobileImageIndex(mobileImageIndex - 1);

      console.log(currentMobileImage)
    }
  };
  useEffect(() => {
    setCurrentPassedImage(currentMobileImage);
    sendDataToParent1(currentMobileImage);
  }, [currentMobileImage]);


  return (
    <section className="mobile-gallery hide-in-desktop">
      <IconButton
        className="icon-button-prev"
        disableRipple
        onClick={handleDecrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        <PreviousIcon />
      </IconButton>
      <img src={currentMobileImage} alt="featured-product" />
      <IconButton
        className="icon-button-next"
        disableRipple
        onClick={handleIncrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        <NextIcon />
      </IconButton>
    </section>
  );
};

export default MobileGallery;
