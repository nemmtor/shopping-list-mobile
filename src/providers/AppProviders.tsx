import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps): JSX.Element => (
  <NavigationContainer>{children}</NavigationContainer>
);
