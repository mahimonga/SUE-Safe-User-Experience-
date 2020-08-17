//got bug here will update it soon
function double_slash_redirecting(){
  var url = window.location.href,
  double_slash = url.split('//')[1];
  if (double_slash) {
    console.log("Danger");
    return -1;}
  else {
    console.log("Safe");
    return 1;}
}
