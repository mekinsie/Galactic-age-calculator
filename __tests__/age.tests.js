import { TestScheduler } from 'jest';
import PlanetAge from '../src/js/age.js'

describe('PlanetAge', () => {
  let yourAge = 30;
  let planetAge = new PlanetAge(yourAge);
  test('Should correctly create a PlanetAge object with planet and their formula values', () => {
    expect(planetAge.yourAge).toEqual(30);
  });
  test('Should correctly calculate user age in Mercury years.',() => {
  let yourAge = 30;
  let planetAge = new PlanetAge(yourAge);
  expect(planetAge.mercuryAge()).toEqual(7.199999999999999);
  });
  test('Should correctly calculate user age in Venus years.',() => {
    let yourAge = 30;
    let planetAge = new PlanetAge(yourAge);
    expect(planetAge.venusAge()).toEqual(18.6);
    });
  test('Should correctly calculate user age in Mars years.',() => {
    let yourAge = 30; 
    let planetAge = new PlanetAge(yourAge);
    expect(planetAge.marsAge()).toEqual(56.4);
    });
  test('Should correctly calculate user age in Jupiter years.',() => {
    let yourAge = 30; 
    let planetAge = new PlanetAge(yourAge);
    expect(planetAge.jupiterAge()).toEqual(355.79999999999995);
    });
});



// expect(planetAge.venus).toEqual(yourAge * 0.62);
// expect(planetAge.mars).toEqual(yourAge * 1.88);
// expect(planetAge.jupiter).toEqual(yourAge * 11.86);
