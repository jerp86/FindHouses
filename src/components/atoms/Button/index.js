import React from 'react';

import { ButtonLabel } from '../Text';

import { ButtonContainer } from './styles';

export const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonLabel>{text}</ButtonLabel>
    </ButtonContainer>
  );
};
