import React from 'react';

import { LoaderIndicator, LoaderContainer } from './styles';

import { DetailText } from '../../atoms';

export const Loader = ({ text }) => (
  <LoaderContainer>
    <LoaderIndicator size="large" color="white" />
    <DetailText>{text ? text : 'Carregando...'}</DetailText>
  </LoaderContainer>
);
