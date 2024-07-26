const code = ["js","python","c","c++"]

code.forEach( function (item){
    // console.log(item);

} )

code.forEach( (val) => {
    // console.log(val);//using arrow function 
} )

code.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);//multiple argument 

})

const mycode=[//array that contain objects
    {
        lang1 :"java",
        lang:"js"
    },
    {
        lang2:'ph',
        lang:"python"
    },
    {
        lang3:"ja",
        lang:"java"
    }

]
mycode.forEach(  (item)=> {
    console.log(item.lang);
})