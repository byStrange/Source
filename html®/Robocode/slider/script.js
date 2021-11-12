var images = [];
var i = 0; // This is start point 
var ms = 1000;
images[0] = 'img/cool-background.png';
images[1] = 'img/sea-edge-79ab30e2.png';
images[2] = 'img/ranger-4df6c1b6.png';
function slideRight() {
    document.sliderImg.src = images[i];
    if (i < images.length - 1) {
        i++
    }
    else {
        i = images.length - 1 
    }
    console.log(i)
}
function slideLeft() {
    document.sliderImg.src = images[i];
    i-=1
    if( i < 0) {
        i = 0
    }
    console.log(i)
}
//    setInterval(slide, ms)
//window.onload = slide
$(function() {
    
       function setPos() {
           const requiredWidth = $('section.slider-section').offset().left;
    const requiredPosition = $('section.slider-section').innerWidth()
            $('left').css({
            width: requiredWidth+'px'
        })
        $('right').css({
            width: requiredWidth+'px',
            left: requiredPosition + requiredWidth + 'px'
        })
           console.log('some')
       }
    setInterval(setPos,100)
    $(window).resize(setPos)    
})
//window.onclick = function (e){
//    var sp = document.createElement('span');
//    sp.style = `
//        position: absolute;
//        top:${e.clientY}px;
//        left:${e.clientX}px;
//        width: 5px;
//        height: 5px;
//        border-radius:50%;
//        background: rgba(255,255,255,.2)
//`;
//    document.body.appendChild(sp)
//    anime({
//        targets: sp,
//        loop: false,
//        scale: [1,10],
//        opacity: [1,0]
//    })
//}
document.querySelector('left').onmousedown = ripple;
document.querySelector('right').onmousedown = ripple
    function ripple(e){
    var sp = document.createElement('span');
    sp.style = `
        position: absolute;
        top:${e.pageY - e.offsetY}px;
        left:${e.pageX - e.offsetX}px;
        width: 100px;
        height: 100px;
        border-radius:50%;
        background: rgba(255,255,255,.2);
`;
    anime({
        targets: sp,
        loop: false,
        scale: {
            value: [1,100],
            duration: 3500
        },
        opacity: {
            value: [.3,0],
            duration: 1000
        },
        duration: 3500
    })
            this.appendChild(sp)

    spans = document.querySelectorAll('span');
    for(let a = 0; a < spans.length; a++) {
        if((a == spans.length - 1)) {
            console.log( spans[a])
        }
        
    }
}