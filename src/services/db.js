import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@FindHouses:Favorites';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error({ error: e });
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    console.error({ error: e });
  }
};

export const getIfHouseIsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    const isFavorite = savedFavorites.find(id => id === houseId);

    if (isFavorite) {
      return true;
    }

    return false;
  }

  return false;
};

export const saveHouseAsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    const isFavorite = savedFavorites.find(id => id === houseId);

    if (isFavorite) {
      return { error: 'Imóvel já é favorito' };
    }

    savedFavorites.push(houseId);
    return await saveData(FAVORITE_KEY, JSON.stringify(savedFavorites));
  }

  const newFavorite = new Array(houseId);
  return await saveData(FAVORITE_KEY, JSON.stringify(newFavorite));
};

export const removeHouseAsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (!savedFavorites) {
    return { error: 'Imóvel nãoé favorito' };
  }

  const newSavedFavorites = await savedFavorites.filter(id => id === houseId);
  return await savedFavorites(FAVORITE_KEY, JSON.stringify(newSavedFavorites));
};
