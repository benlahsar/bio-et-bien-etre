// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Benefits from './pages/Benefits';
import TestimonialSection from './pages/TestimonialSection';
import Beni from './components/Beni';
import CustomerFeedback from './components/CustomerFeedback';

import ProductCards from './components/ProductCards'; // Importer ProductCards
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
<TestimonialSection />
      <Beni />
      <div className="min-h-screen bg-green">
        <Routes>

          <Route path="/" element={<Home />} />
          
         
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/feedback" element={<CustomerFeedback />} />
        </Routes>
        
        {/* Ajouter ProductCards ici, sur la page d'accueil ou autre */}
      

      </div>
    
    </Router>
  );
};

export default App;
