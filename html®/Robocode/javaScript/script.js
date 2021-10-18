var root = document.querySelector('#root')

function WhichMostLittle(a, b, c) {
    if (a < b && a < c) return (a + ' is most little number of them');
    else if (b < a && b < c) return (b + ' is most little number of them');
    else return (c + ' is most little number of them')
}

function dividersOf(a) {
    for (var i = 0; i <= a; i++) {
        if (a % i == 0) root.innerHTML += i + '<br>'
    }
}
// dividersOf(17)
// root.innerText=WhichMostLittle(15,20,30)
// root.innerText = dividersOf(25)
// for(var i = 0; i < 150; i++) {
// 	if(33 % i == 0) root.innerHTML += i+ '<br>'
// }
var arr1 = ['they', 'are', 'default', 'values', ];
var arr2 = ['they', 'are', 'default', 'values', ]

function getLastIndex(arr) {
    var length = arr.length
    return arr[length - 1]
}

function getSameValue(arr1, arr2) {
    if (arr1.length > arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) root.innerHTML += arr1[i] + '<br>'
        }
    } else if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) root.innerHTML += arr1[i] + '<br>';
        }
    } else {
        for (var i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr2[i]) root.innerHTML += arr1[i] + '<br>'
        }
    }
}
getSameValue(arr1, arr2)

function css(el, k, fn) {
    el.style[k] = fn
}
css(root, 'color', 'red')
    // var num=0
    // function getOnlyStringValues(arr) {
    // 	return typeof arr[num] + num
    // 	num++

// }
var PI = Math.PI.toFixed(2),
    metr = 100,
    t = 1000,
    Kb = 1024
var pow = function(a, b) {
    return Math.pow(a, b)
}
var get = {
    periemeterOfSquare: function(a) { // 1
        return 4 * a
    },
    areaFromSquare: function(a) { // 2
        return Math.pow(a, 2)
    },
    areaFromRectangle: function(a, b) { // 3
        return a * b
    },
    widthOfCircle: function(d) { // 4
        return d * PI
    },
    areaAndSizeFromCube: function(a) { // 5
        return `V = ${Math.pow(a,3)}\nS = ${6 * Math.pow(a,2)}`
    },
    sizeAndAreaFromPar: function(a, b, c) { // 6
        return `V = ${ a * b * c }\n S = ${ 2 * (a * b + b * c + a * c)}`
    },
    widthAndAreaFromCircle: function(r) { // 7
        return `L = ${ 2 * ( PI * r )}\n S = ${ PI * pow(r,2)}`
    },
    middleArithmetic: function(a, b) { // 8
        return (a + b) / 2
    },
    middleGeometric: function(a, b) { //9
        return Math.sqrt(a * b)
    },
    addMultiplePow: function(a, b) { // 10
        return `Yig'indi = ${a+b}\nKopaytma = ${a*b}\nKvadrati = ${pow(a,2)}, ${pow(b,2)}`
    },
    addMultipleModule: function(a, b) { // 11
        return `Yig'indi = ${a+b}\nKopaytma = ${a*b}\nModuli = ${Math.abs(a)}, ${Math.abs(b)}`
    },
    gipAndPeriementerOfTriangle: function(a, b) { // 12
        var c = Math.sqrt(pow(a, 2) + pow(b, 2))
        var p = a + b + c
        return `C = ${c.toFixed(1)}\n P = ${p.toFixed(1)}`
    },
    areaAndMinusFromTr: function(r1, r2) { // 13
        if (r1 > r2) {
            var S1 = PI * r1;
            var S2 = PI * r2;
            var S3 = PI * (S1 - S2)
            return `S1 = ${S1}\n S2 = ${S2}\n S3 = ${S3}`
        } else console.error('Error, r1 must be bigger than r2')
    },
    radiusAndAreaOfTr: function(l) {
        var r = 2 * l * PI
        var s = PI * pow(r, 2)
        return `R = ${r.toFixed(1)}\n S = ${s.toFixed(1)}`
    },
    __example__1: function(x) {
        if (x) {
            var y = 3 * pow(x, 6) - 6 * pow(x, 2) - 7
            return `Y = ${y}`
        } else return NaN
    },
    __example__2: function(x) {
        if (x) {
            var y = 4 * (pow(x - 3, 6)) - 7 * (pow(x - 3, 3)) + 2
            return `y = ${y}`
        } else console.error('1 argument required')
    },
    __pow__: function(a) {
        var res = pow(a, 2),
            res2 = pow(a, 4),
            res3 = pow(a, 8)
        return res
    },
    cmTOm: function(cm) {
        return cm / metr + 'm'
    },
    kgToT: function(kg) {
        return kg / t + 't'
    },
    biteToKb: function(b) {
        return b / Kb + 'kb'
    },
    __misol__1: function(a, b) {
        var fn;
        if (a > b && a > 0 && b > 0) {
            fn = Math.round(a / b);
            return fn
        } else console.error('Error first afgument must be bigger than second one')
    },
    __misol__2: function(a) {
        var text = a.toString(),
            f = Number(text[0]),
            k = Number(text[1])
        console.log(f, k)
    },
    __misol__3: function(a) {
        var text = a.toString()
        if (text.length <= 2 && a > 0) {
            var f = Number(text[0]),
                k = Number(text[1])
            return f + k
        } else return false
    },
    __misol__4: function(a) {
        var fn = [],
            k, o
        text = a.toString();
        for (var i = 0; i <= 1; i++) {
            fn.push(Number(text[i]))
        }
        fn.reverse()
        k = fn[0];
        o = fn[1]
        console.log(k, o)
    },
    __misol__5: function(a) {
        var text = a.toString()
        if (text.length <= 3 && a > 0) {
            var f = Number(text[0])
            console.log(f)
        }
    },
    __misol__6: function(s) {
        var min = 60,
            hour = 3600,
            res = s / hour,
            text = `In ${s} second has ${s/min} minutes and ${res.toFixed(1)} hours/hour`
        console.log(text);
    },
    for_1: function(x, y) {
        for(var k = 0; k < y ; k++) {
            console.log(x)
        }
    }
}
function create(el) {
    if(el&& typeof el === 'string') {
        return document.createElement(el)
    }
    else console.error(new Error())
}
function $(el,ind) {
    if(el && ind) {
        return document.querySelectorAll(el)[ind]
    }
    else if (el) {
        return document.querySelector(el)
    }
    else {
        console.error(new Error().message ,new Error())
    }
}