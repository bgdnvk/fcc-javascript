function smallestCommons(arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // console.log(min);
  // console.log(max);

  // let range = [];
  // for(let i = min; i<max; i++ ){
  //   range.push(i);
  // }

  // let found = false;
  // while(!found){

  // }

  // 
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;

}
  
  
  smallestCommons([1,5]);
  