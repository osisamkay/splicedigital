import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dashboard({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header className="fixed  w-full  z-10" />
        <div className="flex justify-center items-center h-[100%-72px]">
          {children}
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}

export default Dashboard;
