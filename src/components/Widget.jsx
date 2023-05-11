import React from "react";
import Image from "next/image";

import ByeWind from "../assets/images/ByeWind.png";
import Logo from "../assets/images/Logo.png";
import ActivityWidget from "../components/ActivityWidget";
import ContactWidget from "../components/ContactWidget";
import NotificationWidget from "../components/NotificationWidget";
import { menuItems } from "../data/SidebarMenuItems";
import NavigationMenu from "./SideBarNavigationMenu";

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
