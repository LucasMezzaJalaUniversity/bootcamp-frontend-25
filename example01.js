function calculateArea(width, height) {
  return width * height;
}

function isPositiveNumber(n) {
  return typeof n === "number" && n > 0;
}

function printArea(width, height) {
  if (isPositiveNumber(width) && isPositiveNumber(height)) {
    console.log("Area:", calculateArea(width, height));
  } else {
    console.log("Invalid input.");
  }
}

printArea(5, 10);
