import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { Screens } from '../screens.enum';

import { ListDetailsScreenProps } from './ListDetailsScreen.types';
import { ListProduct, useShoppingList } from '../../helpers';
import { ItemContainer } from '../../components/atoms';
import { styles } from './ListDetails.styles';

export const ListDetailsScreen = ({
  navigation,
  route,
}: ListDetailsScreenProps): JSX.Element => {
  const [list, setList] = useState<ListProduct[]>([]);

  const { listId, listTitle } = route.params;

  const { getListById } = useShoppingList();

  useEffect(() => {
    (async () => {
      const fetchedList = await getListById(listId);
      if (!fetchedList) {
        navigation.replace(Screens.Main);
        return;
      }

      setList(fetchedList);
    })();
  }, [route.params.listId]);

  useBackHandler(() => {
    navigation.replace(Screens.Main);
    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping list: {listTitle}</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.prod}>
            <ItemContainer>
              <Text style={styles.prodName}>{item.value}</Text>
            </ItemContainer>
          </View>
        )}
        keyExtractor={(item) => '' + item.id}
      />
    </View>
  );
};
