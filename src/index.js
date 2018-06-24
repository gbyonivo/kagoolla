import { createElement, addElementToPage } from './functions/document';
import './index.scss';
import { store } from './data';

const accordion = createElement('div', { id: 'accordions' });

const carousel = createElement('div', { id: 'carousels' });

const grid = createElement('div', { id: 'grids' });

carousel.innerHTML = 'carousel';
grid.innerHTML = 'grids';

addElementToPage(accordion);
addElementToPage(carousel);
addElementToPage(grid);

store.init();
