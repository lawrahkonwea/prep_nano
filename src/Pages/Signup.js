import React, { useState } from 'react'
// import { CSSTransition } from 'react-transition-group';

const Signup = () => {
  const [showSignUp, setShowSignUp] = useState(false);


  return (
    <div>
    <button onClick={() => setShowSignUp(true)}> signup </button>
    {/* <CSSTransition
        in={showSignUp}
        timeout={300}
        classNames="fade"
        unmountOnExit
      ></CSSTransition> */}
    </div>
  )
}

export default Signup