// let username = window.prompt("What is your name?");
// console.log(username);


let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("mylabel").innerHTML = username;
}