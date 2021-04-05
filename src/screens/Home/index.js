import React, { useEffect, useState } from 'react';

import {
  ContentContainer,
  ScreenContainer,
  TitleContainer,
  TopContainer,
} from './styles';

import { HousesList, IconButton, Input, Loader, Title } from '../../components';
import { getHousesCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores';

export const HomeScreen = () => {
  const { housesList, setHousesList } = useHousesStore();
  const [loading, setLoading] = useState(true);

  const callGetHouses = async () => {
    const response = await getHousesCall();
    setHousesList(response.properties ? response.properties : []);
    setLoading(false);
  };

  useEffect(() => callGetHouses());

  return (
    <ScreenContainer>
      <HousesList data={housesList} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />

          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
