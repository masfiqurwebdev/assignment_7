"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6">
      <div className="text-center max-w-xl">
        
        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold tracking-widest animate-pulse">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-200">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-white mx-auto my-6 rounded"></div>

        {/* Button */}
        <Link href="/">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300">
            Go Back Home
          </button>
        </Link>

        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl top-10 left-10 animate-ping"></div>
          <div className="absolute w-72 h-72 bg-indigo-400 opacity-30 rounded-full blur-3xl bottom-10 right-10 animate-ping delay-1000"></div>
        </div>

      </div>
    </div>
  );
}