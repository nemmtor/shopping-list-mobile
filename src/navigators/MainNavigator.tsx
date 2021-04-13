import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  WelcomeScreen,
  Screens,
  NewListScreen,
  ListDetailsScreen,
} from '../screens';

import { Tabs } from './Tabs';
import { SafeView } from '../components';

const Stack = createStackNavigator();

export const MainNavigator = (): JSX.Element => (
  <NavigationContainer>
    <SafeView>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={Screens.Welcome} component={WelcomeScreen} />
        <Stack.Screen name={Screens.Main} component={Tabs} />
        <Stack.Screen name={Screens.NewList} component={NewListScreen} />
        <Stack.Screen
          name={Screens.ListDetails}
          component={ListDetailsScreen}
        />
      </Stack.Navigator>
    </SafeView>
  </NavigationContainer>
);
