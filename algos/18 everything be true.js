function truthCheck(collection, pre) {
    // let count = 0;

    // for(e of collection){
    //     if(e.hasOwnProperty(pre) && e[pre]){
    //         count++;
    //     }
    // }
    // return count === collection.length;
    return collection.every(e => e[pre])
  }

  console.log(
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
  );