function myReplace(str, before, after) {
  // let indx = str.indexOf(before);
  (/^[A-Z]/.test(before)) ? 
  after = after[0].toUpperCase() + after.slice(1):
  after = after[0].toLowerCase() + after.slice(1);

  return str.replace(before,after);
}
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  