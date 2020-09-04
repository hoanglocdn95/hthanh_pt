import React, { useState, useEffect } from "react";
import * as SC from "./style";
import { DateConstant } from "constants/index";

function Calendar(props) {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear())
    ? DateConstant.DAYS_LEAP
    : DateConstant.DAYS;

  return (
    <SC.Frame>
      <SC.Header>
        <SC.Button onClick={() => setDate(new Date(year, month - 1, day))}>
          Prev
        </SC.Button>
        <div>
          {DateConstant.MONTHS[month]} {year}
        </div>
        <SC.Button onClick={() => setDate(new Date(year, month + 1, day))}>
          Next
        </SC.Button>
      </SC.Header>
      <SC.Body>
        {DateConstant.DAYS_OF_THE_WEEK.map((d) => (
          <SC.Day key={d}>
            <strong>{d}</strong>
          </SC.Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <SC.Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ""}
              </SC.Day>
            );
          })}
      </SC.Body>
    </SC.Frame>
  );
}
export default Calendar;
