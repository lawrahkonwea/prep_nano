import { Routes, Route } from 'react-router-dom'
import './App.css';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Homepage from './Pages/Homepage';
import NavBar from './Pages/NavBar';
import Signup from './Pages/Signup';

const App = () => {
  return (
   <>
   <NavBar />
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/Signup' element={<Signup />} />
   </Routes>
   </>
  );
}

export default App;