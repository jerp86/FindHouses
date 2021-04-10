import { getHousesCall } from '../calls';
import { useHousesStore } from '../stores';

export const useHousesHooks = () => {
  const {
    housesList,
    setHousesList,
    setLoadingHousesList,
    offset,
    setOffset,
    query,
    setQuery,
  } = useHousesStore();

  const onGetHouses = async () => {
    const response = await getHousesCall({ ...query, offset });
    if (offset > 0) {
      setHousesList(
        response.properties
          ? [...housesList, ...response.properties]
          : housesList,
      );
    } else {
      setHousesList(response.properties ? response.properties : housesList);
    }

    setLoadingHousesList(false);
    setOffset(offset + 15);
  };

  const onFilterHousesList = async receivedQuery => {
    setLoadingHousesList(true);

    if (receivedQuery !== query) {
      setHousesList([]);
      setOffset(0);
    }

    setQuery(receivedQuery);

    const result = await getHousesCall({ query: receivedQuery, offset });

    setHousesList(result.properties ? result.properties : []);
    setLoadingHousesList(false);
  };

  return {
    onGetHouses,
    onFilterHousesList,
  };
};
