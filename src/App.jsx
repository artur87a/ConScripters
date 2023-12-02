import { useState, useRef } from "react";

import "./App.css";
import { Calender } from "./components/Date";
import { DashBoard } from "./components/Dashboard";
import { PlayerCard } from "./components/Playercard";

function App() {
  const [day, setDay] = useState(1);
  const [week, setWeek] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1);
  const [classType, setClassType] = useState("");
  const [name, setName] = useState("");
  const [playerCardVisibility, setPlayerCardVisibility] = useState(false);

  let player = 
    {
      name: `${name}`,
      class: `${classType}`,
      health: 100,
      skills: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
      },
      inventory: {
        gold: 0
      }
    }


  const incrementDays = () => {
    if (day < 7) {
      setDay(day + 1);
    } else {
      setDay(1);
      incrementWeek();
    }
  };
  
  const  dayString = (day) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[day - 1];
  }

  const incrementWeek = () => {
    if (week < 4) {
      setWeek(week + 1);
    } else {
      setWeek(1);
      incrementMonth();
    }
  };

  const incrementMonth = () => {
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setMonth(1);
      incrementYear();
    }
  };

  const  monthString = (month) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month - 1];
  }

  const incrementYear = () => {
    setYear(year + 1);
  };

  return (
    <>
      <main className="grid items-center justify-center min-h-screen grid-cols-12 grid-rows-6 bg-dark">
        <Calender day={dayString(day)} week={week} month={monthString(month)} year={year} />
        <DashBoard setPlayerCardVisibility={setPlayerCardVisibility} incrementDays={incrementDays} classType={classType} setClassType={setClassType} name={name} setName={setName}/>
        <PlayerCard playerCardVisibility={playerCardVisibility} player={player} />
      </main>
    </>
  );
}

export default App;
