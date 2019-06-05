import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {HomeScreen, LoginScreen, SignupScreen} from "../screens"
// import LoginScreen from "../screens/LoginScreen"
// import SignupScreen from "../screens/SignupScreen"

export default createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Signup: SignupScreen
},
{
  initialRouteName: "Home"
})
