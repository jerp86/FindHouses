import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Loader } from './index';
import { Wrapper } from '../../atoms/Wrapper';

const stories = storiesOf('Loader', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const value = text('Text', 'Loading...');

  return <Loader text={value} />;
});
