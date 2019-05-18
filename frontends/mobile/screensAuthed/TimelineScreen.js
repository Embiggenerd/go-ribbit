import React, { Component } from 'React';
import { UserConsumer } from '../context';

import { Text, Button, AsyncStorage, StyleSheet, View } from 'react-native';

export default class TimelineScreen extends Component {
  render() {
    return (
      <UserConsumer>
        {({ user, changeUserContext }) => (
          <View>
            <Text>{user.username}+"'s TIMELINE"</Text>
            <Button title="Logout" onPress={this._handleLogoutPress} />
          </View>
        )}
      </UserConsumer>
    );
  }

  _handleLogoutPress = async () => {
    await AsyncStorage.removeItem('userToken');
    changeState("authenticated", false)
    changeState("userToken", null)
  };
}

const styles = StyleSheet.create({
  logoutButton: {},
  timelineContainer: {
    alignItems: 'center'
  }
});
