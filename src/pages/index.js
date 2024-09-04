import useSWR from "swr";
import { BlogCard } from "../components/BlogCard";
import { Header } from "@/components/Header";
import Trending from "../components/Trending";
import { Echnology } from "../components/Echnology";
import { BlogPost } from "../components/BlogPost";
import { About } from "../components/About";

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
    <div className="conatiner max-w-[600px] md:max-w-[1200px] mx-auto">
      <Header />
      <Trending date={data[0].published_at} />
      <Echnology data={data} />
      <BlogPost />

      <div className="grid grid-cols-4 mx-auto gap-4">
        {data.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
            />
          );
        })}
      </div>
      <About />
    </div>
  );
};

export default Page;
