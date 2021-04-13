import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ItemContainer, ItemTitle, DeleteButton } from '../../atoms';

import { Props } from './ShoppingListRenderItem.types';
import { styles } from './ShoppingListRenderItem.styles';

export const ShoppingListRenderItem = ({
  title,
  handleDelete,
  handleClick,
  id,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleClick(id, title);
      }}
    >
      <View style={styles.wrapper}>
        <ItemContainer>
          <ItemTitle title={title} />
          <TouchableOpacity onPress={handleDelete}>
            <DeleteButton handleClick={handleDelete} />
          </TouchableOpacity>
        </ItemContainer>
      </View>
    </TouchableOpacity>
  );
};
