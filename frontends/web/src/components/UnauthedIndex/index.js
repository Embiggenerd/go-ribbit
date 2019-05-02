// Unconnected component that provides links to login and register connected components
// components that display children.
import React from 'react';
import { Link } from 'react-router-dom';
// import unauthedImage from './frog1-mobile-unauthed.svg';
import unauthedImage from './frog.svg';
import littleFrog from './littleFrog.svg';

const UnauthedIndex = () => {
  return (
    <div className="layout">
      <div className="logo_and_signin">
        <img className="little_frog" src={littleFrog} />
        <Link className="little_login" to="/login">
          Log In
        </Link>
      </div>
      <h2 className="join_statement">
        Somewhere, someone's song is being heard, and yours isn't
      </h2>
      <h3 className="join_statement">Join Go Ribbit Today</h3>
      <Link className="login_button" to="/login">
        Log In
      </Link>

      <Link className="signup_button" to="/register">
        Sign Up
      </Link>
      <div className="bar_and_frog">
        <div className="bar" />

        <img src={unauthedImage}/>
      </div>
      <div className="hype">
        <h3>* Score Reading Points</h3>
        <h3>* Ribbit Down Your Compeition</h3>
        <h3>* Buy Ribbits If You're Not Interesting</h3>
      </div>
    </div>
  );
};

export default UnauthedIndex;
