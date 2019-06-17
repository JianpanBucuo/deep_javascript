//类型检测
/* 
 typeof    (适合基本类型或 函数)
 instanceof  (对象类型)
 Object.prototype.toString  （基本类型 数组 函数）
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
instanceof 期望左操作数是一个对象, 右操作数是一个函数构造器
原理： 判断左操作数的对象的原型链上 有没有 右操作数上构造函数的 prototype属性

*/
[1,2] instanceof Array;
new Object() instanceof Object

function Student(name) {
    this.name = name;
}
var bosn = new Student('bosn');

Object.prototype.toString.apply([1,2])  // "[object Array]"

Object.prototype.toString.apply({})  // "[object Object]"

function type (value) {
   return  Object.prototype.toString.call(value).slice(8, -1);
}


//----------------------------------------

typeof 'as' //string 有效
typeof 12 //number 有效
typeof undefined // undefined 有效
typeof true // boolean 有效
typeof null //object 无效
typeof Function // function 有效

// 函数是一种对象, 对象都是通过函数创建的