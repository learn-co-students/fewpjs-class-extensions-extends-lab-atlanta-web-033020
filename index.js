// Your code here
class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  get countSides() {
    return this.arr.length;
  }

  get perimeter() {
    return this.arr.reduce((total, side) => total + side);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const side1 = this.arr[0];
    const side2 = this.arr[1];
    const side3 = this.arr[2];
    ;
    const valid1 = (side1 + side2) > side3;
    const valid2 = (side2 + side3) > side1;
    const valid3 = (side1 + side3) > side2;
    ;
    if (valid1 && valid2 && valid3)
      return true;
    else
      return false;
  }
}

class Square extends Polygon {
  get isValid() {
    const side1 = this.arr[0];
    const side2 = this.arr[1];
    const side3 = this.arr[2];
    const side4 = this.arr[3];

    const valid = side1 === side2 && side2 === side3 && side3 === side4;

    if (valid)
      return true;
    else
      return false;
  }

  get area() {
    return this.arr[0] ** 2;
  }
}