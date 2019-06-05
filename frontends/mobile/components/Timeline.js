import React, { Component } from 'react';
import { Text, Button, AsyncStorage, StyleSheet, View } from 'react-native';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{`${this.props.username}'s TIMELINE`}</Text>
        <Button title="Logout" onPress={this._handleLogoutPress} />
      </View>
    );
  }
 
  _handleLogoutPress = async () => {
    await AsyncStorage.removeItem('userToken');
    this.props.changeUserContext('authenticated', false);
    this.props.changeUserContext('userToken', null);
    this.props.navigate('Home');
  };
}

const styles = StyleSheet.create({
  logoutButton: {},
  timelineContainer: {
    alignItems: 'center'
  }
});
