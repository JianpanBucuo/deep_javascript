/*
函数，作用域

函数 == 函数对象

this 
 是指当前函数中正在执行的上下文环境
*/
// 全局作用域上的 this, 指向 window

function a () {
    console.log(this);
}
a(); // this == window true

var o = {
    x:1,
    f:function() {
        console.log(this);
    }
}
// this 指向 o 本身

 function Myclass() {
     this.a = 35;
 }
 var o1 = new Myclass();
func.call(o);
func.apply(o,[]);  
Object.prototype.toString.call

var a = func.bind(o); 
// bind: 会将前面方法的作用域 绑定在接受的参数对象上， 并赋值给变量