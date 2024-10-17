import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { TbCalendarMonth } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { SignOutButton } from "@clerk/nextjs";

const navItems = [
  {
    title: "Menu",
    items: [
      {
        icon: <FaHome size={22} />,
        label: "Home",
        href: "/",
      },
      {
        icon: <FaFilm size={22} />,
        label: "Recordings",
        href: "/recordings",
      },
      {
        icon: <TbCalendarMonth size={22} />,
        label: "Upcoming",
        href: "/upcoming",
      },
      {
        icon: <TbCalendarClock size={22} />,
        label: "Previous",
        href: "/previous",
      },
      {
        icon: <FaPlus size={22} />,
        label: "Create room",
        href: "/create-room",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        icon: <IoPersonCircleSharp size={22} />,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: <IoIosSettings size={22} />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <IoIosLogOut size={22} />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const NavItems = () => {
  return (
    <div className="mt-4 text-lg">
      {navItems.map((navItems) => (
        <div className="flex flex-col gap-2" key={navItems.title}>
          <span className="hidden lg:block text-lg text-gray-400 my-4 font-light uppercase">
            {navItems.title}
          </span>
          {navItems.items.map((item) => (
            <div key={item.label}>
              {item.label === "Logout" ? (
                <SignOutButton>
                  <button className="flex items-center justify-center lg:justify-start gap-3 py-4 w-full text-red-500">
                    {item.icon}
                    <span className="hidden lg:block ">{item.label}</span>
                  </button>
                </SignOutButton>
              ) : (
                <Link
                  className="flex items-center justify-center lg:justify-start gap-3 py-4"
                  href={item.href}
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NavItems;
