function calculateArea(length, width) {
  let area;
  if (length > 0 && width > 0) {
    area = length * width;
  } else {
    area = 0;
    console.log("Invalid input: Length and width must be positive.");
  }
  return area;
}

let rectangleLength = 5;
let rectangleWidth = 10;
let rectangleArea = calculateArea(rectangleLength, rectangleWidth);

console.log("The area of the rectangle is: " + rectangleArea);

for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
