//import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components and pages
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import HelpPage from './pages/HelpPage.js';
import ContactPage from './pages/ContactPage.js';

//import style and images
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/help" element={<HelpPage />} /> 
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer>
        <p><cite>&copy; 2024 Aaron Anderson, Dominic Bell, Jonathan Lau </cite></p>
      </footer>
    </BrowserRouter>
    );
  }

export default App;