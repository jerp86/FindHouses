import React from 'react';

import { InputLabel } from '../../atoms';

import { InputContainer, InputText } from './styles';

export const Input = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholderTextColor="#AAA" {...rest} />
    </InputContainer>
  );
};
