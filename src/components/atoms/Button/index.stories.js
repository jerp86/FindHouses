import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Button } from './index';
import { Wrapper } from '../Wrapper';

const stories = storiesOf('Button', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const value = text('TextButton', 'Apply');

  return <Button text={value} />;
});
