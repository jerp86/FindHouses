import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Input } from './index';
import { Wrapper } from '../../atoms/Wrapper';

const stories = storiesOf('Input', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const placeholder = text('Placeholder', 'Input here the location');
  const label = text('Label', 'Location');

  return <Input label={label} placeholder={placeholder} />;
});
