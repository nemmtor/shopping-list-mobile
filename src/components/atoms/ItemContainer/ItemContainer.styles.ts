import { StyleSheet } from 'react-native';

import { getPadding } from '../../../helpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderStyle: 'solid',
    elevation: 1,
    ...getPadding(10, 20),
  },
});
