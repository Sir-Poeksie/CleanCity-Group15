import dataService from '../utils/dataService';

describe('dataService', () => {
  it('sets and gets items', () => {
    dataService.setItem('testKey', { foo: 'bar' });
    const result = dataService.getItem('testKey');
    expect(result).toEqual({ foo: 'bar' });
  });

  it('removes an item', () => {
    dataService.setItem('testKey', 'value');
    dataService.removeItem('testKey');
    expect(dataService.getItem('testKey')).toBeNull();
  });
});

