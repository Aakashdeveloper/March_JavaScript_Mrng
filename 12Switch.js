// multiple condition and multiple output(if else)
// one condition and multiple output(switch)
// one condition one output(ternory)

var name  = "Eva"

switch(name){
    case 'Aakash':
        console.log(`Hi ${name} you are user`);
        break;
    case 'Eva':
        console.log(`Hi ${name} you are admin`);
        break;
    default:
        console.log(`Hi ${name} you are unknown`);
}

switch(new Date().getDay()){
    case 0:
        console.log(`Today is Sunday`);
        break;
    case 1:
        console.log(`Today is Monday`);
        break;
    case 4:
        console.log(`Today is Thursday`);
        break;
    default:
        console.log(`Wrong input`);
}

Today is Thursday