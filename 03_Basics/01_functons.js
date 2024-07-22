//functoin

function name(){

    // console.log("neel");
}
// name()


function add(num1,num2){//here it is trem as parameters
    // let result = num1+num2;
    // return result;\
    return num1+num2;

}
const result = add(5,8)//here we provide arguments
// console.log(result);


function loginmsg(username = "Bhatt"){
    return(`${username} just logged in !!`)
}
// console.log(loginmsg("Neel"));
// console.log(loginmsg());// no argument pass then undefined output or by default vale will be provided

function calccartprice(...num1) {
    return num1
    
}
// console.log(calccartprice(234,345,456));

const user ={
    name:"neel",
    price: 655
}

function handleobj(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price} buy give ratings!! `);
}
handleobj(user)



