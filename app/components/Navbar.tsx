import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <nav className="sticky top-0 bg-blue-700 py-4 px-6 items-center flex">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-white uppercase">Test</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
