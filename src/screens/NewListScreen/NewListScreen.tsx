import React, { useCallback, useState } from 'react';
import { Button, View } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

import { NewListScreenProps } from './NewListScreen.types';
import { Screens } from '../screens.enum';
import { ProductInput } from '../../components/molecules';
import { styles } from './NewListScreen.styles';
import { getLast } from '../../helpers';

export const NewListScreen = ({
  navigation,
}: NewListScreenProps): JSX.Element => {
  const [products, setProducts] = useState([
    { id: 0, value: '', error: '' },
    { id: 1, value: '', error: '' },
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

  const addProduct = () => {
    setProducts((prevProducts) => {
      const lastId = getLast(prevProducts).id;
      return [...prevProducts, { id: lastId + 1, value: '', error: '' }];
    });
  };

  const setProductValue = (id: number) => (value: string) => {
    setProducts((prevProducts) => {
      const productsCopy = [...prevProducts];
      const product = productsCopy.find((product) => product.id === id);

      if (!product) return prevProducts;

      product.value = value;
      product.error = '';

      return productsCopy;
    });
  };

  return (
    <View>
      {products.map((product, index) => (
        <View style={styles.productWrapper} key={product.id}>
          <ProductInput
            displayDelete={products.length > 1}
            handleDelete={deleteProduct(product.id)}
            error={product.error}
            value={product.value}
            setValue={setProductValue(product.id)}
          />
          {index === products.length - 1 && (
            <Button title="+ product" onPress={addProduct} />
          )}
        </View>
      ))}
    </View>
  );
};
