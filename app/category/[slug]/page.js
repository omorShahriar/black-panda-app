import Header from "@/components/Header";
import { getCategoryBySlug } from "@/lib/api";
import Card from "@/components/Card";

const page = async ({ params }) => {
  const categoryData = await getCategoryBySlug(params.slug);

  return (
    <div>
      <Header>{categoryData.name}</Header>
      <div className="grid grid-cols-12 gap-16">
        {categoryData.products.data.map((product) => {
          return (
            <div key={product.id} className="col-span-3">
              <Card info={product.attributes} cardType="product" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
