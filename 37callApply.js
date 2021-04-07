var person={
    fullName:function(){
        return this.firstname+" "+this.lastname
    }
}

var John={
    firstname:'John',
    lastname:'Dave'
}

person.fullName.call(John)
"John Dave"
person.fullName.apply(John)
"John Dave"


person.fullName.call(John,['Delhi','India'])
"John Dave Delhi,India undefined"
person.fullName.apply(John,['Delhi','India'])
"John Dave Delhi India"

person.fullName.apply(John,'Delhi','India')
VM354:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:17
(anonymous) @ VM354:1

person.fullName.call(John,'Delhi','India')
"John Dave Delhi India"