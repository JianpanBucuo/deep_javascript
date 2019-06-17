// 对象， 原型链
var obj1 = {
    x:1,
    y:2
}
// 原型连

function foo () {

}  
foo.prototype.z = 3;

var obj = new foo();
obj.x = 1;
obj的原型会指向 构造器的 prototype属性
