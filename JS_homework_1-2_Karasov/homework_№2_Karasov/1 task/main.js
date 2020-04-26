let sum = 0

let firstQ = prompt("2+2")

if(firstQ == 4){
    ++ sum;
}
let secondQ = prompt("7+8")

if(secondQ == 15){
    ++ sum;
}
let thirdQ = prompt("10+8")

if(thirdQ == 18){
    ++ sum;
}
let fourthQ = prompt("9*9")

if(fourthQ == 81){
    ++ sum;
}
let fifthQ = prompt("20+8")

if(fifthQ == 28){
    ++ sum;
}
let sixthQ = prompt("38-18")

if(sixthQ == 20){
    ++ sum;
}
let seventhQ = prompt("77+8")

if(seventhQ == 85){
    ++ sum;
}
let eightQ = prompt("52-48")

if(eightQ == 4){
    ++ sum;
}
let ninthQ = prompt("14+8")

if(ninthQ == 22){
    ++ sum;
}
let tenthQ = prompt("144+6")

if(tenthQ == 150){
    ++ sum;
}

alert("Correct: "+sum+" з 10");

if(sum >= 6 && sum <=8){
    alert("Your level of knowledge is intermediate ")
}  

else if(sum <=6 && sum ==5 ){
    alert("Your level of kmowledge is pre-intermidiate")
}
else if(sum <=4 && sum ==3){
    alert("Your level of knowledge is beginner")
}
else if(sum >=9) {
    alert("Your level of knowledge is advanced")
}
