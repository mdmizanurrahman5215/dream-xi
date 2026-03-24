import React from "react";
import useAppContext from "../context/AppContext";
import SelectedPlayerCard from "../common/SelectedPlayerCard";

const SelectedPlayers = () => {
  const { selectedPlayers } = useAppContext();
  return (
    <>
    <div className="container mx-auto ">
      <div className="mt-6  max-h-160 overflow-y-auto  mb-6">
      <div className="container mx-auto">{
        selectedPlayers && selectedPlayers.map((p)=>{
            return <SelectedPlayerCard key={p.id} player = {p}/>
        })
        }</div>
    </div>
    <div>
      <button className="bg-amber-500 px-4 py-2 rounded-md cursor-pointer text-xl font-semibold">Add More Player</button>
    </div>
    </div>
    </>
  );
};

export default SelectedPlayers;
