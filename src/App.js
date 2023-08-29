import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import NavBar from './Pages/NavBar';
import Signup from './Pages/Signup';

const App = () => (
  <>

    <NavBar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
);

export default App;
