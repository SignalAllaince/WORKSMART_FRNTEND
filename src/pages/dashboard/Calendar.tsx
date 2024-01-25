/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());


  return (
    <Calendar
      onChange={onChange}
      className="border-none w-[33.3vw] rounded-lg py-12 px-6 shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,_rgba(0,0,0,0.3)_0px_8px_16px_-8px]" // Remove the default border
      value={value}
    />
  );
}