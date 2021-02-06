export default class UserDemogaphic {
  constructor(earthAge, planetAge, activityLevel, lifeExpect) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.activityLevel = activityLevel;
    this.lifeExpect = lifeExpect;
  }
  planetAgeCalc (planet) {
    let planetAge = 0;
    switch (planet){
      case ("Mercury"):
        planetAge = (this.earthAge * 0.24);
        break;
      case ("Venus"):
        planetAge = (this.earthAge * 0.62);
        break;
      case ("Mars"):
        planetAge = (this.earthAge * 1.88);
        break;
      case ("Jupiter"):
        planetAge = (this.earthAge * 11.86);
        break;
      default:
        return ("Please choose a planet");
      }
  return planetAge;
  }
  
  //~73 years is the average earth life expectancy for a human. https://ourworldindata.org/life-expectancy#:~:text=The%20United%20Nations%20estimate%20a,life%20expectancy%20of%2072.3%20years.
  // Moderate and high physical activity levels led to 1.3 and 3.7 years more in life expectancy. https://pubmed.ncbi.nlm.nih.gov/16287764/
  
  determineLifeExpect (activityLevel) {
    let lifeExpect = 73;
    switch (activityLevel) {
      case("Sedentary"):
        lifeExpect += 0;
        break;
      case("Moderate"):
        lifeExpect += 1.3;
        break;  
      case("High"):
        lifeExpect += 3.7;
        break;
      default: 
        return ("Please select an activity level.")
    }
  return lifeExpect;
  }


  calcRemainLife (lifeExpect, planet, planetAge) {
    let remainLife = 0;
    switch(planet) {
      case("Mercury"):
        remainLife += ((lifeExpect * 0.24) - planetAge);
        break;
      case("Venus"):
        remainLife += ((lifeExpect * 0.62) - planetAge);
        break;
      case("Mars"):
        remainLife += ((lifeExpect * 1.88) - planetAge);
        break;
      case("Jupiter"):
        remainLife += ((lifeExpect * 11.86) - planetAge);
        break;
    }
    return remainLife;
  }
};