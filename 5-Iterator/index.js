/* 
表示集合的数据结构 有四种
Array Object Set Map

用户可以组合他们，定义自己的数据结构，这样就需要统一的接口机制， 来处理不同的数据结构

遍历器 Iterator 就是这样一种机制，它是一种接口，为不同的数据结构提供统一的访问机制
任何数据结构只要部署 Iterator接口，就可以遍历访问他们

Iterator的三个作用
 1.为不同的数据结构提供统一的访问机制
 2.使数据结构可以按一定次序排列
 3. 供 for of 消费

Iterator遍历过程是创建一个指针，并将它指向当前数据结构的起始位置，遍历器对象本质上，就是一个指针对象。
*/
function makeIterator (array) {
	var nextIndex = 0;
	return {
		next: function () {
			return next < array.length ? 
					{value: array[nextIndex++], done:false} : 
					{value: undefined, done: true};
		}
	}
}
var it = makeIterator(['a', 'b']);