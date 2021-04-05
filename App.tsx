import 'react-native-gesture-handler';
import React from 'react';

import { AppProviders } from './src/providers';
import { Navigator } from './src/navigator';

const App = (): JSX.Element => (
  <AppProviders>
    <Navigator />
  </AppProviders>
);

export default App;
