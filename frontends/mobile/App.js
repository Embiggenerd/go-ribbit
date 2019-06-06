import React from 'react';
import { UserProviderWrapper, ErrorProviderWrapper } from './context';
import { StyleSheet, View } from 'react-native';
import { Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { ErrorAlert } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ErrorProviderWrapper>
          <ErrorAlert />
          <UserProviderWrapper>
            <AppNavigator />
          </UserProviderWrapper>
        </ErrorProviderWrapper>
      </View>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/frog.png')]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
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
