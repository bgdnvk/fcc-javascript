function uniteUnique(arr) {
  
  const nArr = [...arguments]
  const solution = [];
  
    for(let i = 0; i<nArr.length;i++){
      for(let j = 0; j <nArr[i].length; j++){
        if(!solution.includes(nArr[i][j])){
          solution.push(nArr[i][j])
        }
      }
    }
    return solution;
    // return [...new Set(arr)];
  }
  
  console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
  );

  console.log(
    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
  );
  
  // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates