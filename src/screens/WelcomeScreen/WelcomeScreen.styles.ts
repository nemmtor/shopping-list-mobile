import { StyleSheet } from 'react-native';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    color: colors.textLight,
    fontSize: 48,
    textAlign: 'center',
  },
  touchableArea: {
    flex: 1,
  },
});
