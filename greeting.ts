/*
 * @Author: your name
 * @Date: 2021-07-27 16:43:28
 * @LastEditTime: 2021-07-28 17:05:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript-staging\greeting.ts
 */
const greetings = (name:String) =>{
  return `hello ${ name } !`
}

const personName = 'suge'

document.body.innerHTML = greetings(personName)