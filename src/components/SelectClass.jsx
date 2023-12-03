import { useState } from 'react';
import classTypes from "../data/classtypes.json";

export const SelectClass = ({ handleClassClick, classType }) => {
  console.log(classTypes);

  const [selectedClass, setSelectedClass] = useState(null);

  const handleClick = (className) => {
    if (selectedClass === className) {
      // If the same character is clicked again, hide the class name
      setSelectedClass(null);
    } else {
      // Otherwise, display the class name of the clicked character
      setSelectedClass(className);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-24">
      <div className="flex flex-col items-center gap-8">
        <h4 className="text-3xl">Select your class:</h4>
        <div className="flex flex-wrap justify-center gap-4 w-72">
          {classTypes.map((chosenClass) => (
            <div key={chosenClass.name} className="relative">
              <button
                onClick={() => handleClick(chosenClass.name)}
                className="relative"
              >
                <div className="relative">
                  <img
                    className={`w-24 h-24 duration-500 border-4 ${classType === chosenClass.name ? "border-green-500" : "border-orange-900 rounded-lg hover:border"} rounded-lg hover:scale-110`}
                    src={chosenClass.image}
                    alt={chosenClass.name}
                  />
                  {selectedClass === chosenClass.name && (
                    <span className="opacity-100 bg-black text-white text-xs rounded absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full py-1 px-2 pointer-events-none transition-opacity duration-300">
                      {chosenClass.name}
                    </span>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

