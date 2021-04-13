import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export interface ListProduct {
  id: number;
  value: string;
}

export interface ShoppingList {
  id: string;
  title: string;
}

export type Lists = ShoppingList[];

interface UseShoppingListReturnValue {
  saveList: (title: string, products: any) => Promise<void>;
  getLists: () => Promise<Lists>;
  deleteList: (listId: string) => Promise<void>;
  getListById: (id: string) => Promise<ListProduct[]>;
}

export const useShoppingList = (): UseShoppingListReturnValue => {
  const getLists = async () => {
    const listsString = await AsyncStorage.getItem('lists');
    const lists: Lists = JSON.parse(listsString || '[]');

    return lists;
  };

  const getListById = async (id: string) => {
    const listString = await AsyncStorage.getItem(id);
    if (!listString) return;

    const list = JSON.parse(listString);
    return list;
  };

  const setLists = async (lists: ShoppingList[]) => {
    await AsyncStorage.setItem('lists', JSON.stringify(lists));
  };

  const addList = async (listId: string, listData: any) => {
    console.log('listData: ', listData);
    await AsyncStorage.setItem(listId, JSON.stringify(listData));
  };

  const deleteList = async (listId: string) => {
    const lists = await getLists();
    const newLists = lists.filter((list) => list.id !== listId);
    await setLists(newLists);
  };

  const saveList = async (title: string, products: any) => {
    const listId = uuidv4();
    await addList(listId, products);

    const lists = await getLists();
    lists.push({ id: listId, title });
    await setLists(lists);
  };

  return { saveList, getLists, deleteList, getListById };
};
