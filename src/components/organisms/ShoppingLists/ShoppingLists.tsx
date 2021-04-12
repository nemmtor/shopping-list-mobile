import React from 'react';
import { FlatList } from 'react-native';

import { ShoppingListRenderItem } from '../../molecules';

import { Props, RenderItemProps } from './ShoppingLists.types';
import { styles } from './ShoppingLists.style';

export const ShoppingLists = ({ data, handleDelete }: Props): JSX.Element => {
  const renderItem = ({ item }: RenderItemProps) => (
    <ShoppingListRenderItem
      id={item.id}
      title={item.title}
      handleDelete={() => {
        handleDelete(item.id);
      }}
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={(list) => list.id}
    />
  );
};
