export const PlayerCard = ({ player, playerCardVisibility }) => {
    return (
      playerCardVisibility === true ?  
        <div className="fixed bottom-0 left-0 flex-col w-64 h-64 gap-6 text-black bg-gray-200 position-fixed">
          <img className="w-24" src={`/images/classtypes/${player.class.toLowerCase()}.webp`} alt="" />
          <h1>Name: {player.name}</h1>
          <h1>Class: {player.class}</h1>
          <h1>Gold: {player.inventory.gold}</h1>
          <h1 className={player.health < 10 ? "text-red-500" : player.health < 50 ? "text-yellow-500" : "text-green-500"}>Health: {player.health}</h1>
        </div>
      : null
    );
  };
  