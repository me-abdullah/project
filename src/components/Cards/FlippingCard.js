import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom';
import "./FlippingCard.css";

function FlippingCard({ title, detail, image, path }) {
  const ref = useRef();

  return (
    <div className=" flex flex-wrap">
      <Flippy
        flipOnHover={true}
        flipOnClick={true}
        flipDirection="horizontal"
        ref={ref}
        style={{
          width: '100%', // Use the full width of the container
          height: '60vh', // Set the height to 70vh
          borderRadius: '10px',
          border: 'none',
          display: 'flex', // Use flex to center content vertically
          flexDirection: 'column',
          
           // Stack the front and back sides vertically
        }}
      >
        <FrontSide style={{
          backgroundColor: 'transparent',
          flex: 1, // Take up all available space vertically
          boxShadow: 'none',
          border: 'none',
        }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%', // Make the image cover the entire front side
              height: '100%', // Make the image cover the entire front side
              objectFit: 'cover', // Preserve aspect ratio while covering the container
            }}
          />
        </FrontSide>
        <BackSide style={{
  backgroundColor: 'white',
  borderRadius: '20px',
  flex: 1, // Take up all available space vertically
  display: 'flex', // Use flex to center content vertically
  flexDirection: 'column', // Stack content vertically
  justifyContent: 'center', // Center content vertically
  alignItems: 'center', // Center content horizontally
  padding: '10px', // Add padding for spacing
}}>
  <div className="text-black text-center">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="mt-2">{detail}</p>
  </div>
  <div className="flex justify-center mt-3">
    <Link to={path}>
      <button type="button" className="btn btn-red" onClick={() => scrollToTop()}>
        Get the product
      </button>
    </Link>
  </div>
</BackSide>

      </Flippy>
    </div>
  );

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default FlippingCard;
