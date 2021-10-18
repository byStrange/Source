$(function() {

    let div = 'div1'
    let color = [
        'rgb(212,56,54)', '#666E78'
    ]
    let div1 = $('div').eq(0);
    let div2 = $('div').eq(1);
    div1.css({
        background: 'red',
        color: 'white'
    });
    div1.width(100);
    div1.height(100);
    div1.css('display', 'none')
    div1.css('background', 'rgba(255,255,255,.1)');
    div2.width(100);
    div2.height(100);
    div2.css('background', 'rgba(255,255,255,.1)');
    div1.on('click', function(e) {

        div1.hide(1000)
    });
    div2.mouseenter(function(e) {

        div2.fadeOut(1000);
        div2.animate({
            width: '200px'
        }, 1000)
    });
    div2.mouseleave(function(argument) {

        div2.animate({
            width: '100px'
        }, 1000)
    })
    div2.click(function(argument) {

        div2.css({
            transform: 'scale(4,4)'
        });

        $('button').css({
            display: 'inherit'
        })
    })

    $(window).click(function s(e) {

        if (e.target !== document.querySelector('.s')) {
            div2.css({
                transform: 'scale(1,1)'
            })
        }
    })
    $('button').on('click', function() {

        div2.css({
            transform: 'scale(1,1)'
        });
        document.querySelector('button').style.color = 'transparent'
    });
    let inTFile = $(':file');

    function ds() {

        let sad = document.querySelector(`[type="file"]`);
        console.log(navigator.onLine);


    }
    setInterval(ds, 1000)
    console.log(inTFile.val())
})