import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { ShoppingListRenderItem } from '../../molecules';

import { Props, RenderItemProps } from './ShoppingLists.types';
import { styles } from './ShoppingLists.style';

export const ShoppingLists = ({ data }: Props): JSX.Element => {
  const [items, setItems] = useState(data);

  const deleteList = (idToDelete: string) => () => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <ShoppingListRenderItem
      id={item.id}
      title={item.title}
      handleDelete={deleteList(item.id)}
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={items}
      renderItem={renderItem}
      keyExtractor={(list) => list.id}
    />
  );
};
