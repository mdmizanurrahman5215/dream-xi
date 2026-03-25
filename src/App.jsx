import { Suspense } from "react";
import "./App.css";
import Label from "./common/Label";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers";
import useAppContext from "./context/AppContext";
import Subscribe from "./common/Subscribe";
import Footer from "./components/Footer";

function App() {
  const { toggle } = useAppContext();
  return (
    <>
      <Navbar />
      {/* <Banner/> */}
      <Label />
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers />
        </Suspense>
      ) : (
        <SelectedPlayers />
      )}
     
      <Footer />
    </>
  );
}

export default App;
