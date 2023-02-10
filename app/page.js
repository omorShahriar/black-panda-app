import Image from "next/image";
import Container from "@/components/Container";
export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-3xl text-zinc-900 dark:text-white font-bold ">
          hello world
        </h1>
      </Container>
    </main>
  );
}
