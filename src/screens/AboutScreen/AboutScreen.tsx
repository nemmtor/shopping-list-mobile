import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './AboutScreen.styles';

export const AboutScreen = (): JSX.Element => (
  <View style={styles.container}>
    <Text>Project made by Kacper Witas</Text>
  </View>
);
