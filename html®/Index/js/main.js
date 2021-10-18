console.log('getting started ');
$(function() {

})
window.onscroll = function() {
    // body...
    if (scrollY > 75) {
        document.querySelector('header').style.position = 'fixed';
        document.querySelector('header').style.width = `100%`;


        document.querySelector('header').style.zIndexx = 500

    } else if (scrollY > 150) {
        document.querySelector('main').style.opacity = '0.5'
        console.log('poasd')
    } else {
        document.querySelector('header').style.position = 'relative';
        document.querySelector('header').style.width = `98%`;

        document.querySelector('header').style.margin = `0 auto`

    }
}