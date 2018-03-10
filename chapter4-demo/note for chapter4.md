# 第四章

## DOM提供的几个新属性

### childNodes

  在一棵节点树上，childNodes 属性可以用来获取任何一个元素的所有子元素，他是一个包含这个元素全部子元素的数组：
  <code>element.childNodes</code>
  - 由 childNodes 属性返回的数组包含所有类型的节点，而不仅仅是元素节点。事实上，文档里几乎每一样东西都是一个节点，例如：空格、换行符等。它们也全都包含在childNodes属性所返回的数组当中。

### nodeType

  nodeType 属性可以告诉我们正在与哪一种节点进行操作。用下面的语法获取节点的 nodeType 属性：
  <code>node.nodeType</code>
  - 但 nodeType 的值不是英文，而是一个数字，共有12种可取值，其中仅有3种具有使用价值。

    1.  元素节点的 nodeType 的属性值是1
  
    2.  属性节点的 nodeType 的属性值是2
  
    3.  文本节点的 nodeType 的属性值是3

### nodeValue

   nodeValue 属性用来得到（和设置）一个节点的值：
   <code>node.nodeValue</code>

### firstChild

  firstChild 为数组元素childNodes[0]更直观易读的同义词
  - <code>node.firstChild</code>写法完全等价于<code>node.childNodes[0]</code>。不仅更加简短，还更加具有可读性。

### lastChild

  DOM还提供了一个与之对应的 lastChild 属性：<code>node.lastChild</code> 这代表着 childNodes 数组的最后一个元素。
  - 等价于<code>node.childNodes[node.childNodes.length-1]</code>
  
