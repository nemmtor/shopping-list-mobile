import 'react-native-gesture-handler';
import React from 'react';
import { AppProviders } from './providers';
import { AppStack } from './appstack';

const App = (): JSX.Element => (
  <AppProviders>
    <AppStack />
  </AppProviders>
);

export default App;
