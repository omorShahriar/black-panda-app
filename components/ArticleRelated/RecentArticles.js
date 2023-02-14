import { use } from "react";
import { getRecentArticles } from "@/lib/api";
import Link from "next/link";

import CardSlider from "../sliders/CardSlider";

const RecentArticles = () => {
  const { data: articles } = use(getRecentArticles());

  return (
    <div>
      <CardSlider slides={articles} cardType="article" />
      <div className="mt-12 flex justify-end">
        <Link className="" href="/articles">
          View All
        </Link>
      </div>
    </div>
  );
};

export default RecentArticles;
