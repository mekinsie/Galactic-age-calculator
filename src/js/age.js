export default class PlanetAge {
  constructor(yourAge) {
    this.yourAge = yourAge;
  }
  mercuryAge () {
    return (this.yourAge * 0.24);
  }
  venusAge () {
    return (this.yourAge * 0.62);
  }
  marsAge () {
    return (this.yourAge * 1.88);
  }
  }

