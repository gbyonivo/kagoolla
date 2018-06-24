import { createElement, addElementToPage } from './functions/document';
import './index.scss';
import { store } from './data';
import { createBeersGrid } from './grid';
import { createBeersAccordion } from './accordion';

const accordion = createElement('div', { id: 'accordions' });

const carousel = createElement('div', { id: 'carousels' });

const grid = createElement('div', { id: 'grids' });

carousel.innerHTML = 'carousel';

addElementToPage(accordion);
addElementToPage(carousel);
addElementToPage(grid);

store.init([
  createBeersAccordion,
  createBeersGrid
]);
