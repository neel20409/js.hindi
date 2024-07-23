//Immediately inkod function expression (IIFE)

function chai (){
    console.log(`DB connected `);
}
// chai()


// another method to avoid pollution of global scope iife is used 
// (function chai (){
//     console.log(`DB connected `);
// })();


// ; (semi colon is requried to end invoke funtion )
//short using arrow function 
((name)=>{
    console.log(`DB connected of ${name} lets go!!`);
})("Neel") 

//if two iife used semicolon is must;;;;;;;;;