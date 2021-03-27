import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors.backgroundDark};

  width: 100%;
  height: 100%;

  padding: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  margin-bottom: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const TitleContainer = styled.View`
  width: 65%;
`;
