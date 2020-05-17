let bgColor = prompt ('Enter background color');
document.body.style.backgroundColor = bgColor;

let fontType = prompt ('Enter font type');
document.body.style.fontStyle = fontType;

let textAlign = prompt ('Enter text align for a title' );
const title = document.querySelector('h1');
title.style.textAlign = textAlign;

let backgroundParagraph = prompt('Enter background color of paragraph');
let colorParagrapg = prompt('Enter color of paragraphs text');
const paragraph = document.querySelector('p');
paragraph.style.backgroundColor = backgroundParagraph;
paragraph.style.color = colorParagrapg;

let colorOfdivStyle = prompt('Enter color of div elements');
let fontWeightOfdivStyle = prompt('Enter font-weight');
let fontSizeOfdivStyle = prompt('Enter font-size');
const div = document.querySelector('div');
div.style.color = colorOfdivStyle;
div.style.fontWeight = fontWeightOfdivStyle;
div.style.fontSize = fontSizeOfdivStyle;

for(let i = 1; i <= 3; i++){
    let createLink = prompt(`Write a ${i} link`);
    const link = document.createElement('a');
    link.text = createLink;
    link.target = '_blank';
    p.appendChild(link).href = `http://${createLink}`;
}
let typeOfList = prompt('Enter type of list');
const ulList = document.querySelector('li');
ul.type = typeOfList;

