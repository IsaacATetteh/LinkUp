import React from "react";
import Link from "next/link";
import NavItems from "../components/NavItems";
import Navbar from "../components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[20%] xl:w-[14%] p-4">
        <Link
          className="flex items-center justify-center lg:justify-start font-bold"
          href="/"
        >
          LinkUp
        </Link>
        <NavItems />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[80%] xl:w-[86%] bg-secondary overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
