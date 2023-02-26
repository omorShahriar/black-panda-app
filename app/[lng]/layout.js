import { dir } from "i18next";
import { languages } from "../i18n/settings";

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

import SearchBar from "@/components/SearchBar";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />

      <body className="">
        <Providers>
          <header className="bg-white dark:bg-zinc-900 sticky top-0 z-50 border-b-2 border-b-zinc-300 dark:border-b-zinc-700">
            <Navigation lang={lng} />
            <SearchBar lang={lng} />
          </header>
          <main className=""> {children}</main>

          <Footer lang={lng} />
        </Providers>
      </body>
    </html>
  );
}
