import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//AuthLoading
import AuthLoadingScreen from '../app/screens/auth/Loading';

import MainTabNavigator from './MainTabNavigator';
import MainAuthNavigator from './MainAuthNavigator';

// const AppStack = createStackNavigator({ Main: MainTabNavigator, Other: OtherScreen });
const AppStack = MainTabNavigator;
const AuthStack = MainAuthNavigator;

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
