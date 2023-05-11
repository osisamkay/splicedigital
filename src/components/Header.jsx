import React from "react";

import { BellIcon } from "../assets/icons/bellIcon";
import { CounterClockIcon } from "../assets/icons/counterClockIcon";
import { SideBarIcon } from "../assets/icons/sidebarIcon";
import { StarIcon } from "../assets/icons/StarIcon";
import { SunIcon } from "../assets/icons/sunIcon";
import Breadcrumb from "./BreadCrumb";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="bg-white  shadow-lg  ">
      <div className=" h-[72px] flex items-center border-b  justify-between mx-auto px-4 sm:px-6 lg:px-[28px]">
        <div className="flex flex-row md:w-[245px] items-center justify-between ">
          <SideBarIcon />
          <StarIcon />
          <Breadcrumb
            items={[
              { label: "Dashboard", url: "/", separator: "" },
              { label: "Default", url: "/", separator: "/" },
            ]}
          />
        </div>
        <div className="flex flex-row  items-center justify-between w-80">
          <SearchInput />
          <CounterClockIcon />
          <SunIcon />
          <BellIcon />
          <SideBarIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
