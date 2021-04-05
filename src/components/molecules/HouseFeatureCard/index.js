import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { FeatureCardContainer } from './styles';

import { DetailText } from '../../atoms';

export const HouseFeatureCard = ({ iconLib, iconName, featureText }) => {
  return (
    <FeatureCardContainer>
      {iconLib === 'fontawesome' && (
        <FontAwesome name={iconName} color="white" size={36} />
      )}
      {iconLib === 'materialcommunity' && (
        <Icon name={iconName} color="white" size={36} />
      )}
      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
