import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { HomeScreen } from './screens';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
