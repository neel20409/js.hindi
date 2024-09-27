// function getdata(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log("data:",dataid);
//             resolve("success");
//         }, 3000);
//     })
// }

// getdata(1).then((res)=>{
//     return getdata(2);
// }).then((res)=>{
//     return getdata(3)
// });

function getdata(dataid){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               console.log("data:",dataid);
                resolve("success");
            }, 3000);
        })
    }

 (async function getdataall(){
    await getdata(123);
    await getdata(1234);
    await getdata(12345);
 })();
