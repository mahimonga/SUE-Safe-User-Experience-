//The dash symbol is rarely used in legitimate URLs.
// Phishers tend to add prefixes or suffixes separated by (-) to the 
//domain name so that users feel that they are dealing with a legitimate webpage
//code for detecting -(dash)
function Prefix_Suffix(){
  var url = window.location.href,
  dash = url.split('-')[1];
  if (dash) {
    console.log("Danger");
    return -1;}
  else {
    console.log("Safe");
    return 1;}
}
