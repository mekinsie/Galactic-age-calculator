import { TestScheduler } from 'jest';
import PlanetAge from '../src/js/age.js'

describe('PlanetAge', () => {
  let earthAge = 30;
  let planetAge = new PlanetAge(earthAge);
  test('Should correctly create a PlanetAge object with planet and their formula values', () => {
    expect(planetAge.earthAge).toEqual(30);
  });
  test('Should correctly calculate user age in Mercury years.',() => {
  let earthAge = 30;
  let planetAge = new PlanetAge(earthAge);
  expect(planetAge.mercuryAge()).toEqual(7.199999999999999);
  });
  test('Should correctly calculate user age in Venus years.',() => {
    let earthAge = 30;
    let planetAge = new PlanetAge(earthAge);
    expect(planetAge.venusAge()).toEqual(18.6);
    });
  test('Should correctly calculate user age in Mars years.',() => {
    let earthAge = 30; 
    let planetAge = new PlanetAge(earthAge);
    expect(planetAge.marsAge()).toEqual(56.4);
    });
  test('Should correctly calculate user age in Jupiter years.',() => {
    let earthAge = 30; 
    let planetAge = new PlanetAge(earthAge);
    expect(planetAge.jupiterAge()).toEqual(355.79999999999995);
    });
    test('Should correctly calculate planet user life expectancy for each planet', () => {
      let earthAge = 30;
      let planetAge = new PlanetAge(earthAge);
      expect(planetAge.lifeExpect()).toEqual();
    }
    )
});



// expect(planetAge.venus).toEqual(earthAge * 0.62);
// expect(planetAge.mars).toEqual(earthAge * 1.88);
// expect(planetAge.jupiter).toEqual(earthAge * 11.86);
