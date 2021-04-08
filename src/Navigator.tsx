import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { WelcomeScreen, HomeScreen, Screens } from './screens';

const Stack = createStackNavigator();

export const Navigator = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
