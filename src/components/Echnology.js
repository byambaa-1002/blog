export const Echnology = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col">
      <div className=" h-7 w-32 gap-8 text-slate-950 text-2xl leading-7">
        Trending
      </div>
      <div className="flex gap-2">
        {data.map((blog, index) => {
          if (index < 4) {
            return (
              <div className=" h-96 w-1/4 max-w-screen-xl">
                <div
                  style={{
                    height: 320,

                    backgroundImage: `url(${blog.cover_image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="flex items-end rounded-2xl w-full"
                >
                  <div className="justify-center text-center">
                    <p className="  bg-blue-500 h-6 w-24 rounded-2xl  justify-center items-center text-center text-base ">
                      {blog.tag_list[0]}
                    </p>
                    <p className=" text-cyan-50">{blog.title}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
