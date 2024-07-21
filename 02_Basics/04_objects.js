// const tiktok = new Object()//singenton object 

//nonsingleton object 
const tiktok = {
    tiktokid: "123",
    name: "Neel",
    inloggedin:  false

}
//concept of nested objects and way to access it
const user ={
    email:"some@gmai.com",
    fullname:{
        mydata:{
            mobile:"12343",
            age:19,
        }
    }
}
// console.log(user.fullname.mydata.age);

//merging of object

const obj1 ={a:"1",b:"2"}
const obj2 = {c:"3",d:"4"}
// const obj3 = { obj1, obj2}//possible but stored object inside object
// console.log(obj3);
const obj3 = Object.assign({},obj1,obj2)//paranthiss are optional
// console.log(obj3);
const obj4 = {...obj1,...obj2}// another method of spread same as array ..
// console.log(obj4);



//to get data from data base 
console.log(tiktok);
console.log(Object.keys(tiktok));
console.log(Object.values(tiktok));
console.log(Object.entries(tiktok));


 