"use client";

import { FiActivity } from "react-icons/fi";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
        <FiActivity className="text-3xl text-gray-500" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-5">
        No activity yet
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Your timeline is empty right now. Start a call, send a text, or make a
        video call to see activity here.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
      >
        Start Activity
      </Link>
    </div>
  );
};

export default EmptyState;
