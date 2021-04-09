import React from 'react';
import { View, Text } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { styles } from './MyListsScreen.styles';
import { MyListsScreenProps } from './MyListsScreen.types';
import { Screens } from '../screens.enum';

export const MyListsScreen = ({
  navigation,
}: MyListsScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Welcome);
    return true;
  });

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};
