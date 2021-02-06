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
  test('Should correctly return a message when a planet is not selected.', () => {
    expect(userDemographic.planetAgeCalc()).toEqual("Please select a planet");
  });

  test('Should correctly calculate earth life expectancy based on sedentary activity', () =>{
    let userDemographic = new UserDemographic(30, "Sedentary");
    expect(userDemographic.determineLifeExpect()).toEqual(73);
  });
  test('Should correctly calculate earth life expectancy based on moderate activity', () =>{
    let userDemographic = new UserDemographic(30, "Moderate");
    expect(userDemographic.determineLifeExpect()).toEqual(74.3);
  });  
  test('Should correctly determine earth life expectancy based on high activity', () =>{
    let userDemographic = new UserDemographic(30, "High");
    expect(userDemographic.determineLifeExpect()).toEqual(76.7);
  }); 
  test('Should display a message when no activity level is set',()=> {
    expect(userDemographic.determineLifeExpect()).toEqual("Please select an activity level.");
  });
  test('Should correctly calculate remaining life to live on Mercury.', () =>{
    let planet = "Mercury";
    let userDemographic = new UserDemographic(30, "Sedentary", 73, 7.2);
      expect(userDemographic.calcRemainLife(planet)).toEqual(10.32);
    });
  test('Should correctly calculate remaining life to live on Venus.', () =>{
    let planet = "Venus";
    let userDemographic = new UserDemographic(30, "Sedentary", 73, 18.6);
      expect(userDemographic.calcRemainLife(planet)).toEqual(26.659999999999997);
    });
  test('Should correctly calculate remaining life to live on Mars.', () =>{
    let planet = "Mars";
    let userDemographic = new UserDemographic(30, "Sedentary", 73, 56.4);
      expect(userDemographic.calcRemainLife (planet)).toEqual(80.83999999999997);
    });
    test('Should correctly calculate remaining life to live on Jupiter.', () =>{
      userDemographic = new UserDemographic(30, "Sedentary", 73, 355.8);
      let planet = "Jupiter";
      expect(userDemographic.calcRemainLife(planet)).toEqual(509.97999999999996);
    });
    test('Should return a message if a user has already surpassed the average life expectancy',()=>{
      userDemographic = new UserDemographic(100, "Sedentary", 73, 24);
      let planet = "Mercury";
      expect(userDemographic.calcRemainLife(planet)).toEqual("You have surpassed your life expectancy by 6.48 years.")
    });
}); 
