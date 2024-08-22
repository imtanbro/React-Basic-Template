import React, { memo, useEffect, useState } from "react";

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(endValue / (duration / 30)); // Faster increment

    const timer = setInterval(() => {
      start += increment;
      if (start > endValue) start = endValue;
      setCount(start);

      if (start === endValue) {
        clearInterval(timer);
      }
    }, 30); // Smaller interval for faster counting

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return (
    <div className="text-5xl font-extrabold text-white">
      {count.toLocaleString()}
    </div>
  );
};

export default memo(Counter);
