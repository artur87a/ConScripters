import { useState, useRef } from "react";

import "./App.css";
import { Calender } from "./components/Date";
import { DashBoard } from "./components/Dashboard";

function App() {
  const [day, setDay] = useState(1);
  const [week, setWeek] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1);

  const incrementDays = () => {
    if (day < 7) {
      setDay(day + 1);
    } else {
      setDay(1);
      incrementWeek();
    }
  };

  const incrementWeek = () => {
    if (week < 4) {
      setWeek(week + 1);
    } else {
      setWeek(1);
      incrementMonth();
    }
  };

  const incrementMonth = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setMonth(1);
      incrementYear();
    }
    
  };

  const incrementYear = () => {
    setYear(year + 1);
  };

  return (
    <>
      <main className="grid items-center justify-center min-h-screen grid-cols-12 grid-rows-6 bg-dark">
        <Calender day={day} week={week} month={month} year={year} />
        <DashBoard incrementDays={incrementDays} />
        
      </main>
    </>
  );
}

export default App;
