//singleton
//object.create


//object litrals

const sym = Symbol("key1")

const user = {
    name: "Neel",
    age:19,
    location: "ruvad",
    email:"neel@google.com",
    isloggedin:false,
    [sym] :"keys1"
}
// two way to access object 
// console.log(user.age);
// console.log(user["age"]);
// console.log(user[sym]);
user.age = 20
// Object.freeze(user)//after freezing it will not allow any changes
user.location = "vadodara"
// console.log(user["age"]);
// console.log(user["location"]);

user.greeting = function () {
    console.log("hello user");
    
}
console.log(user.greeting());

//function referancing to object user 

user.greets2 = function(){
    console.log(`hello world,${this.name} here!!`);
}
console.log(user.greets2());