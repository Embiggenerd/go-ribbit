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

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: ''
    };
    this._handleLoginSubmitPress =this._handleLoginSubmitPress.bind(this)
  }
  render() {
    return (
      <View style={styles.loginForm}>
        <TextInput
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title="Log In" onPress={this._handleLoginSubmitPress} />
      </View>
    );
  }

  _handleLoginSubmitPress = async () => {
    try {
      const { changeUserContext, navigate, handleError } = this.props;
      // Send data in this.state to backend
      const response = await fetch('http://192.168.86.46:3001/users/login', {
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
      const rez = await response.json();

      if(!response.ok){
        handleError(rez.error, rez.message, rez.code)
        return
      }
      await AsyncStorage.setItem('userToken', rez.token);

      const hello = await AsyncStorage.getItem('userToken');

      changeUserContext('userToken', rez.token);
      changeUserContext('authenticated', true);
      changeUserContext('username',this.state.username )
      
      // Clean up state
      this.setState({
        password: '',
        username: ''
      });
      navigate('Timeline');

    } catch (e) {
      console.log('loginErrur', e); 
    }
  };
}

const styles = StyleSheet.create({
  loginForm: {
    padding: 30,
    justifyContent: 'space-around'
  }
});