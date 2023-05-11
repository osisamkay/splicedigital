import React from "react";

const MenuButton = () => {
  return (
    <button className="block md:hidden">
      <svg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
      </svg>
    </button>
  );
};

export default MenuButton;
