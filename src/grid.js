import {
  createElement,
  addElementsToElement,
  getElementById
} from './functions/document';

export const beerItem = (beer) => {
  const beerBox = createElement('div', { class: 'beerBox' });
  const beerImage = createElement('img', { class: 'beerImage', src: beer.image_url });
  const beerName = createElement('div', { class: 'beerName' }, beer.name);
  addElementsToElement(beerBox, [beerImage, beerName]);
  return [beerBox];
};

export const beersList = beers => beers.map((beer) => {
  const listItem = createElement('li', { id: `accordion${beer.id}`, class: 'beerItem' });
  addElementsToElement(listItem, beerItem(beer));
  return listItem;
});

export const beersAccordion = (beers) => {
  const header = createElement('h2', {}, 'Beers');
  const listContainer = createElement('ul', {});
  addElementsToElement(listContainer, beersList(beers));
  return [header, listContainer];
};

export const createBeersGrid = beers => addElementsToElement(getElementById('grids'), beersAccordion(beers));