let d = document;
let doc = d.querySelector('.GameContent')
let c = console;
let rocket = d.querySelector('.RocketContent');
let walls = d.querySelector('.Walls');

function on() {
    // body...
    walls.style.top = `${Math.floor(Math.random()*600)}px`;
    walls.style.left = `${Math.floor(Math.random()*1200)}px`;
    walls.style.width = `${Math.floor(Math.random()*200)}px`;
    walls.style.height = `${Math.round(Math.random()*200)}px`;
    console.log('5000')
}
setInterval(on, 5000);
window.addEventListener('mousemove', FUN);

function FUN(e) {
    // let's go to move...
    rocket.style.top = `${e.clientY}px`;
    rocket.style.left = `${e.clientX}px`;
    // console.log(e.clientY, e.clientX);
    // console.log(walls)
    // c.log(rocket)
    d.querySelector('.LosenContent').style.display = 'none'
    if (e.target == walls) {
        d.querySelector('.LosenContent').style.display = 'flex';
        c.log(d.querySelector('.LosenContent').style.transform)
            // window.close()
        c.log('salom');
        else {
            getElementsByTagName('');

        }

    }
}

// doc.createElement('div');
c.log(d)



walls.style.top = `${Math.floor(Math.random()*400)}px`;
walls.style.left = `${Math.round(Math.random()*400)}px`
walls.style.width = `${Math.floor(Math.random()*200)}px`;
walls.style.height = `${Math.round(Math.random()*200)}px`;
console.log(walls.style.width);
c.log(Math.floor(Math.random() * 200))
if (walls.style.width < '100px') {
    walls.style.width = '200px';
    console.log(walls.style.width)

} else if (walls.style.height < 100) {
    walls.style.height = '200px'
}
getElementsByTagName('salom').style.salom = ;
sad