import React from "react";
import { Title } from "./Heading";

const Header = ({ children }) => {
  return (
    <div className="my-12 font-bold flex items-center justify-center w-full h-80 rounded-md bg-gradient-to-tr from-indigo-600 via-violet-800 to-indigo-900 text-white">
      <Title>{children}</Title>
    </div>
  );
};

export default Header;
