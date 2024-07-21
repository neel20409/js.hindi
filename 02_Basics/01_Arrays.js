//array

const arr = [0,1,2,3,4,5,6,7,"Neel",true]
// console.log(arr[8]);

const arr2 = new Array(1,23,34,54,676,34,56,78,87,65)


// arr2.push(66)
// console.log(arr2);  
// arr2.pop()

// arr2.unshift(44)
// arr2.shift()
// console.log(arr2.indexOf(34));

const newarr = arr2.join()//convert array element into string using join operation



// console.log(newarr);
// console.log(typeof(newarr));

// slice and splice

console.log("original arr",arr2);//orginal array before any operation

const arr3 = arr2.slice(1,4);
 console.log("slice arr",arr3);
 console.log("original after slice :", arr2);
 
const arr4 = arr2.splice(1,4);
 console.log("splice arr",arr4);
 console.log("original after splice", arr2);