import React from 'react';
import { TextInput, View } from 'react-native';

import { InputContainer } from '../../atoms/InputContainer';
import { DeleteButton } from '../../atoms';
import { styles } from './ProductInput.styles';
import { Props } from './ProductInput.types';
import { InputError } from '../../atoms/InputError/InputError';

export const ProductInput = ({ handleDelete, error }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <InputContainer>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Enter product name..." />
        </View>

        <DeleteButton handleClick={handleDelete} />
      </InputContainer>

      {!!error && (
        <View style={styles.errorWrapper}>
          <InputError text={error} />
        </View>
      )}
    </View>
  );
};
