import React from 'react';
import { UserProvider, ErrorProviderWrapper } from './context';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { ErrorAlert } from './components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeUserContext = this.changeUserContext.bind(this);
  }

  state = {
    username: '',
    userToken: null,
    authenticated: false
  };

  render() {
    console.log('appState.user onrender', this.state.user);
    return (
      <View style={styles.container}>
        <ErrorProviderWrapper>
          <ErrorAlert />
          <UserProvider
            value={{
              user: this.state,
              changeUserContext: this.changeUserContext
            }}
          >
            <AppNavigator />
          </UserProvider>
        </ErrorProviderWrapper>
      </View>
    );
  }

  changeUserContext(field, value) {
    this.setState(
      {
        [field]: value
      },
      () => {
        console.log('newSate', this.state);
      }
    );
  }

  // onError({ item, index }) {
  //   switch (item.type) {
  //     case 'close':
  //       this.forceClose();
  //       break;
  //     default:
  //       const random = Math.floor(Math.random() * 1000 + 1);
  //       const title = item.type + ' #' + random;
  //       this.dropdown.alertWithType(item.type, title, item.message);
  //   }
  // }

  onError(error) {
    if (error) {
      this.alertWithType(
        'error',
        this.state.code,
        this.state.error,
        this.state.message,
        2000
      );
    }

    // switch (item.type) {
    //   case 'close':
    //     this.forceClose();
    //     break;
    //   default:
    //     const random = Math.floor(Math.random() * 1000 + 1);
    //     const title = item.type + ' #' + random;
    //     this.dropdown.alertWithType(item.type, title, item.message);
    // }
  }

  forceClose() {
    this.dropdown.close();
  }

  onClose(data) {
    console.log(data);
  }

  onCancel(data) {
    console.log(data);
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/frog.png')]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
