import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import MainTabNavigator from './MainTabNavigator';
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import AuthLoadingScreen from "../screens/AuthLoadingScreen"

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  App: AppStack, 
  Auth: AuthStack
}, 
{
  initialRouteName: 'AuthLoading',
}));