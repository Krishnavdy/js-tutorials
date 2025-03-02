//  primitive

// 7 Types : String, Number, Boolean, null, undefined, symbol, Bigint

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5352574524155554152452635n



// Reference (Non primitive)

// Array, object, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "krishna",
    age: 22,
}

const myfunction = function(){
      console.log("hello world");
}

console.log(typeof score )
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof