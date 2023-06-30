export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor === Building) throw new TypeError('Cannot instantiate abstract class Building');
    if (typeof this.evacuationWarningMessage !== 'function') throw new TypeError('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
