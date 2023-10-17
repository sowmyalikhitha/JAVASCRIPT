// document.getElementById("checkbutton").onclick=function(){
//     if(document.getElementById("check").checked){
//         document.getElementById("output").innerHTML = "CHECKBOX IS CHECKED";
//     }
//     else{
//         document.getElementById("output").innerHTML = "CHECK BOX IS NOT CHECKED";
//     }
// }

document.getElementById("radiobutton").onclick=function(){
    let radio1= document.getElementById("radio1");
    let radio2= document.getElementById("radio2");
    let radio3= document.getElementById("radio3");

    if(radio1.checked || radio2.checked || radio3.checked){
        console.log("clicked");
        document.getElementById("radiooutput").innerHTML = "RADIO IS CHECKED"; //else if to check which radio is checked.
    }
    else{
        document.getElementById("radiooutput").innerHTML = "RADIO IS NOT CHECKED";
    }
}


document.getElementById("radiobutton").onclick=function(){
    let radio1= document.getElementById("radio1");
    let radio2= document.getElementById("radio2");
    let radio3= document.getElementById("radio3");
    var count=1;

    if(radio1.checked && radio2.checked && radio3.checked){
        count=3;
    }
    else if(radio3.checked && radio1.checked || radio1.checked && radio2.checked || radio2.checked && radio3.checked){
        count=2;
    }
    else if(radio3.checked || radio1.checked || radio2.checked){
        count=1;
    }
    else{
        count=0;
    }
    document.getElementById("radiooutput").innerHTML = count;
}



