import React, { useEffect, useState } from 'react';

import {
  ContentContainer,
  Loader,
  LoaderContainer,
  ScreenContainer,
  TitleContainer,
  TopContainer,
} from './styles';

import {
  DetailText,
  HousesList,
  IconButton,
  Input,
  Title,
} from '../../components';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const [housesListData, setHousesListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callGetHouses = async () => {
    const response = await getHousesCall();
    setHousesListData(response.properties ? response.properties : []);
    setLoading(false);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesListData} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />

          {loading && (
            <LoaderContainer>
              <Loader size="large" color="white" />
              <DetailText>Carregando...</DetailText>
            </LoaderContainer>
          )}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
