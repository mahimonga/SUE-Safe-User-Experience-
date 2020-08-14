//If an IP address is used as an alternative of the
// domain name in the URL, 
//such as “http://125.98.3.123/fake.html”, 
//users can be sure that someone is trying to steal their personal information.
// Sometimes, the IP address is even 
//transformed into hexadecimal code as shown in the 
//following link “http://0x58.0xCC.0xCA.0x62/2/paypal.ca/index.html”.
function having_IPhaving_IP_Address(){
    var reg = /\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}/;
    var url = window.location.href
    if(reg.exec(url) == null){
        console.log("Danger");
        return -1;}
    else{
        console.log("Safe");
        return 1;}
}   