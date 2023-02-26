"use client";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

const MarqueeContainer = ({ children }) => {
  const { theme } = useTheme();
  const gradientColor = theme === "dark" ? [24, 24, 27] : [255, 255, 255];
  return (
    <div className="py-4 border-black dark:border-white border-t-4 border-b-4 md:border-t-8 md:border-b-8 border-double">
      <Marquee gradientColor={gradientColor} pauseOnHover speed={30}>
        {children}
      </Marquee>
    </div>
  );
};

export default MarqueeContainer;
