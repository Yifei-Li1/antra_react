//Pick 6 of the following array methods and implement your own version of them:
//reduce, filter, find, concat, push, pop, slice, splice, some, every, reverse. 
//reduce
Array.prototype.myReduce = function(callback, initialValue){
    let acc =  initialValue;
    for(let i = 0;i < this.length;i++){
        acc = callback(acc,this[i],i,this);
    }
    return acc;
}
let arr = [2,3,4];
console.log("-------reduce-------")
console.log(
    arr.myReduce((accumulator,current)=>
        accumulator * current
    ,1)
)//24
console.log(
    arr.reduce((accumulator,current)=>
        accumulator * current
    ,1)
)//24
//filter
Array.prototype.myFilter = function(callback){
    let res = [];
    for(let i = 0;i < this.length;i++){
        
        if(callback(this[i])){
            res.push(this[i]);
        }
    }
    return res;
}
arr = [1,2,3,4,5];
console.log("-------filter-------")
console.log(arr.myFilter((a) => a % 2 === 0));//[ 2, 4 ]
console.log(arr.filter((a) => a % 2 === 0));//[ 2, 4 ]
//find
Array.prototype.myFind = function(callback){
    for(let i = 0;i < this.length;i++){
        if(callback(this[i])){
            return this[i];
        }
    }
    return undefined;
}
arr = [1,2,3,4,5];
console.log("-------find-------")
console.log(arr.myFind(a => a > 3)); //4
console.log(arr.find(a => a > 3)); //4
//concat
let arr2 = [6,7,8,9];
Array.prototype.myConcat = function(target){
    for(item of target){
        this.push(item);
    }
    return this;
}
console.log("-------concat-------")
console.log(arr.myConcat(arr2)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [1,2,3,4,5];
console.log(arr.concat(arr2)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9]
//slice
Array.prototype.mySlice = function(start,end){
    let res = [];
    if(start < 0){
        start = this.length + start;
    }
    if(end < 0){
        end = this.length + end;
    }
    if(end == undefined){
        for(let i = start;i < this.length;i++){
            res.push(this[i]);
        }
    }
    else{
        for(let i = start;i < end;i++){
            res.push(this[i]);
        }
    }
    return res;
}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("-------slice-------")
console.log(animals.mySlice(2, 4)); //[ 'camel', 'duck' ]
console.log(animals.slice(2, 4));//[ 'camel', 'duck' ]
console.log(animals.mySlice(-2)); //[ 'duck', 'elephant' ]
console.log(animals.slice(-2)); //[ 'duck', 'elephant' ]
//pop
Array.prototype.myPop = function(){
    return this.splice(-1).join('');
    
}
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log("-------pop-------")
console.log(plants.pop());
console.log(plants);
plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.myPop());
console.log(plants);