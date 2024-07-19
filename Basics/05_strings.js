let stringss = "hello"
let stringss2 = " world"
// console.log(stringss+stringss2 + "my self neel !!");//outdated 
let string3 = stringss + stringss2

// console.log(string3);


// console.log(`Today I am here to say ${stringss} to the ${stringss2} , my self Neel !!`); //use this

const name = new String('BHAtt NEEL');

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[8]);
// console.log(name[9]);
//// 
// console.log(name.length);

console.log(name.toUpperCase());
// console.log(name.charAt(2));

const newname = name.substring(0,6)//can`t use negative values
// console.log(newname);
const anoname = name.slice(-9,5);//can use negative values
// console.log(anoname);

const newstring1 = "    neel   "
// console.log(newstring1);
// console.log(newstring1.trim());//remove spaces


const url = "https://neel.com"
// console.log(url.replace('neel','bhatt'));

console.log(url.includes('neel'));
console.log(name.split(' '));
console.log(name.bold());