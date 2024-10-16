import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <nav className="fixed w-full z-10 top-0 bg-primary py-4 px-6 ">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-white  font-bold text-xl">LinkUp</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
