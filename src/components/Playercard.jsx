import { useState } from "react";

export const PlayerCard = ({
  player,
  playerCardVisibility,
  health,
  setHealth,
  setGold,
}) => {
  const [inventoryOpen, setInventoryOpen] = useState(true);
  function handleItemClick(item) {
    item.type === "consumable" ? () => handleConsumeItem(item) : "";
  }

  function handleConsumeItem(item) {
    item.type === "consumable" ? setHealth(health + item.heal) : "";
    console.log(item);
  }
  return (
    <div>
      {playerCardVisibility === true ? (
        <div className="fixed bottom-0 left-0 flex-col w-64 h-64 gap-6 text-black bg-gray-200 position-fixed">
          <img
            className="w-24"
            src={`/images/classtypes/${player.class.toLowerCase()}.webp`}
            alt=""
          />
          <p>Name: {player.name}</p>
          <p>Class: {player.class}</p>
          <p>Gold: {player.inventory.gold}</p>
          <p
            className={
              player.health < 10
                ? "text-red-500"
                : player.health < 50
                ? "text-yellow-500"
                : "text-green-500"
            }
          >
            Health: {player.health}
          </p>

          <div className="flex justify-around justify-self-end">
            <button
              onClick={() => setInventoryOpen(!inventoryOpen)}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Inventory
            </button>
          </div>
        </div>
      ) : null}

      {inventoryOpen === true ? (
        <div className="fixed bottom-0 flex-col w-64 h-64 gap-6 text-black bg-gray-200 left-64 position-fixed">
          <p>Gold: {player.inventory.gold}</p>
          <p>Items:</p>
          <div className="flex-col w-[95%] h-[80%] bg-gray-600 rounded-lg">
            {player.inventory.items.map((item) => (
              <p
                key={item.name}
                onClick={() => handleItemClick(item)}
                className={`
              ${item.type === "consumable" ? "text-red-500" : ""}
              ${item.type === "weapon" ? "text-blue-500" : ""}
              ${item.type === "armor" ? "text-green-500" : ""}
              hover:cursor-pointer
              `}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
