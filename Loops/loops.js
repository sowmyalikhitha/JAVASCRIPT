//while loop demo

// let userName='';

// while(userName=='' || userName==null){
//     userName = window.prompt("Enter ur name");
// }

// console.log("hello ", userName);

// do{
//     userName = window.prompt("Enter ur name");
// }while(userName=='' || userName==null)

// console.log("hello ", userName);

//nested loop (rectangle)

let symbol = window.prompt('ENTER A SYMBOL');
let row = window.prompt('Enter no of rows');
let column = window.prompt('Enter no of columns');

for(let i=1; i<=row; i++){
    for(let j=1; j<=column; j++){
        document.getElementById("output").innerHTML += symbol;
    }
    document.getElementById("output").innerHTML += "<br></br>";
}