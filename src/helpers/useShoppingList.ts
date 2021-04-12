import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface ShoppingList {
  id: string;
  title: string;
}

export type Lists = ShoppingList[];

interface UseShoppingListReturnValue {
  saveList: (title: string, products: any) => Promise<void>;
  getLists: () => Promise<Lists>;
  deleteList: (listId: string) => Promise<void>;
}

export const useShoppingList = (): UseShoppingListReturnValue => {
  const getLists = async () => {
    const listsString = await AsyncStorage.getItem('lists');
    const lists: Lists = JSON.parse(listsString || '[]');

    return lists;
  };

  const setLists = async (lists: ShoppingList[]) => {
    await AsyncStorage.setItem('lists', JSON.stringify(lists));
  };

  const addList = async (listId: string, listData: any) => {
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

  return { saveList, getLists, deleteList };
};
