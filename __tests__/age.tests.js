import { TestScheduler } from 'jest';
import PlanetAge from '../src/js/age.js'

describe('PlanetAge', () => {
  let planetAge;
  beforeEach(() => {
    planetAge = new PlanetAge(30);
  });
  test('Should correctly create a PlanetAge object with planet and their formula values', () => {
    expect(planetAge.earthAge).toEqual(30);
  });
  test('Should correctly calculate user age in Mercury years.',() => {
  let planet = "Mercury"
  expect(planetAge.planetAgeCalc(planet)).toEqual(7.199999999999999);
  });
  test('Should correctly calculate user age in Venus years.',() => {
    let planet = "Venus"
    expect(planetAge.planetAgeCalc(planet)).toEqual(18.6);
    });
  test('Should correctly calculate user age in Mars years.',() => {
    let planet = "Mars"
    expect(planetAge.planetAgeCalc(planet)).toEqual(56.4);
    });
  test('Should correctly calculate user age in Jupiter years.',() => {
    let planet = "Jupiter"
    expect(planetAge.planetAgeCalc(planet)).toEqual(355.79999999999995);
    });
  test('Should correctly calculate user life expectancy for each planet', () => {
    expect(planetAge.planetAgeCalc()).toEqual();
  });
});

describe('ActivityLifeExpect', () => {
  test('Should correctly calculate earth life expectancy based on user activity level', () =>{
    
  })
});



// expect(planetAge.venus).toEqual(earthAge * 0.62);
// expect(planetAge.mars).toEqual(earthAge * 1.88);
// expect(planetAge.jupiter).toEqual(earthAge * 11.86);
