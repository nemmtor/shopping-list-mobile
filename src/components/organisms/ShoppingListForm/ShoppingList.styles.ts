import { StyleSheet } from 'react-native';
import { getPadding } from '../../../helpers';

export const styles = StyleSheet.create({
  addProductContainer: {
    flexBasis: '25%',
  },
  deleteContainer: {
    alignItems: 'center',
    flexBasis: '25%',
  },
  error: {
    color: 'tomato',
    flexBasis: '100%',
  },
  formContainer: {
    flex: 1,
    overflow: 'scroll',
    ...getPadding(20),
  },
  formTitle: {
    fontSize: 32,
  },
  formTitleContainer: {
    marginBottom: 50,
  },
  productContainer: {
    flexBasis: '50%',
  },
  productWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  saveContainer: {
    marginTop: 40,
  },
});
