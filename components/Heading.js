import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="text-6xl mt-6 mb-12 font-bold leading-normal ">
      {children}
    </h1>
  );
};

export const PrimaryHeading = ({ children }) => {
  return (
    <h2 className=" text-4xl capitalize font-bold mb-12 mt-6">{children}</h2>
  );
};
