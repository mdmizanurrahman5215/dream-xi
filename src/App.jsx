

import { Suspense } from 'react'
import './App.css'
import Label from './common/Label'
import AvailablePlayers from './components/AvailablePlayers'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {


  return (
<>
 <Navbar/>
 {/* <Banner/> */}
 <Label/>
 <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
   <AvailablePlayers/>
 </Suspense>

</>
  )
}

export default App
