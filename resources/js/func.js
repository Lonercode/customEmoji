
function convert(){
const val = document.getElementById("typed").value;
if (val.startsWith('U+')){
    const val2 = val.replaceAll('U+', '&#x')
    document.getElementById("result").innerHTML = val2;
}
else if (val.startsWith('&#x')){
    document.getElementById("result").innerHTML = val;
}
else{
document.getElementById("result").innerHTML = "Sorry, cannot determine.";
}
}