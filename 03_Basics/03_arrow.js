const user = {
    name : "neel",
    price : 999,

    welcomemsg: function(){
    // console.log(`${this.name},welcome to website` );
    // console.log(this);
   }
}
// console.log(this);
// user.welcomemsg()

// function chai(){
//     const name = "Neel"
//     console.log(this.name);// can`t perfom in function only in object
// }
// chai()
const chai =  () => {
    const name = " neel"
console.log(this);

}
// chai()

//arrow function

// const two = (num1,num2)=>{
//     return num1+num2;

// }
// // console.log(two(45,34));
const two = (num1,num2) =>  (num1+num2)//implicite return,

// console.log(two(23,34));
