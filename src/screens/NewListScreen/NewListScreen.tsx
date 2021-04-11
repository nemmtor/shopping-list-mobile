import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import { NewListScreenProps } from './NewListScreen.types';
import { useBackHandler } from '@react-native-community/hooks';
import { Screens } from '../screens.enum';
import { ProductInput } from '../../components/molecules';
import { styles } from './NewListScreen.styles';

export const NewListScreen = ({
  navigation,
}: NewListScreenProps): JSX.Element => {
  const [products, setProducts] = useState([
    { id: 0, text: '' },
    { id: 1, text: '' },
  ]);

  useBackHandler(() => {
    navigation.replace(Screens.Main);
    return true;
  });

  const deleteProduct = useCallback(
    (id: number) => () => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id),
      );
    },
    [],
  );

  return (
    <View>
      {products.map((product) => (
        <View style={styles.productWrapper} key={product.id}>
          <ProductInput
            handleDelete={deleteProduct(product.id)}
            error={'Field cannot be empty!'}
          />
        </View>
      ))}
    </View>
  );
};
