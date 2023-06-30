const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const { constructor } = Object.getPrototypeOf(this);
    return new constructor(this[_brand], this[_motor], this[_color]);
  }
}
