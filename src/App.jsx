import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NosHuiles from "./pages/NosHuiles";
import HuileNaturelle from "./components/HuileNaturelle";
import HuileBio from "./components/HuileBio";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<NosHuiles/>}/>
        <Route path="/huiles_naturelles" element={<HuileNaturelle/>}/>
        <Route path="/huiles_bio" element={<HuileBio/>}/>
      </Routes>
    </Router>
  )
};


export default App;
