import Container from "@/components/Container";
import Header from "@/components/Header";
import Products from "@/components/ProductRelated/Products";
import { getProducts } from "@/lib/api";

export const revalidate = 300;
export const metadata = {
  title: "Products | Black Panda",
};

const page = async ({ params: { lng } }) => {
  const products = await getProducts({ page: 0 });

  return (
    <Container>
      <Header>Products </Header>

      <Products products={products} lang={lng} />
    </Container>
  );
};

export default page;
