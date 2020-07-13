function palindrome(str) {
  // 
  const regex = /[a-zA-Z0-9]/;
  
  let letters_arr = [...str].filter(e => regex.test(e))

  let reversed = [...letters_arr].reverse();
  
  let n1 = letters_arr.join().toLowerCase();
  let n2 = reversed.join().toLowerCase();
  
  // console.log("reversed is "+reversed);
  // console.log(n1);
  // console.log("normal is: "+letters_arr);
  // console.log(n2);

  return n1 === n2? true: false;

  // return JSON.stringify(letters_arr) === JSON.stringify(reversed)?
  // true: false;
}


// console.log(
// palindrome("eye")
// );
console.log(
  palindrome("A man, a plan, a canal. Panama")
);
// console.log(
//   palindrome("My age is 0, 0 si ega ym.")
// );
// console.log(
//   palindrome("not a palindrome")
// );
console.log(
  palindrome("_eye")
);
  