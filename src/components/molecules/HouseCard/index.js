import React from 'react';

import { CardDescription, CardHightLightText, CardTitle } from '../../atoms';
import { formattedPrice } from '../../../utils';

import {
  CardContainer,
  CarImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price }) => {
  return (
    <CardContainer>
      <CarImage source={{ uri: imgSource }} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>

        <TextContainerRight>
          <CardHightLightText>{formattedPrice(price)}</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
