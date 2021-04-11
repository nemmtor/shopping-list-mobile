import React from 'react';
import { Text, View } from 'react-native';

import { NewListScreenProps } from './NewListScreen.types';
import { useBackHandler } from '@react-native-community/hooks';
import { Screens } from '../screens.enum';

export const NewListScreen = ({
  navigation,
}: NewListScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Main);
    return true;
  });
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
