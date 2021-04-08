import { StackScreenProps } from '@react-navigation/stack';

import { ScreensParams } from '../screens.params';
import { Screens } from '../screens.enum';

export type WelcomeScreenProps = StackScreenProps<
  ScreensParams,
  Screens.Welcome
>;
