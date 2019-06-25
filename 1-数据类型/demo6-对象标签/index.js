    /*
proto
class 
extensible

*/
// 原型
// __proto__ 

var _toString = Object.prototype.toString;
function getType(o) {
    return _toString.call(o).slice(8,-1);
}

var obj = {
    x:1,
    y:2
}
Object.preventExtensions(obj); //这个对象不能在扩展其他属性，但可以修改其已有属性
Object.isExtensible(obj); //是否可扩展

Object.seal(obj)  //对象不能扩展其他属性并 将 已有属性的 configerable 设置为 false
Object.isSealed(obj) //对象是否 

// 不可扩展新属性，不可配置已有属性， 不可删除，不可写（writable 属性设置为false）
Object.freeze(obj);


// 序列化， 其他对象方法
var obj2 = {
    x: undefined,
}
JSON.stringify(); // 属性的值为 undefined的话, 不会出现在序列化后的字符串当中