import useSWR from "swr";
import { BlogCard } from "../components/BlogCard";

import Trending from "../components/Trending";
import { Echnology } from "../components/Echnology";
import { BlogPost } from "../components/BlogPost";
import { Markdown } from "@/components/Markdown";
import Link from "next/link";
// import { ThemeContext } from "@/components/ThemeContext";
// import { useContext } from "react";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  return (
    <div className="conatiner max-w-[600px] md:max-w-[1200px] mx-auto px-4">
      <Trending date={data[0].published_at} />
      <Echnology data={data} />
      <BlogPost />

      <div className="grid grid-cols-4 mx-auto gap-4">
        {data.map((blog, index) => {
          return (
            <Link key={index} href={`blog/${blog.id}`}>
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          );
        })}
      </div>
      <Markdown />
    </div>
  );
};

export default Page;
