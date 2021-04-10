import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.backgroundDark};
  height: ${({ theme }) => theme.metrics.px(56)}px;
  width: 100%;

  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  border-color: ${({ theme }) => theme.colors.primary};

  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`;
