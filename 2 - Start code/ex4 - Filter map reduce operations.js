let numbers = [1, 2, 3, 4, 5];

// Filter out even numbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Map array elements to their squared values
function squareNumbers(arr) {
  return arr.map(num => num * num);
}

// Compute the sum of array elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
