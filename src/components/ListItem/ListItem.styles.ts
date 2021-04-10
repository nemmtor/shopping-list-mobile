import { StyleSheet } from 'react-native';

import { getPadding } from '../../helpers';

export const styles = StyleSheet.create({
  container: {
    elevation: 2,
    ...getPadding(10, 20),
  },
  title: {
    fontSize: 24,
  },
});
