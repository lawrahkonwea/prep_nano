import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import NavBar from './Pages/NavBar';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  const [active, setActive] = useState(false);

  const [currentUrl, setCurrentUrl] = useState('');

  const handleClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/signup') {
      return;
    } if (currentPath == null) {
      setCurrentUrl('/');
    } else {
      setCurrentUrl(window.location.pathname);
    }
    setActive(true);
    window.history.replaceState(null, 'signup', '/signup');
  };

  return (
    <>
      <NavBar handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {active && <Signup setActive={setActive} currentUrl={currentUrl} />}
    </>
  );
};

export default App;
