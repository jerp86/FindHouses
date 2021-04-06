import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { IconButton } from './index';
import { Wrapper } from '../Wrapper';

const stories = storiesOf('IconButton', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const value = text('Icon', 'filter');

  return <IconButton iconName={value} />;
});

stories.add('Transparent', () => {
  const value = text('Icon', 'star-outline');

  return <IconButton iconName={value} transparent />;
});

stories.add('Fill', () => {
  const value = text('Icon', 'star');

  return <IconButton iconName={value} transparent fill />;
});
