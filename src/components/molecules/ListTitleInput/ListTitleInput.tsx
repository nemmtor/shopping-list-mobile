import React from 'react';
import { InputContainer } from '../../atoms';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import { Props } from './ListTitleInput.types';

export const ListTitleInput = ({ value, setValue }: Props): JSX.Element => {
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };

  return (
    <InputContainer>
      {/*TODO : style width 100%*/}
      <TextInput
        placeholder="Enter title..."
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};
