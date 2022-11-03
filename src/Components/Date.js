import React, { useState } from "react";

const DaysByMonth = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function Date() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [date, setDate] = useState();
  return (
    <div>
      <input
        type="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      ></input>

      <p>Date: {date}</p>
      <p>{month}</p>
      <input
        type="number"
        min="1"
        max="12"
        onChange={(e) => setMonth(e.target.value)}
      ></input>
      <p>Day</p>
      <p>{day}</p>
      <input
        type="number"
        min="1"
        max={JSON.stringify(DaysByMonth[month])}
        onChange={(e) => setDay(e.target.value)}
      ></input>
      <br />
    </div>
  );
}

export default Date;
