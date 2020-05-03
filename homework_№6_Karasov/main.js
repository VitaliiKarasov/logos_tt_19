// 1 task 
// let m = function (fib){
//     if(fib == 1 || fib == 2 ){
//         return 1;

//     } else {

//         return m (fib - 1) + m (fib - 2);
//     }
// } 
// console.log((10))





// 2 task 

// / let gProgression=function(i, s){

//     let suma=(1-(s**i))/(1-s);
//     return console.log(suma)
// }
// gProgression(5,5)



// // let gProgression=function(number, denominator){
// //     let sum=0;
// //      let result=1;
// //   for ( let i=1, step1=1, suma=0; i<=number; i++, step1=step1*denominator, result=step1){
// //     sum+=result; 
// //  }
// //      console.log(sum)
// // }       
// // gProgression(5, 5)




// 3 task

let number = (start, end) => {

    for (let i = start; i <= end; i++) {
        let count = 0;
        for (let j = 2; j < i; j++) {
            if (i % j) { continue; }
            count += 1;
        }
        if (!count) document.write(i + ' ');
    }
}

let start = +prompt('Please enter the first number');
let end = +prompt('Please enter the last number');
number(start, end);
