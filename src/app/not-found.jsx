"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <div className="text-center max-w-md">
        

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] font-extrabold text-gray-800 leading-none"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page not found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>


        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
