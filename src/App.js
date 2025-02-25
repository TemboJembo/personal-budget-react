import React from 'react';
import './App.css';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Hero/>
        <div className='mainContainer'>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
