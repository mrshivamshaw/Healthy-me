import React from "react";
import logo from "../../assets/healthyme.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-[100vw] bg-white rounded-t-[4vw] pt-[4.5vw] px-[3vw] font-[400] text-[21.59px] overflow-x-hidden">
      <div className="w-[85vw] mx-auto flex flex-wrap text-[#4F555A] justify-between gap-[3vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[3vw] items-start pb-[3vw] overflow-x-hidden">
        <div className="flex flex-col justify-start items-start w-[261px] gap-6">
          <img
            src="https://res.cloudinary.com/dnrwlbbbj/image/upload/v1702320663/check/Group_1_d0tqtt.png"
            alt="logo"
            className="h-[45.21px] w-auto "
          />
          <img src={logo} alt="logo" className="h-[65.21px] w-auto -mt-10" />
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            commodi?
          </p>
          <div className="flex justify-start items-center gap-4 text-[#3A8EF6]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div class>
          <div className="text-[#1678F2] font-[700] pb-[1.5vw] w-[153px]">Product</div>
          <div>
            <div> Features</div>
            <div>Pricing</div>
            <div>Case studies</div>
            <div>Reviews</div>
            <div>Updates</div>
          </div>
        </div>
        <div>
          <div className="text-[#1678F2] font-[700] pb-[1.5vw] w-[153px]">Company</div>
          <div>
            <div>About</div>
            <div>Contact us</div>
            <div>Careers</div>
            <div>Culture</div>
            <div>Blog</div>
          </div>
        </div>
        <div>
          <div className="text-[#1678F2] font-[700] pb-[1.5vw] w-[153px]">Support</div>
          <div>
            <div>Getting started</div>
            <div>Help center</div>
            <div>Server status</div>
            <div>Report a bug</div>
            <div>Chat support</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-auto">
          <div className="text-[#1678F2] font-[700] pb-[1.5vw]">Contact us</div>
          <div className="flex flex-col justify-center items-start gap-2">

          <div className="flex justify-start items-center gap-4">
            <FaPhone className="text-[#1678F2] text-lg" />{" "}
            <span className="text-[#4F555A] text-[18px font-[400]">
              (414) 687 - 5892
            </span>
          </div>
          <div className="flex justify-start items-center gap-4">
            <FaMailBulk className="text-[#1678F2] text-lg" />{" "}
            <span className="text-[#4F555A] text-[18px font-[400]">
              contact@company.com
            </span>
          </div>
          <div className="flex justify-start items-start gap-4">
            <FaLocationArrow className="text-[#1678F2] text-lg" />
            <span className="text-[#4F555A] text-[18px font-[400]">
              794 Mcallister <br /> StSan Francisco, 94102
            </span>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[85vw] mx-auto flex justify-between text-[#6F6C90] border-t-[1.2px] border-[#D9DBE9] p-3">
        <div>Copyright © 2022</div>
        <div className=" self-end text-right ">
          All Rights Reserved |{" "}
          <span className="text-[#4A3AFF] ">Terms and Conditions</span>{" "}
          | <span className="text-[#4A3AFF] ">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;