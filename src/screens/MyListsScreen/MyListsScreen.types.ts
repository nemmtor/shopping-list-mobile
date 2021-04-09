import { StackScreenProps } from '@react-navigation/stack';

import { ScreensParams } from '../screens.params';
import { Screens } from '../screens.enum';

export type MyListsScreenProps = StackScreenProps<
  ScreensParams,
  Screens.MyLists
>;
