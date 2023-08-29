import React from 'react';
import PropTypes from 'prop-types';
import Signup from './Signup';

const Homepage = ({ active, setActive }) => (
  <>
    <div className="home">
      <h1>Homepage</h1>

    </div>
    {active && <Signup setActive={setActive} />}
  </>
);

Homepage.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Homepage;
