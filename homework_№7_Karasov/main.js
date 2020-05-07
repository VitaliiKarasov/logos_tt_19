
// let user = new Object();
//     user.firstName = 'Ivan';
//     user.secondName = 'Ivanov';
//     user.showData = function(){
//       return console.log(this.firstName, this.secondName )
//     }


//    let newUser = Object.assign({}, user);
//     newUser.firstName = 'Petro';
//     newUser.secondName = 'Petriv';

//     user.showData();
//     newUser.showData();



// 2 task

let MyMath = new Object();
MyMath.a = 5;
MyMath.b = 2;
 
MyMath.sum = function() {
     return console.log(this.a + this.b)
     
}

MyMath.multiplication = function() {
   return console.log(this.a * this.b)
}

MyMath.division = function() {
     return console.log(this.a / this.b)
     
}
MyMath.substraction = function() {
     return console.log(this.a - this.b)
}

MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.substraction()

                



