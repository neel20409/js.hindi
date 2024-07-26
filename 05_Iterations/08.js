 //reduce()

 const arr1 = [1,2,3,4,5]

//  const total = arr1.reduce(function (acc,curval){
//     console.log(`acc:${acc}
//                 curval:${curval}`);
//     return acc+curval
//  },0)
//  console.log(total);

const mytotal = arr1.reduce( (acc,curr) => acc+curr, 0)
console.log(mytotal);