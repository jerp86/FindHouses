import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import { HouseCard } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HouseCard', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const img = 'https://source.unsplash.com/random/?house';
  const title = 'Sale house';
  const description = text(
    'Description',
    'Description to favor the house that is for sale',
  );
  const price = number('Price', 1234.56);

  return (
    <HouseCard
      imgSource={img}
      title={title}
      description={description}
      price={price}
    />
  );
});
