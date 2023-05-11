import React from "react";


import Sidebar from "../sideBar/Sidebar";
import Widget from "../widget/Widget";
import Header from "./Header";


function Dashboard({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header className=" w-full    z-10" />
        <div className=" px-7 py-8 flex-1 bg-white">{children}</div>
      </div>
      <Widget className="hidden md:block" />
    </div>
  );
}

export default Dashboard;
