let div = document.querySelector('.hide');
window.addEventListener(`mousemove`, function name(e) {
    // body...


    div.style.position = `absolute`;
    div.style.top = `${e.clientY}px`;
    div.style.left = `${e.clientX}px`;
})
window.onload = function() {
    // body...
    div.style.background = `linear-gradient(to left,rgba(${Math.round(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.round(Math.random()*255)} ,${Math.random()}) , rgba(${Math.floor(Math.random()*255)}, ${Math.round(Math.random()*255)},${Math.floor(Math.random()*255)} ,${Math.random()}) )`
    console.log(div.style.background)
}
const settingsKey = document.querySelector('.settings');
const settingsLine1 = document.querySelector('.line1');
const settingsLine2 = document.querySelector('.line2');
const settingsLine3 = document.querySelector('.line3');
settingsKey.addEventListener('click', function() {
    settingsLine1.classList.toggle('for1');

    settingsLine2.classList.toggle('none');
    settingsLine3.classList.toggle('for3');
})
let hidden = document.querySelector('.hiddenContent');

settingsKey.onclick = function() {
    div.classList.toggle('cls')
        // body...

    if (settingsLine2.classList == 'line2 none') {
        hidden.style.display = 'initial';


    } else {
        hidden.style.display = 'none';



    }
}
let save = document.querySelector('.submit')
let cint = document.querySelector('#circle')
let bint = document.querySelector('#text')
let hint = document.querySelector('#width')
let wint = document.querySelector('#height')
let reset = document.querySelector('.reset')
save.onclick = function() {
    if (this.innerText == 'Default') {
        document.body.style.background = 'linear-gradient(to right, rgba(218, 119, 65, 0.458824), rgba(56, 182, 216, 0.34902));'
        this.innerText = 'save'
    }
    wint.value *= 1
    hint.value *= 1

    div.style.background = cint.value;
    div.style.width = wint.value + 'px';
    div.style.height = hint.value + 'px';
    document.body.style.background = bint.value
    if (cint.value == '') {
        div.style.background = `linear-gradient(to left,rgba(${Math.round(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.round(Math.random()*255)} ,${Math.random()}) , rgba(${Math.floor(Math.random()*255)}, ${Math.round(Math.random()*255)},${Math.floor(Math.random()*255)} ,${Math.random()}) )`
    } else if (wint.value == NaN) {
        console.log('trawa')
    }
    console.log(wint.value)

}
reset.addEventListener('click', function() {
    cint.value = ''
    bint.value = ''
    hint.value = ''
    wint.value = ''
    div.style.width = '100px'
    div.style.height = '100px';
    save.innerText = 'Default'
})