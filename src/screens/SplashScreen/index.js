import React from 'react';

import { SectionView, SectionImage } from './styles';

import logo from '../../assets/img/findHousesLogo.png';
import { StatusBar } from 'react-native';

const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={logo} resizeMode="contain" />
    </SectionView>
  );
};

export default SplashScreen;
