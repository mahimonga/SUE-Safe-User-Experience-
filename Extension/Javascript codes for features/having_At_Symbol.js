//Using “@” symbol in the URL leads the browser to 
//ignore everything preceding the “@” symbol and 
//the real address often follows the “@” symbol.


function having_At_Symbol(){
  var url = window.location.href,
  at = url.split('@')[1];
  if (at) {
    console.log("Danger");
    return -1;}
  else {
    console.log("Safe");
    return 1;}
}