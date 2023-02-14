import { use } from "react";
import Container from "@/components/Container";
import { getHomePageData } from "@/lib/api";
import Slider from "@/components/sliders/MainCarousel";
import { PrimaryHeading } from "@/components/Heading";
import RecentArticles from "@/components/ArticleRelated/RecentArticles";
import RecentProducts from "@/components/ProductRelated/RecentProducts";

export default function Home() {
  const { hero_slider } = use(getHomePageData());
  return (
    <main>
      <Container>
        <div className="">
          <Slider slides={hero_slider.slides} />
        </div>
        <section className="my-20">
          <PrimaryHeading>Recent Articles</PrimaryHeading>
          <RecentArticles />
        </section>
        <section className="my-20">
          <PrimaryHeading>Recent Products</PrimaryHeading>
          <RecentProducts />
        </section>
      </Container>
    </main>
  );
}
