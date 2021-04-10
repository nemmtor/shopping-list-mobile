import { StackScreenProps } from '@react-navigation/stack';

import { ScreensParams } from '../screens.params';
import { Screens } from '../screens.enum';

export type MyListsScreenProps = StackScreenProps<
  ScreensParams,
  Screens.MyLists
>;

export interface Item {
  title: string;
  id: string;
}

export interface RenderItemProps {
  item: Item;
}
