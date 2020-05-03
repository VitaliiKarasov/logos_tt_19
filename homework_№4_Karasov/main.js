let pass = prompt('Enter password');
let triesCounted = 4;

while (pass != 1234 && triesCounted > 0) {
    triesCounted--
    alert('You have only ' + triesCounted + ' tries left');
    pass = prompt('Enter password');

}
if (pass = 1234) {
    alert('Welcome');
}


else {
    alert('Please, try later!');
}

