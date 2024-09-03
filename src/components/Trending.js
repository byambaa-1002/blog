import moment from "moment";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Trending = (props) => {
  const { date } = props;
  return (
    <div className="place-items-end ">
      <div
        style={{
          height: 600,
          backgroundImage: "url(/nuur.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex items-end rounded-2xl"
      >
        <div className="bg-white h-64 w-[598px] mb-4 ml-4 p-10 border-spacing-1 rounded-2xl">
          <p className="  bg-blue-500 h-6 w-24 rounded-2xl  justify-center items-center text-center text-base">
            Technology
          </p>
          <p className=" text-4xl py-3">Grid system for better</p>
          <p className=" text-4xl"> Design User Interface</p>
          <p className="text-gray-400 gap-5 py-8">
            {moment(date).format("LL")}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <button className="btn ">
            <FiChevronLeft />
          </button>
          <button className="btn ">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Trending;
