//easier with regex
function translatePigLatin(str) {
    const regex = /[aeiou]/gi
    let arr = [...str];
   
    if(str[0].match(regex)){
        return str+"way";
    }

    for (e of arr){
        if(e === arr[arr.length-1] &&
            arr.indexOf(e) === arr.length-1){
            return str+"ay";
        }
        if(e.match(regex)){
            let b4 = arr.slice(0, arr.indexOf(e));
            let after = arr.slice(arr.indexOf(e))
            return after.join("")+b4.join("")+"ay"

            break;
        } 
    }
   
  }
  
  console.log(
  translatePigLatin("california")

  );
  console.log(
    translatePigLatin("rhythm")
  );
  console.log(
    translatePigLatin("schwartz")

  );

  console.log(
    translatePigLatin("glove")
  );
  
  console.log(
    translatePigLatin("eight")
  );
  