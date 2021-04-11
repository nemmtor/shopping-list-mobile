import React from 'react';
import { FlatList } from 'react-native';

import { Item } from '../../molecules';
import { Props, RenderItemProps } from './ShoppingLists.types';
import { styles } from './ShoppingLists.style';

export const ShoppingLists = ({ data }: Props): JSX.Element => {
  const renderItem = ({ item }: RenderItemProps) => (
    <Item
      id={item.id}
      title={item.title}
      handleDelete={() => {
        console.log('Delete list');
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
