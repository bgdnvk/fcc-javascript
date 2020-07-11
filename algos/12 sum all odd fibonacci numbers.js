function sumFibs(num) {
  let prevNum = 0;
  let currentNum = 1;
  let result = 0;

  while(currentNum <= num){
    if(currentNum % 2 !== 0){
      result += currentNum;
    }
   
    currentNum += prevNum;
    prevNum = currentNum - prevNum;
    console.log("current num is "+currentNum);
    console.log("prev num is "+prevNum);
  }
  return result;
}
  
  sumFibs(4);
  sumFibs(4000000)
  sumFibs(4)
  sumFibs(75024)
  sumFibs(75025)