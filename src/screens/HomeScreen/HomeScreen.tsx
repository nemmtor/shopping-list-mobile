import React from 'react';
import { Text, Button } from 'react-native';

import { SafeView } from '../../components';
import { Screens } from '../screens.enum';

import { HomeScreenProps } from './HomeScreen.types';

export const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  return (
    <SafeView>
      <Text>Home screen!</Text>
      <Button
        title="Go to about page"
        onPress={() => navigation.navigate(Screens.About)}
      />
    </SafeView>
  );
};
