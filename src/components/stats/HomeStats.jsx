import React from "react";

const HomeStats = () => {
  return <div className="grid grid-cols-4 gap-4">
    <div className="shadow-xl text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">10</h1>
        <p className="text-[18px] text-[#64748B]">Total Friends</p>
    </div>
    <div className="shadow-xl  text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">3</h1>
        <p className="text-[18px] text-[#64748B]">On Track</p>
    </div>
    <div className="shadow-xl  text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">6</h1>
        <p className="text-[18px] text-[#64748B]">Need Attention</p>
    </div>
    <div className="shadow-xl  text-center p-8">
        <h1 className="text-[32px] text-[#244D3F] font-bold">12</h1>
        <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
    </div>
  </div>;
};

export default HomeStats;
