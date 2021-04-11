import { StyleSheet } from 'react-native';

import { getPadding } from '../../../helpers';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderStyle: 'solid',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...getPadding(10, 20),
  },
});
