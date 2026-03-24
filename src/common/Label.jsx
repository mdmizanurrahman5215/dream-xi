import React from 'react'
import useAppContext from '../context/AppContext';


const Label = () => {
    const { toggle, setToggle, selectedPlayers } = useAppContext();
  
    
  return (
    <div>
       <div className='container mx-auto flex flex-col md:flex-row gap-6 md:justify-between items-center border py-4 px-4 border-gray-300 shadow-sm rounded-md'>
        <p className='text-2xl font-semibold'>{toggle ? "Available players ":`Selected Players ( ${selectedPlayers.length} / 11)`}</p>
        <div>
            <button onClick={()=>setToggle(true)} className={`shadow-md border-r-0 border-gray-400 px-4 py-2 rounded-l-2xl  ${toggle ? "bg-[#E7FE29]":"bg-neutral-100"}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={` shadow-md border-l-0 border-gray-400 px-4 py-2 rounded-r-2xl ${toggle ===false ? "bg-[#E7FE29]":"bg-neutral-100"}`}>Selected <span>({selectedPlayers.length})</span></button>
        </div>
       </div>
    </div>
  )
}

export default Label
