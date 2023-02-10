import { use } from "react";
import Container from "@/components/Container";
import { getHomePageData } from "@/lib/api";
import Slider from "@/components/Slider";

export default function Home() {
  const { hero_slider } = use(getHomePageData());
  return (
    <main>
      <Container>
        <div>
          <Slider slides={hero_slider.slides} />
        </div>
      </Container>
    </main>
  );
}
