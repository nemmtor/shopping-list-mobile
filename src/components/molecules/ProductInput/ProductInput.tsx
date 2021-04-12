import React from 'react';
import {
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import { InputContainer } from '../../atoms/InputContainer';
import { DeleteButton } from '../../atoms';
import { styles } from './ProductInput.styles';
import { Props } from './ProductInput.types';
import { InputError } from '../../atoms/InputError/InputError';

export const ProductInput = ({
  handleDelete,
  error,
  value,
  setValue,
  displayDelete,
}: Props): JSX.Element => {
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };

  return (
    <>
      <InputContainer>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter product name..."
            value={value}
            onChange={handleChange}
          />
        </View>

        {displayDelete && <DeleteButton handleClick={handleDelete} />}
      </InputContainer>

      {!!error && (
        <View style={styles.errorWrapper}>
          <InputError text={error} />
        </View>
      )}
    </>
  );
};
