$(function() {
    let s = $('.r')
    let symbols = $('.symbol')
    let equal = $('.equal')
    let sqrt = $('.sqrt')
    let int = $('#in1')
    let clear = $('.red')
    let newIN = $('#circle')
    let save = $('.submit')
    let box = $(':checkbox')
    let colorr = $('#text');
    let reset = $('.reset')
    let me = $('#me')


    reset.dblclick(function res() {
        // body...
        save.text('Save')

    })
    reset.click(function() {
        // body...
        me.val('');
        colorr.val('');
        newIN.val('');
        location.reload()
    })

    save.click(function() {


        // body...
        int.css({
            fontFamily: newIN.val(),
            fontSize: me.val()
        })

        document.body.style.background = colorr.val();


    })

    let math = `${Math.floor(Math.random()*100)}% ${Math.ceil(Math.random()*100)}% ${Math.round(Math.random()*100)}% ${Math.floor(Math.random()*100)}% / ${Math.ceil(Math.random()*100)}% ${Math.round(Math.random()*100)}% ${Math.floor(Math.random()*100)}% ${Math.ceil(Math.random()*100)}%	`


    $('.settings').click(function() {
        // body...
        $('.hiddenContent').slideToggle(400)
        $('.line1').toggleClass('for1');
        $('.line2').fadeToggle(150);
        $('.line3').toggleClass('for3')
    })
    int.css({
        fontSize: '70px',
        color: "#F92372"
    })
    sqrt.css({
        background: 'rgba(35,150,20,.1)'
    })
    equal.css({
        background: "#00D624"
    })


})

function clear() {
    if (document.querySelector('#in1').value == 'undefined' || document.querySelector('#in1').value == 'NaN' || document.querySelector('#in1').value == 'null	') {
        document.querySelector('#in1').value = ''
    }
}
setInterval(clear, 1000)
let arr = document.querySelectorAll('.r')
let math = `${Math.floor(Math.random()*100)}% ${Math.ceil(Math.random()*100)}% ${Math.round(Math.random()*100)}% ${Math.floor(Math.random()*100)}% / ${Math.ceil(Math.random()*100)}% ${Math.round(Math.random()*100)}% ${Math.floor(Math.random()*100)}% ${Math.ceil(Math.random()*100)}%	`

function chekc() {
    if (document.querySelector('[type=checkbox]').checked == true) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.borderRadius = '50%'
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.borderRadius = '0'
        }
    }
}
window.onkeyup = function(e) {
    if (e.key == "Backspace") {
        $('input')[1].value = $('input')[1].value.slice(0, $('input')[1].value.length - 1);
    } else if (e.key == "C" || e.key == "c") {
        $('input')[1].value = ""
    }
}
document
    .querySelectorAll('input')[1]
    .oninput = function() {
        this.value = ""
    }