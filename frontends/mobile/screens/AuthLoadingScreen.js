import React from 'react';
import { AuthLoader } from '../components';
import { UserConsumer } from '../context';

export default (AuthLoadingScreen = ({ navigation }) => (
  <UserConsumer>
    {({ user, changeUserContext }) => (
      <AuthLoader
        // user={user}
        username={user.username}
        userToken={user.userToken}
        authenticated={user.authenticated}
        changeUserContext={changeUserContext} 
        navigate={navigation.navigate}
      />
    )}
  </UserConsumer>
));