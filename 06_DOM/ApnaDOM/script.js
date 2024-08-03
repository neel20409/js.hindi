// console.dir(document.body);
// let heads = document.getElementById("heading");
// console.dir(heads);
let headss=document.getElementsByClassName("heading");
// console.dir(headss);
let tag = document.getElementsByTagName("p");
// console.dir(tag);

let firstelement = document.querySelector("p");
// console.dir(firstelement);
let allelement = document.querySelectorAll("p");
// console.dir(allelement);
let classs = document.querySelectorAll(".heading");
// console.dir(classs);


let appendd = document.querySelector("h2")
// console.dir(appendd.innerText);
appendd.innerText=appendd.innerText+" from apna college"


let box = document.querySelectorAll(".box");
// console.log(box[0].innerText);
// console.log(box[1].innerText);
// console.log(box[2].innerText);
// box[0].innerText=box.innerText + "All are the divs!!"
// box[1].innerText=box.innerText + "All are the divs!!"
// box[2].innerText=box.innerText + "All are the divs!!"

let idx=0
for(div of box){
    div.innerText="new text";
    idx++;
}
let newbtn = document.createElement("button");
newbtn.innerText=("Click me!!")
console.log(newbtn);
// let divs = document.querySelectorAll("#box");
document.body.append(newbtn);
newbtn.style.color="white";
newbtn.style.backgroundColor="black";

