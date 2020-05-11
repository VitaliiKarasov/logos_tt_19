// 1 task
// let str = prompt('enter spaces')

// function space_count(str) {
//     let space_Count = 0;
//     for (let position = 0; position < str.length; position++)
//         space_Count += 1;


//     return space_Count;
// }

// alert(space_count(str))

// 2 task
// let email = prompt('Enter valid email')

// if (email.startsWith('@')) {
//     console.log('incorrect email @ can not be at the beginning of an email')
// }
// else if (email.endsWith('@')) {
//     console.log('incorrect email @ can not be at the end of an email')
// }
// else if (email.indexOf('@') > 0 && email.indexOf('@') < email.length - 1) {
//     console.log('Continue');
// }

// 3 task

// function cword(w) {
//     let count = 0;
//     let words = w.split("html");
//     for (i = 0; i < words.length; i++) {

//         if (words[i] != "") {
//             count += 1;
//         }
//     }
//     return (count);
// }
// console.log(cword('html blablabla html html css blablabla js'))

// 4 task 
let urlAddress = prompt('Enter URL')

if (urlAddress.startsWith('https://')) {
    urlAddress = urlAddress.slice(8)
    alert(urlAddress)
}
else (urlAddress.startsWith('http://'))
urlAddress = urlAddress.slice(7)
alert(urlAddress)
