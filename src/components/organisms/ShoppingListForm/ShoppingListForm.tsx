import React, { useCallback, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import { getLast } from '../../../helpers';
import { ProductInput } from '../../molecules';
import { Props } from './ShoppingListForm.types';
import { DeleteButton } from '../../atoms';
import { InputError } from '../../atoms/InputError/InputError';
import { ListTitleInput } from '../../molecules/ListTitleInput/ListTitleInput';
import { styles } from './ShoppingList.styles';
import { useShoppingList } from '../../../helpers/useShoppingList';

const defaultProduct = { id: 1, value: '', error: '' };

const MIN_INPUT_LEN = 3;
const MAX_INPUT_LEN = 20;

const getTitleError = (title: string) => {
  if (!title) return 'You have to set the title!';

  if (title.length === 0) return 'You have to set the title!';

  if (title.length < MIN_INPUT_LEN) return 'Title is too short.';

  if (title.length > MAX_INPUT_LEN) return 'Title is too long.';

  return null;
};

export const ShoppingListForm = ({
  defaultProducts = [{ ...defaultProduct }],
  handleSuccess,
}: Props): JSX.Element => {
  const [products, setProducts] = useState(defaultProducts);
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const { saveList } = useShoppingList();

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

  const handleSetTitle = (value: string) => {
    setTitleError('');
    setTitle(value);
  };

  const getProductError = (id: number): string => {
    const product = products.find((product) => product.id === id);
    if (!product) return '';
    return product.error;
  };

  const setProductError = (id: number, error: string) => {
    setProducts((prevProducts) => {
      const productsCopy = [...prevProducts];
      const product = productsCopy.find((product) => product.id === id);

      if (!product) return prevProducts;

      product.error = error;

      return productsCopy;
    });
  };

  const validateProducts = () => {
    let formHasErrors = false;
    products.forEach((product) => {
      const inputLen = product.value.length;
      if (!inputLen) {
        setProductError(product.id, 'Enter product name.');
        formHasErrors = true;
      }

      if (inputLen < MIN_INPUT_LEN) {
        setProductError(product.id, 'Product name is too short!');
        formHasErrors = true;
      }

      if (inputLen > MAX_INPUT_LEN) {
        setProductError(product.id, 'Product name is too long!');
        formHasErrors = true;
      }
    });
    return formHasErrors;
  };

  const submitForm = async () => {
    const error = getTitleError(title);
    if (error) {
      setTitleError(error);
    }

    const productsHasErrors = validateProducts();
    if (productsHasErrors || error) return;
    try {
      await saveList(
        title,
        products.map(({ id, value }) => ({ id, value })),
      );
      handleSuccess();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formTitleContainer}>
        <Text style={styles.formTitle}>Enter list title:</Text>
        <ListTitleInput value={title} setValue={handleSetTitle} />
        <InputError text={titleError} />
      </View>
      <ScrollView>
        {products.map((product, index) => {
          const error = getProductError(product.id);

          return (
            <View style={styles.productWrapper} key={product.id}>
              <View style={styles.productContainer}>
                <ProductInput
                  value={product.value}
                  setValue={setProductValue(product.id)}
                />
              </View>
              <View style={styles.deleteContainer}>
                {products.length > 1 && (
                  <DeleteButton handleClick={deleteProduct(product.id)} />
                )}
              </View>
              {index === products.length - 1 && (
                <View style={styles.addProductContainer}>
                  <Button title="+1" onPress={addProduct} />
                </View>
              )}
              {!!error && (
                <View style={styles.error}>
                  <InputError text={error} />
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.saveContainer}>
        <Button title="Save list" onPress={submitForm} />
      </View>
    </View>
  );
};
