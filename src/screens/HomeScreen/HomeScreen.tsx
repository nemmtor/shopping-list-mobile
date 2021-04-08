import React from 'react';
import { Text } from 'react-native';

import { SafeView } from '../../components';

export const HomeScreen = (): JSX.Element => {
  return (
    <SafeView>
      <Text>Your shopping lists:</Text>
    </SafeView>
  );
};
