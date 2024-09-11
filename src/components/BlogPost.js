import Link from "next/link";

export const BlogPost = () => {
  //   const { data } = props;
  return (
    <div className="w-full py-5 px-5 ">
      <div className=" py-7 w-36 h-7 text-2xl font-bold">All Blog Post</div>
      <div className="flex justify-between w-full p-10">
        <div className=" flex ">
          <button className="btn btn-ghost text-orange-300 ">
            <Link href="/contact">All </Link>
          </button>

          <button className="btn btn-ghost">
            <Link href="">Design</Link>
          </button>

          <button className="btn btn-ghost">Travel</button>
          <button className="btn btn-ghost">Fashion</button>
          <button className="btn btn-ghost">Technology</button>
          <button className="btn btn-ghost">Branding</button>
        </div>
        <div>
          <button className="btn btn-ghost">View All</button>
        </div>
      </div>
    </div>
  );
};
