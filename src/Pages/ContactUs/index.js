import React, { memo } from "react";
import SectionHeading from "../../Common/Components/SectionHeading";
import StatsSection from "./Components/StatsSection";

const ContactUs = () => {
  console.log("Contact Us rendered");

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <SectionHeading heading={"Contact Us"} />
      <StatsSection />
    </div>
  );
};

export default memo(ContactUs);
