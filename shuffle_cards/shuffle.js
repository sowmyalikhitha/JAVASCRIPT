let cards=['k','Q','J','10','9','8','7','6','5','4','3','2','A'];

shuffle(cards);
console.log(cards);

cards.forEach(card => console.log(card));

function shuffle(array){
    let currentindex = array.length;

    while(currentindex!=0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentindex-=1;

        let temp=array[currentindex];
        array[randomIndex] = array[currentindex];
        array[randomIndex] = temp;
    } return array;
}