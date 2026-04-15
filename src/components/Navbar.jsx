"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
    const pathName = usePathname()

    const pathStyle = (path)=>{
      return  `${
      pathName === path ? "bg-green-500 text-white" : ""
    }`
    }
  return <div className="max-w-300 w-full mx-auto py-5">
    <div className="flex justify-between items-center">
        <Link href={"/"} className="text-[24px]">
        <span className="font-bold  text-[#1F2937]">Keen</span><span className="text-[#244D3F] font-semibold">Keeper</span>
    </Link>
    <div className="flex gap-4">
<Link href={"/"}><button className={`flex items-center gap-2  px-4 py-2 rounded-xl ${pathStyle("/")}`}><GrHomeRounded />Home</button></Link>
        
        <Link href={"/timeline"}><button className={`flex items-center gap-2  px-4 py-2 rounded-xl ${pathStyle("/timeline")}`}><RiTimeLine />Timeline</button></Link>
       <Link href={"/stats"}> <button className={`flex items-center gap-2  px-4 py-2 rounded-xl ${pathStyle("/stats")}`}><ImStatsDots />Stats</button></Link>
       
    </div>
    </div>
  </div>;
};

export default Navbar;
