import Car from './10-car';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  cloneCar() {
    const carConstructor = Object.getPrototypeOf(this).constructor;
    return new carConstructor(this.brand, this.motor, this.color);
  }
}
