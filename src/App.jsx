import BlogPage from "./Blogs";
import Contents from "./Content";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPage/>} />
        <Route path="/OuedSousse" element={<Contents.BlogContent/>} />
        <Route path="/Zit" element={<Contents.BlogContent1/>} />
        <Route path="/Pikalat" element={<Contents.BlogContent2/>} />
        <Route path="/Argania" element={<Contents.BlogContent3/>} />
        <Route path="/Revox" element={<Contents.BlogContent4/>} />
        <Route path="/HuileOlive" element={<Contents.BlogContent5/>} />
      </Routes>
    </Router>
  );
}

export default App;
