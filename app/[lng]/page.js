import { useTranslation } from "@/app/i18n";

import Link from "next/link";
import Container from "@/components/Container";
import { getHomePageData, getMarqueeNews } from "@/lib/api";
import Slider from "@/components/sliders/MainCarousel";
import { PrimaryHeading } from "@/components/Heading";
import RecentArticles from "@/components/ArticleRelated/RecentArticles";
import RecentProducts from "@/components/ProductRelated/RecentProducts";
import MarqueeContainer from "@/components/MarqueeContainer";

// export const metadata = {
//   title: "Black-Panda Wholesale",
//   description: "Innovative products for modern people",
//   keywords: "Products,Manufacture,Production,Development",
//   copyright: "Black-Panda GmbH",
//   authors: "Black-Panda GmbH",
//   publisher: "Black-Panda GmbH",
//   audience: "alle",
// };

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  const { hero_slider } = await getHomePageData(lng);
  const { newsLinks } = await getMarqueeNews(lng);

  return (
    <>
      <div className="my-12 px-4">
        <Slider slides={hero_slider.slides} />
      </div>
      <Container></Container>
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
            <Link className="" href={`/${lng}/articles`}>
              {t("to-all")}
            </Link>
          </div>
        </section>
        <section className="my-20">
          <PrimaryHeading>{t("recent-products")}</PrimaryHeading>
          <RecentProducts lang={lng} />
          <div className="mt-12 flex justify-end">
            <Link className="" href={`/${lng}/products`}>
              {t("to-all")}
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
