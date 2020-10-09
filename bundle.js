"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// 1 - Const
// 2 - Let
// 3 - Escope
var item = 1;
item = (_readOnlyError("item"), 5);
console.log(item); /////////
// const item = { name: "vincius" }
// item.name = "catha"
// console.log(item )
///////
// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr)
///////
// var number = 5
// {
//   var number = 10
//   console.log(number)
// }
// console.log(number)
///////
// function add(number){
//   return number
// }
// console.log(add(number))
