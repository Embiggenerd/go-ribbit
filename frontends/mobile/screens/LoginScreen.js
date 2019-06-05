import React, { Component } from 'React';
import { Text } from 'react-native';
import { UserConsumer } from '../context';
import { LoginForm } from '../components';
export default (LoginScreen = ({ navigation }) => (
  <UserConsumer>
    {({ user, changeUserContext }) => (
      <LoginForm
        user={user}
        changeUserContext={changeUserContext}
        navigate={navigation.navigate}
      />
    )}
  </UserConsumer>
));
