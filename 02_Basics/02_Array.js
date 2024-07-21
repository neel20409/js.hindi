const arr = ["Neel","Bhatt","Meet","Shiv","Ved"]
const arr2 = ["Dharm","Naiya","darsh","deep"]
// arr.push(arr2)
// console.log(arr[5][3]);

// const arr3 =  arr.concat(arr2)  //create new array and store in that new array
// console.log(arr3);


const arr4 = [...arr,...arr2] //same as concate but effective know as spread function
// console.log(arr4);


const arr5 = [1,2,34,,5,[5,456,678,["hi","my","ny"],65,87,89],34,87,66]

const orgarr = arr5.flat(Infinity)//smplify array depth for user help
// console.log(orgarr);


//to convert into array

// console.log(Array.from("BhattNeel"));

console.log(Array.from({name: "Neel"}));//provide empty array
//can`t convert into array directly first need to specifice whether we need to convert key or pairs 
