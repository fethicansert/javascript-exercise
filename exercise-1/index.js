let name;
let surname;
let age;
let rank;

document.getElementById("submit").onclick =async function(){
    
    name = document.getElementById("text-name").value;
    surname = document.getElementById("text-surname").value;
    age = document.getElementById("text-age").value;
    rank = document.getElementById("text-rank").value;
    console.log(name,surname,age,rank);
    
    

   await sleep(1000);

    document.getElementById("name").innerHTML = name;
    document.getElementById("surname").innerHTML = surname;
    document.getElementById("age").innerHTML =age;
    document.getElementById("rank").innerHTML = rank;
}

document.getElementById("clear").onclick = function(){
    
    document.getElementById("text-name").value = "";
    document.getElementById("text-surname").value = "";
    document.getElementById("text-age").value = "";
    document.getElementById("text-rank").value = "";
 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}