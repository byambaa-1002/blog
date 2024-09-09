import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <div className="border-solid bg-slate-200  mx-auto pt-4">
      <div className="flex items-stretch max-w-[1200px] mx-auto mb-10 pt-5 ">
        {/* About */}
        <div className="">
          <div className="py-6 px-8 gap-6 w-[289px] h-[236px]">
            <p className=" gap-10  text-2xl">About</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
        </div>
        <div className=" w-[521px] h-[88px] gap-24 text-center  ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contagt</p>
        </div>
        {/* sociar wrapper */}
        <div className=" flex justify-between gap-8 ">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        {/* meteblog */}
      </div>

      <div className="flex justify-between max-w-[1200px] mx-auto border-t border-gray-300 border-solid ">
        <div className="flex px-5">
          <img src="/Logo.png" />
          <div>
            <div className=" flex">
              <p className="">Meta</p>
              <p className="font-bold"> Blog </p>
            </div>
            <p> © All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex pr-5 ">
          <p className="border-r border-gray-300 border-solid pr-2 py-2">
            Terms of Use
          </p>
          <p className="border-r border-gray-300 border-solid pr-2  py-2">
            Privacy Policy
          </p>
          <p className="py-2">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
