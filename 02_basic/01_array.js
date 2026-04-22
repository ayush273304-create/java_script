////Array
const myArr = [0, 1 ,2 ,3 , 4 , 5 , 6]                   
const myHero = ["superman " , "spiderMan", "Gangadhar"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);
// console.log(myArr2[3])

//// +++++++ Array methods ++++++++++++++

// myArr.push(6)          ////insert in last positionn of array
// console.log(myArr);
// myArr.pop()            ////pop from last
// console.log(myArr);    


// myArr.unshift(3)    /////insert from begin
// console.log(myArr)     
// myArr.shift()       /////pop from start



// console.log(myArr.includes(9))    ///jus ask qeustion true/flase
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()
                    /// ye besically array ko merge karke string me convert kar deta hai
// console.log(myArr)
// console.log(newArr)
 

////slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,  3)  // [1,2]
console.log( myn1)           ////delete this portion
console.log("B",  myArr)

const myn2 = myArr.splice(1, 3)
console.log("C" ,myArr);
console.log(myn2)   ///[1,2,3]

