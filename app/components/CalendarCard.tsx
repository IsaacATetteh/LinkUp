"use client";
import Calendar from "react-calendar";
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const CalendarCard = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="p-4 bg-white ">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarCard;
