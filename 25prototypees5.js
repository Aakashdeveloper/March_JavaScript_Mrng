function human(name){
    this.name = name;
    this.city = "London"
}

function robot(name){
    this.name = name;
    this.legs =2 
    this.age = 10
}
var john = new human('John')
john
human {name: "John", city: "London"}

var pepper = new robot('Pepper')
pepper
robot {name: "Pepper", legs: 2, age: 10}

human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}

var eva = new human('eva')
eva
human {name: "eva", city: "London"}
eva.legs
2
eva.age
10
john.legs
undefined

robot.prototype = new human()