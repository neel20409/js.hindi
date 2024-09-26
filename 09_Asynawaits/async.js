let promise = new Promise((resolve,reject)=>{
        console.log("I am promis");    
        // resolve(123)
        reject("some error");
})

// console.log("hello word1");
// console.log("hello word2");
// console.log("hello word3");
// console.log("hello word4");

// setTimeout(()=>{
//     console.log("hello word5");
    
// },1000)//2s=2000ms
// console.log("hello word6");
// console.log("hello word7");
// console.log("hello word8");   
// console.log("hello word9");

// const getdata = (dataid,getnex)=>{
//  setTimeout(()=>{
//     console.log("data:",dataid);
//     if(getnex){
//       getnex();
//     }
//  },3000);               each function called after  3s of prior function
// }
// getdata(1,()=>{
//    getdata(2,()=>{
//       getdata(3,()=>{
//          getdata(4);
//       });
//    });
// }); 

