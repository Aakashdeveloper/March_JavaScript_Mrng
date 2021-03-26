Regex 
Regular Expression 
^$

var a = "hi"
a.match("^([a-z])$")
null
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "hii"
undefined
a.match("^([a-z]{2})$")
null
a.match("^([a-z]{3})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
a.match("^([a-z]{2,5})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
a.match("^([a-z]+)$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]



var a = "H6i"
a.match("^([a-zA-Z0-9]+)$")


var a = "H6i%"
a.match("^([a-zA-Z0-9%@#$]+)$")

var a = "H6i&"
a.match("^([a-zA-Z0-9%@#$]+)$")
null

var phone = 8348274591
phone.match("^([0-9]{10})$")
VM197:2 Uncaught TypeError: phone.match is not a function


var phone = 8348274591
phone.toString().match("^([0-9]{10})$")
["8348274591", "8348274591", index: 0, input: "8348274591", groups: undefined]


var str = "That's hot haat!";
patt = /h.t/g
str.match(patt)
["hat", "hot"]

var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")