//userinput with window.prompt
// let a=window.prompt("side a");
// let b=window.prompt("side b");

// let c= Math.sqrt((Math.pow(a,2)+Math.pow(b,2)));
// console.log(c);
document.getElementById("click").onclick=function(){
    
let a=document.getElementById("sidea").value;
a=Number(a);
let b=document.getElementById("sideb").value;
b=Number(b);

let c= Math.sqrt((Math.pow(a,2)+Math.pow(b,2)));

    document.getElementById("output").innerHTML = c;
}
