import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import useAppContext from "../context/AppContext";


const PlayerCard = ({ player }) => {
  const {name, country, image, role, playingStyle, rating, price } =
    player;
  const {
   
    selectedPlayers,
    setSelectedPlayers,
  } = useAppContext();

  const handleSelectedPlayer = (player) => {

    console.log(player.id);
    if(selectedPlayers.length >= 11) return

    const exist = selectedPlayers.find((p) => p.id == player.id);
    if (exist) {
      return;
    } else {
      setSelectedPlayers((prev) => [...prev, player]);
       
    }

   
  };

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="h-full space-y-4">
        <div className="h-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-center object-cover rounded-md"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 font-semibold text-2xl">
            <span>
              <FaUser />
            </span>
            <h1>{name}</h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span>
                <FaFlag />
              </span>
              <p>{country}</p>
            </div>
            <div>
              <p>{role}</p>
            </div>
          </div>
          <p> Rating : {rating}</p>
          <p>{playingStyle}</p>
          <div className="flex justify-between items-center">
            <p>{price}</p>
            {selectedPlayers.find((p)=>p.id == player.id) ? (
              <button disabled = {true} className="bg-white border border-gray-400 text-gray-500 px-4 py-2 rounded-md font-semibold" >Selected</button>
            ) : (
              <button onClick={() => handleSelectedPlayer(player)}
              className="bg-amber-500 px-4 py-2 rounded-md font-semibold">
                Choose Player
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
