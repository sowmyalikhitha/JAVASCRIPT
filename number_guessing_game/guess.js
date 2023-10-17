const random = Math.floor(Math.random()*6 + 1);
let guesses = 0;

document.getElementById("submit").onclick = function(){
    let input=document.getElementById("guessinput").value;
    guesses+=1;

    if(random == input){
       // alert(`${input} is the number`); //count
        document.getElementById("output").innerHTML = "YOU WON THE GAME";
    }
    else{
      //  alert(`Better luck next time`);
        document.getElementById("output").innerHTML = "YOU LOSE THE GAME!! TRY AGAIN NEXT TIME";
    }

}