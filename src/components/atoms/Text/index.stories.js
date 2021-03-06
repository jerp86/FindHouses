import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import {
  ButtonLabel,
  CardDescription,
  CardHightLightText,
  CardTitle,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  InputLabel,
  InputSectionLabel,
  Title,
} from './index';
import { Wrapper } from '../Wrapper';

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('ButtonLabel', () => {
  const value = text('ButtonLabel', 'Example of ButtonLabel');

  return <ButtonLabel>{value}</ButtonLabel>;
});

stories.add('Title', () => {
  const value = text('Title', 'Example of Title');

  return <Title>{value}</Title>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Example of DetailTitle');

  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Example of DetailSectionTitle');

  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Example of DetailSubTitle');

  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Example of DetailText');

  return <DetailText>{value}</DetailText>;
});

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'Example of InputLabel');

  return <InputLabel>{value}</InputLabel>;
});

stories.add('InputSectionLabel', () => {
  const value = text('InputSectionLabel', 'Example of InputSectionLabel');

  return <InputSectionLabel>{value}</InputSectionLabel>;
});

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Example of CardTitle');

  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'U$ 222.22');

  return <CardHightLightText>{value}</CardHightLightText>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Example of CardDescription');

  return <CardDescription>{value}</CardDescription>;
});
