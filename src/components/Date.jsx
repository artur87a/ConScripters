export const Calender = ({day, week, month, year}) => {
  return (
    <div className="p-8 bg-light w-fit">
      <p>Day: {day}</p>
      <p>Week: {week}</p>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
    </div>
  );
};
