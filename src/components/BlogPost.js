export const BlogPost = () => {
  //   const { data } = props;
  return (
    <div className="w-full ">
      <div className=" py-7 w-36 h-7 text-2xl font-bold">All Blog Post</div>
      <div className="flex justify-between w-full p-10">
        <div className=" flex ">
          <input type="button" value="All" className="btn" />
          <input type="button" value="Design" className="btn" />
          <input type="button" value="Travel" className="btn" />
          <input type="button" value="Fashion" className="btn" />
          <input type="button" value="Technology" className="btn" />
          <input type="button" value="Branding" className="btn" />
        </div>
        <div>
          <input type="button" value="View All" className="btn" />
        </div>
      </div>
    </div>
  );
};
// width: 184px;
// height: 28px;
// gap: 0px;
// opacity: 0px;
//styleName: Heading/h3/Bold;
// font-family: Work Sans;
// font-size: 24px;
// font-weight: 700;
// line-height: 28px;
// text-align: left;
