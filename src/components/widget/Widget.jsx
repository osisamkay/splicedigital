import React from "react";
import Image from "next/image";


import { menuItems } from "../../data/SidebarMenuItems";
import ActivityWidget from "./ActivityWidget";
import ContactWidget from "./ContactWidget";
import NotificationWidget from "./NotificationWidget";


function Widget() {
  return (
    <div className="hidden bg-[#fff] text-gray-100 md:flex flex-col justify-between w-[280px]  border-l-2">
      <div className="container">
        <NotificationWidget />
        <ActivityWidget />
        <ContactWidget />
      </div>
    </div>
  );
}

export default Widget;
