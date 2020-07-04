/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays.
 * @param {*} arr1 
 * @param {*} arr2 
 */
function diffArray(arr1, arr2) {

  let arr1filtered = arr1.filter((x) => arr2.indexOf(x) === -1);
  let arr2filtered = arr2.filter((x) => arr1.indexOf(x) === -1);
  return arr1filtered.concat(arr2filtered);
}

const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);



  