"use client";
import useSWR from "swr";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/api";
import Pagination from "../Pagination";
import { motion as m } from "framer-motion";
import { gridVariants, gridElementVariants } from "@/animation/variants";
const Articles = ({ articles, lang }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const decreasePageIndex = () => setPageIndex((p) => p - 1);
  const increasePageIndex = () => setPageIndex((p) => p + 1);
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?pagination[page]=${pageIndex}&pagination[pageSize]=8&populate[0]=media`,
    fetcher,
    {
      fallbackData: articles,
    }
  );

  return (
    <>
      {isLoading && (
        <div className="col-span-12 flex items-center justify-center min-h-[400px]">
          <p>Loading ......</p>
        </div>
      )}
      <m.div
        className="grid grid-cols-12 md:gap-16 gap-8 "
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
      >
        {!isLoading &&
          data.data.map((article) => {
            return (
              <m.div
                key={article.id}
                className="col-span-12 md:col-span-3 "
                variants={gridElementVariants}
                initial="hidden"
                whileInView="visible"
              >
                <Card
                  info={article.attributes}
                  cardType="article"
                  lang={lang}
                />
              </m.div>
            );
          })}
      </m.div>
      <Pagination
        data={data}
        pageIndex={pageIndex}
        decreasePageIndex={decreasePageIndex}
        increasePageIndex={increasePageIndex}
        lang={lang}
      />
    </>
  );
};

export default Articles;
