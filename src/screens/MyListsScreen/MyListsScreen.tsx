import React, { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { Screens } from '../screens.enum';

import { styles } from './MyListsScreen.styles';
import { MyListsScreenProps } from './MyListsScreen.types';
import { listsMock } from './lists.mock';
import { ShoppingLists } from '../../components';

export const MyListsScreen = ({
  navigation,
}: MyListsScreenProps): JSX.Element => {
  const [lists, _setLists] = useState(listsMock);
  useBackHandler(() => {
    navigation.replace(Screens.Welcome);
    return true;
  });

  const handleClick = useCallback(() => {
    navigation.navigate(Screens.NewList);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {lists.length > 0 && <ShoppingLists data={lists} />}
      {lists.length === 0 && (
        <Text style={styles.noListsText}>
          You don&apos;t have any list yet, add one!
        </Text>
      )}
      <Button title="Add new list" onPress={handleClick} />
    </View>
  );
};
