// The actual application that displays a timeline, links to user data, etc
// once authorized
import React from 'react';
import { logoutUser } from './actions'
import { connect } from 'react-redux'

const AuthedIndex = ({ logoutUser }) => {
  return (
    <div>
      <h1>TIMELINE</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthedIndex);
