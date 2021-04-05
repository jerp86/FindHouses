import styled from 'styled-components/native';

export const FeatureCardContainer = styled.View`
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.metrics.px(80)}px;
  width: ${({ theme }) => theme.metrics.px(80)}px;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;
