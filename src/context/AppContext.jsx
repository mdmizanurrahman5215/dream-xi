import { createContext, useContext } from "react";


const AppContext = createContext()





export const AppProvider = ({children})=>{
  

    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>

}

const useAppContext = ()=>{
    return useContext(AppContext)
}
export default useAppContext