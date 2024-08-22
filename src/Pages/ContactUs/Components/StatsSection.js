import React from "react";
import Counter from "./Counter";

const StatsSection = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <div className="p-10 bg-gray-800 shadow-xl rounded-lg">
          <h3 className="text-3xl font-semibold text-white mb-4">Volunteers</h3>
          <Counter endValue={500} duration={2000} />
        </div>
        <div className="p-10 bg-gray-800 shadow-xl rounded-lg">
          <h3 className="text-3xl font-semibold text-white mb-4">Donations</h3>
          <Counter endValue={120000} duration={2500} />
        </div>
        <div className="p-10 bg-gray-800 shadow-xl rounded-lg">
          <h3 className="text-3xl font-semibold text-white mb-4">Projects</h3>
          <Counter endValue={25} duration={1500} />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
