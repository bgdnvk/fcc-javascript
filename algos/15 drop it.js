function dropElements(arr, func) {

  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
//ES6 w/ findIndex() return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);

console.log(
  dropElements([1, 2, 3], function(n) {return n < 3; })

);
console.log(
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
);
