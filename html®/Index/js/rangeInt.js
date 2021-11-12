	 let range = document.querySelectorAll('[type=range]');
	 window.onload = function() {
	         range[0].value = 0;
	         range[1].value = 0;
	         range[2].value = 0;
	     }
	     //  range.max = scrollY
	     //  range.oninput = function() {
	     //  	scroll(0,range.value)
	     //  }
	     //  window.onscroll = function() {
	     //  	range.value = scrollY;
	     //  }
	     //

	 let intt = document.querySelector('.intas')
	 let h1 = document.querySelector('h1')
	 let copy = document.querySelector('.copy')
	 copy.onclick = function() {
	     intt.select()
	     document.execCommand('copy');
	 }
	 range[0].oninput = main
	 range[1].oninput = main
	 range[2].oninput = main

	 function main() {
	     document.body.style.background = `rgb(${range[0].value},${range[1].value},${range[2].value})`
	     h1.innerHTML = `rgb(${range[0].value},${range[1].value},${this.value})`
	 }
	 setInterval(function() {
	     intt.value = h1.innerHTML
	 }, 100);


	 function rgb(r, g, b) {
	     let rgb = `rgb(${r},${g},${b})`;
	     return rgb
	 }

	 function random(a) {
	     return Math.random() * a
	 }
	 let btn = document.querySelector('.random');
	 btn.onclick = function() {
	         range[0].value = random(255)
	         range[1].value = random(255)
	         range[2].value = random(255)
	     }
	     // faqat rgb qiymat qaytaradi 
	     // ishlatish 
	     // element.style.background = rgb(244,255,21)
	     // string da yozilmaydi
	 function getOnlyNumbers(str, t) {
	     if (str.constructor.toString().indexOf('String') > -1) {
	         let pat = /[1,2,3,4,5,6,7,8,9,0]/gi
	         let matches = str.match(pat)
	         kn = ''
	         if (t) {
	             for (i of matches) {
	                 kn += i
	             };
	             return Number(kn)
	         } else {
	             return matches
	         }
	     } else {
	         return console.error(new Error())
	     }
	 }

	 function rgba(r, g, b, a) {
	     let rgba = `rgba(${r},${g},${b},${a})`
	     return rgba
	 }

	 function hexToRgba(hexValue) {
	     var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	     var hex = hexValue.replace(rgx, function(m, r, g, b) {
	         return r + r + g + g + b + b;
	     });
	     var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	     var r = parseInt(rgb[1], 16);
	     var g = parseInt(rgb[2], 16);
	     var b = parseInt(rgb[3], 16);
	     return ("rgb(" + r + "," + g + "," + b + ")");
	 }

	 function hex() {
	     el = document.querySelector('#hex')
	     val = '#' + el.value
	     if (el.value) {
	         c = hexToRgba(val);
	         document.body.style.background = c;
	         intt.value = c
	         h1.innerHTML = c
	         cAll = c.split(',');
	         c1 = getOnlyNumbers(cAll[0], 1);
	         c2 = getOnlyNumbers(cAll[1], 1);
	         c3 = getOnlyNumbers(cAll[2], 1);
	         range[0].value = c1
	         range[1].value = c2
	         range[2].value = c3
	     }
	 }
	 // rgba qiymat yoki $('body') yani <body> ning background ga rang beriladi
	 // ishlatish 
	 // element.style.background = rgba(255,255,255,1) 4 ta argument kiritilsa   rang qaytaradi 
	 // 8 ta argument kiritilsa boshidagi 4 ta qiymatni qaytaradi va qolgan 4 tasi <body> uchun orqa fon boladi 
	 // ishlatish 
	 // rgba(0,0,0,0,255,255,255 ) <body> ga oq fon beriladi 

	 // function dates() {
	 // 	let d = new Date(),
	 // 	h = d.getHours(),m = d.getMinutes(), s = d.getSeconds();
	 // 	range	[0].value = h;
	 // 	range[1].value = m;
	 // 	range[2].value = s;
	 // let b = 	 `rgb(${h},${m},${s})`
	 // 	h1.innerHTML =b
	 // 	document.body.style.background = b;
	 // }

	 // setInterval(dates,1000);
	 // let num = 34|67,num2 = 998916150760;	
	 window.onresize = fsize

	 function fsize() {
	     h1.style.fontSize = (window.innerWidth / 11) + 'px'
	 }
	 fsize()