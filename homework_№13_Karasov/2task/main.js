// let key = document.getElementById('keyboard')
// console.log(key)


// let keyCode = [
//     '192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187', '8',
//     '9', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220',
//     '20', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222', '13',
//     '16', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '16',
//     '32'
// ];

// function init(){
//     let out = '';
//     for(let i = 0 ; i<keyCode.length;i++){
//         out += '<div class ="k-key" data = "'+keyCode[i]+'">' + String.fromCharCode(keyCode[i]) + '</div>'
//     }
//     document.querySelector('#keyboard').innerHTML = out;
// }
// init()


// let keyCode = [ 96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 
//     105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 
//     107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 47, 32,13];
// function init(){
//     let out = '';
//     for(let i = 0 ; i<keyCode.length;i++){
//         out += '<div class ="k-key" data = "'+keyCode[i]+'">' + String.fromCharCode(keyCode[i]) + '</div>'
//     }
//     document.querySelector('#keyboard').innerHTML = out;
// }
// init();






let getSel = sel => document.querySelector(sel);

window.addEventListener('keydown', function(e){
    getSel(`#${e.code}`).classList.add('active');
});

window.addEventListener('keyup', function(e){
    getSel(`#${e.code}`).classList.remove('active');
});