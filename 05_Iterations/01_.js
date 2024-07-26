for (let i = 0; i <=10; i++) {
    const element = i;
    if(element%2===0){
        // console.log(`${element} is best number`);
    }
    // console.log(element);
    
}
//print table 
for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 1; j <=10 ; j++) {
    
        // console.log(`inner loop ${j}`);
        // console.log(i+'x'+j+'='+i*j);
    }
    
}
//arrray
let arr = ["neeel","meet","shiv"]
// console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    
}

//break continue

for (let index = 1; index <=20; index++){
    if(index===5){
        // console.log("detected 5");
        break;
    }
    // console.log(`value ${index}`);
      
}
for (let index = 1; index <=20; index++){
    if(index===5){
        console.log("detected 5");
        continue;
    }
    console.log(`value ${index}`);
      
}


