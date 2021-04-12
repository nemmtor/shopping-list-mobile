import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Props } from './DeleteButton.types';
import { styles } from './DeleteButton.styles';

export const DeleteButton = ({ handleClick }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
  );
};
