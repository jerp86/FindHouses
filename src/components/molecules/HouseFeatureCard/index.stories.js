import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { HouseFeatureCard } from './index';
import { Wrapper } from '../../atoms/Wrapper';

const stories = storiesOf('HouseFeatureCard', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const iconLib = text('Name of icon library', 'fontawesome');
  const iconName = text('Icon name', 'heartbeat');
  const featureText = text('Description referring to the icon', '70 - 85');

  return (
    <HouseFeatureCard
      iconLib={iconLib}
      iconName={iconName}
      featureText={featureText}
    />
  );
});
