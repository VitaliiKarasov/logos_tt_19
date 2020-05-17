let div = document.querySelectorAll('div');
for (let i = 0; i < div.length; i++) {
    div[i].onclick = function() {
        let photo = prompt();
        div[i].style.backgroundImage = `url(${photo})`;
        div[i].style.backgroundSize = 'cover';
    }
}