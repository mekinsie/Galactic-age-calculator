import { TestScheduler } from 'jest';
import PlanetAge from '../src/js/age.js'

describe('PlanetAge', () => {
  let yourAge = 30;
  let planetAge = new PlanetAge(yourAge);
  test('Should correctly create a PlanetAge object with planet and their formula values', () => {
    expect(planetAge.yourAge).toEqual(30);
  });
  test('Should correctly calculate user age in Mercury yers.',() => {
  let yourAge = 30;
  let planetAge = new PlanetAge(yourAge);
  expect(planetAge.mercuryAge()).toEqual(7.199999999999999);
  });
});



// expect(planetAge.venus).toEqual(yourAge * 0.62);
// expect(planetAge.mars).toEqual(yourAge * 1.88);
// expect(planetAge.jupiter).toEqual(yourAge * 11.86);
