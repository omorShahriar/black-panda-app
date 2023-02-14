import { use } from "react";
import { getAboutPageData } from "@/lib/api";
import MarkDown from "@/components/MarkDown";
import Container from "@/components/Container";
export const metadata = {
  title: "About | Black Panda",
};

const About = () => {
  const blockData = use(getAboutPageData());
  return (
    <Container>
      <div className=" prose dark:prose-dark max-w-none">
        <MarkDown content={blockData.content} />
      </div>
    </Container>
  );
};

export default About;
