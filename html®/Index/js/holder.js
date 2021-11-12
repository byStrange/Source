// Getting Started

function main() {
    const intro = anime.timeline({
        autoplay: true
    });
    const introAnimation = {
        targets: '.container',
        scale: [0, 1],
        opacity: [0, 1]
    }
    intro.add(introAnimation)
}
window.on('load', main);
///

// function setVariable() {
//     var string = document.documentElement.innerHTML;
//     var length = string.length;
//     var regex = new RegExp('[\\s\\r\\t\\n]*([a-z0-9\\-_]+)[\\s\\r\\t\\n]*=[\\s\\r\\t\\n]*([\'"])((?:\\\\\\2|(?!\\2).)*)\\2', 'gi');
//     var attributes = {};
//     while ((match = regex.exec(string))) {
//         attributes[match[1]] += match[3] + ',';
//     }
//     if (attributes.id) {
//         var id = attributes.id;
//         id = id.replace('undefined', '');
//         id = id.split(',');
//         id = id.filter(m => m)
//         for (let s = 0; s < id.length; s++) {
//             window[`$${id[s]}`] = document.querySelector(`#${id[s]}`)
//         }
//     }
// }
// template({
// 	name: 'strange-bs',
// 	template: '<h1>Hello world</h1>'
// }, safe=true)
// $hold.on({
//     mousedown: function(e) {
//         x = e.offsetX
//         y = e.offsetY
//         console.log(x,y)
//         window.on('mousemove', function(e) {
//             $hold.css({
//                 top: `${e.clientY}px`,
//                 left: `${e.clientX}px`,
//                 transform: `translate(-${x}px, -${y}px)`
//             })
//         console.log(x,y)
//         })
//     },
//     mouseup: function () {
//     	window.on('mousemove', function(){})
//     }
// })
var $hold = document.querySelector('#hold')
$hold.onmousedown = function(ed) {
    /*x = ed.clientX - ed.target.offsetLeft;
    y = ed.clientY - ed.target.offsetTop*/
    x = ed.layerX;
    y = ed.layerY;
    window.onmousemove = function(e) {
        $hold.style = ` 
    		top: ${e.clientY}px;
    		left: ${e.clientX}px;
			transform: translate(-50%, -50%);

    	 `;
        if (e.clientX > innerWidth || e.clientY > innerHeight) {
            window.onmousemove = null
        }
    }
}
$hold.onmouseup = function() {
    window.onmousemove = null
}