"use client"
import { useFriends } from "@/context/FriendsContext";
import React from "react";

const HomeStats = () => {
    const { friends , activities } = useFriends();
  return <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="shadow-md text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">{friends.length}</h1>
        <p className="text-[18px] text-[#64748B]">Total Friends</p>
    </div>
    <div className="shadow-md  text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">3</h1>
        <p className="text-[18px] text-[#64748B]">On Track</p>
    </div>
    <div className="shadow-md  text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">3</h1>
        <p className="text-[18px] text-[#64748B]">Need Attention</p>
    </div>
    <div className="shadow-md  text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">{activities.length}</h1>
        <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
    </div>

  </div>;
};

export default HomeStats;
