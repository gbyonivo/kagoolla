import {
  createElement,
  addElementsToElement,
  getElementById
} from './functions/document';
import { FILTER_OPTIONS } from './constants';
import { store } from './data';


export const beerItem = (beer) => {
  const beerBox = createElement('div', { class: 'beerBox' });
  const beerImage = createElement('img', { class: 'beerImage', src: beer.image_url });
  const beerName = createElement('div', { class: 'beerName' }, `${beer.name} (${beer.abv})`);
  addElementsToElement(beerBox, [beerImage, beerName]);
  return [beerBox];
};

export const beersList = beers => beers.map((beer) => {
  const listItem = createElement('li', { id: `accordion${beer.id}`, class: 'beerItem' });
  addElementsToElement(listItem, beerItem(beer));
  return listItem;
});

export const onSelectFilterOption = (e) => {
  const filterValue = e.target.value;
  store.setFilterValue(filterValue);
  const gridElement = getElementById('listContainer');
  gridElement.innerHTML = '';
  addElementsToElement(gridElement, beersList(store.getGridBeers(filterValue)));
};

export const abvFilter = () => {
  const filter = createElement('div', { class: 'filter' });
  const label = createElement('label', {}, 'alcohol volume');
  const select = createElement('select', { id: 'abvFilter', value: FILTER_OPTIONS.LOW_TO_HIGH });
  const optionOne = createElement('option', { value: FILTER_OPTIONS.LOW_TO_HIGH }, 'Low to High');
  const optionTwo = createElement('option', { value: FILTER_OPTIONS.HIGH_TO_LOW }, 'High to Low');
  addElementsToElement(select, [optionOne, optionTwo]);
  addElementsToElement(filter, [label, select]);
  select.onchange = e => onSelectFilterOption(e);
  return filter;
};

export const beersGrid = (beers) => {
  const filter = abvFilter();
  const listContainer = createElement('ul', { id: 'listContainer' });
  addElementsToElement(listContainer, beersList(beers));
  return [filter, listContainer];
};

export const createBeersGrid = () => addElementsToElement(getElementById('grids'), beersGrid(store.getGridBeers()));