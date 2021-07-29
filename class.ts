/*
 * @Author: your name
 * @Date: 2021-07-27 17:10:26
 * @LastEditTime: 2021-07-27 17:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript-staging\Class.js
 */

class Student {
  fullName : String;
  constructor (public firstName, public middleName, public lastName){
    this.fullName = `${firstName} ${middleName} ${lastName}`
  }
}

interface Person {
  firstName: String,
  middleName: String,
  lastName: String
}

function greeting(person:Student){
  const { firstName, middleName, lastName } = person
  return `${ firstName } ${ middleName } ${ lastName }`
}

let user = new Student('su', 'M.', 'ge')

console.log(greeting(user)) 