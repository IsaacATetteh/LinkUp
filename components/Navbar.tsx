import React from "react";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <nav className="flex justify-between items-center p-4">
      <div></div>
      <div className="">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
