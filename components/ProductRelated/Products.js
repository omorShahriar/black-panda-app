"use client";
import useSWR from "swr";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/api";
import Button from "../Button";
const Products = ({ products, lang }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?pagination[page]=${pageIndex}&pagination[pageSize]=3&populate[0]=media&populate[1]=category`,
    fetcher,
    {
      fallbackData: products,
    }
  );

  return (
    <>
      {" "}
      <div className="grid grid-cols-12 md:gap-16 gap-8 ">
        {isLoading && (
          <div className="col-span-12 flex items-center justify-center min-h-[400px]">
            <p>Loading ......</p>
          </div>
        )}
        {!isLoading &&
          data.data.map((product) => {
            return (
              <div key={product.id} className="col-span-12 md:col-span-3 ">
                <Card
                  info={product.attributes}
                  cardType="product"
                  lang={lang}
                />
              </div>
            );
          })}
      </div>
      <div className="my-12 flex gap-4 md:gap-8 flex-col md:flex-row items-center justify-center">
        <div className="flex gap-x-4 md:gap-x-8">
          {" "}
          <Button
            disabled={pageIndex === 1}
            onClick={() => setPageIndex((p) => p - 1)}
          >
            prev
          </Button>
          <Button
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex((p) => p + 1)}
          >
            next
          </Button>
        </div>

        <span>
          Page {pageIndex} of {data && data.meta.pagination.pageCount}
        </span>
      </div>
    </>
  );
};

export default Products;
