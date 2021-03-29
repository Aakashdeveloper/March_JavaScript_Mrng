array is a collection of similar or different datatype

var a = [1,2,3,436,547,534,47] (array of number)
var b = ['ew','fwefgw','egegeg','wegge'] (array of string)
var c= [true,true,false,true] (array of boolean)

var d = [2,353,"24","dgd",4,true,false,35,"fb"]

var city = ["London","Paris","NewYork","Delhi"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[1]
"Paris"
typeof(city[1])
"string"
typeof(city.length-1)
"number"
city[city.length-1]
"Delhi"

var city = ["London","Paris","NewYork","Delhi"]
undefined
city.push('Venice')
5
city
(5) ["London", "Paris", "NewYork", "Delhi", "Venice"]
city.push('Boston','Mumbai')
7
city
(7) ["London", "Paris", "NewYork", "Delhi", "Venice", "Boston", "Mumbai"]
city.pop()
"Mumbai"
(6) ["London", "Paris", "NewYork", "Delhi", "Venice", "Boston"]
city.pop(2)
"Boston"
city.pop(278576576576467)
"Venice"

city.shift()
"London"
city.unshift('Amsterdam')
4
city
(4) ["Amsterdam", "Paris", "NewYork", "Delhi"]

push> add in the end of the array
pop> remove in the last value of the array
unshift> add in the begining of the array
shift > remove in the first value of the array

var city = ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
undefined
city.slice(1)
(6) ["Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
city.slice(2,5)
(3) ["NewYork", "Delhi", "Amsterdam"]
city
(7) ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]

city.splice(index,deletecount,value)
undefined
city.splice(3,0,'Nice','Helsinki')
[]
city
(9) ["Hongkong", "Paris", "NewYork", "Nice", "Helsinki", "Delhi", "Amsterdam", "Venice", "Boston"]
city.splice(5,2)
(2) ["Delhi", "Amsterdam"]
city
(7) ["Hongkong", "Paris", "NewYork", "Nice", "Helsinki", "Venice", "Boston"]
city.splice(4,1,'Pune','Dubai')
["Helsinki"]
city
(8) ["Hongkong", "Paris", "NewYork", "Nice", "Pune", "Dubai", "Venice", "Boston"]

var a = [1,2,3]
var b = [4,5,6]
a+b
"1,2,34,5,6"
a.concat(b)
(6) [1, 2, 3, 4, 5, 6]

var myarr = ["Hongkong", "Paris", "NewYork",['Red','Yellow',['Bmw','Skoda','Audi'],'green','Orange'], "Venice", "Boston"]
undefined
myarr
(6) ["Hongkong", "Paris", "NewYork", Array(5), "Venice", "Boston"]
myarr[2]
"NewYork"
myarr[3]
(5) ["Red", "Yellow", Array(3), "green", "Orange"]
myarr[3][1]
"Yellow"
myarr[3][2]
(3) ["Bmw", "Skoda", "Audi"]
myarr[3][2][1]
"Skoda"
myarr[2][1]
"e"
myarr[3][1]
"Yellow"

var myarr = ["Hongkong", "Paris", "NewYork",['Red','Yellow',['Bmw','Skoda','Audi'],'green','Orange'], "Venice", "Boston"]

undefined
myarr.flat()
(10) ["Hongkong", "Paris", "NewYork", "Red", "Yellow", Array(3), "green", "Orange", "Venice", "Boston"]
myarr.flat(2)
(12) ["Hongkong", "Paris", "NewYork", "Red", "Yellow", "Bmw", "Skoda", "Audi", "green", "Orange", "Venice", "Boston"]

var myarr = ["London", "Paris",false, 1, 2, "audi", "Bmw",true, 3, "Delhi", "venice"]
undefined
myarr.sort()
(11) [1, 2, 3, "Bmw", "Delhi", "London", "Paris", "audi", false, true, "venice"]
myarr.reverse()
(11) ["venice", true, false, "audi", "Paris", "London", "Delhi", "Bmw", 3, 2, 1]

var arr = [1, 2, 3, "Bmw", "Delhi", "London", "Paris", "audi", false, true, "venice"]
undefined
arr.indexOf('Delhi')
4
arr.indexOf('audi')
7
arr.indexOf(1)
0
arr.indexOf('Mumbai')
-1
arr.indexOf(10)
-1

var a = "hi"
Array.isArray(a)
false

var b = ["hi","hello"]
Array.isArray(b)
true