import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header className="fixed top-0 left-0 w-full  z-10" />
        <div className="flex justify-center items-center h-[100%-72px]">
          {children}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
