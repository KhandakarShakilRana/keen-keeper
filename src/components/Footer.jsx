import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#244D3F]">
      <div className="max-w-300 w-full mx-auto pt-20 text-center text-white">
        <div>
          <h2 className="text-white font-bold text-[61px]">KeenKeeper</h2>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <h2 className="text-[20px] mt-6 mb-4">Social Links</h2>
          <div className="flex gap-2 items-center justify-center border-b border-gray-600 pb-10">
            <FaFacebookSquare className="text-[30px]" />
            <FaInstagramSquare className="text-[30px]" />
            <FaTwitterSquare className="text-[30px]" />
          </div>
          <div className="flex justify-between items-center py-6">
            <h1>© 2026 KeenKeeper. All rights reserved.</h1>
            <div className="flex gap-8">
              <p>Privacy Policy</p> <p>Terms of Service</p> <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
