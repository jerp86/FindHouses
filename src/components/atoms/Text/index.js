import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const DetailTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const DetailSectionText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const DetailSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const CardHightLightText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;

export const CardDescription = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: ${({ theme }) => theme.colors.white};
`;
