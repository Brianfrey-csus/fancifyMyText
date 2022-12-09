
var input = document.getElementById("input");

function showBig(){
    input.style.fontSize = "18px";   
}

document.getElementById("fancy").addEventListener("click", myFancyFunction);

function myFancyFunction() {
    input.style.color = "blue";
    document.getElementById("input").style.textDecoration = "underline";
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol; 
}

function myBoringFunction() {
    input.style.color = "black";
    const rndCol = `rgb(${(255)}, ${(255)}, ${(255)})`;
    document.body.style.backgroundColor = rndCol;
    input.style.fontWeight = 'normal';
    document.getElementById("input").style.textDecoration = "none";
}

function showAlert(){
    alert("Fancy Time!");
    input.style.fontWeight = 'bold';
}

function moo(){
   document.getElementById("input").value = document.getElementById("input").value.toUpperCase();
   var str = document.getElementById("input").value;
   var parts = str.split(".");  
   str = parts.join(". MOO!");
   document.getElementById("input").value = str;
}

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
