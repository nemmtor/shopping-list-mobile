import React from 'react';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps): JSX.Element => (
  <>{children}</>
);
