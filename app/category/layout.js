import { PrimaryHeading } from "@/components/Heading";
import { getCategories } from "@/lib/api";
import Link from "next/link";

const layout = async ({ children }) => {
  const categoryData = await getCategories();

  return (
    <div className="flex w-full min-h-[calc(100vh-80px-2px)]">
      <div className=" max-h-[calc(100vh-80px-2px)] sticky top-[82px] min-w-[270px] w-[270px] border-r-2 border-r-gray-300 dark:border-r-zinc-700 p-8">
        <PrimaryHeading>Categories</PrimaryHeading>
        <ul className="flex flex-col gap-y-8">
          {categoryData.map((category) => (
            <li key={category.attributes.slug} className="text-xl font-medium">
              <Link href={`category/${category.attributes.slug}`}>
                {category.attributes.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow px-8 ">{children}</div>
    </div>
  );
};

export default layout;
