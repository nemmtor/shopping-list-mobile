import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Screens, MyListsScreen, AboutScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

export const Tabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.MyLists}
        component={MyListsScreen}
        options={{ title: 'My lists' }}
      />
      <Tab.Screen name={Screens.About} component={AboutScreen} />
    </Tab.Navigator>
  );
};
