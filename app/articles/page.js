import Card from "@/components/Card";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { getArticles } from "@/lib/api";

export const revalidate = 300;

export const metadata = {
  title: "Articles | Black Panda",
};

const page = async () => {
  const { data: articles } = await getArticles();

  return (
    <div className="mb-12">
      <Container>
        <Header>Articles </Header>
        <div className="grid grid-cols-fluid md:gap-12 gap-8">
          {articles.map((article) => {
            return (
              <div key={article.id}>
                <Card info={article.attributes} cardType="article" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default page;
