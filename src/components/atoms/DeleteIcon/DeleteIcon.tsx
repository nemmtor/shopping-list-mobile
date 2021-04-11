import React from 'react';
import { Image } from 'react-native';
import { styles } from './DeleteIcon.styles';

// TODO: Fix svg
export const DeleteIcon = (): JSX.Element => (
  <Image
    source={require('../../../assets/delete-icon.svg')}
    style={styles.icon}
  />
);
