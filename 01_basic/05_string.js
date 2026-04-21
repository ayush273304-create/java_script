let name = "Ayush Gupta"
let branch = "ECE"

console.log(`Hello my name is ${name} and my branch is ${branch}`)


const gameName = new String('ayush-gupta')

// console.log(gameName[0])            // a
// console.log(gameName.__proto__)     // String prototype
// console.log(gameName.length)        // 10 (NOT length())
// console.log(gameName.toUpperCase()) // AYUSHGUPTA
// console.log(gameName.charAt(2))     // u
// console.log(gameName.indexOf('s'))

const newString  = gameName.substring(0 ,4);
console.log(newString);
///slicing

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const newStringOne= "      ayush .      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "homelander110067@ok.com";

console.log(url.replace('ok' ,'gmail'))


console.log(gameName.split('-'));