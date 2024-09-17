let boxs = document.querySelectorAll(".box");
let rst = document.querySelector("#rstbtn");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.getElementsByClassName("msgcontainer")[0];
let msg =document.getElementById("msg");
let body = document.querySelector("body");
let turn0 = true //playerx,playery

let winpattern=[ [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]];

 boxs.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        // console.log("Box was cilcked");
        if(turn0){
        box.innerText="O";
        turn0=false;
        }
        else{
            box.innerText="X";
        turn0=true;
        }
        box.disabled=true;

        checkwinner();
    })
 })  
 const disableboxs = ()=>{
    for (let box of boxs){
       box.disabled=true;
    }
 }
 const enableboxs = ()=>{
    for (let box of boxs){
       box.disabled=false;
       box.innerText="";
    }
 }


 const showwinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
 }


 const checkwinner=()=>{
    for(pattern of winpattern){
        let pos1val =   boxs[pattern[0]].innerText;
        let pos2val =   boxs[pattern[1]].innerText;
        let pos3val =   boxs[pattern[2]].innerText;

        if(pos1val != ""&& pos2val!=""&&pos3val!=""){
            if(pos1val ===pos2val&&pos2val === pos3val){
                // console.log("winner", pos1val);
                showwinner(pos1val);
                disableboxs();
            }
            
        }
    }

 };

 const resetgame = ()=>{
    turn0=true;
    enableboxs();
    msgcontainer.classList.add("hide");
 }
 newgamebtn.addEventListener("click",resetgame);
 rst.addEventListener("click",resetgame);


 const clock =document.getElementById('clock');

setInterval(function (){
    let date =new Date();

    clock.innerHTML=date.toLocaleTimeString();
},1000);