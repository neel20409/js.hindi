//Dates
let mydate = new Date()
console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof(mydate));
let mynewdate = new Date(2023,09,25)
// console.log(mynewdate.toDateString());

let owdate = new Date ("08-03-2005")
// console.log(owdate.toLocaleDateString());


// let mytimestamp =Date.now()
// console.log(mytimestamp);//milisecond

// console.log(Math.floor(Date.now()/1000));//seconeds

let newdates = new Date()
console.log(newdates);
console.log(newdates.getMonth());
console.log(newdates.getFullYear());
console.log(newdates.getDay());
console.log(newdates.getDate());
console.log(newdates.getHours());

newdates.toLocaleString('default',{
    weekday: "long",
    month: "2-digit"
})

