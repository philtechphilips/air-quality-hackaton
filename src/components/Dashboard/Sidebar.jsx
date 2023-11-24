import React from "react";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="max-w-[185px] h-full border border-[#F5F5F5] px-10 pt-[50px] ">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-[#00B1FA] font-bold text-base">EcoAirWatch.</h1>
        <button className="border rounded-[10px] px-4 py-[15.5px] text-white  bg-[#68D3FF]">
          <span className="flex items-center gap-2">
            <RxDashboard /> Dashboard
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
