import {
  FadeInRightWrapper,
  FadeInTopWrapper,
} from "./InViewAnimatedWrappers/Wrapper";

export const Title = ({ children }) => {
  return (
    <FadeInTopWrapper>
      <h1 className="md:text-6xl text-4xl text-center mt-6 mb-12 font-bold leading-normal ">
        {children}
      </h1>
    </FadeInTopWrapper>
  );
};

export const PrimaryHeading = ({ children }) => {
  return (
    <FadeInRightWrapper>
      {" "}
      <h2 className=" md:text-4xl text-3xl capitalize font-bold mb-12 mt-6">
        {children}
      </h2>
    </FadeInRightWrapper>
  );
};
