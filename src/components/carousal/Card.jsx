import "./Card.css";
import React, { useState ,useEffect} from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function Card({ imagen }) {

  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
 
  

  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>Title</h2>
      <p></p>
      <div className='btnn'>
        <Button text="Demo" />
        <Button text="Code" />
      </div>
    </animated.div>
  );
}

export default Card;
