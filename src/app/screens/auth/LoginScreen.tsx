import React from 'react';
import { View, ViewProps, StyleSheet, Button, AsyncStorage } from 'react-native';
import { ThemedComponentProps, ThemeType, withStyles, Text } from 'react-native-ui-kitten';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;