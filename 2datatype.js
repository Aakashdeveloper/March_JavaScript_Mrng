var a = "10"
var b = "2"
undefined
parseInt(a)+parseInt(b)
12
parseInt(a)
10

var c = "10a"
undefined
parseInt(a)
10

var c = "10a456"
undefined
parseInt(c)
10

var c = "a10a456"
undefined
parseInt(c)
NaN

var c = "1086867a456"
undefined
parseInt(c)
1086867

var a = "10.78678"
undefined
parseInt(a)
10
parseFloat(a)
10.78678

var a = "10.78678"
undefined
parseInt(a)
10
parseFloat(a)
10.78678
var c = "335878"
undefined
parseFloat(c)
335878
Number(a)
10.78678
Number(c)
335878

////////////////
true+true
2
true+false
1

true is equal to 1
false is equal to 0

10-true
9
10+true
11
10+"true"
"10true"
"true"+"true"
