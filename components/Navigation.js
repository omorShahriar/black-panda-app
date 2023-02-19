import { use } from "react";
import { getNavigationData } from "@/lib/api";
import MainMenu from "@/components/MainMenu";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";

import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const navElementsData = use(getNavigationData());

  return (
    <div className="py-4   ">
      <Container>
        <div className="flex justify-between items-center  ">
          <div className="logo">
            <Image
              src="/logo.svg"
              width={100}
              height={60}
              alt="black panda logo"
            />
          </div>
          <ul className="hidden md:flex gap-x-4">
            <MainMenu navElements={navElementsData} />
          </ul>
          <div className="flex gap-x-4 items-center">
            {" "}
            <div className=" w-12 h-12 flex items-center justify-center">
              {" "}
              <ThemeToggle />
            </div>
            <div className="md:hidden ">
              <MobileMenu navElements={navElementsData} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
