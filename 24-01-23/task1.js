class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // this.area = width * height;
    // this.perimeter = 2 * (width + height);
  }
  area() {
    return this.width * this.height;
  }
  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(4, 5);
const rectangle2 = new Rectangle(7, 2);
console.log(rectangle1.area());
console.log(rectangle2.area());
console.log(rectangle2.perimeter);
