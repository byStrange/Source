window.onscroll = function() {
    function cal() {
        if (scrollY > 680) {
            return 0
        } else {
            return .7
        }
    }
    document.querySelector('.text-cont-beginning').style.opacity = cal()
    document.querySelector('.text-cont-beginning').style.transform = `scale(${scrollY/230},${scrollY/230		})`
    if (scrollY < 200) {
        document.querySelector('.text-cont-beginning').style.transform = `scale(1,1)`
        document.querySelector('.text-cont-beginning').style.opacity = 1

    }
    document.querySelector('.container2').style.opacity = (scrollY / 900);
    document.querySelector('.container2').style.transform = `translateX(${scrollY-900}px)`;
    document.querySelector('.container3').style.opacity = scrollY / 1800;
    document.querySelector('.container3').style.transform = `translateX(${scrollY-1800}px)`;
    document.querySelector('.text-cont-end').style.transform = `rotate(${scrollY-1980}deg)`
}
let links = document.querySelectorAll('.links-hit');
let skewedSlider = document.querySelector('.slider');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        skewedSlider.style.display = 'block';
        if (i == 0) {
            skewedSlider.style.top = '15px';
            skewedSlider.style.left = '13.7px'
            window.scroll(0, 0)
        } else if (i == 1) {
            skewedSlider.style.top = '51px';
            skewedSlider.style.left = '13.7px';
            window.scroll(0, 900)
        } else if (i == 2) {
            skewedSlider.style.top = '89px';
            skewedSlider.style.left = '13.7px';
            window.scroll(0, 1800)
        } else if (i == 3) {
            skewedSlider.style.top = '126px';
            skewedSlider.style.left = '13.7px';
            window.scroll(0, 2740)
        }
    }
}