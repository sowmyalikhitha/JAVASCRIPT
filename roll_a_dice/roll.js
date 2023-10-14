
document.getElementById("roll").onclick = function(){
let x = Math.random(); // gives random decimal number b/w 0-1
let x1 = x*6; // gives random decimal number between 0-5
let x2 = Math.floor(x1); // gives a number b/w 1 and 5
let x3 = x2+1; // this gives number b/w 1 & 6

// console.log(x);
// console.log(x1);
// console.log(x2);
document.getElementById("roll1").innerHTML = x3;

let y=Math.floor(Math.random()*6) +1;
document.getElementById("roll2").innerHTML = y;

let z= Math.floor(Math.random()*6) +1;
document.getElementById("roll3").innerHTML = z;

}

