import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/media";

const generateUrl = (slug, type) => {
  return type === "article" ? `/articles/${slug}` : `/products/${slug}`;
};

const Card = ({ info, cardType }) => {
  const { imageUrl } = getStrapiMedia(info.media);

  return (
    <Link href={generateUrl(info.slug, cardType)} className="">
      {" "}
      <div className=" flex flex-col overflow-hidden rounded-md  dark:border-zinc-700 border-gray-300 border-2">
        <div className="overflow-hidden">
          <Image
            alt={info.title}
            src={imageUrl}
            width={800}
            height={500}
            className=" w-full h-60  object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h2
            title={info.title}
            className="mb-4 text-base md:text-xl font-bold line-clamp-1"
          >
            {info.title}
          </h2>
          <p className=" line-clamp-3 text-sm ">{info?.content}</p>
          {info?.date && (
            <div className="mt-8">
              <p>{info.date}</p>
            </div>
          )}
          {info.category?.data && (
            <div className="mt-6 flex justify-end">
              <p className="text-right text-sm md:text-base p-2 dark:border-zinc-700 border-2 border-spacing-2 max-w-fit rounded-md">
                {info.category.data.attributes.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
