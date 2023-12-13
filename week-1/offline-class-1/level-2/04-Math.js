function mathMethods(value) {
  console.log("Original Value:", value);

  // Math.round(): Rounds a number to the nearest integer.
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  // Math.ceil(): Rounds a number up to the nearest integer.
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  // Math.floor(): Rounds a number down to the nearest integer.
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // Math.random(): Generates a random floating-point number between 0 and 1.
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  // Math.max(): Returns the highest value among the provided arguments.
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  // Math.min(): Returns the lowest value among the provided arguments.
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  // Math.pow(): Raises a number to the power of another.
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  // Math.sqrt(): Calculates the square root of a number.
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
