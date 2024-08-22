import React, { memo } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: "calc(100vh - 100px)", // Adjust based on your navigation bar height
      }}
    >
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default memo(ErrorPage);
