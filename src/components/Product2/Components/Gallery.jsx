import React, { useState, useEffect } from "react";
import BackdropGallery from "./BackdropGallery";





const Gallery = ({THUMBS,IMAGES,sendDataToParent,prod1}) => {
  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);
  const [activeIndex, setActiveIndex] = useState(null);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    sendDataToParent("")
   
    setCurrentImage(IMAGES[index]);
    
    console.log(currentPassedImage)
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };
  useEffect(() => {
    setCurrentPassedImage(currentImage);
    sendDataToParent(currentImage);
  }, [currentImage]);

  return (
    <section className="gallery-holder hide-in-mobile">
      <section className="gallery">
        <div className="image">
          <img src={currentImage} alt="product-1" onClick={handleToggle} />
        </div>
        <BackdropGallery
          handleClose={handleClose}
          open={open}
          currentPassedImage={currentPassedImage}
        />
     <div className="thumbnails grid grid-cols-5 gap-4">
  {THUMBS.slice(0, 5).map((th, index) => {
    return (
      <div
        className={`img-holder relative ${activeIndex === index && "activated"}`}
        key={index}
        onClick={(e) => {
          handleClick(index);
          setActiveIndex(index); // Set the active index to the clicked product
        }}
      >
        <div className="outlay"></div>
        <img src={th} alt={`product-${index + 1}`} />
      </div>
    );
  })}
</div>

<div className="thumbnails grid grid-cols-4 gap-4">
  {THUMBS.slice(5).map((th, index) => {
    const adjustedIndex = index + 5;
    return (
      <div
        className={`img-holder relative ${activeIndex === adjustedIndex && "activated"}`}
        key={adjustedIndex}
        onClick={(e) => {
          handleClick(adjustedIndex);
          setActiveIndex(adjustedIndex); // Set the active index to the clicked product
        }}
      >
        <div className="outlay"></div>
        <img src={th} alt={`product-${adjustedIndex + 1}`} />
      </div>
    );
  })}
</div>

      </section>
    </section>
  );
};

export default Gallery;
