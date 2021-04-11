import React from 'react';
import { Text } from 'react-native';

import { Props } from './InputError.types';
import { styles } from './InputError.styles';

export const InputError = ({ text }: Props): JSX.Element => (
  <Text style={styles.text}>{text}</Text>
);
