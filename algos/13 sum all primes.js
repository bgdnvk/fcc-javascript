function sumPrimes(num) {
  let temp = 0;
  for(let i = 1; i <=num; i++){
    if(
      isPrime(i)
    ){
      // console.log("i is "+i);
      temp+=i;
    }
  }

  return temp;
}

function isPrime(x){
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}
  
  sumPrimes(10);
  