"use client";
import { useFriends } from "@/context/FriendsContext";
import { useParams } from "next/navigation";
import React from "react";
import { FaArchive, FaVideo } from "react-icons/fa";
import { IoIosCall, IoMdText } from "react-icons/io";
import { MdDeleteOutline, MdOutlineSnooze } from "react-icons/md";
import { toast } from "react-toastify";

const Detail = ({ params }) => {
  const { friends, loading, activities, addActivity } = useFriends();
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);
   if (loading) {
    return <div className='flex items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>;
  }

  return (
    <div className="max-w-300 w-full mx-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="shadow-md rounded-md p-8">
        <div className="flex flex-col items-center gap-2">
          <img className="w-25 rounded-full " src={friend.picture} />
          <h2 className="font-bold text-[20px]">{friend.name}</h2>
          <p
            className={`inline mb-2 py-1 px-3 rounded-2xl text-white capitalize  ${
              friend.status == "overdue"
                ? "bg-[#EF4444]"
                : friend.status == "almost due"
                  ? "bg-[#EFAD44]"
                  : "bg-[#244D3F]"
            }`}
          >
            {friend.status}
          </p>
          <div>
            {friend.tags.map((t, i) => (
              <div className="text-[#244D3F] inline gap-2" key={i}>
                <div className="m-1 uppercase font-semibold bg-[#CBFADB] inline text-[#244D3F] py-1 px-2 rounded-2xl">
                  {t}
                </div>
              </div>
            ))}
          </div>

          <p className="italic">"{friend.bio}"</p>
          <p>Preferred : {friend.email}</p>
        </div>
        <div className="flex flex-col items-center gap-2 mt-2">
          <button className="w-full flex justify-center items-center gap-2 border-2 border-[#E9E9E9] py-3 px-6 rounded-md font-semibold">
            <MdOutlineSnooze />
            Snooze 2 weeks
          </button>
          <button className="w-full justify-center flex items-center gap-2 border-2 border-[#E9E9E9] py-3 px-6 rounded-md font-semibold">
            <FaArchive />
            Archive
          </button>
          <button className="w-full flex justify-center items-center gap-2 border-2 border-[#E9E9E9] py-3 px-6 rounded-md text-red-600 font-semibold">
            <MdDeleteOutline />
            Delete
          </button>
        </div>
      </div>
      <div className="col-span-2 ">
        <div className="flex items-center justify-between gap-4">
          <div className="text-center shadow-md w-full p-8">
            <h2 className="text-[20px] md:text-[30px] rounded-md font-bold text-[#244D3F]">
              {friend.days_since_contact}
            </h2>
            <p className="text-[14px] md:text-[18px] text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="text-center shadow-md w-full p-8">
            <h2 className="text-[20px] md:text-[30px] rounded-md font-bold text-[#244D3F]">
              {friend.goal}
            </h2>
            <p className="text-[14px] md:text-[18px] text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="text-center rounded-md shadow-md w-full p-8">
            <h2 className="text-[20px] md:text-[30px] font-bold text-[#244D3F]">
              {friend.next_due_date}
            </h2>
            <p className="text-[14px] md:text-[18px] text-[#64748B]">Days Since Contact</p>
          </div>
        </div>
        <div className="p-8 shadow-md rounded-md">
          <div className="flex justify-between ">
            <h2 className="font-semibold text-[#244D3F] text-[20px]">
              Relationship Goal
            </h2>
            <button className="py-2 px-6 bg-gray-100 rounded-md">Edit</button>
          </div>
          <p className="text-[#64748B] text-[18px] mt-4">
            Connect every{" "}
            <span className="font-bold text-[#1F2937]">30 days</span>
          </p>
        </div>
        <div className="p-8 shadow-md rounded-md mt-4">
          <h2 className="font-semibold text-[#244D3F] text-[20px]">
            Quick Check-In
          </h2>
          <div className="flex justify-between gap-4 mt-4">
            <button
               onClick={() => {
                toast.success(`Calling ${friend.name}`);
                addActivity(friend, "Call");
              }}
              className="p-4 cursor-pointer bg-gray-100  rounded-md text-[18px] flex flex-col items-center  w-full gap-4"
            >
              <IoIosCall className="text-[32px]" />
              Call
            </button>
            <button
              onClick={() => {
                toast.success(`Texting ${friend.name}`);
                addActivity(friend, "Text");
              }}
              className="p-4 cursor-pointer bg-gray-100  rounded-md text-[18px] flex flex-col items-center  w-full gap-4"
            >
              <IoMdText className="text-[32px]" />
              Text
            </button>
            <button
               onClick={() => {
                toast.success(`Video Calling ${friend.name}`);
                addActivity(friend, "Video");
              }}
              className="p-4 cursor-pointer bg-gray-100  rounded-md text-[18px] flex flex-col items-center w-full gap-4"
            >
              <FaVideo className="text-[32px]" />
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
