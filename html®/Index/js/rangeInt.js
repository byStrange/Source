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
	 range[0].oninput = function() {
	     let col1 = document.body.style.background = `rgb(${this.value},${range[1].value},${range[2].value})`
	     h1.innerHTML = `rgb(${this.value},${range[1].value},${range[2].value})`
	 }
	 range[1].oninput = function() {
	     let col2 = document.body.style.background = `rgb(${range[0].value},${this.value},${range[2].value})`
	     h1.innerHTML = `rgb(${range[0].value},${this.value},${range[2].value})`
	 }
	 range[2].oninput = function() {
	     let col3 = document.body.style.background = `rgb(${range[0].value},${range[1].value},${this.value})`
	     h1.innerHTML = `rgb(${range[0].value},${range[1].value},${this.value})`
	 }
	 setInterval(function() {
	     h1.innerHTML = `rgb(${range[0].value},${range[1].value},${range[2].value}) `
	     document.body.style.background = h1.innerHTML
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

	 function rgba(r, g, b, a, c, c2, c3, c4) {
	     let rgba = `rgba(${r},${g},${b},${a})`
	     document.body.style.background = `rgb(${c},${c2},${c3},${c4})`
	     return rgba
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
	     console.log(h1.style.fontSize)
	 }
	 fsize()