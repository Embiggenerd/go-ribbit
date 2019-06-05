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
// import { UserConsumer } from '../context';

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
      // <UserConsumer>
      //   {(user, changeUserContext) => (
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
      //   )}
      // </UserConsumer>
    );
  }

  _handleLoginSubmitPress = async () => {
    try {
      const { changeUserContext, navigate } = this.props;
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
      // const { navigate } = this.props.navigation;
      const rez = await response.json();
      await AsyncStorage.setItem('userToken', rez.token);
      const hello = await AsyncStorage.getItem('userToken');
      console.log('getToken', hello)
      changeUserContext('userToken', rez.token);
      changeUserContext('authenticated', true);
      changeUserContext('username',this.state.username )
      // Clean up state
      this.setState({
        password: '',
        username: ''
      });
      navigate('Timeline');

      // console.log('hhh', hello);
      console.log('loginRespunse', response, response.data); 
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