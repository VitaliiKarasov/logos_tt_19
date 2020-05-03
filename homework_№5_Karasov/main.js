// let month = prompt("Enter number")

// switch(month){
// case '1':
//     alert('January')
//     break

// case '2':
//     alert('February')
//     break

// case '3':
//     alert('March')
//     break

// case '4':
//     alert('April')
//     break

// case '5':
//     alert('May')
//     break

// case '6':
//     alert('June')
//     break

// case '7':
//     alert('July')
//     break

// case '8':
//     alert('August')
//     break

// case '9':
//     alert('September')
//     break

// case '10':
//     alert('October')
//     break

// case '11':
//     alert('November')
//     break

// case '12':
//     alert('December')
//     break
//     default:
//         alert('Impossible')
//         break
// }




// function isPrime(number) {
//     let prime = number != 1;
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             prime = 'не просте';
//             break;
//         }
//         else {
//             prime = 'просте';
//         }
//     }
//     return prime;

// }
// console.log(isPrime(11));


// function max() {
//     let m = Number.NEGATIVE_INFINITY;
//     // Цикл по всем аргументам, поиск и сохранение наибольшего из них
//     for (let i = 0; i < arguments.length; i++)
//         if (arguments[i] > m) m = arguments[i];
//     // Возвращаем максимальный
//     return m;
// }
// let largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6);
// console.log(largest)