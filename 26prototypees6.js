class geo{
    constructor(){
        this.lat=43.33,
        this.long=32.22
    }
}


class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country;
    }

    greet=()=>{
        return `Say hi to ${name}`
    }
}