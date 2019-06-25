var obj = Object.create({z:3})
obj.x = 1;
obj.y = 2;
for(key in obj) {
    console.log('key: ' + key + ' value: ' + obj[key]);
}
//for in 会把 原型链上的属性遍历出来
Object.getOwnPropertyDescriptor(obj, 'x')
// 查看对象上属性的可配置性

//判断 这个属性是否在对象上 (会向原型链上查找)
'x' in obj
obj.hasOwnProperty('x'); //实例上是否有这个属性(不向原型链上查找)

Object.defineProperty(obj, 'name',{
    enumerable: false, //不可枚举
    value: 1000, //值
    writable: false, //是否可以赋值
    configurable: false, //是否可以被删除 是否可以重新配置
})

var man = {
    name: 'Nic',
    get age() {
        return new Date().getFullYear() - 1988;
    },
    set age (val) {
        console.log('Cant\' set age ' +  val);
    }
}

var man2 = {
    name: 'Nic',
    $age: null,
    get age() {
       if(this.$age == undefined) {
           return new Date().getFullYear() - 1988;
       } else {
           return this.$age;
       }
    },
    set age(val) {
        val = +val;
        if(!isNaN(val) && val > 0 && val < 150) {
            this.$age = +val
        } else {
            throw new Error(val + 'can not set')
        }
    }
}

// 通过构造函数创建出的对象的 原型（__proto__） 指向其构造函数的 prototype(对象)
// 其构造函数的 prototype(对象)的原型（__proto__） 指向 Object.prototype(对象)
// Object.prototype.__proto__ == null // true

function foo() {

}
Object.defineProperty(foo.prototype,'z',{
    get:function () {
        return '1';
    },
    configurable: false,
 
})
// 如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。 ---------取自MDN原话。


// 属性权限设置
/* 
什么是属性标签
*/
Object.getOwnPropertyDescriptor(man,'name')  //查看对象属性 对应的描述值
Object.defineProperty(man,'type',{
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'student'
})
Object.defineProperties(man, {
    title:{
        value: 'title',
        enumerable: true
    },
    des:{
        value: 'wqq'
    }
})