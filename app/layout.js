import "./globals.css";
import Navigation from "./Navigation";
import { Providers } from "./Providers";

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
          <header className="sticky top-0 z-50">
            <Navigation />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
