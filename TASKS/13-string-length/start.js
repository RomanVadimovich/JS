/** ЗАДАЧА 13 - Длина строки
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Виведите в консоль длину этой строки
 */
// function myFn(a, b) {
//     let c
//     c = a + b
//     return c
// }
// console.log(myFn(5, 5))

// const sum = function (a, b) {
//     let f = a + b
//     return f
// }
// console.log(sum(3, 3))

// const sum2 = (a, b) => {
//     return a + b
// }
// console.log(sum2(4, 4))

// const person = (info, time = Date()) => ({
//     ...info,
//     time
// })
// const user = {
//     city: 'Dno',
//     popular: false
// }
// person(user)
// console.table(person(user))

const fnWithError = () => {
    throw new Error('Some error')
}

fnWithError()