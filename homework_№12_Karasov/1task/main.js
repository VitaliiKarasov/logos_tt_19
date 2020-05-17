let div = document.querySelector('div')
div.style.width = '350px'
div.style.height = '350px'
div.style.backgroundColor = 'blueviolet'
div.style.margin = '0 auto'
div.style.border = '2px solid black'
let index = 0;
let color = ['red', 'yellow', 'green'];
div.onmouseover = function () {
    this.style.backgroundColor = color[index]
    index++;
    if (index >= color.length) {
        index = 0;
    }
}

div.onmouseout = function () {
    this.style.backgroundColor = 'blueviolet';
}
