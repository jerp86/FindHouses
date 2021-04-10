import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  width: ${({ theme }) => theme.metrics.wp(100)}px;
  height: ${({ theme }) => theme.metrics.hp(100)}px;

  background: transparent;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalBackground = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})`
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  width: 100%;
  height: ${({ theme }) => theme.metrics.hp(88)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;

  border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;

  position: absolute;
  bottom: 0;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
