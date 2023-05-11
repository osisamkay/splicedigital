"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


import { DotsIcon } from "../../assets/icons/dotsIcon";
import MenuButton from "../menuButton";


function Navbar() {
  const router = useRouter();

  const NavLinks = [
    {
      label: "Overview",
      path: "/",
    },
    {
      label: "Target",
      path: "/",
    },
    {
      label: "Budgets",
      path: "/",
    },
    {
      label: "Users",
      path: "/",
    },
    {
      label: "Files",
      path: "/",
    },
    {
      label: "Activities",
      path: "/",
    },
    {
      label: "Settings",
      path: "/",
    },
  ];

  return (
    <nav className="flex justify-between items-center  bg-white text-black  font-bold ">
      <ul className="hidden md:flex items-center">
        {NavLinks.map((link, index) => (
          <li key={index} className="mr-6">
            <Link href={link.path}>
              <p
                className={`text-sm text-ByeWindGrey-dark hover:text-ByeWindBlack hover:border-b-2 hover:border-ByeWindBlack ${
                  router.pathname === link.path
                    ? "text-ByeWindBlack border-b-2 border-ByeWindBlack"
                    : ""
                }`}
              >
                {link.label}
              </p>
            </Link>
          </li>
        ))}
        <li className="mr-6">
          <Link href="/Calculator">
            <p className="text-sm  text-ByeWindBlack border-b-2 border-ByeWindBlack">
              Calculator
            </p>
          </Link>
        </li>
      </ul>
      <div className="flex items-center  justify-between">
        <MenuButton />
        <div className="w-[200px] flex items-center ml-9  justify-between">
          <div className="text-ByeWindGrey-dark text-sm">+ Add User</div>
          <div className="text-ByeWindGrey-dark text-sm"> Add Target</div>
          <DotsIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
