import React, { use } from "react";
import PlayerCard from "../common/PlayerCard";

const fetchData = async () => {
  const res = await fetch("players.json");
  const data = await res.json();

  return data;
};

const promise = fetchData()

const AvailablePlayers = () => {
      const players = use(promise)
      console.log(players);
      
  return <div>
    <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            players && players.map((player)=>{
                return <PlayerCard key={player.id} player = {player}/>
            })
        }
    </div>
  </div>;
};

export default AvailablePlayers;
