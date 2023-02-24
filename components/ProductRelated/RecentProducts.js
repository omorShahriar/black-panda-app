import { getRecentProducts } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";

const RecentProducts = async ({ lang }) => {
  const { data: products } = await getRecentProducts();

  return (
    <div>
      <CardSlider lang={lang} slides={products} cardType="product" />
    </div>
  );
};

export default RecentProducts;
