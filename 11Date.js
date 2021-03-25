Date()
"Thu Mar 25 2021 07:28:12 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDate()
25
a.getMonth()
2
a.getDay()
4
a.getFullYear()
2021

> month start with 0 where jan is 0 and dec is 11
> day start with 0 where sunday is 0 and 1 is monday

let date = new Date()
let month = date.toLocaleString('default',{month:'long'})
month
"March"

let month = date.toLocaleString('default',{month:'short'})
month
"Mar"