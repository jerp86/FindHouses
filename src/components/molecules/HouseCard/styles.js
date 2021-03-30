import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors.backgroundLight};

  width: ${({ theme }) => theme.metrics.wp(86)}px;
  height: ${({ theme }) => theme.metrics.px(240)}px;
  margin-top: ${({ theme }) => theme.metrics.px(24)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px 0;
  overflow: hidden;
`;

export const CarImage = styled.Image`
  width: 100%;
  height: 70%;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 30%;
  padding: ${({ theme }) => theme.metrics.px(8)}px
    ${({ theme }) => theme.metrics.px(16)}px;
`;

export const TextContainerLeft = styled.View`
  align-items: flex-start;
  justify-content: center;

  width: 70%;
  height: 100%;
`;

export const TextContainerRight = styled.View`
  align-items: flex-end;
  justify-content: center;

  width: 30%;
  height: 100%;
`;
