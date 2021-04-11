import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'visible',
    position: 'relative',
  },
  errorWrapper: {
    position: 'absolute',
    top: '100%',
  },
  inputWrapper: {
    maxWidth: '80%',
  },
});
