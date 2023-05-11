import React from "react";
import Image from "next/image";

import ByeWind from "../assets/images/ByeWind.png";
import Logo from "../assets/images/Logo.png";
import NotificationWidget from "../components/NotificationWidget";
import { menuItems } from "../data/SidebarMenuItems";
import NavigationMenu from "./SideBarNavigationMenu";

function Widget() {
  return (
    <div className="hidden bg-[#fff] text-gray-100 md:flex flex-col justify-between w-[280px]  border-l-2">
      <div className="container">
        <NotificationWidget />

        <div className="flex px-[0.7rem]  flex-row items-center justify-center  align-middle ">
          <p className="w-1/2 text-sm text-center cursor-pointer text-ByeWindGrey-dark">
            Favorites
          </p>
          <p className="w-1/2 text-sm text-center cursor-pointer text-ByeWindGrey-light">
            Recently
          </p>
        </div>
        <ul className=" px-7 list-disc list-inside  ">
          <li className=" text-sm mt-[12px]  cursor-pointer text-ByeWindGrey-dark">
            <span class="text-ByeWindBlack">Overview</span>
          </li>
          <li className=" text-sm mt-[12px]  cursor-pointer text-ByeWindGrey-dark">
            <span class="text-ByeWindBlack">Projects</span>
          </li>
        </ul>
        <NavigationMenu menuItems={menuItems} />
      </div>

      <div>
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Widget;
