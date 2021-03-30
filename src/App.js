import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './screens';
import { theme } from './styles/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
        <HomeScreen />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
