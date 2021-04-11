import React from 'react';
import { View } from 'react-native';

import { NewListScreenProps } from './NewListScreen.types';
import { useBackHandler } from '@react-native-community/hooks';
import { Screens } from '../screens.enum';
import { ProductInput } from '../../components/molecules';
import { styles } from './NewListScreen.styles';

export const NewListScreen = ({
  navigation,
}: NewListScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Main);
    return true;
  });
  return (
    <View>
      <View style={styles.productWrapper}>
        <ProductInput
          handleDelete={() => {
            console.log('hi');
          }}
          error={'Field cannot be empty!'}
        />
      </View>
      <View style={styles.productWrapper}>
        <ProductInput
          handleDelete={() => {
            console.log('hi');
          }}
          error={'Field cannot be empty!'}
        />
      </View>
    </View>
  );
};
