let name = prompt('Wtite your name')
let mainHeight = prompt("Main div height")
let mainWidth = prompt("Main div width")
let mainBackground = prompt("Main div background")
let secondHeight = prompt("Second div height")
let secondWidth = prompt("Second div width")
let secondBackground = prompt("Second div background")
let margin = 'auto'
let display = 'flex'
let center = 'center';
let space = 'space-evenly';
let column = 'column';
let backgroundSize = 'cover';

document.write(`<div style="margin:${margin};width:${mainWidth}px;height:${mainHeight}px;background:${mainBackground};display:${display};flex-direction:${column};align-items:${center};justify-content:${space};"><div style="width:${secondWidth}px;height:${secondHeight}px;background-image:url(${secondBackground});background-size:${backgroundSize};"></div><h2>Welcome, ${name}</h2></div>`)



