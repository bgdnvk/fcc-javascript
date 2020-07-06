function pairElement(str) {
    const dna = {
      A: "T", T: "A", C: "G", G: "C"
    }
    return [...str].map(x => [x, dna[x]]);
  }
  
  console.log(
  pairElement("GCG")
  );
  
  
  
    