// Animation.js
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import flying from "/Users/leonjacob/Documents/GitHub/artist-landing-page/artist-landing-page/src/flying.png";

const Animation = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div
      style={props}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50"
    >
      <img
        src={flying}
        alt="highcattle"
        className="object-cover max-w-20 max-h-20"
      />
      <h1 className="text-4xl text-white">HIGHCATTLE WORKS OUT.</h1>
    </animated.div>
  );
};

export default Animation;
