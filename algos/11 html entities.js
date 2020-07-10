function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
  
    return str.split("")
    .map(x => htmlEntities[x] || x)
    .join("")
  }
  
  console.log(
    convertHTML("Hamburgers < Pizza < Tacos")
  );
  
  convertHTML("Dolce & Gabbana");
  convertHTML('Stuff in "quotation marks"')
  convertHTML("<>")