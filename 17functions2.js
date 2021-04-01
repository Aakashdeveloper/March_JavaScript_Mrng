/*function sayhi(){
    console.log("Hiii")
}

sayhi()
*/
//IFFI/////

(function(){
    console.log("Hiii")
}())

function loop(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

loop(5)
0
1
2
3
4


function * loop(userinput){
    for(i=0;i<userinput;i++){
       yield i
    }
}

var data = loop(4)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: undefined, done: true}

//rest es6
function add(...args)
{
    // var args = [1,2,3,4]
    var sum = 0
    for(data of args){
        sum = sum+data
    }
   return sum
}

add(1,2,3,4,5)
15
add(1,2)
3


function test(a,b,c) {
    const add = a+b+c
    return add
}

let arr = [1,2,3]

let arr = [1,2,3]
undefined
test(arr)
"1,2,3undefinedundefined"
test(...arr)
6


var a = ['a','b','c','d']
var b = [1,2,...a,3,4]
b
(8) [1, 2, "a", "b", "c", "d", 3, 4]

var c = [...a,...b]
["a", "b", "c", "d", 1, 2, "a", "b", "c", "d", 3, 4]