import React from 'react';
import { Text, View, Button } from 'react-native';

import { Screens } from '../screens.enum';

import { HomeScreenProps } from './HomeScreen.types';

export const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  return (
    <View>
      <Text>Home screen!</Text>
      <Button
        title="Go to about page"
        onPress={() => navigation.navigate(Screens.About)}
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};
