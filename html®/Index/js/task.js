$(function() {
    // body...
    let x = $('.xor');
    let hidden = $('.includes');
    let add = $('.add');
    let request = $('.request');
    let title = $('.title').text();
    let text = $('.includes').text();

    let setTitle = $('#input');
    let setText = $('#input2');

    let exit = $('.x');
    let remove = $('.remove');
    let submit = $('.btn2');
    let div = $('.desk');
    let child = $('.value');
    let xh = document.querySelector('.includes')
    console.log(x)



    add.click(function() {
            // body...
            request.slideDown(500);
            setTitle.val('');
            setText.val('');
        })
        // x.click(function () {
        // 	// body...
        // 	hidden.slideToggle();
        // 	x.toggleClass('tra')
        // })
    exit.click(function() {
        // body...
        request.slideUp(500)
    })

    submit.on({

        click: function() {
            div.removeClass('Xclass')
                // body...
            div.removeClass('Xclass')
            request.slideUp()
            div.append(`<div class="value">
					<span class="xor xo" id="xor" >&times</span>
			
					<p class="title" title=title>${setTitle.val()}</p>
					
					<p class="includes " title=text>${setText.val()}</p>
				</div>
			 `)





            let newc = $('.xor');
            newc.click(function() {

                    $(this).parent().hide(1);
                    console.log($(this).siblings().eq(1));
                    add.css({
                        visibility: 'visible'
                    })
                })
                // 		

        }


    })




    console.log($('.request').height())
    let rang = `linear-gradient(to left , rgb(${Math.floor(Math.random()*255) }, ${Math.ceil(Math.random()*255)},${Math.round(Math.random()*255)}), rgb(${Math.round(Math.random()*255) }, ${Math.floor(Math.random()*255)},${Math.ceil(Math.random()*255)}))`
    $('body').css({
        background: rang
    })
    console.log(rang)



})