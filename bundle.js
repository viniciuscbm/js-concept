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
/**
 * Map
 *
 * Mapear a lista para retornar a mensagem: `Olá, meu nome é ${name} e tenho ${age}`
 */
// console.log(list.map((people) => (`Olá, meu nome é ${people.name} e tenho ${people.age}.`)))
// console.log(list.map(({ name, age }) => (`Olá, meu nome é ${name} e tenho ${age}`)))

/**
 * Filter
 *
 * Filtrar todas as pessoas com mais de 20 anos
 */
// console.log(list.filter(pessoa => (pessoa.age > 20)))

/**
 * Reduce
 *
 * Retornar a média de idade das pessoas em 2023
 */
//  const total = list.map(p => p.age + 3)
//   .reduce( (a, b) => (a + b), 0)
//  const avg = total/list.length
//  console.log(avg)
