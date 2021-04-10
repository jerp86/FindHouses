import React from 'react';

import {
  BottomScreenContainer,
  HeaderContainer,
  ModalBackground,
  ModalContainer,
} from './styles';

import { IconButton, Title } from '../../atoms';

export const Modal = ({ children, title, visible, onClose }) => {
  return (
    <ModalContainer transparent visible={visible} onRequestClose={onClose}>
      <ModalBackground>
        <BottomScreenContainer>
          <HeaderContainer>
            <Title>{title}</Title>
            <IconButton iconName="close" onPress={onClose} />
          </HeaderContainer>

          {children}
        </BottomScreenContainer>
      </ModalBackground>
    </ModalContainer>
  );
};
