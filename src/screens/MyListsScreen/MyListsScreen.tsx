import React, { useCallback } from 'react';
import { Button, View } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { Screens } from '../screens.enum';

import { styles } from './MyListsScreen.styles';
import { MyListsScreenProps } from './MyListsScreen.types';
import { listsMock } from './lists.mock';
import { ShoppingLists } from '../../components';

export const MyListsScreen = ({
  navigation,
}: MyListsScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Welcome);
    return true;
  });

  const handleClick = useCallback(() => {
    navigation.navigate(Screens.NewList);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ShoppingLists data={listsMock} />
      <Button title="Add new list" onPress={handleClick} />
    </View>
  );
};
