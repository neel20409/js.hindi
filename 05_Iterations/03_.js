// for of


const arr = [1,2,3,4,5,7]
for (const num of arr) {
    // console.log(num);
    
}
const greet ="hello world"
for (const val of greet) {
    
    // console.log(val);
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('us',"usa")
// console.log(map);

for (const key of map) {
    // console.log(key);
    
}
for (const [key,value] of map) {
    // console.log(key, ":", value);
    
}//maps are iteratable

const obj1 = {
    "game1":"hockey",
    "gmae2": "criket"

}//not iterables object 
for (const [key,value] of obj1) {
    console.log(key,";",value);
    
}

