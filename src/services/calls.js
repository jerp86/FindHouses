import api from './api';

export const getHousesCall = async query => {
  const {
    sizeMin,
    sizeMax,
    priceMin,
    priceMax,
    bedsMin,
    bathsMin,
    offset,
  } = query;

  try {
    const result = await api.get('/properties/v2/list-for-rent', {
      params: {
        city: 'Miami',
        state_code: 'FL',
        limit: 15,
        offset,
        sort: 'relevance',
        sqft_min: sizeMin,
        sqft_max: sizeMax,
        price_min: priceMin,
        price_max: priceMax,
        beds_min: bedsMin,
        baths_min: bathsMin,
      },
    });

    return result.data;
  } catch (error) {
    console.error({ error: error.message });
    return error;
  }
};

export const getHouseDetail = async property_id => {
  try {
    const result = await api.get('/properties/v2/detail', {
      params: {
        property_id,
      },
    });

    return result.data;
  } catch (error) {
    console.error({ error: error.message });
    return error;
  }
};
