import React from 'react';
import { Text } from 'react-native';

import { Props } from './ItemTitle.types';
import { styles } from './ItemTitle.styles';

export const ItemTitle = ({ title }: Props): JSX.Element => (
  <Text style={styles.title}>{title}</Text>
);
