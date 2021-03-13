var multiplyES5 = function (x, y) {
    return x * y;
  };
  console.log(multiplyES5(6, 7));
  //
  const multiplyES6 = (x, y) => x * y;
  console.log(multiplyES5(5, 7));
  //
  var phraseSplitterES5 = function (phrase) {
    return phrase.split(" ");
  };
  console.log(phraseSplitterES5("ES5 features"));
//
const phraseSplitterES6 = (phrase) => phrase.split(" ");
console.log(phraseSplitterES6("ES6 Awesomeness"));
// ES5
var squareEs5 = function (a) {
    return a * a;
  };
  console.log(squareEs5(2));
  
  // ES6
  let squareEs6 = (x) => x * x;
  console.log(squareEs6(10));
  
// ES5
var addEs5 = function (a, b) {
    return a + b;
  };
  console.log(addEs5(2, 4));
  
  // ES6
  let addEs6 = (a, b) => a + b;
  console.log(addEs6(3, 6));
  
// ES5
setTimeout(function () {
    console.log("Hello!");
  }, 1000);
  
  // ES6
  setTimeout(() => console.log("Hello!"), 1000);
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 // ES5
let es5OddNumbers = numbers.filter(function (number) {
  return number % 2;
});
console.log(es5OddNumbers);

// ES6
const es6OddNumbers = numbers.filter((number) => number % 2);
console.log(es6OddNumbers);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const square = arr.map((a) => a * a);
console.log(square);

const cube = arr.map((a) => a * a * a);
console.log(cube);

const es6EvenNumbers = arr.filter((number) => !(number % 2));
console.log(es6EvenNumbers);

const isMultipleof3 = arr.filter((number) => !(number % 3));
console.log(isMultipleof3);
  