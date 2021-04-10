import styled from 'styled-components/native';

export const BaseText = styled.Text`
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`;

export const Title = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const DetailTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const DetailSectionTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const DetailSubTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Medium';
`;

export const DetailText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Regular';
`;

export const ButtonLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const InputSectionLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-SemiBold';
`;

export const InputLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-SemiBold';
`;

export const CardTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const CardHightLightText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-SemiBold';
`;

export const CardDescription = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat-Regular';
`;
