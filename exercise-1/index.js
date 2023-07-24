let pi = 3.14159;
let radius;
let circumtance;

document.getElementById("button").onclick = function(){
    radius = window.prompt("Enter the radius");
    radius = Number(radius);
    circumtance= Math.round(radius*pi*2);
    document.getElementById("result").innerHTML=circumtance; 
}