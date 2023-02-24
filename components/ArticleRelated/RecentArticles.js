import { getRecentArticles } from "@/lib/api";
import CardSlider from "../sliders/CardSlider";

const RecentArticles = async ({ lang }) => {
  const { data: articles } = await getRecentArticles();

  return (
    <div>
      <CardSlider lang={lang} slides={articles} cardType="article" />
    </div>
  );
};

export default RecentArticles;
