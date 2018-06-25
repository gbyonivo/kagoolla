import { fetchBeersFromApi } from '../api/apiService';
import { FILTER_OPTIONS } from '../constants';

export const store = { // eslint-disable-line
  beers: [],
  abvFilterValue: FILTER_OPTIONS.LOW_TO_HIGH,
  init: (afterLoadingBeers = []) => {
    const beersRequest = fetchBeersFromApi();
    beersRequest.then((beers) => {
      store.beers = [...beers].sort((a, b) => a.name > b.name ? 1 : -1);
      afterLoadingBeers.forEach((after) => { after(beers); });
    });
  },
  setFilterValue: (filterValue) => {
    store.abvFilterValue = filterValue;
  },
  getGridBeers: filterValue => [...store.beers]
    .sort((a, b) => (filterValue || store.abvFilterValue) === FILTER_OPTIONS.LOW_TO_HIGH ? a.abv - b.abv : b.abv - a.abv)
    .slice(0, 8),
  getCarouselBeers: () => [...store.beers].slice(0, 4)
};