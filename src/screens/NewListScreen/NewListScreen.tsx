import React from 'react';
import { useBackHandler } from '@react-native-community/hooks';

import { NewListScreenProps } from './NewListScreen.types';
import { Screens } from '../screens.enum';
import { ShoppingListForm } from '../../components';

export const NewListScreen = ({
  navigation,
}: NewListScreenProps): JSX.Element => {
  useBackHandler(() => {
    navigation.replace(Screens.Main);
    return true;
  });

  const handleSuccess = () => {
    navigation.replace(Screens.Main);
  };

  return <ShoppingListForm handleSuccess={handleSuccess} />;
};
