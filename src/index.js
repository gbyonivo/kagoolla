import message from './message';
import './index.scss';
import { createElement, addElementToPage } from './functions/document';

const paragraph = createElement('p');
paragraph.innerHTML = message;

addElementToPage(paragraph);
