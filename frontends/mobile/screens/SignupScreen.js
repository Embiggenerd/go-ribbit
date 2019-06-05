import React, { Component } from 'React';
import { UserConsumer } from '../context';
import { SignupForm } from '../components';

export default (SignupScreen = ({ navigation }) => {
  return (
    <UserConsumer>
      {({ onError, changeUserContext }) => (
        <SignupForm
          // user={user}
          changeUserContext={changeUserContext}
          navigation={navigation}
        />
      )}
    </UserConsumer>
  );
});
