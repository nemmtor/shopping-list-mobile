import React from 'react';
import { View, Text } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { styles } from './AboutScreen.styles';
import { AboutScreenProps } from './AboutScreen.types';
import { Screens } from '../screens.enum';

export const AboutScreen = ({ navigation }: AboutScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Welcome);
    return true;
  });

  return (
    <View style={styles.container}>
      <Text>Project made by Kacper Witas</Text>
    </View>
  );
};
