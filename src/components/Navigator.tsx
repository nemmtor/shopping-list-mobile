import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, AboutScreen, Screens } from '../screens';

const Stack = createStackNavigator();

export const Navigator = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{ title: 'Welcome!' }}
      />
      <Stack.Screen name={Screens.About} component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
