function language(name,country){
    this.name=name;
    this.country = country;
    this.greet = function(){
        return `Say Hi to ${name}`
    }
}

var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say Hi to Hindi"
Hindi.name
"Hindi"
Hindi.country

// CLASSES
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=()=>{
        return `Say hi to ${name}`
    }
}

var English = new language1('English','UK')