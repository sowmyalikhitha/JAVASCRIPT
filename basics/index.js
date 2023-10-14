//variables

let age; // declare
age = 25; // assign //number
let firstName="sowmya"; //string
let student =true; //boolean

let agestring="25";
agestring+=age; //concatenates

console.log(age);
console.log(firstName);
console.log(student);
console.log(agestring);

document.getElementById("p1").innerHTML=firstName;

// How to accept user input
//easy way with window prompt
// let username= window.prompt("what's your name ?");
// console.log(username);

//difficult way
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
document.getElementById("myLabel").innerHTML = username;
}

