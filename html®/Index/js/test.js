let doc = document.querySelector('.root');
for (let i = 0; i <= 3; i++) {
    let divs = document.createElement('div');
    let text = document.createElement('span');
    text.classList.add('after')
    text.innerText = "Event"
    doc.appendChild(divs);
    divs.classList.add('newElements');
    divs.appendChild(text)
    divs.style.background = randomColor()

    function randomColor() {
        return `linear-gradient(35deg,rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},.4),rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},.4))`
    }
}