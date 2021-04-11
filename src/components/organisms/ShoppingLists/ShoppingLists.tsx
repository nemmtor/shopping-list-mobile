import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Item } from '../../molecules';

import { Props, RenderItemProps } from './ShoppingLists.types';
import { styles } from './ShoppingLists.style';

export const ShoppingLists = ({ data }: Props): JSX.Element => {
  const [items, setItems] = useState(data);

  const deleteItem = (idToDelete: string) => () => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <Item id={item.id} title={item.title} handleDelete={deleteItem(item.id)} />
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
