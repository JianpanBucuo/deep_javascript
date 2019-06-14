//类型转换
/* 
 typeof
 instanceof
 Object.prototype.toString
 constructor
 duck type
*/
function a (){}
console.log(typeof 100)
console.log(typeof true)
console.log(typeof a)
console.log(typeof undefined) // undefined
console.log(typeof null) //object
console.log(typeof []) //object
// typeof 会返回一个对象适合判断 基本类型 和 函数对象

/* 
当判断对象类型时, 常用的是 instanceof
instanceof 期望
*/