
// function push(e) {
//     e.preventDefault();
//     let val = document.getElementById("inputId1").value;
//     document.getElementById("inputId2").value = val;
//     return false;
//  }
// працює, але не досить коректно 



let form = document.forms['value']
form.move.addEventListener('click', function(){
    let input = form.input1.value;
    if(input == '') false
    else form.input2.value = input;
    form.input1.value = '';
})

let pHolder = document.forms['placeholder'];
pHolder.placehold.addEventListener('blur',function(){
    let info = pHolder.placehold.value;
    if(info == '') false;
    else{
     pHolder.placehold.placeholder = pHolder.placehold.value;
     pHolder.placehold.value = '';
    }
})





 

