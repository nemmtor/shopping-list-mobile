import { StackScreenProps } from '@react-navigation/stack';

import { ScreensParams } from '../screens.params';
import { Screens } from '../screens.enum';

export type NewListScreenProps = StackScreenProps<
  ScreensParams,
  Screens.Welcome
>;
