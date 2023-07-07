import React, { useEffect, useState } from "react";
import "./index.css";
const Layout = () => {
  const [today, getToday] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const [dayStart, setDayStart] = useState(new Date(year, month, 1).getDay());

  const [numOfDays, setNumOfDays] = useState(
    new Date(year, month + 1, 0).getDate()
  );

  const handlePrev = () => {
    if (month === 0) {
      console.log("previous year");
      setYear((prev) => prev - 1);
      setMonth((prev) => new Date(year - 1, 11).getMonth());
      setNumOfDays((prev) => new Date(year, month, 0).getDate());
      setDayStart((prev) => new Date(year - 1, 11).getDay());
    } else {
      setMonth((prev) => {
        console.log("current month", new Date(year, prev).getMonth());
        console.log(prev);
        return new Date(year, prev - 1).getMonth();
      });
      setNumOfDays((prev) => {
        // console.log("current month",month)
        console.log("prev: ", prev);
        console.log("month: ", month);
        console.log("numofDays: ", new Date(year, month, 0).getDate());
        return new Date(year, month, 0).getDate();
      });

      setDayStart((prev) => new Date(year, month - 1).getDay());
    }
  };
  const handleNext = () => {
    if (month === 11) {
      console.log("next year");
      setYear((prev) => prev + 1);
      setMonth((prev) => new Date(year + 1, 0).getMonth());
      setNumOfDays((prev) => new Date(year + 1, 1, 0).getDate());
      setDayStart((prev) => new Date(year + 1, 0).getDay());
    } else {
      setMonth((prev) => {
        console.log("current month", new Date(year, prev).getMonth());
        console.log(prev);
        return new Date(year, prev + 1).getMonth();
      });
      setNumOfDays((prev) => {
        // console.log("current month",month)
        console.log("prev: ", prev);
        console.log("month: ", month);
        console.log("numofDays: ", new Date(year, month + 2, 0).getDate());
        return new Date(year, month + 2, 0).getDate();
      });

      setDayStart((prev) => new Date(year, month + 1).getDay());
    }
  };

  return (
    <>
      <div>year:{year}</div>
      <div className="calendar">
        <div onClick={handlePrev}>prev</div>
        <div className="month">{month + 1}</div>
        <div onClick={handleNext}>next</div>
        <div className="item">Sun</div>
        <div className="item">Mon</div>
        <div className="item">Tue</div>
        <div className="item">Wed</div>
        <div className="item">Thu</div>
        <div className="item">Fri</div>
        <div className="item">Sat</div>

        {Array(42)
          .fill(0)
          .map((x, idx) =>
            idx >= dayStart && idx - dayStart < numOfDays ? (
              today.getFullYear() === year &&
              today.getMonth() === month &&
              today.getDate() === idx - dayStart + 1 ? (
                <div className="item today">{idx - dayStart + 1}</div>
              ) : (
                <div className="item" key={idx - dayStart}>
                  {idx - dayStart + 1}
                </div>
              )
            ) : (
              <div className="item"></div>
            )
          )}

        <div>
          numOfDays: {numOfDays} dayStart: {dayStart} month: {month + 1}
        </div>
      </div>
    </>
  );
};

export default Layout;
