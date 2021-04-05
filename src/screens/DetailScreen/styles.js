import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const ImageBackground = styled.ImageBackground`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  padding: 0 ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: ({ theme }) => theme.metrics.px(24),
  },
})`
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  width: 100%;
  height: ${({ theme }) => theme.metrics.hp(65)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;

  border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;

  position: absolute;
  bottom: 0;
`;

export const FeatureContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  min-height: ${({ theme }) => theme.metrics.hp(8)}px;
`;
