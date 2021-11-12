// function getOnlyLetter(str, type=true) {
// 	if (str.constructor.toString().indexOf('String') > -1) {
// 		let pat = /[a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,u,r,s,t,u,v,w,x,y,z]/gi
// 		let matches = str.match(pat)
// 		if(type) {
// 			a = ''
// 			for(i of matches) {
// 				a+=i
// 			}
// 			return a
// 		}
// 		else {
// 			return matches
// 		}
// 	}
// 	else if (str.constructor.toString().indexOf('Array') > -1) {
// 		return console.error(new Error())
// 	}
// }
function getOnlyNumbers(str,t) {
	if (str.constructor.toString().indexOf('String') > -1) {
		let pat = /[1,2,3,4,5,6,7,8,9,0]/gi
		let matches = str.match(pat)
		kn=''
		if(t){ for(i of matches) {kn+=i};return Number(kn)}
		else {return matches}
	}
	else {
		return console.error(new Error())
	}
}
// function getNumbersAndLetters(str) {
// 	if(str) {
// 		if (str.constructor.toString().indexOf('String') > -1) {
// 			try{
// 				l =  /[a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,u,r,s,t,u,v,w,x,y,z]/gi
// 				n = /[1,2,3,4,5,6,7,8,9,0]/gi
// 				lr = str.match(l)
// 				nr = str.match(n)
// 				ll = ''
// 				nl = ''
// 				for(i of lr ){ll+=i}
// 				for(i of nr ){nl+=i}
// 				return {
// 					letters: ll,
// 					numbers: nl
// 				}
// 			}
// 			catch (err) {
// 				console.log('Your strings must be contaiened with numbers AND letter')
// 			} 
// 		}
// 		else return 'Only Strings'
// 	}
// 	else {
// 		return new Error()
// 	}
// }
//var get = {
//    duplic: function(arr) {
//        if(arr.constructor.toString().indexOf("Array") > -1) {
//            var uniq = arr
//                .map((name) => {
//                return {
//                count: 1,
//                name: name
//                }
//            })
//            .reduce((a, b) => {
//                a[b.name] = (a[b.name] || 0) + b.count
//                return a
//                return a
//            }, {})
//
//            var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
//
//            return duplicates
//        }
//    },
//    css: function (el,) {
//        
//    }
//}