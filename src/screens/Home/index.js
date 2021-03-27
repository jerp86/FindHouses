import React from 'react';
import { StatusBar } from 'react-native';

import { IconButton, Input, Title } from '../../components';

import { ScreenContainer, TitleContainer, TopContainer } from './styles';

export const HomeScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScreenContainer>
        <TopContainer>
          <TitleContainer>
            <Title>Encontre aqui seu imóvel</Title>
          </TitleContainer>

          <IconButton iconName="filter" />
        </TopContainer>

        <Input label="Localização" placeholder="Digite o endereço" />
      </ScreenContainer>
    </>
  );
};
