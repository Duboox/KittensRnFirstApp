import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { ThemedComponentProps, ThemeType, withStyles, Text } from 'react-native-ui-kitten';

export default function LoginScreen() {
  
  return (
    <View>
      <Text>Login!</Text>
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
