import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import {
  BottomScreenContainer,
  FeatureContainer,
  ImageBackground,
  ScreenContainer,
} from './styles';

import {
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  HouseFeatureCard,
  IconButton,
  Loader,
} from '../../components';
import { getHouseDetail } from '../../services/calls';
import { formattedPrice } from '../../utils';
import { useHousesStore } from '../../services/stores';
import {
  getIfHouseIsFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/db';

export const DetailScreen = ({ navigation }) => {
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState(null);
  const { selectedHouse } = useHousesStore();

  const callGetHouseDetail = async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setHouseDetail(result.properties[0] ? result.properties[0] : null);
    setLoading(false);
  };

  const checkIfHouseIsFavorite = async () => {
    const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
    setFavorite(isFavorite);
  };

  const saveFavoriteHouse = async () => {
    if (favorite) {
      await removeHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel removido como favorito com sucesso');
      return setFavorite(false);
    }

    await saveHouseAsFavorite(selectedHouse.property_id);
    Alert.alert('Imóvel salvo como favorito com sucesso');
    return setFavorite(true);
  };

  useEffect(() => {
    callGetHouseDetail();
    checkIfHouseIsFavorite();
  });

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: houseDetail.photos[0].href }}>
        <IconButton
          onPress={navigation.goBack}
          iconName="chevron-back"
          transparent
        />
        <IconButton
          onPress={saveFavoriteHouse}
          iconName={favorite ? 'star' : 'star-outline'}
          transparent
          fill={favorite}
        />
      </ImageBackground>

      <BottomScreenContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <DetailTitle>{houseDetail.address.line}</DetailTitle>
            <DetailSubTitle>
              {formattedPrice.format(houseDetail.community.price_max)}
            </DetailSubTitle>
            <DetailText>{`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}</DetailText>

            <DetailSectionTitle mt={24} mb={16}>
              Detalhes
            </DetailSectionTitle>

            <FeatureContainer>
              <HouseFeatureCard
                iconLib="materialcommunity"
                iconName="arrow-collapse-all"
                featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
              />
              <HouseFeatureCard
                iconLib="materialcommunity"
                iconName="bed-king-outline"
                featureText={`${houseDetail.community.beds_min} - ${houseDetail.community.beds_min} beds`}
              />
              <HouseFeatureCard
                iconLib="fontawesome"
                iconName="bath"
                featureText={`${houseDetail.community.baths_min} - ${houseDetail.community.baths_max} baths`}
              />
            </FeatureContainer>

            <DetailSectionTitle mt={24} mb={16}>
              Vantagens do Imóvel
            </DetailSectionTitle>
            {houseDetail.features[1].text.map(item => (
              <DetailText key={item} mb={8}>
                - {item}
              </DetailText>
            ))}
          </>
        )}
      </BottomScreenContainer>
    </ScreenContainer>
  );
};
