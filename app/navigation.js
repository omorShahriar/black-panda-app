import { use } from "react";

import { getNavigationData } from "@/lib/api";
import MainMenu from "@/components/MainMenu";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const navElementsData = use(getNavigationData());

  return (
    <div className="py-4 border-b-2 border-b-zinc-300 dark:border-b-zinc-700">
      <Container>
        <div className="flex justify-between items-center  ">
          <div className="logo">
            <span className=" text-3xl uppercase font-bold ">Black Panda</span>
          </div>
          <ul className="flex gap-x-4">
            <MainMenu navElements={navElementsData} />
          </ul>
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
