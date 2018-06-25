import { mount } from 'enzyme';
import * as accordion from '../src/js/accordion';

const beers = [{
  name: 'Egyptian King',
  id: 1,
  description: 'goals galore',
  first_brewed: 'heaven',
  tagline: 'pyramids'
}];

describe('accordion.createBeersAccordion', () => {
  it('should create a accordion', () => {
    document.body.innerHTML = '<div id="accordionWrapper"></div>';
    accordion.createBeersAccordion([]);
    expect(document.body).toMatchSnapshot();
  });
});

describe('accordion.beersAccordion', () => {
  it('should create a beersAccordion', () => {
    const [header, listContainer] = accordion.beersAccordion([]);
    expect(header).toMatchSnapshot();
    expect(listContainer).toMatchSnapshot();
  });
});

describe('accordion.beersList', () => {
  it('should create a beersList', () => {
    const beersList = accordion.beersList(beers);
    expect(beersList[0]).toMatchSnapshot();
  });
});

describe('accordion.beerItem', () => {
  it('should create a beerItem', () => {
    const [beerItem] = accordion.beerItem(beers[0]);
    expect(beerItem).toMatchSnapshot();
  });
});
