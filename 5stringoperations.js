var city = "London"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city.length
6
city[0]
"L"
city[1]
"o"
var name = "  Bhumika  "
undefined
name.length
11
name.trim()
"Bhumika"
name.trim().length

var city = " London .  "
undefined
city.trim()
"London ."

var a = "john"
var b = "John"
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "aMsTerDAm"
undefined
city.charAt(0)
"a"
city.charAt(1)
"M"
city.slice(1)
"MsTerDAm"
city.slice(2)
"sTerDAm"
city.slice(3,6)
"Ter"
city.slice(6,3)
""
city.slice(-2)
"Am"
city.slice(2)
"sTerDAm"
city.slice(2,-1)
"sTerDA"
city.slice(2,-2)
"sTerD"
city.slice(2,-3)
"sTer"
city.slice(-3,2)
""
city.slice(-3,-1)
"DA"
city.slice(-1,-3)
""

var city = "aMsTerDAm"
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"


var a = "i am learning javascript"
a.replace('javascript','JS')
"i am learning JS"
var a = "javascript i am learning javascript"
a.replace('javascript','JS')
"JS i am learning javascript"
a.replace(/javascript/g,'JS')
"JS i am learning JS"

var name = "  Bhumika . "
name.replace(/ /g,'')
"Bhumika."