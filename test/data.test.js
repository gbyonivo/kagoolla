import { store } from '../src/data';
import { FILTER_OPTIONS } from '../src/constants';
import * as api from '../src/api/apiService';

const initialStore = { ...store };
const initializeStore = () => {
  store.beers = initialStore.beers;
  store.abvFilterValue = initialStore.abvFilterValue;
};
const beers = [{ name: 'i', abv: 9 }, { name: 'j', abv: 8 }];

describe('store.getGridBeers', () => {
  it('should return empty array as initial value', () => {
    expect(store.getGridBeers().length).toEqual(0);
  });
  it('should return array of two values if beers is set in store', () => {
    store.beers = beers;
    expect(store.getGridBeers().length).toEqual(2);
    expect(store.getGridBeers()[0].abv).toEqual(8);
  });
  it('should return array of two values if beers is set in store', () => {
    store.setFilterValue(FILTER_OPTIONS.HIGH_TO_LOW);
    expect(store.getGridBeers().length).toEqual(2);
    expect(store.getGridBeers()[0].abv).toEqual(9);
  });
});

describe('store.getCarouselBeers', () => {
  it('should return empty array as initial value', () => {
    initializeStore();
    expect(store.getCarouselBeers().length).toEqual(0);
  });
});

describe('store.setFilterValue', () => {
  it('should setFilter Value in store', () => {
    store.setFilterValue('a');
    expect(store.abvFilterValue).toEqual('a');
  });
});

describe('store.init', () => {
  it('should call certain functions', async () => {
    initializeStore();
    const after = { y: () => {} };
    api.fetchBeersFromApi = jest.fn().mockReturnValueOnce(Promise.resolve(beers));
    spyOn(Promise, 'resolve').and.callThrough();
    spyOn(after, 'y').and.callThrough();

    const actual = await store.init([after.y]);

    expect(Promise.resolve).toHaveBeenCalled();
    expect(after.y).toHaveBeenCalled();
    expect(store.beers.length).toEqual(2);
  })
})
