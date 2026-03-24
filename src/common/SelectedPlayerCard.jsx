import React from "react";
import { MdDelete } from "react-icons/md";
import useAppContext from "../context/AppContext";

const SelectedPlayerCard = ({ player }) => {
  const { image, name, playingStyle } = player;
  const { selectedPlayers, setSelectedPlayers, coin, setCoin } =
    useAppContext();
    const price = Number(coin) + Number(player.price);

  const handleDeletePlayer = (player) => {
    const deletePlayer = selectedPlayers.filter((p) => p.id !== player.id);
    setSelectedPlayers(deletePlayer);
    setCoin(price)
    
  };
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-md ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <div className="h-20 w-20 shadow-md overflow-hidden rounded-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-xl text-gray-500">
            <h1>{name}</h1>
            <p>{playingStyle}</p>
          </div>
        </div>
        <div className=" ">
          {/* delete icon  */}
          <span className="text-4xl text-red-600" onClick={() => handleDeletePlayer(player)}>
            <MdDelete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
