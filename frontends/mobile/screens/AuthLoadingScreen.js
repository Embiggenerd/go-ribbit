import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    console.log("cccc", this.username, this.props)
  }

  state = {
    timeToFetch: 0,
    usetToken: null
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

  _bootstrapAsync = async () => {
    const start = Date.now();
    // let userToken;
    try {
      this.setState({ userToken: await AsyncStorage.getItem('userToken') });
    } catch (e) {
      console.log(e);
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted
    try {
      console.log('making fetch req2');
      const response = await fetch('http://72.69.126.108:3001/users/authReq', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          cookie: this.state.userToken
        }
      });
      console.log(response);
    } catch (e) {
      console.log('netwurkError', e);
    } finally {
      this.setState({ timeToFetch: Date.now() - start });
      this._loadHome();
    }
  };

  _loadHome = async () => {
    // Wait 9/10 seconds minus time to make fetch request before loading home screen
    setTimeout(() => {
      return this.props.navigation.navigate(
        this.state.userToken ? 'App' : 'Auth'
      );
    }, 9000 - this.state.timeToFetch);
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
