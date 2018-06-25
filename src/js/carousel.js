
import jquery from 'jquery';
import 'slick-carousel';
import {
  createElement,
  addElementsToElement,
  getElementById
} from '../functions/document';
import { store } from '../data';


export const beerImg = (beer) => {
  const beerImageBox = createElement('div', { class: 'carouselImageBox' });
  const beerImage = createElement('img', { class: 'carouselImage', src: beer.image_url });
  addElementsToElement(beerImageBox, [beerImage]);
  return beerImageBox;
};

export const beerDetails = beer => `
  <h2>${beer.name}</h2>
  <div>${beer.first_brewed}</div>
  <div>${beer.tagline}</div>
  <div>${beer.description}</div>
  <div>Alcohol Volume: ${beer.abv}</div>
`;

export const beerItem = (beer) => {
  const beerBox = createElement('div', { class: 'carouselItemContent' });
  const beerName = createElement('div', { class: 'carouselDetails' }, beerDetails(beer));
  const beerImageBox = beerImg(beer);
  addElementsToElement(beerBox, [beerImageBox, beerName]);
  return [beerBox];
};

export const beersList = beers => beers.map((beer) => {
  const listItem = createElement('div', { id: `carousel${beer.id}`, class: 'carouselItem' });
  addElementsToElement(listItem, beerItem(beer));
  return listItem;
});

export const createBeersCarousel = (settings, id) => {
  addElementsToElement(getElementById(id), beersList(store.getCarouselBeers()));
  jquery(`#${id}`).slick(settings);
};