function
method
arrow function
IFFI
Generator
///////////
var a = 10
var b = 20
a+b
30

/////////////
function add(a,b){
    return a+b
}

add(1,2)
3
add('A','B')
"AB"
add(10,20)
30

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(2)
"Number 2 is even"
isEven(5)
"Number 5 is odd"
isEven(525235)
"Number 525235 is odd"
isEven(5252354)
"Number 5252354 is even"


/////////////
function add(a,b){
    return a,b
}

add(1,2)
2

function add(a,b){
    var out = [a,b]
    return out
}
add(3,4)
(2) [3, 4]

//////////////////////////
method> when function assign to variable
//////////////
var add = function(a,b){
    return a+b
}

add(1,2)
3


////////////////////
arrow (es6)
/////////////
var add = (a,b) => { return a+b }
add(1,2)
3