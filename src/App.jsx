import BlogPage from "./Blogs";
import Contents from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientSpace from "./pages/ClientSpace";
import MyAccount from "./pages/MyAccount";
import MyFavourites from "./pages/MyFavourites";
import MyCart from "./pages/MyCart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CustomerFeedback from "./components/CustomerFeedback";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/OuedSousse" element={<Contents.BlogContent />} />
        <Route path="/Zit" element={<Contents.BlogContent1 />} />
        <Route path="/Pikalat" element={<Contents.BlogContent2 />} />
        <Route path="/Argania" element={<Contents.BlogContent3 />} />
        <Route path="/Revox" element={<Contents.BlogContent4 />} />
        <Route path="/HuileOlive" element={<Contents.BlogContent5 />} />
        <Route path="/c" element={<ClientSpace />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/favorite" element={<MyFavourites />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<CustomerFeedback />} />
        <Route path="/produits" element={<Products />} />
        {/* <Route path="/hos_huiles" element={<NosHuiles/>}/> */}
        {/* <Route path="/huiles_naturelles" element={<HuileNaturelle/>}/>
        <Route path="/huiles_bio" element={<HuileBio/>}/>
        <Route path="/huiles_cheveux" element={<HuileCheveux/>}/> */}
      </Routes>
    </Router>
  );
}
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';

// import Benefits from './pages/Benefits';
// import TestimonialSection from './pages/TestimonialSection';
// import Beni from './components/Beni';
// import CustomerFeedback from './components/CustomerFeedback';

// import ProductCards from './components/ProductCards'; // Importer ProductCards
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
// <TestimonialSection />
//       <Beni />
//       <div className="min-h-screen bg-green">
//         <Routes>

//         </Routes>

//         {/* Ajouter ProductCards ici, sur la page d'accueil ou autre */}

//       </div>

//     </Router>
//   );
// };

export default App;