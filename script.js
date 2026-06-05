JavaScript

function quote() {
  let service =
    document.getElementById("service").value;
  let size =
    document.getElementById("size").value;

let lowPrice = 0;
let highPrice = 0;

if (service == "mulch") {
  lowPrice = size * 1.50;
  highPrice = size * 2.50;
}

if (service == "cleanup") {
  lowPrice = size * 50;
  highPrice = size * 100;
}

if (service == "hedges") {
  lowPrice = size * 35;
  highPrice = size * 50;
}

  document.getElementById("result").innerHTML =
    "Estimated Range: $" +
    lowPrice.tofixed(0) +
    " - $" +
    highPrice.tofixed(0);
}
  
  
