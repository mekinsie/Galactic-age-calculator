import { TestScheduler } from 'jest';
import PlanetAge from '../src/js/age.js'

describe('PlanetAge', () => {
  let yourAge = 30;
  let planetAge = new PlanetAge(yourAge);
  test('Should correctly create a PlanetAge object with planet and their formula values', () => {
    expect(planetAge.mercury).toEqual(yourAge * 0.24);
    expect(planetAge.venus).toEqual(yourAge * 0.62);
    expect(planetAge.mars).toEqual(yourAge * 1.88);
    expect(planetAge.jupiter).toEqual(yourAge * 11.86);
  });

  test('Should correctly calculate a user age based on what planet they are on.');
  let yourAge = 30;
  expect(planetAge.venus).toEqual();
});




