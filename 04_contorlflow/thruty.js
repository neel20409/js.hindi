// const email = "neel@gmial.com"//empty string means false

// if(email){
//     console.log("Got the user email");
// }
// else{
//     console.log("Don`t have one");
// // }

// // falsy value
// // flase,0,-0,big int 0n, null,undefine,NAN,""


//truthy value
// "0","false"," ",[],{},function(){},

//to check weather array is  empty or not 

const arr = []
if(arr.length===0){
    // console.log("array is empty");
}

//to check weather object is empty or not

const obj ={

}
if ((Object.keys(obj).length)===0){
    // console.log("Object is empty");
}

//Nullish coalescing operater (??):null undefined

let val1 = null ?? 10
// console.log(val1);

//ternary operator

//condition ?true:false

const price = 110;
// price<=80?console.log("yes it is lessthan 80") : console.log("more than 80");