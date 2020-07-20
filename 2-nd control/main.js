// Style text

let isBold = false;

function changeFontWeight() {
	if (isBold) {
		document.querySelector('.text').style.fontWeight = 'normal';
	} else {
		document.querySelector('.text').style.fontWeight = 'bold';
	}
	isBold = !isBold;
}

let isItalic = false;

function changeFontStyle() {
	if (isItalic) {
		document.querySelector('.text').style.fontStyle = 'normal';
	} else {
		document.querySelector('.text').style.fontStyle = 'italic';
	}
	isItalic = !isItalic;
}

let isUnderline = false;

function changeTextDecorationToUnderline() {
	isUnderline = !isUnderline;
	changeTextDecoration();
}

let isLineThrough = false;

function changeTextDecorationToLineThrough() {
	isLineThrough = !isLineThrough;
	changeTextDecoration();
}

function changeTextDecoration() {
	if (isUnderline & isLineThrough) {
		document.querySelector('.text').style.textDecoration = 'underline line-through';
	} else if (!isUnderline & !isLineThrough) {
		document.querySelector('.text').style.textDecoration = 'none';
	} else if (isUnderline) {
		document.querySelector('.text').style.textDecoration = 'underline';
	} else if (isLineThrough) {
		document.querySelector('.text').style.textDecoration = 'line-through';
	}
}

function changeTextAlign(textAlign) {
	document.querySelector('.text').style.textAlign = textAlign;
}

function changeFontSize(fontSize) {
	document.querySelector('.text').style.fontSize = fontSize;
}

function changeFontFamily(fontFamily) {
	document.querySelector('.text').style.fontFamily = fontFamily;
}

// Style background

function colorText() {
	document.querySelector('#colorsForFontColor').style.display = 'flex';
}

function backgroundColor() {
	document.querySelector('#colorsForBackground').style.display = 'flex';
	document.querySelector('.backgroundColors').style.display = 'none';
	document.querySelector('#filesForBackground').style.display = 'none';
}

function backgroundPhoto() {
	document.querySelector('.backgroundColors').style.display = 'flex';
	document.querySelector('#colorsForBackground').style.display = 'none';
	document.querySelector('#filesForBackground').style.display = 'none';
}

function chooseFilesForBackground() {
	document.querySelector('#filesForBackground').style.display = 'flex';
	document.querySelector('.backgroundColors').style.display = 'none';
	document.querySelector('#colorsForBackground').style.display = 'none';
}

function changeFontColor(color) {
	document.querySelector('.text').style.color = window.getComputedStyle(color).getPropertyValue('background-color');
}

function changeBackgroundColor(backgroundColor) {
	document.querySelector('.text').style.backgroundColor = window
		.getComputedStyle(backgroundColor)
		.getPropertyValue('background-color');
	document.querySelector('.text').style.backgroundImage = 'none';
}

function changeBackgroundPhoto(backgroundImage) {
	document.querySelector('.text').style.background = window
		.getComputedStyle(backgroundImage)
		.getPropertyValue('background-image');
}

// Download Files

document.querySelector('#inputGroupFile01').onchange = function() {
	let link = URL.createObjectURL(this.files[0]);
	document.querySelector('.text').style.background = `url(${link})`;
};

// Forms Sign In
// login: admin
// password: admin

function checkFormAuthorization() {
	let testLogin = document.getElementById('validationServerLogin').value;
	let testPassword = document.getElementById('validationServerPassword').value;

	let signInFormLogin = document.getElementsByClassName('signInFormLogin')[0];
	let signInFormPassword = document.getElementsByClassName('signInFormPassword')[0];
	if (testLogin == 'admin' && testPassword == 'admin') {
		signInFormLogin.classList.remove('is-invalid');
		signInFormPassword.classList.remove('is-invalid');
		document.querySelector('#checkValue').innerHTML = '';
		document.querySelector('#exampleModal').style.display = 'none';
		document.querySelector('.modal-backdrop').style.display = 'none';
		document.querySelector('#codeButton').disabled = false;
		document.querySelector('#closedForm').style.display = 'none';
		document.querySelector('#openForm').style.display = 'block';
	}

	if (testLogin == '' || testPassword == '') {
		signInFormLogin.classList.add('is-invalid');
		document.querySelector('#checkValue').innerHTML = 'Value is empty';
		signInFormPassword.classList.add('is-invalid');
	}

	if (testLogin != 'admin' && testPassword != 'admin' && testLogin != '' && testPassword != '') {
		document.querySelector('#checkValue').innerHTML = 'Please check your login or password';
		signInFormLogin.classList.add('is-invalid');
		signInFormPassword.classList.add('is-invalid');
	}
}

// Forms Sign Out

function signOut() {
	document.querySelector('#closedForm').style.display = 'block';
	document.querySelector('#openForm').style.display = 'none';
	document.querySelector('#codeButton').disabled = true;
}

// Hide Block with Buttons and open block for table

function hideAndOpenNewBlockButtons() {
	document.querySelector('.buttonDiv').style.display = 'none';
	document.querySelector('.buttonDivForTable').style.display = 'flex';
	document.querySelector('.text').style.display = 'none';
	document.querySelector('.textConstructor').value = document.querySelector('.text').innerHTML;
	document.querySelector('.textConstructor').style.display = 'block';
}

function forButtonSave() {
	document.querySelector('.buttonDiv').style.display = 'flex';
	document.querySelector('.buttonDivForTable').style.display = 'none';
	document.querySelector('.text').style.display = 'block';
	document.querySelector('.textConstructor').style.display = 'none';
	document.querySelector('.text').innerHTML = document.querySelector('.textConstructor').value;
}

// Create and count Table

function forRenderTable() {
	let emptyInputs = 0;
	for (let count = 0; count < document.tableForm.elements.length; count++) {
		if (document.tableForm.elements[count].value == '') {
			emptyInputs++;
			document.tableForm.elements[count].classList.add('is-invalid');
		} else if (document.tableForm.elements[count].value != '') {
			document.tableForm.elements[count].classList.remove('is-invalid');
			document.querySelector('#valueTable').style.display = 'none';
		}
		if (emptyInputs > 0) {
			document.querySelector('#valueTable').innerText = 'Invalid value.';
			document.querySelector('#valueTable').style.display = 'block';
		}
	}

	if (emptyInputs == 0) {
		let td = ``,
			tr = ``,
			str = ``;
		for (let i = 0; i < tableForm.tr.value; i++) {
			for (let z = 0; z < tableForm.td.value; z++) {
				td += `<td style="width: ${tableForm.wtd.value}px; height: ${tableForm.htd.value}px; border: ${tableForm
					.width.value}px ${tableForm.typeBorder.value} ${tableForm.colorBorder.value};"> TR </td>`;
			}
			tr += `<tr>` + td + `</tr>`;
			td = ``;
		}
		str = `<table >` + tr + `</table>`;
		let textConstructor = document.querySelector('.textConstructor');
		textConstructor.value = textConstructor.value + str;
		document.querySelector('#valueTable').innerText = '';
	}
}

// reset Form for Table

function formResert() {
	for (let i = 0; i < document.tableForm.elements.length; i++) {
		document.tableForm.elements[i].value = '';
	}
}

// Create and count OL

function forRenderOL() {
	var emptyOLInputs = 0;
	for (let count = 0; count < document.listForm.elements.length; count++) {
		if (document.listForm.elements[count].value == '') {
			emptyOLInputs++;
			document.listForm.elements[count].classList.add('is-invalid');
		} else if (document.listForm.elements[count].value != '') {
			document.listForm.elements[count].classList.remove('is-invalid');
		}
		if (emptyOLInputs > 0) {
			document.querySelector('#valueOL').innerText = 'Invalid value.';
		}
	}

	if (emptyOLInputs == 0) {
		let z = ``,
			str = ``;

		for (let i = 0; i < document.forms.listForm.amount.value; i++) {
			z += `<li>Item ${i + 1} </li>`;
		}
		str = `<ol type=${document.forms.listForm.typeOfMarker.value}>  ${z}  </ol>`;
		document.querySelector('.textConstructor').value = document.querySelector('.textConstructor').value + str;
		document.querySelector('#valueOL').innerText = '';
	}
}

// reset table for OL

function formOLResert() {
	for (let i = 0; i < document.listForm.elements.length; i++) {
		document.listForm.elements[i].value = '';
	}
}

// Create and count UL

function forRenderUL() {
	var emptyULInputs = 0;
	for (let count = 0; count < document.listFormUL.elements.length; count++) {
		if (document.listFormUL.elements[count].value == '') {
			emptyULInputs++;
			document.listFormUL.elements[count].classList.add('is-invalid');
		} else if (document.listFormUL.elements[count].value != '') {
			document.listFormUL.elements[count].classList.remove('is-invalid');
		}
		if (emptyULInputs > 0) {
			document.querySelector('#valueUl').innerText = 'Invalid value.';
		}
	}

	if (emptyULInputs == 0) {
		let z = ``,
			str = ``;

		for (let i = 0; i < document.forms.listFormUL.amountUl.value; i++) {
			z += `<li>Item ${i + 1} </li>`;
		}
		str = `<ul type=${document.forms.listFormUL.typeOfMarkerUl.value}>  ${z}  </ul>`;
		document.querySelector('.textConstructor').value = document.querySelector('.textConstructor').value + str;
		document.querySelector('#valueUl').innerText = '';
	}
}

// reset Form for UL
function formULResert() {
	for (let i = 0; i < document.listFormUL.elements.length; i++) {
		document.listFormUL.elements[i].value = '';
	}
}
