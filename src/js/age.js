export default class UserDemogaphic {
  constructor(earthAge, activityLevel) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.activityLevel = activityLevel;
    earthLifeExpect = 73;b
  }
  planetAgeCalc (planet) {
    if (planet === "Mercury") {
      let planetAge =  (this.earthAge * 0.24);
      return planetAge;
    }
    if (planet === "Venus") {
      let planetAge = (this.earthAge * 0.62);
      return planetAge;
      }
    if (planet === "Mars") {
      let planetAge = (this.earthAge * 1.88);
      return planetAge;
      }
    if (planet === "Jupiter") {
      let planetAge = (this.earthAge * 11.86);
      return planetAge;
      }
  }
  //73 years is the average earth life expectancy for a human.
  // Exercise increases life expectancy from 0.43 years to 6.9 years. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3395188/The added years of life for each activity level are based on this, but have no factual meaning.
  planetLifeExpect () {
    if (this.activityLevel === "Sedentary" && planet=== "Mercury") {
      return (((73-3.7)*0.24)) - planetAge;
    }
  }
}


