for
for of
for in (object)
while
do while


////
for > generate series of  value or iterate over Array
///

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
London
Paris
NewYork
Delhi
Amsterdam
Venice

var city = ["London", "Paris",['Red','Yellow','Green'], "Delhi", "Amsterdam", "Venice"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    } 
}


///while//
var i = 10
while(i<5){
    console.log(i);
    i++
}

//do while
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)

////for of///

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
for(mycity of city){
    console.log(mycity)
}

var city = ["London", "Paris",['Red','Yellow','Green'], "Delhi", "Amsterdam", "Venice"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(colors of mycity){
            console.log(colors)
        }
    }else{
        console.log(mycity)
    }
}