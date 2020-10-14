"use strict";

var list = [{
  id: 1,
  name: 'João',
  age: 18
}, {
  id: 2,
  name: 'Marcos',
  age: 45
}, {
  id: 3,
  name: 'Maria',
  age: 12
}, {
  id: 4,
  name: 'Roberto',
  age: 56
}, {
  id: 5,
  name: 'Garibalda',
  age: 23
}];
var id = list[0].id;
var name = list[0].name;
var age = list[0].age; // const { id, name, age } = list[0]

console.log(id, name, age);
