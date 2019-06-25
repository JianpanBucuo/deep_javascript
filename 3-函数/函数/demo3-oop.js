//面向对象编程
//Object-oriented programming  面向对象程序设计
// 对象是指类的实例，它将对象作为程序的基本单元，将程序和数据封装器中，以提高软件的重用性，灵活性和扩展性

/* 
继承
封装
多态
抽象

*/

function Foo () {
    this.y =2;
}
typeof Foo.prototype
prototype 是函数上面的预设的对象属性
原型 通常都是 其构造器的prototype
// {
//     constructor: Foo,
//     __proto__: Object.prototype
// }

// 当使用 new 操作符时，会将函数当作一个构造器来使用，并将 this 指向其原型一个对象， 
// 并将this的原型指向 构造器的 prototype

function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.hi = function () {
    console.log(this.name);
}
// var a = new Person('Nic',23);

function Student(name, age, cla) {
    Person.call(this,name, age);
    this.cla = cla;
}
Student.prototype = Object.create(Person.prototype);