import React, { Component } from 'React';
import { Text } from 'react-native';
import { UserConsumer, ErrorConsumer } from '../context';
import { LoginForm } from '../components';
export default (LoginScreen = ({ navigation }) => (
  <ErrorConsumer>
    {({ handleError }) => (
      <UserConsumer>
        {({ changeUserContext }) => (
          <LoginForm
            changeUserContext={changeUserContext}
            navigate={navigation.navigate}
            handleError={handleError}
          />
        )}
      </UserConsumer>
    )}
  </ErrorConsumer>
));
