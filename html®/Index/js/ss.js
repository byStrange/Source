// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('Hello World!');
// }).listen(4550  );
// var http = require('http'),
//   fs = require('fs');


// fs.readFile('../key.html', function (err, html) {
//   if (err) {
//     throw err;
//   }
//   http.createServer(function (request, response) {
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     response.write(html);
//     response.end();
//   }).listen(1327);
// });



















var http = require('http')
var fs = require('fs')

fs.readFile('../server.html', function (err, html) {
  if (err) {
    throw err
  }
  http.createServer(function (req, res) {
    res.writeHeader(200, { "Content-type": "text/html" })
    res.write(html)
    res.end()
  }).listen(1757)
})
// scroll
/*window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}*/

//   i = 0;
//   txt = "Connecting... Working";
//   speed = 1200
//   function typeWriter() {
//   if (i < txt.length) {
//     a= ''
//     a += txt.charAt(i);
//     console.log(a)
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter()
// try {
//   console.log(window)
// }
// catch (err) {
//   console.log('Node js has no window as Browsers ')
// }

// function getOnlyLetter(str, type = true) {
//   if (str.constructor.toString().indexOf('String') > -1) {
//     let pat = /[a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,u,r,s,t,u,v,w,x,y,z]/gi
//     let matches = str.match(pat)
//     if (type) {
//       a = ''
//       for (i of matches) {
//         a += i
//       }
//       return a
//     }
//     else {
//       return matches
//     }
//   }
//   else if (str.constructor.toString().indexOf('Array') > -1) {
//     return console.error(new Error())
//   }
// }
// function getOnlyNumbers(str, t) {
//   if (str.constructor.toString().indexOf('String') > -1) {
//     let pat = /[1,2,3,4,5,6,7,8,9,0]/gi
//     let matches = str.match(pat)
//     kn = ''
//     if (t) { for (i of matches) { kn += i }; return Number(kn) }
//     else { return matches }
//   }
//   else {
//     return console.error(new Error())
//   }
// }
// function getNumbersAndLetters(str) {
//   if (str) {
//     if (str.constructor.toString().indexOf('String') > -1) {
//       try {
//         l = /[a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,u,r,s,t,u,v,w,x,y,z]/gi
//         n = /[1,2,3,4,5,6,7,8,9,0]/gi
//         lr = str.match(l)
//         nr = str.match(n)
//         ll = ''
//         nl = ''
//         for (i of lr) { ll += i }
//         for (i of nr) { nl += i }
//         return {
//           letters: ll,
//           numbers: nl
//         }
//       }
//       catch (err) {
//         console.log('Your strings must be contaiened with numbers AND letter')
//       }
//     }
//     else return 'Only Strings'
//   }
//   else {
//     return new Error()
//   }
// }
// getOnlyLetter('S1s4me545lo3')