function convertToRoman(num) {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let str = "";
    //ES6 uses Object.keys(roman)
    for(let i in roman){
      console.log(i);
      console.log("roman i"+roman[i]);
      let q = Math.floor(num / roman[i]);
      console.log("q is "+q);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
   }
   
   convertToRoman(36);
   