import { useTranslation } from "@/app/i18n";

import Link from "next/link";
import Container from "@/components/Container";
import { getHomePageData, getMarqueeNews } from "@/lib/api";
import Slider from "@/components/sliders/MainCarousel";
import { PrimaryHeading } from "@/components/Heading";
import RecentArticles from "@/components/ArticleRelated/RecentArticles";
import RecentProducts from "@/components/ProductRelated/RecentProducts";
import MarqueeContainer from "@/components/MarqueeContainer";
import ViewAll from "@/components/ViewAll";

export const metadata = {
  keywords: "Products,Manufacture,Production,Development",
  copyright: "Black-Panda GmbH",
  authors: "Black-Panda GmbH",
};

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  const hompageData = await getHomePageData(lng);
  const { newsLinks } = await getMarqueeNews(lng);

  return (
    <>
      <Container>
        <div className=" md:mt-1 mt-14">
          {hompageData?.hero_slider ? (
            <Slider slides={hompageData?.hero_slider.slides} />
          ) : null}
        </div>
      </Container>

      <section className="mb-40 mt-32 min-h-[100px]">
        <MarqueeContainer>
          {newsLinks.map((news) => (
            <p
              key={news.id}
              className="px-12 border-r py-8  md:text-7xl text-3xl font-bold  overflow-hidden"
            >
              <Link
                href={news.href}
                className="hover:text-blue-700 transition-colors duration-200 "
              >
                {news.label}
              </Link>
            </p>
          ))}
        </MarqueeContainer>
      </section>
      <Container>
        <section className="my-20">
          <PrimaryHeading>{t("recent-articles")}</PrimaryHeading>
          <RecentArticles lang={lng} />
          <div className="mt-12 flex justify-end">
            <ViewAll lang={lng} page="articles" />
          </div>
        </section>
        <section className="my-20">
          <PrimaryHeading>{t("recent-products")}</PrimaryHeading>
          <RecentProducts lang={lng} />
          <div className="mt-12 flex justify-end">
            {" "}
            <ViewAll lang={lng} page="products" />
          </div>
        </section>
      </Container>
    </>
  );
}
