# 第七章

## 动态创建标记

### 一些传统的方法

1. document.write
    - document 对象的 write() 方法可以方便快捷地把字符串插入到文档里
    - document.write 的最大缺点是未被了“行为应该与表现分离”的原则，应避免使用  

2. innerHTML
    - innerHTML 属性可以用来读、写某给定的元素里的HTML内容。
    - 一旦使用了 innerHTML 属性，相应元素下的内容都将被替换

### DOM方法

1.  createElement
    - DOM 方法 createElement 用来创建一个新的元素，下面是这个方法的语法：
    `document.createElement(nodeName)`
    下面这条语句将创建一个 p 元素：
    `document.createElement("p");`

2.  appendChild
    - 把新创建的节点插入某个文档的节点树的最简单办法是，让他成为这个文档某个现有节点的一个子节点
    下面是 appendChild 方法的语法：
    `parent.appendChild(child);`

3.  createTextNode
    - createTextNode 用来创建一个文本节点
    createTextNode 的语法与 createElement 很相似：
    `document.createTextNode(text);`






