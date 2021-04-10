import React from 'react';

import { ButtonLabel } from '../Text';

import { ButtonContainer } from './styles';

export const Button = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonContainer>
  );
};
