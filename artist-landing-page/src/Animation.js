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
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center overflow-hidden"
    >
      <img
        src={flying}
        alt="highcattle"
        className="max-w-full max-h-full"
        style={{ width: "100%", height: "10%", objectFit: "cover" }}
      />
      <h1 className="text-4xl text-white"></h1>
    </animated.div>
  );
};

export default Animation;
