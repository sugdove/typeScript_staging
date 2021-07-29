/*
 * @Author: your name
 * @Date: 2021-07-27 17:01:13
 * @LastEditTime: 2021-07-28 17:07:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript-staging\interface.ts
 */
interface Person  {
  name: String,
  age: Number
}

function Person(person:Person){
  return `我叫${person.name}, 我今年${person.age}岁了`
}

console.log({name:'suge', age: 27})