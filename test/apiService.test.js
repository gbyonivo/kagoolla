import axios from 'axios';
import { fetchBeersFromApi } from '../src/api/apiService';

describe('fetchBeersFromApi', () => {
  it('should call certain functions', async () => {
    axios.get = jest.fn().mockReturnValueOnce(Promise.resolve({ data: [] }));
    spyOn(Promise, 'resolve').and.callThrough();
    spyOn(axios, 'get').and.callThrough();
    const actual = await fetchBeersFromApi();
    expect(Promise.resolve).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalled();
  });
});