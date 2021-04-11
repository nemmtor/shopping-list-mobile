import React from 'react';
import { View } from 'react-native';

import { Props } from './ItemContainer.types';
import { styles } from './ItemContainer.styles';

export const ItemContainer = ({ children }: Props): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};
