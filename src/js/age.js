export default class PlanetAge {
  constructor(yourAge) {
    this.mercury = (yourAge * 0.24);
    this.venus = (yourAge * 0.62);
    this.mars = (yourAge * 1.88); 
    this.jupiter = (yourAge * 11.86);
  }
}