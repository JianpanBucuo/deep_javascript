// 对象中包含属性, 属性是无序的

var obj = {}
obj.x = 1;
obj.y = 2;
//writable enumerable configerable value  get/set 可以设置对每个属性的访问权限
// 
每一个对象都有一个原型
function foo () {

}
/*
每一个函数都有一个 prototype 的 对象属性
当我们 通过构造函数 foo 创建一个实例时, 这个 实例的原型 会指向 函数的 prototype属性

*/
obj.hasOwnProperty('x')
delete obj.x // 只会删除对象上的属性 不会修改原型链上的属性

var a = Object.create({x:1});
// 会将创建出的对象的原型 指向 Object.create里接收的参数

var a = Object.create(null);
//原型上不会包含任何方法