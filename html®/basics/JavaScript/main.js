// let comment1=document.createComment('Bu comment HtML dan emas'),
// 	comment2 = document.createComment('Bu comment JavaScriptdan'),
// 	document.body.appendChild(comment2)
// 	let konsol = console;
// 	let dokument = document;
// function ayt(s) {
// 		if (s==undefined) {
// 			alert('')
// 		}
// 		else {
// 		alert(s)
// 		}
// }
// function alert(){}
// function sora_tekst(a) {
// 	prompt(a)
// }
// function yoz(x) {

// 	console.log(x)
// }
// function hisobla(b) {

// 	return eval(b)
// }
// function tozala() {

// 	console.clear(true)
// }
// function haqida() {
// 	setTimeout(_haqida, 1000);
// }
// function _haqida() {
// 	console.log('salom');
// 	setTimeout(__haqida, 1000)
// }
// function __haqida() {
// 	console.log(`Mening ismim Rahmatullo`);
// 	setTimeout(call , 2000)
// }
// function call() {
// 	tozala()
// }
// function help() {
// 	console.log(`
// 		ayt(); = alert()
// 		sora_tekst(); = prompt()
// 		haqida(); // Men haqimda
// 		tozala(); // konsol bo'limini tozalash
// 		hisobla(); // hisoblash matematik funksiyalarni
// 		`)
// }
// function refresh(argument) {
// 	location.reload()
// }
// class Cat {
// 	constructor(name, age) {
// 		this.ismi = name;
// 		this.age = age;
// 	}
// }
// let newClass  = new Cat('johnson' , 15);
// Cat.prototype.newmethod = function salom() {

// 	console.log('hello world')
// };
// let option = [{
// 	type: 'range',
// 	id: 'int1',
// 	class: 'int1',
// 	placeholder: 'placeholder'
// }]
// let int = document.createElement('input');
// document.body.appendChild(int)
// let i=document.querySelector('input').option

// let styles = `<style>	h1,h2,h3,h4,h5,h6{font-family: Candara;font-size: 55px;color: #fff;background: #3390FF;text-align: center;text-shadow: 0 0 10px  cyan;}.thick1{position:absolute;border: 1px solid red;top: 0;left: 0;margin-left: 1px;}.thick2{position: absolute;border: 1px solid violet;top: 0;left: 0;margin-top: 1px;}</style>`
// document.head.innerHTML += styles
// let arr = [{age:15},{newm: 'aka'},{ismarried: false}]
// let obj = {
// 	INFOR : [{id:151546},{letterL : 'leterr'},{empty : true}]
// }
// let thick1 = document.createElement('div');	
// let thick2 = document.createElement('div');
// document.body.appendChild(thick1)
// document.body.appendChild(thick2)
// thick1.style.width = '0px';
// thick1.style.height = '100%';
// thick2.style.width = '100%'
// thick1.classList.add('thick1');
// thick2.classList.add('thick2');
// window.onmousemove = function (e) {
// 	thick2.style.top = e.clientY+ 'px';
// 	thick1.style.left = e.clientX+ 'px'
// }
// console.log(thick2 , thick1)										




// 'use strict';
// 	// Arrays
// 		let arr1,arr2;
// 			arr1= ['some', 'oo its first array', 'ok this ends here'];
// 			arr2 = ['hello second array starts' , 'he is still working' , 'the end', 5];
// 				let __all = arr1.concat(arr2);
// 					console.log(__all);
// 				delete __all[10]; // deletes choosen element 
// 					console.log(__all);
// 					let news = [6546,64600,441,6,650476,4165,46]
// 					let sort = news.sort((a,b)=>{return a-b})
// 		sort.forEach(function(value,index,array) {
// 			let newElem = document.createElement('h1');
// 			newElem.style.fontFamily = 'candara'
// 			document.body.appendChild(newElem)
// 			newElem.innerHTML = `${array[index]} `;


// 		});
// 		news.push('sakiom')
// 		let sorrrt = sort.reduce(function(value,a) {return value+a})
// 			console.log(sorrrt)
// 			let newarr = ['','salom', 5, 'saralab']
// 		let some = newarr.some(function(value,index,array){
// 			return value == '' 

// 		})
// 		let find = newarr.find(function(value,index,array){
// 			return value == '50' 


// 		})
// 		let toStringArr = ['this', 'is' , 'a' ,'to string'];
// 		console.log(toStringArr.toString())
// 		//push(a)// Arrayning eng oxiriga a ni qoshb beradi
// 		//pop()// Arrayning eng oxirgi elementini ochirib beradi
// 		//unshift(a)//Arrayning boshiga a ni qoshib beradi
// 		//shift() // Arrayning boshidagi elementni ochirib beradi	  
// 		//concat()// bir arrayni boshqa biriga qoshib beradi 
// 		//sort() // alfabit bo`yicha saralab beradi (faqat string tipiga)
// 		//sort((a,b)=>{return a-b})// raqamlarni katta kichigiga qarab saralab beradi
// 		//forEach()// elem.forEach(function(value,index,array) {} shunday ko'rinishda ishlaydi
// 		//map()//forEach funksiyasi bilan bir xil ishlaydi
//			//array.splice(a,b)// arrayni 'a' indeksidan boshlab 'b' ta elementni ochirib tashlaydi // arr=['arr', 'arr1', 'arr2',  'arr3'];arr.splice(1,2);//arr[1] dan boshlab ikkita elementni ochirib tashladi  agar splice() funksiyasiga 3 ta argument berilsa arr.splice(a,b,c) a = arr[a] ; b = nechta element ochirish kerakligi haqidagi sanoq ; c = ochirilgan elementlar orniga yangi elemnt
// 		//reduce()// arrayni ichidagi malumotni qoshib beradi(Matematik ravishda) sort.reduce(function(value,a) {return value+a}) faqat 4ta argumenti bor 
// 		//some() // Arrayni ichida malumot bor yoki yoqligini tekshiradi(true,false)
// 		//filter() = // Arrayni ichida gi malumotni tekshiradi xuddi 'some' dek faqat agar kiritilgan malimot bolsa osha malumotni array korinishida qaytaradi aks hold bosh array qaytaradi 
// 		//toString() // Arrayni string har bir indeksini alohida alohida qilib string ko'rinishida keltiradi
// 		//find() //	Arrayni ichida malumot bor yoki yoqligini tekshiradi agar malumot bo`lsa malumotni qaytaradi aks holda 'undefined' qaytaradi
// 		//Math.max.apply(null,arrayNomi) // arraydagi eng katta raqamni olib beradi  arrayda umuman string tipidagi malumot bo'lmasligi kere
// 		//Math.min.apply(null,arrayNomi) // arraydagi eng katta kichik olib beradi arrayda umuman string tipidagi malumot bo'lmasligi kere
// 		/*
// 			! value = qiymat;
// 			! index = array indeksi
// 			! array = array : )
// 		*/

// 		  // 


// 		  		// Ends Arrays :]   //


// 		  // 	


let rang = `linear-gradient(to left , rgb(${Math.floor(Math.random()*255) }, ${Math.ceil(Math.random()*255)},${Math.round(Math.random()*255)}), rgb(${Math.round(Math.random()*255) }, ${Math.floor(Math.random()*255)},${Math.ceil(Math.random()*255)}))`
$('body', 0).style.background = rang;

function Clear(a) {
    location.reload()
}

function clip(s) {
    let a = `polygon(${floor(random(400))}% ${round(random(100))}%,${ceil(random(100))}% ${floor(random(100))}%, ${round(floor(random(100)))}% ${round(random(100))}%, ${ceil(round(100))}% ${floor(random(100))}%)`;
    s.style.webkitClipPath = a;
    console.log(a)
};

function circle(c) {
    let a = `ellipse(${round(random(100))}% ${floor(random(100))}%)`;
    c.style.webkitClipPath = a;
    console.log(a)
}