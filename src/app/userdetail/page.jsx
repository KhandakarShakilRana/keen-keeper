"use client";

import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

const SelectUserPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-gray-100">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md bg-white shadow-lg rounded-2xl p-10"
      >

        <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
          <FiUser className="text-3xl text-gray-500" />
        </div>


        <h1 className="text-2xl font-semibold text-gray-800 mt-5">
          No User Selected
        </h1>


        <p className="text-gray-500 mt-2">
          Please select a user first to view their details, call history, texts, or video interactions.
        </p>


        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default SelectUserPage;
