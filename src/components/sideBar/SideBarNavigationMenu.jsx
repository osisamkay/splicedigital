"use client";
import React, { useState } from "react";


import { ArrowRight } from "../../assets/icons/arrowRight";


function NavigationMenu({ menuItems }) {
  const [openMenuIds, setOpenMenuIds] = useState([]);

  const handleMenuClick = (id) => {
    if (openMenuIds.includes(id)) {
      setOpenMenuIds(openMenuIds.filter((menuId) => menuId !== id));
    } else {
      setOpenMenuIds([...openMenuIds, id]);
    }
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        const isMenuOpen = openMenuIds.includes(item.id);
        return (
          <li className=" cursor-pointer mt-3" key={item.id}>
            <div className="flex items-center">
              <div className="mr-[12.41px]">
                <ArrowRight />
              </div>
              {item.icon}
              <span
                className="text-ByeWindBlack text-sm ml-[5.87px]  cursor-pointer"
                onClick={() => handleMenuClick(item.id)}
              >
                {item.label}
              </span>
            </div>
            <ul className={`${isMenuOpen ? "block" : "hidden"}`}>
              {renderMenuItems(item.children)}
            </ul>
          </li>
        );
      } else {
        return (
          <li className="ml-[20px] cursor-pointer mt-3" key={item.id}>
            {item.icon}
            <a
              href={item.path}
              className="text-ByeWindBlack text-sm ml-[5.87px] cursor-pointer"
            >
              {item.label}
            </a>
          </li>
        );
      }
    });
  };

  const renderMenuSections = (sections) => {
    return sections.map((section) => (
      <li className="mt-[32px]" key={section.title}>
        <span className="font-400 text-sm  text-ByeWindGrey-dark">
          {section.title}
        </span>
        <ul>{renderMenuItems(section.items)}</ul>
      </li>
    ));
  };

  return (
    <nav className="px-[28px]">
      <ul>{renderMenuSections(menuItems)}</ul>
    </nav>
  );
}

export default NavigationMenu;
