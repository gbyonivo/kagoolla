import axios from 'axios';

export const fetchBeersFromApi = () => axios //eslint-disable-line
  .get('https://api.punkapi.com/v2/beers')
  .then(response => response.data);
