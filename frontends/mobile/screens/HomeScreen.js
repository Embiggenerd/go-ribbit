import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        > */}
          {/* <View styles={styles.contentContainer}>  */}
            <View style={styles.welcomeContainer}>
              <Image
                source={require('../assets/images/frog.png')}
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>
                Let people hear your song!
              </Text>

              {/* <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
              <MonoText style={styles.codeHighlightText}>
                screens/HomeScreen.js
              </MonoText>
            </View> */}
              <Button
                onPress={this._handleNavToSignupPress}
                style={styles.createButton}
                title="CREATE AN ACCOUNT"
              >
                Create An Account
              </Button>
              <Text style={styles.developmentModeText}>
                Already have an account? 
                <Text
                  onPress={this._handleNavToLoginPress}
                  style={styles.signupLinkText}
                >
                    &nbsp; Log in.
                </Text>
              </Text>
            </View>

            {/* <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={this._handleHelpPress}
              style={styles.helpLink}
            >
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* </View> */}
        {/* </ScrollView> */}

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          {/* <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View> *
        </View> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleNavToLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  };

  _handleNavToSignupPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Signup');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
    
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  welcomeImage: {
    width: 700,
    height: 55,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  signupLinkText: {
    color: 'blue'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});
