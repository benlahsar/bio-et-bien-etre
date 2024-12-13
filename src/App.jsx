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
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/AdminPage";

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
        <Route path="/espace-client" element={<ClientSpace />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/favorite" element={<MyFavourites />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<CustomerFeedback />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;