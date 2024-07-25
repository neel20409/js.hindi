//ifstaetment 

// if(condition){
// }//true condition then code will execute flase then not,,

//  comparison operator

// <,>,<=,>=,==,!=,===


// if(2==="2"){
//     console.log("matched");
// }
// else{
//     console.log("does`nt matched");
// }

const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power: ${power}`);//HERER CANT declare power due to scope 
//but var has global scope declaration so use let and const 

// short hand notation

const balance = 1000

// if (balance>500) console.log("test"),console.log('test2');not recommended

const userlloggedin = true 
const debitcard = true 
const loggedfromgoogle = true
const loggedfromemail =false

if(userlloggedin && debitcard){
    console.log("allow to buy course");
}

if(loggedfromgoogle||loggedfromemail){
    console.log("user logged in");
}

