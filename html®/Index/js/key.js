window.onkeydown = setter
document.querySelector('input').keydown = setter
window.onload = function () {
    console.error('Happy Hacking :)')
    if (!window['anime']) {
        alert('The anime library must be included before the key.js file.  The plugin will not work propery.')
    }
}

function color(a) {
    return `linear-gradient(to left , rgb(${Math.floor(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)},${Math.round(Math.random() * 255)}), rgb(${Math.round(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.ceil(Math.random() * a)}))`
}

function setter(e) {
    if (e.keyCode == 32) {
        document.querySelector('h1').innerHTML = 'Space'
    } else {
        document.querySelector('h1').innerHTML = `${e.key}`

    }

    // let randomColor = `rgb(${Math.random()* 100}%,${Math.random()*100}%,${Math.random()*100}%)`
    // document.querySelector('h1').style.color = randomColor;
    // document.querySelector('h1').style.textShadow = `-5px 0px 0px	 ${randomColor}`;	
    let items = document.querySelectorAll('.texts');
    document.querySelector('input').value = document.querySelector('input').value.slice(0, 0)
    items[0].innerHTML = e.keyCode;
    items[1].innerHTML = Math.round(e.timeStamp);
    items[2].innerHTML = e.code;
    items[3].innerHTML = e.keyIdentifier
    const text = document.querySelector('h1');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    anime({
        targets: 'span',
        delay: anime.stagger(100),
        translateY: [function () {
            return anime.random(-600, 600)
        }, 0],
        opacity: [0, 1],
        translateX: [function () {
            return anime.random(-600, 600)
        }, 0],
        // scale: [10,1],
        rotate: [360, 0],
        duration: 1000,
    })


}

function checkDevice() {

    if (window.innerWidth < 600) {
        document.querySelector('input').style.display = "inline-block"
    } else {
        document.querySelector('input').style.display = "none"
    }
}
checkDevice()

window.onresize = function () {
    checkDevice()
}
anime({
    targets: '.modals',
    translateY: -100,
    duration: 0
})
document.querySelector('.container-fluid').style.background = color(255)
window.onmousemove = function mouseCheck(e) {
    if (e.clientY < 70) {

        anime({
            targets: '.modals',
            translateY: 10,
        })
    } else {
        anime({
            targets: '.modals',
            translateY: -100,
        })
    }
}

document.querySelector('[data-change="true"]').onclick = function () {
    document.querySelector('.container-fluid').style.background = color(255)
}