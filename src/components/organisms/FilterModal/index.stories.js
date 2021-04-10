import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { FilterModal } from './index';
import { Wrapper } from '../../atoms/Wrapper';
import { Alert } from 'react-native';

const stories = storiesOf('FilterModal', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const close = () => Alert.alert('Hi', 'You clicked in close button');

  return <FilterModal visible={true} onClose={close} />;
});
