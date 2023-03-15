"use client";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

const MarqueeContainer = ({ children }) => {
  return (
    <div className="text-gray-100 py-4 border-white border-t-4 border-b-4 md:border-t-8 md:border-b-8 border-double md:h-[185px] h-[140px]">
      <Marquee gradient={false} pauseOnHover speed={30}>
        {children}
      </Marquee>
    </div>
  );
};

export default MarqueeContainer;
