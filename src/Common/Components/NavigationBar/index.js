import React, { memo } from "react";
import Buttons from "../Buttons";
import { Link, useLocation } from "react-router-dom";
import {
  ABOUT_PAGE,
  CONTACT_US,
  HOME_PAGE,
  SUGGESTIONS,
} from "../../Constants/routePaths";

const NavigationBar = () => {
  console.log("Navigation Bar rendered");

  const location = useLocation();
  const { pathname } = location;

  const btnData = [
    {
      label: "Home",
      isActive: pathname === HOME_PAGE ? true : false,
      path: HOME_PAGE,
    },
    {
      label: "Contact Us",
      isActive: pathname === CONTACT_US ? true : false,
      path: CONTACT_US,
    },
    {
      label: "About Us",
      isActive: pathname === ABOUT_PAGE ? true : false,
      path: ABOUT_PAGE,
    },
    {
      label: "Suggestions",
      isActive: pathname === SUGGESTIONS ? true : false,
      path: SUGGESTIONS,
    },
  ];

  return (
    <div className="fixed px-2 py-2 w-full bg-black top-0">
      <div className="flex flex-row justify-between items-center">
        {/* If you want brand name on the right of logo then just change flex-col to flex-row */}
        <Link to={HOME_PAGE}>
          <div className="mx-7 flex flex-col justify-center items-center">
            <img
              className="h-12"
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1724284800&semt=ais_hybrid"
              alt="Logo"
            />
            <label className="text-white">Brand Name</label>
          </div>
        </Link>
        <div className="mx-7 flex flex-row justify-center items-center gap-5">
          {btnData.map((btn) => (
            <Link to={btn.path} key={btn.label}>
              <Buttons label={btn.label} isActive={btn.isActive} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(NavigationBar);
