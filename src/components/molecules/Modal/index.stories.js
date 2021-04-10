import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Alert } from 'react-native';

import { Modal } from './index';
import { Wrapper } from '../../atoms/Wrapper';

const stories = storiesOf('Modal', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const value = text('Title', 'What is the Title of Modal?');

  return (
    <Modal
      visible
      title={value}
      onClose={() => Alert.alert('Clicked onClose')}
    />
  );
});
