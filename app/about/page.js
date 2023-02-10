import { use } from "react";
import { getAboutPageData } from "@/lib/api";
import MarkDown from "@/components/MarkDown";
import Container from "@/components/Container";

const About = () => {
  const blockData = use(getAboutPageData());
  return (
    <Container>
      <div className=" prose-li:pl-4 prose-ol:mb-2 prose-p:mb-2 ">
        <MarkDown content={blockData.content} />
      </div>
    </Container>
  );
};

export default About;
