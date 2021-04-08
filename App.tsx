import 'react-native-gesture-handler';
import React from 'react';

import { AppProviders } from './src/providers';
import { Navigator } from './src/Navigator';

const App = (): JSX.Element => (
  <AppProviders>
    <Navigator />
  </AppProviders>
);

export default App;
