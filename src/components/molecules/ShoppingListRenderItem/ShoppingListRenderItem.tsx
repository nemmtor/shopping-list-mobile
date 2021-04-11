import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ItemContainer, ItemTitle, DeleteButton } from '../../atoms';

import { Props } from './ShoppingListRenderItem.types';
import { styles } from './ShoppingListRenderItem.styles';

export const ShoppingListRenderItem = ({
  title,
  handleDelete,
}: Props): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <ItemContainer>
        <ItemTitle title={title} />
        <TouchableOpacity onPress={handleDelete}>
          <DeleteButton handleClick={handleDelete} />
        </TouchableOpacity>
      </ItemContainer>
    </View>
  );
};
