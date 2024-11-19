import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NosHuiles from "./pages/NosHuiles";
import HuileCosmetique from "./components/HuileCosmetique";
import HuileBio from "./components/HuileBio";
import HuileCheveux from "./components/HuileCheveux";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<NosHuiles/>}/>
        <Route path="/huiles_cosmetique" element={<HuileCosmetique/>}/>
        <Route path="/huiles_bio" element={<HuileBio/>}/>
        <Route path="/huiles_cheveux" element={<HuileCheveux/>}/>
        
      </Routes>
    </Router>
  )
};


export default App;
