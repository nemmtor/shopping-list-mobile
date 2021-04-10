import React from 'react';
import { Text, View } from 'react-native';

import { Props } from './ListItem.types';
import { styles } from './ListItem.styles';

export const ListItem = ({ title }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
