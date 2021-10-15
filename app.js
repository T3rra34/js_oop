function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}
Shape.prototype.calcPerimeter = function() {
  return this.sides * this.sideLength
}
Shape.prototype.calcArea = function() {
  return this.sideLength * this.sideLength
}
var square = new Shape("Square", 4, 5);
square.calcPerimeter();
square.calcArea();
console.log(square);
console.log(square.calcPerimeter());
console.log(square.calcArea());

/*
var triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
console.log(triangle);
console.log(triangle.calcPerimeter());
*/
