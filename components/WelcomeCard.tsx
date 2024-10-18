"use client";

import React from "react";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";

const WelcomeCard = () => {
  const { user, isLoaded } = useUser();
  if (!user) return null;

  return (
    <div className="rounded-2xl bg-white p-4 w-full">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-2xl font-bold">
          Welcome, {user.fullName}!
        </h2>
        <Image
          className="rounded-full"
          src={user.imageUrl}
          alt={user.fullName || ""}
          width={100}
          height={100}
        />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-bold">Your agenda today:</h3>
        <p></p>
      </div>
    </div>
  );
};

export default WelcomeCard;
