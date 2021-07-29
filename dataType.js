/*
 * @Author: your name
 * @Date: 2021-07-27 17:48:28
 * @LastEditTime: 2021-07-28 16:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript-staging\dataType.ts
 */
var param1;
// param1 = [1,2,3]
param1 = ['1', '2', '3'];
var param2;
// param2 = [1, 2, {a:2}]
param2 = ['1', 2, { a: 2 }];
var param3;
// param3 = ['1', 2, 3]
param3 = [1, 2, 3];
var param4;
// param3 = 4
param4 = true;
var param5;
param5 = { name: 'suge', age: 27 };
var param6;
param6 = [1, 2, '3'];
var param7 = function (message) {
    throw new Error(message);
};
var param8 = function () {
    while (true) {
    }
};
// 泛型 用<T>代表要传入的参数和返回参数的类型 把类型单做变量
var getName = function (name, age) {
    return name;
};
console.log("\u6211\u662F" + getName('suge', '222'));
console.log("\u6211\u662F" + getName(555, 222));
// 枚举
var type;
(function (type) {
    type["high"] = "\u9AD8";
    type["middle"] = "\u4E2D\u7B49";
    type["top"] = "\u4F4E";
})(type || (type = {}));
var showPrice = function (arg) {
    return "\u8BE5\u8F66\u4EF7\u503C" + arg;
};
console.log(showPrice(type.high));
