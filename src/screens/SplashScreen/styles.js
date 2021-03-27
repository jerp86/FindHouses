import styled from 'styled-components/native';

export const SectionView = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.backgroundDark};

  width: 100%;
  height: 100%;
`;

export const SectionImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const SectionText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
