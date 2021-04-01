var moviesname = "Avengers"
var movierating = 4.5
var movielang = 'English'

var moviesname1 = "Jab We Met"
var movierating1 = 4.6
var movielang1 = 'Hindi'

var movies = {
    name:'Avengers',
    rating:4.4,
    lang:'English'
}
undefined
typeof(movies)
"object"
movies.lang
"English"
movies.name
"Avengers"
movies.rating
4.4
movies.ind="Hollywod"
"Hollywod"
movies
{name: "Avengers", rating: 4.4, lang: "English", ind: "Hollywod"}
movies.rating= 4.5
4.5
movies
{name: "Avengers", rating: 4.5, lang: "English", ind: "Hollywod"}
delete movies.lang
true
movies
{name: "Avengers", rating: 4.5, ind: "Hollywod"}


var movies = {
    name:'Avengers',
    rating:4.4,
    lang:'English'
}
movies['name']
"Avengers"
movies['rating']
4.4
movies['ind']="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.4, lang: "English", ind: "Hollywood"}

JSON> JavaScript Object Notation

var movies = [
    {
        name:'Avengers',
        rating:4.4,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.5,
        lang:'Hindi'
    }
]

movies[0].lang
"English"

var movies = {
    name:'Avengers',
    rating:4.4,
    lang:'English'
}

for(key in movies){
    console.log(key)
}
name
rating
lang

for(key in movies){
    console.log(key)
    console.log(movies[key])
}

Avengers
4.4
English

//////
var calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => { return a-b}
}

calc.sum(3,4)
7
calc.sub(9,2)
7

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city Values (${data.name}, ${data.city})`}
}

dbQuery.find('Students')
"Select * from Students"
dbQuery.insert('Employee',{name:'John',city:'Delhi'})
"insert into Employee name,city Values (John, Delhi)"