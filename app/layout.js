import SearchBar from "@/components/SearchBar";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="">
        <Providers>
          <header className="bg-white dark:bg-zinc-900 sticky top-0 z-50 border-b-2 border-b-zinc-300 dark:border-b-zinc-700">
            <Navigation />
            <SearchBar />
          </header>
          <main className=""> {children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
