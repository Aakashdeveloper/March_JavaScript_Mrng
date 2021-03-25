if(condition){
    // do something
}else{
   // do something 
}

var a = 88989
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 88989 is odd

var name = "Priya"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Lisa"){
    console.log(`Hi ${name} you are super admin`)
}else if(name == "Karan"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`I Don't know you`)
}
Hi Priya you are admin

var role = "Admin";
var name = "John"

if(role=="Admin"){
    if(name=="John"){
        console.log(`Hi ${name} your role is admin`)
    }else{

    }
}else{

}

///////////
var name = "Tina"
if(name=="John" ||  name=="Tina" || name=="Bhumika"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you not allowed`)
}

var name = "John"
var role = "User"

if(name=="John" && role=="User"){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}

if(name=="John" && (role=="User" || role=="Admin") ){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}

var a = 1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}
Hi

var a = 0
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}
Bie

var a = -1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}
Hi


/////////////////////
Ternary(single line if else condition)
////////////////////

var a = 10
a>10 ? "Hiii":"Biee"
"Biee"

var a = 10
a==10 ? "Hiii":"Biee"
"Hiii"

var a = 10
a>10 ? a+1:a-1
9
var a = 10
a==10 ? a+1:a-1
11