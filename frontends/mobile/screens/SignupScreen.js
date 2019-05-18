import React, { Component } from 'React';
import { UserConsumer } from '../context';
import { SignupFrom } from '../components';


export default (SignupScreen = () => (
  <UserConsumer>
    {({ user, changeUserContext }) => (
      <SignupFrom user={user} changeUserContext={changeUserContext} />
    )}
  </UserConsumer>
));
