"use client";

import React from "react";
import NoActivity from "@/components/NoActivity";
import { useFriends } from "@/context/FriendsContext";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Charts = () => {
  const { activities } = useFriends();

  const getChartData = (activities) => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    activities.forEach((a) => {
      counts[a.type]++;
    });

    return [
      { name: "Text", value: counts.Text },
      { name: "Call", value: counts.Call },
      { name: "Video", value: counts.Video },
    ];
  };

  const data = getChartData(activities);

  const COLORS = ["#7C3AED", "#1F4D3F", "#34A853"];

  if (activities.length === 0) {
    return <NoActivity></NoActivity>;
  }

  return (
    <div className="max-w-300 mx-auto py-6">
        <div className='my-6 text-[32px] md:text-[48px] text-[#1F2937] font-bold'>Friendship Analytics</div>
      <div className="shadow-md p-6 rounded-md flex flex-col items-center justify-center">
       <div className="text-left w-full text-[#244D3F]">
        By Interaction Type
       </div>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={80}
            outerRadius={110}
            paddingAngle={6}
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="flex gap-6 mt-4 text-[16px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            Text
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1F4D3F]"></span>
            Call
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Video
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
