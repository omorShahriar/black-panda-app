"use client";
import useSWR from "swr";
import Card from "@/components/Card";
import { useState } from "react";
import { fetcher } from "@/lib/api";
import Pagination from "../Pagination";
import { motion as m } from "framer-motion";
import { gridVariants, gridElementVariants } from "@/animation/variants";
const Products = ({ products, lang }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const decreasePageIndex = () => setPageIndex((p) => p - 1);
  const increasePageIndex = () => setPageIndex((p) => p + 1);
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?pagination[page]=${pageIndex}&pagination[pageSize]=8&populate[0]=media&populate[1]=category&locale=${lang}`,
    fetcher,
    {
      fallbackData: products,
    }
  );

  return (
    <>
      {isLoading ? (
        <div className="w-full flex items-center justify-center min-h-[400px]">
          <p>Loading ......</p>
        </div>
      ) : (
        <m.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-12 md:gap-16 gap-8"
        >
          {data.data.map((product) => (
            <m.div
              className="col-span-12 md:col-span-3"
              key={product.id}
              variants={gridElementVariants}
              initial="hidden"
              whileInView="visible"
            >
              {" "}
              <Card info={product.attributes} cardType="product" lang={lang} />
            </m.div>
          ))}
        </m.div>
      )}

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

export default Products;
