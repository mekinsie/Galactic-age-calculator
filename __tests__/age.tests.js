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
    let planet = "Mercury";
    expect(userDemographic.planetAgeCalc(planet)).toEqual(7.199999999999999);
  });
  test('Should correctly calcu;late user age in Venus years.',() => {
    let planet = "Venus";
    expect(userDemographic.planetAgeCalc(planet)).toEqual(18.6);
  });
  test('Should correctly calculate user age in Mars years.',() => {
    let planet = "Mars";
    expect(userDemographic.planetAgeCalc(planet)).toEqual(56.4);
  });
  test('Should correctly calculate user age in Jupiter years.',() => {
    let planet = "Jupiter";
    expect(userDemographic.planetAgeCalc(planet)).toEqual(355.79999999999995);
  });
  test('Should correctly calculate earth life expectancy based on sedentary activity', () =>{
    let activityLevel = "Sedentary";
    expect(userDemographic.determineLifeExpect(activityLevel)).toEqual(73);
  });
  test('Should correctly calculate earth life expectancy based on moderate activity', () =>{
    let activityLevel = "Moderate";
    expect(userDemographic.determineLifeExpect(activityLevel)).toEqual(74.3);
  });  
  test('Should correctly determine earth life expectancy based on high activity', () =>{
    let activityLevel = "High";
    expect(userDemographic.determineLifeExpect(activityLevel)).toEqual(76.7);
  }); 
  let lifeExpect;
  beforeEach(() => {
    lifeExpect= 73;
  });
  test('Should correctly calculate remaining life to live on Mercury.', () =>{
    let planet = "Mercury"
    let planetAge = 7.2;
      expect(userDemographic.calcRemainLife(lifeExpect, planet, planetAge)).toEqual(10.32);
    });
  test('Should correctly calculate remaining life to live on Venus.', () =>{
    let planet = "Venus"
    let planetAge = 18.6;
      expect(userDemographic.calcRemainLife(lifeExpect, planet, planetAge)).toEqual(26.659999999999997);
    });
  test('Should correctly calculate remaining life to live on Mars.', () =>{
    let planet = "Mars"
    let planetAge = 56.4;
      expect(userDemographic.calcRemainLife(lifeExpect, planet, planetAge)).toEqual(80.83999999999997);
    });
}); 
