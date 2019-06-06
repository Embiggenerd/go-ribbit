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
    this._handleSignupSubmitPress =this._handleSignupSubmitPress.bind(this)
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
      const { changeUserContext, handleError } = this.props;

      // Send data in this.state to backend
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
      
      // Clean up state
      this.setState({
        password: '',
        username: ''
      });
      
      const { navigate } = this.props.navigation;
      
      const rez = await response.json();
      if (!response.ok) {
        handleError(rez.error, rez.message, rez.code)
        return
      }
      navigate('Login');

      await AsyncStorage.setItem('userToken', rez.token);

      changeUserContext('userToken', rez.token);
    } catch (e) {
    }
  };
}

const styles = StyleSheet.create({
  signupForm: {
    padding: 30,
    justifyContent: 'space-around'
  }
});