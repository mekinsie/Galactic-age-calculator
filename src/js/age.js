export default class UserDemogaphic {
  constructor(earthAge, planetAge, activityLevel) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.activityLevel = activityLevel;
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
  //~73 years is the average earth life expectancy for a human. https://ourworldindata.org/life-expectancy#:~:text=The%20United%20Nations%20estimate%20a,life%20expectancy%20of%2072.3%20years.
  // Moderate and high physical activity levels led to 1.3 and 3.7 years more in life expectancy. https://pubmed.ncbi.nlm.nih.gov/16287764/
  
  planetLifeExpect (planetAge, activityLevel, planet) {
    if (activityLevel === "Sedentary" && planet === "Mercury") {
      return (((73+0)*0.24) - planetAge); 
    }
  }
}


