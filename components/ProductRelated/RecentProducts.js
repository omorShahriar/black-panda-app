import { use } from "react";
import { getRecentProducts } from "@/lib/api";
import Link from "next/link";

import CardSlider from "../sliders/CardSlider";

const RecentProducts = () => {
  const { data: products } = use(getRecentProducts());

  return (
    <div>
      <CardSlider slides={products} cardType="product" />
      <div className="mt-12 flex justify-end">
        <Link className="" href="/products">
          View All
        </Link>
      </div>
    </div>
  );
};

export default RecentProducts;
