import styled from 'styled-components/native';

export const InputContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputText = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.white};

  width: 100%;
  height: ${({ theme }) => theme.metrics.px(48)}px;

  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
  padding-left: ${({ theme }) => theme.metrics.px(16)}px;

  font-size: ${({ theme }) => theme.metrics.px(16)}px;
`;
