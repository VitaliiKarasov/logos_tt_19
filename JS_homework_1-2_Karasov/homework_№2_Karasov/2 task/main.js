let user = prompt('Name')

if(user == 'Vitalii'){
    alert("Enter Password")
}

else if(user == "" || user == null){
    alert("Dismiss")
}
else{
    alert("Sorry, I'm not sure that I know you")
}

let password = prompt("Password")

if(password == "LOGOS"){
    alert("Approved")
}
else if(password == "" || password == null){
    alert("Dismiss")
}
else{
    alert("Password is incorrect")
}