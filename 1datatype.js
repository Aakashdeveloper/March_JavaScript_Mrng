es > Ecma Script
es5
es6
es7

/////////
String = "egre" 'sff' "534" "df4" 'true' '343fg'
Number = 43634 3 464656 445.5 .545  6465.46456 
Boolean = true/false
null
undefined

//////////es5//////
var name = "Heena"
var marks = 80
var pass = true

typeof(name)
"string"

typeof(marks)
"number"

typeof(pass)
"boolean"

var d = "5344"
typeof(d)
"string"

var e = 7867.8786
typeof(e)
"number"

////basic opt
var a = 10
var b = 20
a+b
30
a-b
-10
a*b
200
a/b
0.5
b%a
0

2%4
2

3%4
3

4%4
0


var a = "Hi"
var b = "JavaScript"
a+b (concat)
"HiJavaScript"
a-b
NaN (not a number)
a*b
NaN
a/b
NaN
a+c
"Hi10"
c+a
"10Hi"
a-c
NaN
c-a
NaN

string + string = string
number + string = string
string + number = string
number + number = number

10+"20"+30
"1020"+30
"102030"

"10"+20+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

////////////////
10+"20"+30-1
"102030"-1
102029

"10"+20+30-1
"102030"-1
102029

10+20+"30"-1
"3030"-1
3029

"10a"-1
NaN
"hi"-1
NaN
"10"-1
9
2*"4"
8
"8"/"3"
2.6666666666666665
"8"+"4"
"84"
8+9
17