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
import { UserConsumer } from '../context';

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
      // <UserConsumer>
      //   {(user, changeUserContext) => (
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
      //   )}
      // </UserConsumer>
    );
  }

  _handleSignupSubmitPress = async () => {
    try {
      const { changeUserContext } = this.props;
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
      navigate('Login');
      const rez = await response.json();
      await AsyncStorage.setItem('userToken', rez.token);
      const hello = await AsyncStorage.getItem('userToken');
      console.log9('getToken', hello)
      changeUserContext('userToken', rez.token);

      // console.log('hhh', hello);
      console.log('registerRespunse', response, response.data);
    } catch (e) {
      console.log('registerErrur', e, this.props); 
    }
  };
}

const styles = StyleSheet.create({
  signupForm: {
    padding: 30,
    justifyContent: 'space-around'
  }
});

// export default () => (
//   <UserConsumer>
//     {({ user, changeUserContext }) => (
//       <SignupForm user={user} changeUserContext={changeUserContext} />
//     )}
//   </UserConsumer>
// );
