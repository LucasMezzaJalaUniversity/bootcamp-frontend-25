class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error("getArea() must be implemented by subclass");
  }

  getPerimeter() {
    throw new Error("getPerimeter() must be implemented by subclass");
  }

  describe() {
    console.log(`This is a ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
circle.describe();
console.log("Area:", circle.getArea().toFixed(2));
console.log("Perimeter:", circle.getPerimeter().toFixed(2));

const rect = new Rectangle(4, 6);
rect.describe();
console.log("Area:", rect.getArea());
console.log("Perimeter:", rect.getPerimeter());
