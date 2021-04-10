import React, { useEffect, useState } from 'react';

import {
  ContentContainer,
  ScreenContainer,
  TitleContainer,
  TopContainer,
} from './styles';

import {
  FilterModal,
  HousesList,
  IconButton,
  Input,
  Loader,
  Title,
} from '../../components';
import { useHousesHooks } from '../../services/hooks';
import { useHousesStore } from '../../services/stores';

export const HomeScreen = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const { housesList, loadingHousesList } = useHousesStore();
  const { onGetHouses } = useHousesHooks();

  const openFilterModal = () => setFilterModalVisible(true);
  const closeFilterModal = () => setFilterModalVisible(false);

  useEffect(() => onGetHouses());

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" onPress={openFilterModal} />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />

          {loadingHousesList && <Loader />}
        </ContentContainer>
      </HousesList>
      {filterModalVisible && (
        <FilterModal visible={filterModalVisible} onClose={closeFilterModal} />
      )}
    </ScreenContainer>
  );
};
