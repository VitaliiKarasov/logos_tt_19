let colors = document.querySelectorAll('ol>li')
for (let i = 0; i < colors.length; i++) {
    colors[i].onclick = function() {
        this.style.color = colors[i].textContent
    }
}

