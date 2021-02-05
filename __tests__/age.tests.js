import { TestScheduler } from 'jest';
import UserDemographic from '../src/js/age.js'

describe('UserDemographic', () => {
  let userDemographic;
  beforeEach(() => {
    userDemographic = new UserDemographic(30);
  });
  test('Should correctly create a userDemographic object with planet and their formula values', () => {
    expect(userDemographic.earthAge).toEqual(30);
  });
  test('Should correctly calculate user age in Mercury years.',() => {
  let planet = "Mercury"
  expect(userDemographic.planetAgeCalc(planet)).toEqual(7.199999999999999);
  });
  test('Should correctly calculate user age in Venus years.',() => {
    let planet = "Venus"
    expect(userDemographic.planetAgeCalc(planet)).toEqual(18.6);
    });
  test('Should correctly calculate user age in Mars years.',() => {
    let planet = "Mars"
    expect(userDemographic.planetAgeCalc(planet)).toEqual(56.4);
    });
  test('Should correctly calculate user age in Jupiter years.',() => {
    let planet = "Jupiter"
    expect(userDemographic.planetAgeCalc(planet)).toEqual(355.79999999999995);
    });
  test('Should correctly calculate user life expectancy for each planet', () => {
    expect(userDemographic.planetAgeCalc()).toEqual();
  });
  describe('ActivityLifeExpect', () => {
    test('Should correctly calculate earth life expectancy based on user activity level', () =>{
      
    })
  });
});



// expect(userDemographic.venus).toEqual(earthAge * 0.62);
// expect(userDemographic.mars).toEqual(earthAge * 1.88);
// expect(userDemographic.jupiter).toEqual(earthAge * 11.86);
