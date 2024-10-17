import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div></div>
        <div className="border-2">
          <UserButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
