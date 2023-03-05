import { getRecentProducts } from "@/lib/api";

import CardSlider from "../sliders/CardSlider";
import { FadeInTopWrapper } from "../InViewAnimatedWrappers/Wrapper";

const RecentProducts = async ({ lang }) => {
  const { data: products } = await getRecentProducts();

  return (
    <FadeInTopWrapper>
      <CardSlider lang={lang} slides={products} cardType="product" />
    </FadeInTopWrapper>
  );
};

export default RecentProducts;
