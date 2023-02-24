import { useTranslation } from "@/app/i18n";
import Articles from "@/components/ArticleRelated/Articles";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { getArticles } from "@/lib/api";

export const revalidate = 300;

const page = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  const articles = await getArticles({ page: 1 });

  return (
    <div className="mb-12">
      <Container>
        <Header>{t("header.articles")} </Header>

        <Articles articles={articles} lang={lng} />
      </Container>
    </div>
  );
};

export default page;
