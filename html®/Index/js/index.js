	let x = "Rostdan ham 'Home' sahifasiga o`tmoqchimisiz"
	let exit = "Rostadan ham sahifadan chiqmoqchimisiz"
	let serv = "Rostadan ham 'Service' sahifasiga o`tmoqchimisiz"
	let git = "GitHubdagi profilimga qiziqdingizmi"
	let about = "Biz haqimizda 'Bilib olasiz' "

	function first_function() {
	    // body...
	    // started...
	    alert(x);

	}

	function second() {
	    // body...
	    // started...
	    let a = confirm(exit)
	    if (a == true) {} else {
	        alert("Rahmat")
	        window.close()
	    }

	}

	function third() {
	    // body...
	    // started...
	    alert(serv);

	}

	function fourth() {
	    // body...
	    // started...
	    let p = prompt(git);
	    let link = "random.url"
	    if (p == "ha" || p == "Ha" || p == "HA" || p == "hA") {
	        alert("unda link mana \n" + link)
	    } else if (p == "Yo'q" || p == "Yoq" || p == "yoq" || p == "Yo`q" || p == "yo`q" || p == "yo'q") {
	        confirm("Xa uzr bilmabman \n o`zingiz ham gitHub profil ochganmisiz ")
	        prompt("Username ingizni aytsangiz qo`llab quvvatlab yuboramiz")
	        alert("Thanks")
	    } else {
	        alert("To`g`risi javobingizga uncha tushunmadim \n faqat 'Ha' yoki 'Yo`q' deyishingiz kerak edi ")
	        alert("Qayta urinib ko`rishingiz mumin")
	    }

	}

	function fifth() {
	    // body...
	    // started...
	    alert(about);

	}

	function cals(argument) {
	    // body...
	    var a = prompt("son kiriting ... ")
	    var b = prompt("kerakli darajani kiriting ... ")
	    alert(a ** b)
	    var s = confirm("To`g`ri hisobladimmi ishqilib")
	    if (s == true) {
	        alert("Bilardim")
	    } else {
	        alert("bo`lishi mumkin emas")
	    }
	}

	function calkuly() {
	    // body...
	    var a1 = prompt("sonni kiriting")
	    var b1 = prompt("2-sonni kiriting")
	    var amal = prompt("Amalni kiring")
	    a1 = Number(a1);
	    b1 = Number(b1);
	    if (amal == "+") {
	        alert(a1 + b1)
	    } else if (amal == "-") {
	        alert(a1 - b1)
	    } else if (amal == "*") {
	        alert(a1 * b1)
	    } else if (amal == "/") {
	        alert(a1 / b1)
	    } else {
	        alert("Siz dasturda ro`yxatda yo`q amalni kiritdingiz \nsiz faqat: \n + \n - \n * \n / \n amallarini kirita olasiz ")
	    }

	}

	function calc_2() {
	    // body...
	    var a2 = prompt("bo`linuvchini kiriting")
	    var b2 = prompt("bo`luvchini kiriting")
	    alert('Javob = ' + a2 / b2 + "\nQoldiq: " + a2 % b2)

	}
	// function newLesson() {
	// 	// body...
	// 	let x = prompt("Raqam kiriting")
	// 	alert(Math.pow(x,3))
	// }
	// newLesson()
	// let A = []
	// A[0] = 15;
	// A[1] = "Java script";
	// A[2] = "Hello world";
	// A[3] = "SAlom  dunyo ";
	// A[4] = "Hypertext markup language "
	// // document.write(A)
	// let n = prompt('sonn kiriting...')
	// let array = []
	// for (let i = 0; i < n; i++) {
	// 	array[i] = Math.floor(Math.random()*100)
	// }
	// console.log(array)
	// let a = ['sonn', 'script', 'sahifasiga', 'started', 'document', 'a', 'zingiz', 'quvvatlab', 'confirm'];
	// let son = Math.floor(Math.random()*8);
	// // document.write(a[son])
	// var a = ""
	// document.querySelector('a').onclick = function() {
	// 	// body...
	// 	if (confirm('saytga o`tmoqchimisiz')) {
	// 		window.location = "https://salom.uz"
	// 	} else {
	// 		window.reload()
	// 	}
	// }
	function name() {
	    // body...
	    alert('salom')
	}