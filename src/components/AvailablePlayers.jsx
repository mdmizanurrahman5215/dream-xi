import React, { use } from "react";

const fetchData = async () => {
  const res = await fetch("players.json");
  const data = await res.json();

  return data;
};

const promise = fetchData()

const AvailablePlayers = () => {
      const players = use(promise)
      console.log(players);
      
  return <div></div>;
};

export default AvailablePlayers;
