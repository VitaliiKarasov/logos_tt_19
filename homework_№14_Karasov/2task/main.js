let f1 = document.forms['f1'];
f1.agreeChecked.addEventListener('click', function () {
	document.querySelector('#buttonSignIn').disabled = !this.checked;
});

document.querySelector('#buttonSignIn').addEventListener('click', function () {
	document.querySelector('.signInForm').style.display = 'none';
	document.querySelector('.peopleInformation').style.display = 'block';

	document.querySelector('#buttonSignIn').disabled = !this.checked;

	document.querySelector('.infoName').innerHTML = f1.firstName.value;
	document.querySelector('.infoLastName').innerHTML = f1.secondName.value;
	document.querySelector('.mail').innerHTML = f1.email.value;
});

document.forms['f1'].woman.addEventListener('click', function () {
	if (f1.woman.checked) {
		document.querySelector('.images').style.backgroundImage = this.value;
	}
});

document.forms['f1'].man.addEventListener('click', function () {
	if (f1.man.checked) {
		document.querySelector('.images').style.backgroundImage = this.value;
	}
});

f1.position.addEventListener('change', function () {
	for (let i = 0; i < f1.position.children.length; i++) {
		document.querySelector('.infoPosition').innerText = this.value;
	}
});

document.querySelector('#signOut').addEventListener('click', function () {
	document.querySelector('.signInForm').style.display = 'block';
	document.querySelector('.peopleInformation').style.display = 'none';
	document.forms['f1'].reset();
});