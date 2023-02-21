import { useTranslation } from "@/app/i18n";

import Link from "next/link";
import Container from "@/components/Container";
import { getHomePageData } from "@/lib/api";
import Slider from "@/components/sliders/MainCarousel";
import { PrimaryHeading } from "@/components/Heading";
import RecentArticles from "@/components/ArticleRelated/RecentArticles";
import RecentProducts from "@/components/ProductRelated/RecentProducts";

export const revalidate = 60;

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  const { hero_slider } = await getHomePageData(lng);
  return (
    <>
      <Container>
        <div className="">
          <Slider slides={hero_slider.slides} />
        </div>
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
