# 数据类型

ECMAScript 有 6 种简单数据类型（也成为原始类型），还有一种复杂数据类型（也成为引用类型）

## 原始类型

ECMAScript 有 6 种简单数据类型（**原始值**），保存原始值的变量是按值访问

- `undefined` 未定义
- `null` 空指针
- `string` 字符
- `number` 数值
- `boolean` 布尔值
- `symbol` 符号（唯一值）
- `bigint` 大整数

:::tip 总结

- 原始类型只保存原始值，不存在属性和方法
- 原始值的变量是 ***按值（by vakye）*** 访问的，操作的就是存储在变量中的实际值
- 原始值复制时，会创建一个新的副本，完全独立不互相干扰
:::

:::tip ps.原始值不存在方法和属性，那 `'test'.toString()` 为何能执行呢？
JavaScript 存在一种叫做 **自动装箱** 的机制，会在需要使用引用值方法时，自动将原始类型包装为对应的引用类型

```js
const str = 'hello'
str.toString()

/**
 * 1. 创建 str 的时候是一个原始字符串，没有方法和属性
 * 2. 调用字符串方法时，自动创建一个临时 String 对象
 * 3. 方法执行完后，这个临时对象会被 gc 自动清除
 */
const str = 'hello'
new String(str).toString()
```

:::

## 引用类型

引用值是保存在内存中的对象

- `Object` 对象
- `Array` 数组
- `Function` 函数
- `Set` 只有唯一值的有序集合
- `Map` 类似对象的集合

## 类型判断

1. typeof

- `typeof` 非常适合检测基本类型如数字、字符串、布尔值、函数
- `typeof` 对未声明的变量不会抛出错误，而会返回 `undefined`

```js
console.log(typeof 2)                 // number
console.log(typeof true)              // boolean
console.log(typeof 'str')             // string
console.log(typeof [])                // object
console.log(typeof {})                // object
console.log(typeof null)              // object
console.log(typeof function () {})    // function
console.log(typeof undefined)         // undefined
```

:::tip 为什么 `typeof null === "object";`
在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。
:::

2. instanceof

- `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上
- `instanceof` 只能正确判断引用值类型的数据

```js
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
const auto = new Car('Honda', 'Accord', 1998)
console.log(auto instanceof Car) // Expected output: true
```

```js
console.log(2 instanceof Number)                  // false
console.log(true instanceof Boolean)              // false
console.log('str' instanceof String)              // false
console.log([] instanceof Array)                  // true
console.log(function () {} instanceof Function)   // true
console.log({} instanceof Object)                 // true
```

3. Object.prototype.toString.call()

```js
console.log(Object.prototype.toString.call(2))                // [object Number]
console.log(Object.prototype.toString.call(true))             // [object Boolean]
console.log(Object.prototype.toString.call('str'))            // [object String]
console.log(Object.prototype.toString.call([]))               // [object Array]
console.log(Object.prototype.toString.call(function () {}))   // [object Function]
console.log(Object.prototype.toString.call({}))               // [object Object]
console.log(Object.prototype.toString.call(undefined))        // [object Undefined]
console.log(Object.prototype.toString.call(null))             // [object Null]
```

## 浅拷贝和深拷贝
