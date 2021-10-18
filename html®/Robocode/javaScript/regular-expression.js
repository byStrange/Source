// regular expression //
// regular expressions has a test method // returns true if it can find or verify at least one that is correct // else returns false 
// regex = /app./gi // can check any pharases that starts with "app" // <-- {/./} they are called "wildcard character" 
// regex = /a[sbc]d/gi // can check asd abd acd // <-- {/[]/} they are called "character class"
// regex = /text/g <-- {/g} they are called "flags"
// regex = /[aeoiu]/gi // can check any vowel letters in a string 
// regex = /[0-9]/gi // can check any numbers in a string
// regex = /a/i // disables case-sensitive
// regex = /a/g // not throtting next after finding correct one, finds or checks All matches
// regex = /[^aeiou]/gi // can check or find characters that you do not want to match. And they are called "negated character sets"
// 
//str = "Strange is want to be best Code!"
//regex = /st/gi
//match = str.match(regex)
//console.log(match)
/*

*/
//str = "She said Hallo and he said Hollo but Hello is correct!";
//regex = /h[aeo]llo/gi
//match = str.match(regex)
//console.log(match)
/*

*/
//str = "There is a lot of 'a' you can see";
//regex = /a/g
//match = str.match(regex)
//console.log(match)
/*

*/
//str = "You 2have to get 1only vowels in this 3string"
//regex = /[aeoui]/gi
//match = str.match(regex)
//console.log(match)
/*
 
 
*/
//str = "RegExp has a test method";
//regex = /[strange]/gi
//match = regex.test(str)
//console.log(match)
/*

*/
//str = "Youdonthavetogetvowelletters"
//regex = /[^aeiou]/gi
//match = str.match(regex)
//console.log(match)
var extracted1 = 'array';
arr = [extracted1, 'can', 'seperate', 'or', 'reverse'];
console
.log(arr.join('-'))
function reverseStr(a){return a.split('').reverse().join('')};console.log(reverseStr('salom'));
function arrToStr(ar){return ar.join('')};
function strToArr(str){return str.split('')};
function getStr(a,type){regex = new RegExp('[a-z]', 'gi');if(type === 'string'){return arrToStr(a.match(regex))}return a.match(regex)}
windowKey = []
for(i in window) {
    windowKey.push(i)
    if(window.hasOwnProperty(i)) {
        console.log(true)
    }
    else {
        a = []
        a.push(i)
         console.log(a)
    }
}
function checkVariable() {
    a = prompt('Enter variable name to search')
    if(!!(window[a])) {
        console.log(window[a])
        return true
    }
    else {
        console.log('There is no global variable that named ' + a)
        return false
    }
}
window.addEventListener('mousedown', function(e) {
    details = []
    for(keys in e) {
        details.push(keys)
    }
    console.dir(details)
})
window['oncontextmenu'] = function(){
    return false
}
let imeigalaxys3 = 352260054212307;
typeof typeof 9