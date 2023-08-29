import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import NavBar from './Pages/NavBar';

const App = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    window.history.replaceState(null, 'signup', '/signup');
  };

  return (
    <>
      <NavBar handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<Homepage active={active} setActive={setActive} />} />
      </Routes>
    </>
  );
};

export default App;
