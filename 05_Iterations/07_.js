const nums = [1,2,3,4,5,6,7,8,9,10]

// const newnums=nums.map((num)=>num+10)

const newnum = nums.map((num)=>num+10)
                   .map((num)=>num+10)
                   .filter((num) => num >=40)
console.log(newnum);//chaining