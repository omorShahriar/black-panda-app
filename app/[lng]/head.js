import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo-config";
import { getHomePageData } from "@/lib/api";

const generateAdditionalMetaTagsArray = (tags) => {
  if (tags.length === 0) {
    return null;
  } else {
    return tags.map((tag) => ({
      [tag.type]: tag.value,
      content: tag.content,
    }));
  }
};

export default async function Head({ params: { lng } }) {
  const { SEO } = await getHomePageData(lng);

  const SEO_STRAPI = {
    title: SEO.metaTitle,
    description: SEO.metaDescription,
    additionalMetaTags: generateAdditionalMetaTagsArray(SEO.additionalTags),
  };
  return (
    <>
      <NextSeo {...SEO_STRAPI} titleTemplate="%s" useAppDir={true} />
    </>
  );
}
