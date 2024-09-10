import { SearchIcon } from "./icons/SearchIcon";
export const Contact = () => {
  return (
    <div className="flex flex-col gap-5 w-[624px] mx-auto mt-[100px] mb-[166px]">
      <p className="font-semibold text-4xl">Contact Us</p>
      <p className="text-[#696A75;] font-normal text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex justify-between gap-[50px] mb-[30px]">
        <div className="flex flex-col gap-2.5 border border-solid border-[#E8E8EA] p-4 w-full rounded-xl">
          <p className="font-semibold text-2xl"> Address </p>
          <p className="text-[#696A75;] font-normal text-base">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="flex flex-col gap-2.5 border border-solid border-[#E8E8EA] p-4 w-full rounded-xl">
          <p className="font-semibold text-2xl">Contact</p>
          <p className="text-[#696A75;] font-normal text-base">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className="pr-[130px] pl-[35px] py-[27px] bg-[#F6F6F7]">
        <div className="flex flex-col gap-[22px]">
          <p className="font-semibold text-base"> Leave a Message</p>
          <div className="flex gap-7 justify-between">
            <input
              placeholder="Your Name"
              className="py-1.5 pl-[18px] rounded-md w-full text-base font-normal"
            />
            <input
              placeholder="Your Email"
              className="py-1.5 pl-[18px] rounded-md w-full text-base font-normal"
            />
          </div>
          <input
            placeholder="Subject"
            className="py-1.5 pl-[18px] rounded-md w-full text-base font-normal"
          />
          <textarea
            placeholder="write a message"
            className="h-[134px] pl-5 pt-4"
          ></textarea>
          <button className="px-4 py-2.5 rounded-md  bg-[#4B6BFB;] text-white w-fit font-medium text-sm">
            Send Message
          </button>
        </div>
      </div>
    </div>
    // <div className="conatiner max-w-[600px] md:max-w-[1200px] mx-auto px-4">
    //   <div className="p-3 gap-14 w-[769px] h-[389px] flex flex-col">
    //     <div className="">
    //       <p className="text-2xl font-extrabold pr-2 pb-5 py-20">Contact Us</p>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
    //         elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    //         aliqua. Ut enim ad minim veniam
    //       </p>
    //     </div>

    //     <div className="  flex justify-between p-5 gap-4 ">
    //       <div className="border rounded-md w-[638px] h-[153px] ">
    //         <p className="text-2xl font-bold">Address</p>
    //         <p>1328 Oak Ridge Drive,</p>
    //         <p>Saint Louis, Missouri</p>
    //       </div>
    //       <div className="border rounded-md  w-[638px] h-[153px]">
    //         <p className="text-2xl font-bold">Contact</p>
    //         <p>313-332-8662 </p>
    //         <p>info@email.com</p>
    //       </div>
    //     </div>
    //     <div className=" bg-slate-400 border flex flex-col items-center">
    //       <div>Leave a Message</div>
    //       <div className="flex gap-9">
    //         <div className="flex justify-center items-center gap-3">
    //           <input placeholder="Your Name" />
    //         </div>
    //         <div className="flex justify-center items-center gap-3">
    //           <input placeholder="Your Email" />
    //         </div>
    //       </div>
    //       <div className="flex justify-center items-center gap-3  w-full h-[134px]">
    //         <input placeholder="Subject" />
    //       </div>
    //       <textarea id="w3review" name="w3review" rows="4" cols="50">
    //         Write a message
    //       </textarea>
    //     </div>
    //   </div>
    // </div>
  );
};
