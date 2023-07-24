// let username = window.prompt("What is your name?");
// console.log(username);
let age;
document.getElementById("button").onclick = function(){
    age = window.prompt("How old are you?");
    document.getElementById("age").innerHTML = age;
    document.getElementById("button-increase").onclick = function(){
        console.log(typeof age);
        age = Number(age);
        console.log(typeof age);
        age += 1; 
        document.getElementById("age").innerHTML = age;
        
    }
}