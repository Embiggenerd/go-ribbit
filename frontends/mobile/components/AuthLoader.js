import React from 'react';
import { AsyncStorage, StyleSheet, View, Image } from 'react-native';

export default class AuthLoader extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  state = {
    timeToFetch: 0
  };

  render() {
    return (
      <View style={styles.waitContainer}>
        <Image
          source={require('../assets/images/frog.png')}
          style={styles.waitImage}
        />
      </View>
    );
  }
  // Check if there is a token in localstorage. If not, load auth stack,
  // if yes validate token. If valid, load user details, render timeline.
  // If not valid, load authstack.
  _bootstrapAsync = async () => {
    const { changeUserContext, username, userToken, authenticated } = this.props;
    console.log(this.props)
    const start = Date.now();

    const token = await AsyncStorage.getItem('userToken');

    console.log('tokenfromstorage', token);

    if (!token) {
      this._loadHome();
      return;
    }
    // console.log('tokenfromstorage', token);
    // console.log('tokenfromstorageuser.user', user.userToken);

    // changeUserContext('userToken', token);
    // console.log('tokenfromstorage2', token);

    // changeUserContext('username', 'lala');
    // console.log('lala', user.username);
    // console.log('AFTER tokenfromstorageuser.user', user.userToken);

    const response = await fetch('http://192.168.86.46:3001/users/authReq', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authentication: token
      }
    });
    const resJSON = await response.json();
    if (response.ok) {
      changeUserContext('authenticated', true);
      changeUserContext('username', resJSON.username);
      changeUserContext('userToken', token);
      console.log('lolo', this.props);

    }

    this.setState({ timeToFetch: Date.now() - start });

    this._loadHome();
  };

  _loadHome = async () => {
    // Wait 1 second no matter how long
    setTimeout(() => {
      return this.props.navigate(
        this.props.authenticated ? 'App' : 'Auth'
      );
    }, 1000 - this.state.timeToFetch);
  };
}

styles = StyleSheet.create({
  waitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  waitImage: {
    width: 700,
    height: 55,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  }
});
