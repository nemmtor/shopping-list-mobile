import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Screens } from '../appstack/screens.enum';
import { ScreensParams } from './screens.params';

export const HomeScreen = ({
  navigation,
}: StackScreenProps<ScreensParams, Screens.Home>): JSX.Element => {
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
