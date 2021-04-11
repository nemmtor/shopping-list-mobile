import React from 'react';
import { View } from 'react-native';

import { Props } from './InputContainer.types';
import { styles } from './InputContainer.styles';

export const InputContainer = ({ children }: Props): JSX.Element => (
  <View style={styles.container}>{children}</View>
);
