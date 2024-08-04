// // let owl = document.querySelector("#owl ").onclick=function(){
// //     alert("owl here!!")
// // }

// //attachevent
// //jqouery


// // document.getElementById('owl').addEventListener('click',function(){
// //     alert("owl here !")
// // })

// //what to study
// //type,timestamp,defualtprevented,target,toelement,screlement,currenttarget,clinetposition,screenx,screeny,altkey,ctrlkey,shiftkey,keycode,

// document.getElementById('owl').addEventListener('click',function(e){
//    console.log("owl clicked");
   
// },true)

// document.getElementById('images').addEventListener('click',function(e){
//    console.log("click inside the ul");
   
// },true)


// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
// console.log("google clicked");

// })



document.querySelector("#images").addEventListener('click',function(e){
    console.log(e.target.tagName)
    if (e.target.tagName==='IMG') {
        console.log(e.target.id);
        
        let removeit = e.target.parentNode;
    removeit.remove();
    }
})