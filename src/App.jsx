import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientSpace from "./pages/ClientSpace";
import MyAccount from './pages/MyAccount';
import MyFavourites from './pages/MyFavourites';
import MyCart from './pages/MyCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientSpace />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/favorite" element={<MyFavourites />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </Router>
  );
}

export default App;
