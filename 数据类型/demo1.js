//数据类型

/*
原始类型

number
string
boolean
null
undefined

引用类型
Object
*/

//隐式转换
var num1 = '123'
var num2 = 345;

console.log(num1 + num2);  // 123345
console.log(num1 - num2);  // -222

//  === 严格等于 会先判断类型
// == 
// 当一方是数字 一方是字符串时，会尝试将 字符串转换为数字

// 布尔值 与 数字时 会尝试先把布尔值转换为数字 

// 对象与 Number String  会尝试将对象转换为基本类型

// 包装对象
/*
 Number String Boolean 都有对应的 包装类型

 */
var str = 'string'
var strObj = new String('str Obj');

str.t = 10;
str.t // undefined

strObj.t = 2;
strObj.t // 2

strObj.toString(); // 将包装对象转换为 基本类型

// 当尝试调用基本类型的 length 属性时, 会将基本类型转换为对象的包装类型对象,当取到值后 会将包装类型马上销毁