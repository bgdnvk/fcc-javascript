function rot13(str) {
  const regex = /[A-Z]/;

  let nArr = [...str].map(e => {
    if(regex.test(e)){
      let code = e.charCodeAt(0);
      
      let crot13 = code+13;
      console.log("letter: "+e);
      console.log("CODE "+code);

      console.log("first CROT is "+crot13);

      if(crot13 > 90){
        console.log(">>>>>crot is: "+crot13);
        let over_nums = crot13-90-1;
        console.log(">>>>>>OVER NUMS: "+over_nums);
        crot13 = 65+over_nums;
      }
      console.log("CROT sent: "+crot13);
      return String.fromCharCode(crot13);
    } 
    return e;
  })
 
  return nArr.join("");
}
// console.log(
//   rot13("SERR PBQR PNZC")
// );
console.log(
  rot13("S")
);


