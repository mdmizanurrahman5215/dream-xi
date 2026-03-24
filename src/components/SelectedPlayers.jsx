import React from "react";
import useAppContext from "../context/AppContext";
import SelectedPlayerCard from "../common/SelectedPlayerCard";

const SelectedPlayers = () => {
  const { selectedPlayers } = useAppContext();
  return (
    <>
    {
      selectedPlayers.length ? (
        <div className="container mx-auto ">
      <div className="mt-6  max-h-160 overflow-y-auto  mb-6">
      <div className="container mx-auto">{
        selectedPlayers && selectedPlayers.map((p)=>{
            return <SelectedPlayerCard key={p.id} player = {p}/>
        })
        }</div>
    </div>
    <div>
      <button className="bg-[#E7FE29] px-4 py-2 rounded-md cursor-pointer text-xl font-semibold">Add More Player</button>
    </div>
    </div>
      ) : (
          <div className="flex flex-col items-center justify-center h-60 text-center">
          <h1 className="text-2xl font-bold mb-2">
            No Players Selected ⚠️
          </h1>
          <p className="text-gray-500 mb-4">
            Please select players to build your team.
          </p>

          <button className="bg-[#E7FE29] px-4 py-2 rounded-md cursor-pointer font-semibold">
            Select Players
          </button>
        </div>
      )
    }
    </>
  );
};

export default SelectedPlayers;
