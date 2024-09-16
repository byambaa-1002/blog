import moment from "moment";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://dev.to/api/articles?state=rising";

const Trending = (props) => {
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);
  const [index, setIndex] = useState(0);
  if (isLoading) return <div> ...Loading </div>;
  const coverNews = blogs.slice(1, 5);
  const haruulahNews = coverNews[index];
  const date2 = haruulahNews.published_at;

  const { theme, setTheme } = useContext(ThemeContext);
  const incrament = () => {
    if (index < 3) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  const decrament = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(3);
    }
  };
  const bgColor = theme === "light" ? "cover_image" : "bg-black";

  return (
    <div className="place-items-end">
      <div
        style={{
          height: 600,
          backgroundImage: `url(${haruulahNews.cover_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex items-end rounded-2xl"
      >
        <div
          className={`${bgColor} h-64 w-[598px] mb-4 ml-4 p-10 border-spacing-1 rounded-2xl`}
        >
          <p className=" btn btn-primary  justify-center items-center text-center text-base">
            {haruulahNews.type_of}
          </p>
          <p className=" text-4xl py-3">{haruulahNews.title}</p>

          <p className="text-gray-400 gap-5 py-8">
            {moment({ date2 }).format("LL")}
          </p>
        </div>
      </div>
      <div className="flex justify-end ">
        <button className="btn " onClick={decrament}>
          {" "}
          {/* <Link href="/"></Link> */}
          <FiChevronLeft />
        </button>
        <button className="btn " onClick={incrament}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Trending;
