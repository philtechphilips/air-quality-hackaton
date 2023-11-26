import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Overview from "../components/Dashboard/Overview";

const Dashboard = () => {
  return (
    <section className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Overview />
      </div>
    </section>
  );
};

export default Dashboard;
