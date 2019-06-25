//闭包
// 可以访问另一个函数作用域变量的函数
//  函数 和 环境变量
// 当返回一个函数时，返回的是 函数 加上 当前函数的环境变量
function outer() {
    var local = 30;
    return local;
}
outer();

function outer2() {
    var local = 30;
    return function () {
        return local;
    }
}
var a = outer2();
// 局部变量不可被释放