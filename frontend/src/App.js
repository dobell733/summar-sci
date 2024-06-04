//import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components and pages
import Nav from './components/Nav.js';
import FileUpload from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import ArticleSummary from './pages/SummaryPage.js';

//import style and images
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<FileUpload />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='/summary' element={<ArticleSummary />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Aaron Anderson, Dominic Bell, Jonathan Lau</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;