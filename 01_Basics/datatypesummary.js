//primitive datatype(7)
// String,number,null,boolean,undefined,symbol,BigInt

// //dynamically typed language
// const score = 100
// const id = Symbol("abc");
// const accid = Symbol("abc");
// console.log(id === accid);


//reference(non-primitive)
// // Array,objects,functons

// const heros = ["me","you","everyone"];
// let info = {
//     name:"Bhatt Neel",
//     std:"10",
//     age:"19yrs",
// }
// console.log(info);
// const myfunction = function () {
//     console.log("hello world ");
    
// }
// console.log(myfunction);


// ********************* memory************************


//stack (Primitive), Heap(Non-primitive )

// (stack) send copies of orignal value.
let name1 = "Bhatt Neel ";
let name2 = name1
name2 = "MEet bhatt" ;

// console.log(name1);
// console.log(name2);

// Heap(send reference of original value).

let user1 = {
    Name : "Bhatt Neel",
    subject : "Maths"
}



let user2 = user1

user2.Name = " Bhatt Niel"
console.log(user2);
console.log(user1);