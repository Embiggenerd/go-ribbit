import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View, 
  Text
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  render() {
    return (
      <View>
        <Text>LOADING SCREEN</Text>
      </View>
    );
  }

  _bootstrapAsync = async () => {
    let userToken;
    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch (e) {
      console.log(e);
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if (!userToken) {
      setTimeout(() =>{return this.props.navigation.navigate('Auth'); }, 1000)

      
    }
    try {
      console.log("making fetch req")
      const response = await fetch('http://192.168.86.46:3001/users/authReq', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          cookie: userToken
        }
      });
      console.log(response)
    } catch (e) {
      console.log("netwurkError",e);
    }
  };
}
