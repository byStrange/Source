$(function() {
    $('.smoothScroll').click(function() {
        $('.smoothScroll').removeClass('active')
        $(this).addClass('active')
    })
    $('.load').fadeOut(1500)
})
$(function($) {

        "use strict";






        $('.home-slider').owlCarousel({
            // animateOut: 'fadeOut',
            items: 1,
            loop: true,
            dots: false,
            // nav : true,
            autoplayHoverPause: false,
            // autoplay: true,
            smartSpeed: 1000,
        })

        $('.owl-courses').owlCarousel({
            // animateOut: 'fadeOut',
            loop: true,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 1000,
            dots: false,
            nav: true,
            // navText: [
            //     '<i class="fa fa-angle-left"></i>',
            //     '<i class="fa fa-angle-right"></i>'
            // ],
            // responsiveClass: true,
            // responsive: {
            //   0: {
            //     items: 1,
            //   },
            //   1000: {
            //     items: 3,
            //   }
            // }
        });

        $('.owl-client').owlCarousel({
            // animateOut: 'fadeOut',
            loop: true,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 1000,
            // responsiveClass: true,
            // responsive: {
            //   0: {
            //     items: 1,
            //   },
            //   1000: {
            //     items: 3,
            //   }
            // }
        });


        // SMOOTHSCROLL
        // $(function() {
        //   $('.custom-navbar a, #home a').on('click', function(event) {
        //     var $anchor = $(this);
        //       $('html, body').stop().animate({
        //         scrollTop: $($anchor.attr('href')).offset().top - 49
        //       }, 1000);
        //         event.preventDefault();
        //   });
        // });  
        let typed = new Typed('.text1', {
            typeSpeed: 20,
            backSpeed: 20,
            startDelay: 2000,
            strings: ['Hello', 'Welcome!', 'I wanna introduce you', 'About <a href=# class=links>myself</a>', 'About My <a class=links href=#> Skills</a>', 'About My <a class=links>works</a>']
        })
    })
    //     if ($('div.owl-item').hasClass('active')) {alert()}
    // });