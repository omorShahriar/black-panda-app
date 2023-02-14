import Card from "@/components/Card";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { getArticles } from "@/lib/api";

export const metadata = {
  title: "Articles | Black Panda",
};

const page = async () => {
  const { data: articles } = await getArticles();

  return (
    <Container>
      <Header>Articles </Header>
      <div className="grid grid-cols-fluid gap-16">
        {articles.map((article) => {
          return (
            <div key={article.id}>
              <Card info={article.attributes} cardType="article" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default page;
