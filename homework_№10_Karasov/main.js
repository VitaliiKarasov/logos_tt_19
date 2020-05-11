// 1  task

// function arrCopy(arr){
//     if(Array.isArray(arr)){
//         copy = arr.slice(0);
//         for(i = 0; i<copy.length;i++){
//             copy[i] = arrCopy(copy[i]);
//         }
//         return copy;
//     } else{
//         return arr;
//     }
// }
// const arr = ([1,2,3])
// const arr1 = ([1,2,3,[10,20]])
// console.log(arr)
// console.log(arr1)

//2 task 

// function arrToString(arr){
//     return arr.join();
// }

// const arr1 = arrToString([1,2,3]);
// const arr2 = arrToString([10,200,30])
// console.log(arr1)
// console.log(arr2)

// 3 task 

// function getLength(arr){
//     let result = [];
//     for(key in arr)
//     result[key] = arr[key].length
//     return result
// }
// let arr1 = getLength(['Ivan','Petro','Ira'])
// console.log(arr1)

//4 task 

function removeDuplicates(arr){
const uniqueSet = new Set(arr);
return uniqueSet;
}
const arr1 = removeDuplicates(['html','html','css','css','javascript','scss']);
console.log(arr1)