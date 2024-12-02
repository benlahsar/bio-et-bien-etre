import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/HomePage';
import Beneficier from './components/Beneficier';
import Offerts from './components/Offerts';
import Products from './components/Products';
import Recommended from './components/Recommended'

function App() {
  return (
    <div className="App bg-secondary min-h-screen">
      <Navbar />
      <Home />
      <Beneficier />
      <Offerts />
      <Products />
      <Recommended />

    </div>
  );
}

export default App;