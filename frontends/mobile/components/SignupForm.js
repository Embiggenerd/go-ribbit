import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: ''
    };
  }
  render() {
    return (
      <View style={styles.signupForm}>
        <TextInput
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title="Sign Up" onPress={this._handleSignupSubmitPress} />
      </View>
    );
  }

  _handleSignupSubmitPress = async () => {
    try {
      const response = await fetch('http://192.168.86.46:3001/users/register', {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      this.setState({
        password: '',
        username: ''
      });
      const { navigate } = this.props.navigation;
      navigate('Login');
      const rez = await response.json();
      await AsyncStorage.setItem('userToken', rez.token);
      // const hello = await AsyncStorage.getItem('userToken');
      changeUserContext('userToken', rez.token);

      // console.log('hhh', hello);
      // console.log('registerRespunse', response, response.data;
    } catch (e) {
      console.log('registerErrur', e);
    }
  };
}

const styles = StyleSheet.create({
  signupForm: {
    padding: 30,
    justifyContent: 'space-around'
  }
});
