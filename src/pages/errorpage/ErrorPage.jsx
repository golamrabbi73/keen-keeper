import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-full font-medium transition duration-300 shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-gray-400 hover:bg-gray-700 rounded-full font-medium transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Extra design element */}
        <div className="mt-10">
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;