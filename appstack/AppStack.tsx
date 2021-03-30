import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, AboutScreen } from '../screens';
import { Screens } from './screens.enum';

const Stack = createStackNavigator();

const { Screen, Navigator } = Stack;

export const AppStack = (): JSX.Element => (
  <Navigator>
    <Screen
      name={Screens.Home}
      component={HomeScreen}
      options={{ title: 'Welcome!' }}
    />
    <Screen name={Screens.About} component={AboutScreen} />
  </Navigator>
);
