import React from 'react';
import { FlatList, View } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { ListItem } from '../../components';
import { Screens } from '../screens.enum';

import { styles } from './MyListsScreen.styles';
import { MyListsScreenProps, RenderItemProps } from './MyListsScreen.types';
import { listsMock } from './lists.mock';

const renderItem = ({ item }: RenderItemProps) => (
  <ListItem title={item.title} id={item.id} />
);

export const MyListsScreen = ({
  navigation,
}: MyListsScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Welcome);
    return true;
  });

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={listsMock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
