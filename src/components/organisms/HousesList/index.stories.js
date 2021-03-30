import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { HousesList } from './index';
import { Wrapper } from '../../atoms/Wrapper';

const stories = storiesOf('HousesList', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const id = text('ID', 'UNIQUE_ID');
  const title = text('Title', 'Name of the house for sale');
  const neighborhood = text(
    'Neighborhood',
    'Description of the neighborhood of the house that is for sale',
  );
  const state = text('State', 'ZZ');
  const price = number('Price', 1234.56);
  const img = text('Uri', 'https://source.unsplash.com/random/?house');
  const mockArray = [
    {
      property_id: id,
      address: {
        line: title,
        neighborhood_name: neighborhood,
        state: state,
      },
      community: {
        price_max: price,
      },
      photos: [
        {
          href: img,
        },
      ],
    },
    {
      property_id: 'OTHER_UNIQUE_ID',
      address: {
        line: title,
        neighborhood_name: neighborhood,
        state: state,
      },
      community: {
        price_max: price,
      },
      photos: [
        {
          href: 'https://source.unsplash.com/random/?houses',
        },
      ],
    },
    {
      property_id: 'ANOTHER_UNIQUE_ID',
      address: {
        line: title,
        neighborhood_name: neighborhood,
        state: state,
      },
      community: {
        price_max: price,
      },
      photos: [
        {
          href: 'https://source.unsplash.com/random',
        },
      ],
    },
  ];

  return <HousesList data={mockArray} />;
});
