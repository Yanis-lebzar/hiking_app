import React from "react";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
type Props = {};

const CalendarHikes = (props: Props) => {
  return (
    <div className="flex justify-center  items-center ">
      <Calendar />
    </div>
  );
};

export default CalendarHikes;
