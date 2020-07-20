document.querySelector('#edit').addEventListener('click', function() {
	document.querySelector('.edit-panel').style.display = 'flex';
	document.querySelector('#area').value = document.querySelector('.paragraphs').innerHTML;
	document.querySelector('.style-panel').style.display = 'none';
	document.querySelector('.rgbColors').style.display = 'none';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#save').addEventListener('click', function() {
	document.querySelector('.edit-panel').style.display = 'none';
	document.querySelector('.paragraphs').innerHTML = document.querySelector('#area').value;
});

document.querySelector('#style').addEventListener('click', function() {
	document.querySelector('.style-panel').style.display = 'block';
	document.querySelector('.edit-panel').style.display = 'none';
});

let f1 = document.forms['f1'];
for (let i = 0; i < f1.elements.length; i++) {
	f1.elements[i].addEventListener('click', function() {
		document.querySelector('.paragraphs').style.fontSize = this.value;
	});
}

let f2 = document.forms['f2'];
f2.fontFamily.addEventListener('change', function() {
	for (let i = 0; i < f2.fontFamily.options.length; i++) {
		if (f2.fontFamily.options[i].selected) {
			document.querySelector('.paragraphs').style.fontFamily = this.value;
		}
	}
});

document.forms['f4'].bold.addEventListener('click', function() {
	if (f4.bold.checked) {
		document.querySelector('.header').style.fontWeight = this.value;
	} else {
		document.querySelector('.header').style.fontWeight = 'normal';
	}
});

document.forms['f4'].italic.addEventListener('click', function() {
	if (f4.italic.checked) {
		document.querySelector('.header').style.fontStyle = this.value;
	} else {
		document.querySelector('.header').style.fontStyle = 'normal';
	}
});

document.querySelector('.createTable').addEventListener('click', function() {
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
	console.log(str);
	let f0 = document.forms[`f0`];
	f0.area.value = f0.area.value + str;
	document.querySelector('.blockTable').style.display = 'none';
	document.querySelector('.blockForTableAndList').style.display = 'none';
	document.querySelector('.main').style.display = 'flex';
});

document.querySelector(`.createList`).addEventListener('click', function() {
	str = ``;
	let z = ``;
	for (let i = 0; i < document.forms.listForm.amount.value; i++) {
		z += `<li>Item ${i + 1} </li>`;
	}
	str = `<ul type=${document.forms.listForm.typeOfMarker.value}>  ${z}  </ul>`;
	console.log(document.forms.listForm.amount.value);

	document.forms[`f0`].area.value = document.forms[`f0`].area.value + str;

	document.querySelector('.blockList').style.display = 'none';
	document.querySelector('.blockForTableAndList').style.display = 'none';
	document.querySelector('.main').style.display = 'flex';
});

document.querySelector('#backgroundColor').addEventListener('click', function() {
	document.querySelector('.rgbColors').style.display = 'flex';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#colorOfText').addEventListener('click', function() {
	document.querySelector('.rgbColorsBackground').style.display = 'flex';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors1').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(204, 31, 31)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors2').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(54, 54, 209)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors3').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(13, 153, 13)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors4').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(10, 10, 10)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors5').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(241, 212, 43)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors6').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'palevioletred';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors7').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'white';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors8').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(175, 22, 175)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors9').addEventListener('click', function() {
	document.querySelector('.header').style.backgroundColor = 'rgb(29, 123, 151)';
	document.querySelector('.rgbColors').style.display = 'none';
});

document.querySelector('#blockColors1Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(204, 31, 31)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors2Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(54, 54, 209)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors3Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(13, 153, 13)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors4Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(10, 10, 10)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors5Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(241, 212, 43)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors6Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'palevioletred';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors7Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'white';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors8Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(175, 22, 175)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors9Enother').addEventListener('click', function() {
	document.querySelector('.header').style.color = 'rgb(29, 123, 151)';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#add').addEventListener('click', function() {
	document.querySelector('.main').style.display = 'none';
	document.querySelector('.blockForTableAndList').style.display = 'flex';
});

document.forms['tableAndListBlock'].list.addEventListener('click', function() {
	if (tableAndListBlock.list.checked) {
		document.querySelector('.blockList').style.display = 'flex';
		document.querySelector('.blockTable').style.display = 'none';
	} else {
		document.querySelector('.blockList').style.display = 'none';
	}
});

document.forms['tableAndListBlock'].table.addEventListener('click', function() {
	if (tableAndListBlock.table.checked) {
		document.querySelector('.blockTable').style.display = 'flex';
		document.querySelector('.blockList').style.display = 'none';
	} else {
		document.querySelector('.blockTable').style.display = 'none';
	}
});
