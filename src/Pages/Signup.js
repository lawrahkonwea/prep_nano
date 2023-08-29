import React from 'react';
// import { Link } from 'react-router-dom/dist'
import Homepage from './Homepage';
import './Signup.css';

const Signup = () => {
  const handleModal = () => {
    window.history.go(-1);
  };

  return (
    <div>
      <Homepage />
      <div className="show-signup">
        <div className="signup-container">
          <button type="button" style={{ marginLeft: 'auto' }} onClick={handleModal}>X</button>
          {/* <Link to="/" style={{marginLeft: 'auto'}}>X</Link>  This method can also work  */}
          <h4>Hello Amaka! I am from signup</h4>
        </div>
      </div>
    </div>
  );
};

export default Signup;
