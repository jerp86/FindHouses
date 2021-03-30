import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SectionView, SectionImage } from './styles';

import logo from '../../assets/img/findHousesLogo.png';

export const SplashScreen = () => {
  const navigator = useNavigation();
  const goToHomeScreen = (time = 3000) => {
    setTimeout(() => {
      navigator.navigate('Home');
    }, time);
  };

  useEffect(() => goToHomeScreen());

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={logo} resizeMode="contain" />
    </SectionView>
  );
};
