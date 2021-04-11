import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './SafeView.styles';
import { Props } from './SafeView.types';

export const SafeView = ({ children }: Props): JSX.Element => (
  <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
);
