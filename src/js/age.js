export default class PlanetAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
  planetAgeCalc (planet) {
    if (planet === "Mercury") {
    return (this.earthAge * 0.24);
    }
    if (planet === "Venus") {
      return (this.earthAge * 0.62);
      }
    if (planet === "Mars") {
      return (this.earthAge * 1.88);
      }
    if (planet === "Jupiter") {
      return (this.earthAge * 11.86);
      }
  }
}


