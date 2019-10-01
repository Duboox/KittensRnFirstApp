import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../app/screens/auth/LoginScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// Home Stack
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

export default AuthStack;
