function steamrollArray(arr) {
  let tarr = [];
  function flat(e){
    if(!Array.isArray(e)){
      tarr.push(e)
    } else{
      for (var a in e) {
        flat(e[a]);
      }
    }
    
  }
  arr.forEach(flat);
  return tarr;
}

console.log(
  steamrollArray([1, [2], [3, [[4]]]])

);
