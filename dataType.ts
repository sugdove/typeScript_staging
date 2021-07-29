/*
 * @Author: your name
 * @Date: 2021-07-27 17:48:28
 * @LastEditTime: 2021-07-28 16:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript-staging\dataType.ts
 */

let param1: Array<string>
// param1 = [1,2,3]
param1 = ['1', '2', '3']

let param2: [string, number, Object]
// param2 = [1, 2, {a:2}]
param2 = ['1', 2, {a:2}]

let param3: number []
// param3 = ['1', 2, 3]
param3 = [1, 2, 3]

let param4: boolean 
// param3 = 4
param4 = true

interface Person2 {
  name: String,
  age: Number
}
let param5: Person2
param5 = {name: 'suge', age: 27}

let param6: any[]
param6 = [1, 2, '3']

const param7 = (message: string): never => {
  throw new Error(message)
}

const param8 = (): never => {
  while (true){

  }
}
// 泛型 用<T>代表要传入的参数和返回参数的类型 把类型单做变量
const getName = <T>(name:T, age:T):T => {
  return name
}

console.log(`我是${getName<string>('suge', '222')}`)
console.log(`我是${getName<number>(555, 222)}`)

// 枚举

enum type {
  high = '高',
  middle = '中等',
  top = '低'
}

const showPrice = (arg: type): string => {
  return `该车价值${arg}`
}

console.log(showPrice(type.high))