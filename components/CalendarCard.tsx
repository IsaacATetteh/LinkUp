"use client";
import Calendar from "react-calendar";
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { IoIosMore } from "react-icons/io";

type ValuePiece = Date | null;

const invitations = [
  {
    id: 1,
    title: "Meeting with John",
    sender: {
      name: "John",
      icon: undefined,
    },
  },
  {
    id: 2,
    title: "Meeting with Jane",
    sender: {
      name: "Jane",
      icon: undefined,
    },
  },
  {
    id: 3,
    title: "Meeting with Doe",
    sender: {
      name: "Doe",
      icon: undefined,
    },
  },
  {
    id: 3,
    title: "Meeting with Doe",
    sender: {
      name: "Doe",
      icon: undefined,
    },
  },
];

type Value = ValuePiece | [ValuePiece, ValuePiece];
const CalendarCard = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="p-4 bg-white ">
      <Calendar onChange={onChange} value={value} className="w-full" />
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl my-4">Invitations</h1>
        <IoIosMore className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4">
        {invitations.map((invitation) => (
          <div
            className="p-2 lg:p-5 rounded-md  border-gray-100 border-t-4 border-t-[#CECEFE]"
            key={invitation.id}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 w-ful">
                <div className="flex items-center justify-center text-white h-8 w-8 rounded-full bg-[#9a76f5]">
                  {invitation.sender.icon
                    ? invitation.sender.icon
                    : invitation.sender.name.charAt(0)}
                </div>{" "}
                <h1 className="font-semibold text-gray-600 overflow-y-hidden">
                  {invitation.sender.name} sent an invite
                </h1>
              </div>
              <span className="text-gray-300 text-xs">18/10/2024</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;
