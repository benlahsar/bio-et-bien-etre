
import BlogPage from "./Blogs";
import Contents from "./Content";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientSpace from "./pages/ClientSpace";
import MyAccount from './pages/MyAccount';
import MyFavourites from './pages/MyFavourites';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/OuedSousse" element={<Contents.BlogContent/>} />
        <Route path="/Zit" element={<Contents.BlogContent1/>} />
        <Route path="/Pikalat" element={<Contents.BlogContent2/>} />
        <Route path="/Argania" element={<Contents.BlogContent3/>} />
        <Route path="/Revox" element={<Contents.BlogContent4/>} />
        <Route path="/HuileOlive" element={<Contents.BlogContent5/>} />
        <Route path="/" element={<ClientSpace />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/favorite" element={<MyFavourites />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hos_huiles" element={<NosHuiles/>}/>
        <Route path="/huiles_naturelles" element={<HuileNaturelle/>}/>
        <Route path="/huiles_bio" element={<HuileBio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
