
let a = 300
if(true){
    let a = 10
const b =20
// var c = 30
// console.log("inner :",a);

}
// console.log(a);

 function one(){
    const username = "BHatt"

    function two(){
        const website = "insta"
        console.log(username);
    }
    //child memeber can access parent variable
    // console.log(website);//we can`t acess it outside fuunction 2
    two()
 }
// one()

// ++++++++++++++ instersting+++++++++++++++++++++
// hositing can`t call the function before funtion  