import React from "react";
import Image from "next/image";

import ByeWind from "../assets/images/ByeWind.png";
import Logo from "../assets/images/Logo.png";
import { menuItems } from "../data/SidebarMenuItems";
import NavigationMenu from "./SideBarNavigationMenu";

function Sidebar() {
  return (
    <div className="hidden bg-[#fff] text-gray-100 md:flex flex-col justify-between w-[212px]  border-r-2">
      <div className="container">
        <div className="flex flex-row items-center  align-middle p-6">
          <Image src={ByeWind} alt="user logo" />
          <p className="ml-2 leading-[18px] text-sm font-normal text-[#1C1C1C]">
            ByeWind
          </p>
        </div>

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

export default Sidebar;
