import api from './api';

export const getHousesCall = async () => {
  try {
    const result = await api.get('/properties/v2/list-for-rent', {
      params: {
        city: 'Miami',
        state_code: 'FL',
        limit: 5,
        offset: 0,
        sort: 'relevance',
      },
    });

    return result.data;
  } catch (error) {
    console.error({ error: error.message });
    return error;
  }
};
