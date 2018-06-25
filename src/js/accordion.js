import {
  getElementById,
  getElementsByClass,
  createElement,
  addElementsToAccordion,
  addElementsToElement
} from '../functions/document';

export const onClickAccordion = (id) => {
  const content = getElementById(`accordion${id}`);
  if (!content) return;
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  const accordions = getElementsByClass('accordion');
  accordions.forEach((accordion) => {
    accordion.classList.remove('active');
  });
  content.classList.add('active');
};

export const beerDetailsBodyContent = (beer) => {
  const tagLine = createElement('div', { class: 'tagLine' }, `<em>tag line:</em><span>${beer.tagline}</span>`);
  const description = createElement('div', { class: 'description' }, `<em>description:</em><span>${beer.description}</span>`);
  const firstBrewed = createElement('div', { class: 'firstBrewed' }, `<em>first brewed:</em><span>${beer.first_brewed}</span>`);
  return [tagLine, firstBrewed, description];
};

export const beerItem = (beer) => {
  const beerDetails = createElement('div', { class: 'beerDetails' });
  const beerDetailsHeader = createElement('h2', { class: 'beerDetailsHeader' }, beer.name);
  const beerDetailsBody = createElement('div', { class: 'beerDetailsBody' });
  addElementsToElement(beerDetailsBody, beerDetailsBodyContent(beer));
  addElementsToElement(beerDetails, [beerDetailsHeader, beerDetailsBody]);
  beerDetailsHeader.onclick = () => onClickAccordion(beer.id);
  return [beerDetails];
};

export const beersList = beers => beers.map((beer) => {
  const listItem = createElement('li', { id: `accordion${beer.id}`, class: 'accordion' });
  addElementsToElement(listItem, beerItem(beer));
  return listItem;
});

export const beersAccordion = (beers) => {
  const header = createElement('h2', {}, 'Beers');
  const listContainer = createElement('ul', {});
  addElementsToElement(listContainer, beersList(beers));
  return [header, listContainer];
};

export const createBeersAccordion = beers => addElementsToAccordion(beersAccordion(beers));