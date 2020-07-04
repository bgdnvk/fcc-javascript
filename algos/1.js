function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
  
    let sum = 0;
    for(min; min<=max;min++){
      sum+=min;
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));
  