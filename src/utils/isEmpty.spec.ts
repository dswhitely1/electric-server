import { isEmpty } from './isEmpty';

describe('isEmpty.ts', () => {
  it('should return true if the value is null', () => {
    const expected = true;
    const actual = isEmpty(null);
    expect(actual).toBe(expected);
  });
  it('should return true if the value is undefined', () => {
    const expected = true;
    const actual = isEmpty(undefined);
    expect(actual).toBe(expected);
  });
  it('should return true if an empty object is passed in', () => {
    const expected = true;
    const actual = isEmpty({});
    expect(actual).toBe(expected);
  });
  it('should return true if an empty string is passed in', () => {
    const expected = true;
    const actual = isEmpty('');
    expect(actual).toBe(expected);
  });
  it('should return false if an object with keys is passed in', () => {
    const expected = false;
    const actual = isEmpty({ key: 'value' });
    expect(actual).toBe(expected);
  });
  it('should return false if an string is passed in', () => {
    const expected = false;
    const actual = isEmpty('Value');
    expect(actual).toBe(expected);
  });
});
