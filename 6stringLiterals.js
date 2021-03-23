var name = "Avengers"
var rating = 4.5
var type="action"
var ind="Hollywood"

//es5
var data = "The "+name+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
data
"The Avengers is an action movie with rating of 4.5 and from ind Hollywood."

//es6
var data = `The ${name} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
"The Avengers is an action movie with rating of 4.5 and from ind Hollywood."