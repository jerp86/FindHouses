import React from 'react';

import {
  CardContainer,
  CarImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

import { CardDescription, CardHightLightText, CardTitle } from '../../atoms';
import { formattedPrice } from '../../../utils';
import { useHousesStore } from '../../../services/stores';

export const HouseCard = ({
  imgSource,
  title,
  description,
  price,
  item,
  navigation,
}) => {
  const { setSelectedHouse } = useHousesStore();

  const onClickItemContainer = () => {
    setSelectedHouse(item);
    navigation.navigate('Detail');
  };

  return (
    <CardContainer onPress={() => onClickItemContainer()}>
      <CarImage source={{ uri: imgSource }} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>

        <TextContainerRight>
          <CardHightLightText>
            {formattedPrice.format(price)}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
