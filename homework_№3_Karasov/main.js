// Завдання 3 

// let j = 0;
// for(let i = 1; j <=55; i+=2){
//     console.log(i)
//     j++;
// }





// Завдання 2

// for(let i = 1000; i <=9999; i +=3){
//     console.log(i)
// }


// Завдання 4

        // for(let a=90;a>=0;a-=5){
        //     console.log(a);
        // }




    
// Завдання 5

// let j = 0;


// for(let i = 2; j <=20; i*=2){
//         j++;
//         console.log(i)

// }







// Завдання 1 

// let n = +prompt("Number"); 
// let result = 1; 
// for (let i = 1; i <=n; i++){
//          result *= i; 
// } 
// console.log(result);



// Завдання 6 

// let a=2;
// while(2*a<=10000){
//  a=2*a-1;
//  console.log(a+" ")
// }

//  завдання 7 

// for(let a=-166,i=0; a<100;a=2*a+200, i++){
//         if(a>-100&&(a<-1||a>1))


//         console.log(a)
// }

// Завдання 8 

let number = +prompt("Number");
let deg = +prompt("Degree")
let result = 1;
let j = deg;

if(deg<0)
   j = -deg;
{
    for(let i = 1; i <=j; i++){
        result = result*number;
        
    }
} if (deg < 0){
    result = 1/result;
}

console.log(result);

