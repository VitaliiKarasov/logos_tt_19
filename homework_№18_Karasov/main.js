
// 1 task 

// const arr = [1,2,3,4,5];
// let sum = 0;

// arr.forEach(array => sum+=array);

// document.write(sum) 




// 2 task

// const arr = [2,5,3,6,7,8]
// let result = arr.map(x => x*x)
// document.write(result)



// 3 task
// let arr = [
//     {
//         name:'Ivan',
//         country:'Ukraine'
//     },
//     {
//         name:'Petro',
//         country:'Ukraine'
//     },
//     {
//         name:'Miguel',
//         country:'Cuba'
//     },
// ]

// let result = arr.every(arr => arr.country =='Ukraine')
// console.log(result)




// 4 task 

// let arr = [
//     {
//         name:'Ivan',
//         country:'Ukraine'
//     },
//     {
//         name:'Petro',
//         country:'Ukraine'
//     },
//     {
//         name:'Miguel',
//         country:'Cuba'
//     },
// ]

// let result = arr.some(arr => arr.country =='Cuba')
// console.log(result)



// 5 task
// let arr = [1, 'string', [3, 4], 5, [6, 7]];


// function arrFilter() {
//     let newArr = [];
   
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i]))    newArr.push(arr[i])
//     }
//     return  console.log(newArr)
// }


// arrFilter();




// 6 task (1)

// let arr =  [4, 7, 8, 0, 3, 7, 6];
// arr = arr.slice(0, arr.indexof(0));
// const sum = arr.reduce(function(accum, currValue) {
//     return accum + currValue
//     }, 0);
    
//     console.log(sum)

// 6 task(2)

// let n = 0;
// let sum = arr.reduce((sum,number,index,array) => {
//     sum += number;
//     if(sum<10) n++;
//     return n

// })
// console.log(sum)

//  7 task 

let arr = [1,-2,3,0,4,-5,6,-11];
let result = arr.filter(number => number >0)
let d = result.map(x => x*x)
console.log(d)
