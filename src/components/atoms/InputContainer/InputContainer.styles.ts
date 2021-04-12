import { StyleSheet } from 'react-native';

import { getPadding } from '../../../helpers';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    ...getPadding(10),
  },
});
