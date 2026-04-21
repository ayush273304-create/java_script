///Primitive 

/// 7 types : String  , Number , Boolebn , null , Undefined , Symbol  , BigInt

const score = 100
const someNumber = 100.3

const isLogged = false
const outsideTemp = null
let userId;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherID);

// const bigNumber = 123456789876543456n



//// Reference (Non Primimative)
/// array , Object , Functions 

const heros = ["shaktiman " , "naagraj", " doga"] ///array
////object
let myObj = {
    name  : "ayush",
    age : 19,
}

// function
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);


//////+++++++++++++++++++++++++++++++ Memory /////Stack //// heap
//////Stack(Primitive)(Stack)
let myEmailId = "aysuhGutpta@1234"
let myanotherId = myEmailId;

 myanotherId = "ayushJi@2344"
 console.log(myEmailId)
 console.log(myanotherId)

 /////Heap ( non - preimitive datatypes)(Heap)

let userOne = {
    email : "ayush@234",
    upiid : 1233423,
}

let userTwo = userOne;

userTwo.email="guptajin afhsgfhisk"
console.log(userOne)
console.log(userTwo)