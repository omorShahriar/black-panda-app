"use client";
import Marquee from "react-fast-marquee";

const MarqueeContainer = ({ children }) => {
  return (
    <Marquee pauseOnHover speed={30}>
      {children}
    </Marquee>
  );
};

export default MarqueeContainer;
