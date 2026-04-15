"use client"
import { useFriends } from '@/context/FriendsContext';
import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { IoIosCall, IoMdText } from 'react-icons/io';
import { MdOutlineSnooze } from 'react-icons/md';

const Timeline = () => {
  const { activities} = useFriends();
  console.log("hi", activities);
  return (
    <div className="max-w-300 w-full mx-auto py-5">
      <div className='my-6 text-[48px] text-[#1F2937] font-bold'>Timeline</div>

        {
          activities.map(act => <div className='rounded-md shadow-md bg-gray-100 p-4 mt-4 flex items-center gap-4' key={act.id}>
            <div>
              {
              act.type === "Call" ?  <IoIosCall className="text-[32px]" /> : act.type === "Text" ? <IoMdText className="text-[32px]" /> : <FaVideo className="text-[32px]" />
            }
            </div>
            <div>
              <h2>{act.type} with <span className='font-bold'>{act.name}</span></h2>
              <h2>{act.time}</h2>
            </div>
          </div>)
        }
    </div>
  )
}

export default Timeline