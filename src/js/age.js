export default class PlanetAge {
  constructor(yourAge) {
    this.yourAge = yourAge;
  }
  mercuryAge () {
    return (this.yourAge * 0.24);
  }
  VenusAge () {
    return (this.yourAge * 0.62);
  }
  }

