import React, { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';

import { Screens } from '../screens.enum';

import { styles } from './MyListsScreen.styles';
import { MyListsScreenProps } from './MyListsScreen.types';
import { ShoppingLists } from '../../components';
import { Lists, useShoppingList } from '../../helpers/useShoppingList';
import { useFocusEffect } from '@react-navigation/native';

export const MyListsScreen = ({
  navigation,
}: MyListsScreenProps): JSX.Element => {
  const [items, setItems] = useState<Lists>([]);
  const { getLists } = useShoppingList();

  const { deleteList } = useShoppingList();

  const handleDelete = async (idToDelete: string) => {
    await deleteList(idToDelete);
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  };

  useFocusEffect(() => {
    (async () => {
      const lists = await getLists();
      setItems(lists);
    })();
  });

  const handleClick = useCallback(() => {
    navigation.navigate(Screens.NewList);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {items.length > 0 && (
        <ShoppingLists data={items} handleDelete={handleDelete} />
      )}
      {items.length === 0 && (
        <Text style={styles.noListsText}>
          You don&apos;t have any list yet, add one!
        </Text>
      )}
      <Button title="Add new list" onPress={handleClick} />
    </View>
  );
};
