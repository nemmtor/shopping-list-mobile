import React from 'react';
import { ItemContainer } from '../../atoms/ItemContainer/ItemContainer';
import { ItemTitle } from '../../atoms/ItemTitle/ItemTitle';
import { Props } from './Item.types';
import { TouchableOpacity } from 'react-native';
import { DeleteIcon } from '../../atoms/DeleteIcon/DeleteIcon';

export const Item = ({ title, handleDelete }: Props): JSX.Element => {
  return (
    <ItemContainer>
      <ItemTitle title={title} />
      <TouchableOpacity onPress={handleDelete}>
        <DeleteIcon />
      </TouchableOpacity>
    </ItemContainer>
  );
};
