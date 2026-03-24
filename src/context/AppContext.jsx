import { createContext, useContext, useState } from "react";


const AppContext = createContext()





export const AppProvider = ({children})=>{

    const [toggle, setToggle] = useState(true)
    const [selectedPlayers , setSelectedPlayers] = useState([])
    const [selectedPlayer , setSelectedPlayer] = useState(false)
  

    return <AppContext.Provider value={{toggle, setToggle , selectedPlayers, setSelectedPlayers, selectedPlayer, setSelectedPlayer }}>
        {children}
    </AppContext.Provider>

}

const useAppContext = ()=>{
    return useContext(AppContext)
}
export default useAppContext