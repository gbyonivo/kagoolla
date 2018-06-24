import { fetchBeersFromApi } from '../api/apiService';
import { createBeersAccordion } from '../accordion';
import { createBeersGrid } from '../grid';

export const store = { // eslint-disable-line
  beers: [],
  girdBeers: [],
  init: () => {
    const beersRequest = fetchBeersFromApi();
    beersRequest.then((beers) => {
      store.beers = [...beers].sort((a, b) => a.name > b.name ? 1 : -1);
      store.girdBeers = [...beers].sort((a, b) => a.abv > b.abv);
      createBeersAccordion(store.beers);
      createBeersGrid(store.girdBeers.slice(0, 8));
    });
  }
};