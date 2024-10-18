import React from "react";

const ReminderCard = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl my-4">Reminders</h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#f5f0ff] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Football training</h2>
            <span className="text-gray-500 text-sm">25/10/2024</span>
          </div>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#f5f0ff] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Meeting with John Doe</h2>
            <span className="text-gray-500 text-sm">25/10/2024</span>
          </div>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#f5f0ff] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Job interview</h2>
            <span className="text-gray-500 text-sm">25/10/2024</span>
          </div>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard;
