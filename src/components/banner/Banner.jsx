import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="w-full text-center mb-10">
      <h1 className="text-[48px] text-[#244D3F] font-bold mb-4">Friends to keep close in your life</h1>
      <p className="text-[#64748B] text-[16px] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="flex justify-center items-center mx-auto gap-3 bg-[#244D3F] px-4 py-2 rounded-xl text-white font-semibold"><CiSquarePlus />Add a Friend</button>
    </div>
  );
};

export default Banner;
