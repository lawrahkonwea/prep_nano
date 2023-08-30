import React from 'react';
import PropTypes from 'prop-types';
import './Signup.css';

const Signup = ({ setActive, currentUrl }) => {
  const closeModal = () => {
    window.history.replaceState(null, '', currentUrl);
    setActive(false);
  };

  return (
    <div>
      <div className="show-signup">
        <div className="signup-container">
          <button type="button" style={{ marginLeft: 'auto' }} onClick={closeModal}>X</button>
          <h4>Hello Amaka! I am from signup</h4>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  setActive: PropTypes.func.isRequired,
  currentUrl: PropTypes.func.isRequired,
};

export default Signup;
