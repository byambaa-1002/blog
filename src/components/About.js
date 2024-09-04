import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <div className="border-solid bg-slate-200 ">
      <div className="flex items-stretch ">
        {/* About */}
        <div className="">
          <div className=" gap-6 w-[289px] h-[236px]">
            About
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
        {/* home */}

        <div className=" w-[521px] h-[88px] gap-24 text-center pt-4  ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contagt</p>
        </div>
        {/* sociar wrapper */}
        <div className=" flex justify-between gap-8">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        {/* meteblog */}
      </div>

      <div className="flex justify-between border-t border-gray-300 border-solid">
        <div className="flex">
          <img src="/Logo.png" />
          <div>
            <div className=" flex">
              <p className="">Meta</p>
              <p className=" font-boldgit"> Blog </p>
            </div>
            <p> © All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex ">
          <p className="border-r border-gray-300 border-solid">Terms of Use</p>
          <p className="border-r border-gray-300 border-solid">
            Privacy Policy
          </p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
