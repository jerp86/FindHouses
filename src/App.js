import React from 'react';
import { ThemeProvider } from 'styled-components';

import { HomeScreen } from './screens';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
