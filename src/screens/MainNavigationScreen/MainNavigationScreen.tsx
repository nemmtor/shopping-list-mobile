import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SafeView } from '../../components';
import { Screens } from '../screens.enum';
import { MyListsScreen } from '../MyListsScreen/MyListsScreen';
import { AboutScreen } from '../AboutScreen/AboutScreen';

const Tab = createMaterialTopTabNavigator();

export const MainNavigationScreen = (): JSX.Element => {
  return (
    <SafeView>
      <Tab.Navigator>
        <Tab.Screen
          name={Screens.MyLists}
          component={MyListsScreen}
          options={{ title: 'My lists' }}
        />
        <Tab.Screen name={Screens.About} component={AboutScreen} />
      </Tab.Navigator>
    </SafeView>
  );
};
