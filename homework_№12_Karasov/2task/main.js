let div = document.querySelector('div')
div.style.width = '350px'
div.style.height = '350px'
div.style.backgroundColor = 'lightgreen'
div.style.margin = '0 auto'
div.style.marginTop = '10px'
div.style.border = '4px solid black'
div.style.paddingLeft = '70px'
div.style.fontSize = '30px'

div.onmouseover = function () {
    this.style.backgroundColor = 'yellow'
    this.style.border = '4px solid orange'
    this.textContent = 'Хочеш знати який ?'
    this.style.paddingLeft = '60px'
    this.style.color = 'blue'

}

div.onmousedown = function () {
    this.style.backgroundColor = 'black'
    this.style.border = '4px solid red'
    this.textContent = 'А я тобі не скажу!'
    this.style.paddingLeft = '60px'
    this.style.color = 'white'

}

div.onmouseup = function () {
    this.style.backgroundColor = 'yellow'
    this.style.border = '4px solid orange'
    this.textContent = 'Хочеш знати який ?'
    this.style.paddingLeft = '60px'
    this.style.color = 'blue'

}
div.onmouseout = function () {
    this.style.width = '350px'
    this.style.height = '350px'
    this.style.backgroundColor = 'lightgreen'
    this.textContent = 'У мене є секрет'
    this.style.color = 'black'
    this.style.margin = '0 auto'
    this.style.marginTop = '10px'
    this.style.border = '4px solid black'
    this.style.paddingLeft = '70px'
    this.style.fontSize = '30px'

}
