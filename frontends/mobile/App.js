import React from 'react';
import { UserProvider } from './context';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Alert from 'react-native-dropdownalert';
import DropdownAlert from 'react-native-dropdownalert';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeUserContext = this.changeUserContext.bind(this);
  }

  state = {
    error: '',
    message: '',
    code: null,
    username: '',
    userToken: null,
    authenticated: false
  };

  render() {
    console.log('appState.user onrender', this.state.user);
    return (
      <View style={styles.container}>
        <UserProvider
          value={{
            user: this.state,
            changeUserContext: this.changeUserContext,
            onError: ({item, index}) => this.onSelect({item, index})
          }}
        >
          <DropdownAlert
            ref={ref => (this.dropdown = ref)}
            showCancel={true}
            onClose={data => this.onClose(data)}
            onCancel={data => this.onCancel(data)}
          />
          <AppNavigator />
        </UserProvider>
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

  onSelect({ item, index }) {
    switch (item.type) {
      case 'close':
        this.forceClose();
        break;
      default:
        const random = Math.floor(Math.random() * 1000 + 1);
        const title = item.type + ' #' + random;
        this.dropdown.alertWithType(item.type, title, item.message);
    }
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
