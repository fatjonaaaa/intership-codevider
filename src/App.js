import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Birds from './pages/Birds';
import ContactUs from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';


import './App.css';




function App() {
  return (
    <Router>
      <div className="app-container">
      <Header />
      <main className="main-content">
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      </main>
      </div>
    </Router>
  );
}


export default App;











