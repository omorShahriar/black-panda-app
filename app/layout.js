import SearchBar from "@/components/SearchBar";
import "./globals.css";
import Navigation from "./Navigation";
import { Providers } from "./Providers";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-white dark:bg-zinc-900 transition-colors duration-300">
        <Providers>
          <header className="bg-white dark:bg-zinc-900 sticky top-0 z-50 border-b-2 border-b-zinc-300 dark:border-b-zinc-700">
            <Navigation />
            <SearchBar />
          </header>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
