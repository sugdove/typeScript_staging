/*
 * @Author: your name
 * @Date: 2021-07-27 17:10:26
 * @LastEditTime: 2021-07-27 17:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript-staging\Class.js
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeting(person) {
    var firstName = person.firstName, middleName = person.middleName, lastName = person.lastName;
    return firstName + " " + middleName + " " + lastName;
}
var user = new Student('su', 'M.', 'ge');
console.log(greeting(user));
