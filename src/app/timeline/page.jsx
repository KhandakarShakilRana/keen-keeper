"use client";

import NoActivity from "@/components/NoActivity";
import { useFriends } from "@/context/FriendsContext";
import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosCall, IoMdText } from "react-icons/io";




const Timeline = () => {
  const { activities } = useFriends();
  const [filter, setFilter] = useState("All");

  const filteredActivities =
    filter === "All"
      ? activities
      : activities.filter((a) => a.type === filter);

  if (activities.length === 0) {
    return  <NoActivity></NoActivity>;
  }

  return (
    <div className="max-w-300 w-full mx-auto py-5">
     
      

      <div className="flex justify-between items-center my-6">
        <h1 className="text-[48px] text-[#1F2937] font-bold">Timeline</h1>
      </div>
      <div>
        <select  value={filter}
  onChange={(e) => setFilter(e.target.value)} defaultValue="Filter Timeline" className="select">
  <option value="All">All</option>
  <option value="Call">Call</option>
  <option value="Text">Text</option>
  <option value="Video">Video</option>
</select>
      </div>

      {filteredActivities.map((act) => (
        <div
          key={act.id}
          className="rounded-md shadow-md bg-gray-100 p-4 mt-4 flex items-center gap-4"
        >
          <div>
            {act.type === "Call" ? (
              <IoIosCall className="text-[32px]" />
            ) : act.type === "Text" ? (
              <IoMdText className="text-[32px]" />
            ) : (
              <FaVideo className="text-[32px]" />
            )}
          </div>

          <div>
            <h2>
              {act.type} with <span className="font-bold">{act.name}</span>
            </h2>
            <h2 className="text-sm text-gray-500">{act.time}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
