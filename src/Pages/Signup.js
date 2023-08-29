import React from 'react';
import PropTypes from 'prop-types';
import './Signup.css';

const Signup = ({ setActive }) => {
  const handleModal = () => {
    window.history.replaceState(null, 'homepage', '/');
    setActive(false);
  };

  return (
    <div>

      <div className="show-signup">
        <div className="signup-container">
          <button type="button" style={{ marginLeft: 'auto' }} onClick={handleModal}>X</button>
          <h4>Hello Amaka! I am from signup</h4>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default Signup;
