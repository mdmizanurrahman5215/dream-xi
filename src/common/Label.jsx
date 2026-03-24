import React from 'react'
import useAppContext from '../context/AppContext';


const Label = () => {
    const { toggle, setToggle, selectedPlayers } = useAppContext();
  
    
  return (
    <div>
       <div className='container mx-auto flex justify-between items-center'>
        <p className='text-2xl font-semibold'>{toggle ? "Available players ":`Selected Players  ${selectedPlayers.length} / 11`}</p>
        <div>
            <button onClick={()=>setToggle(true)} className={`border border-r-0 border-gray-400 px-4 py-2 rounded-l-2xl  ${toggle ? "bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`border border-l-0 border-gray-400 px-4 py-2 rounded-r-2xl ${toggle ===false ? "bg-[#E7FE29]":""}`}>Selected <span>({selectedPlayers.length})</span></button>
        </div>
       </div>
    </div>
  )
}

export default Label
