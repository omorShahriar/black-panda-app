import Card from "@/components/Card";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Products | Black Panda",
};

const page = async () => {
  const { data: products } = await getProducts();

  return (
    <Container>
      <Header>Products </Header>
      <div className="grid grid-cols-fluid gap-16">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Card info={product.attributes} cardType="product" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default page;
