import { StyleSheet } from 'react-native';
import { getPadding } from '../../helpers';

export const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    ...getPadding(0, 20),
  },
  prod: {
    marginBottom: 10,
  },
  prodName: {
    fontSize: 24,
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
  },
});
