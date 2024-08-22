import { Outlet } from "react-router-dom";
import NavigationBar from "./Common/Components/NavigationBar";
import { memo } from "react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar />
      <div className="pt-24 text-yellow-300">
        <Outlet />
      </div>
    </div>
  );
}

export default memo(App);
