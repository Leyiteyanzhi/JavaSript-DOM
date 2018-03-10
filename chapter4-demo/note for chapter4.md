# 第四章

## DOM提供的几个新属性

### childNodes

  在一棵节点树上，childNodes属性可以用来获取任何一个元素的所有子元素，他是一个包含这个元素全部子元素的数组：
<code>element.childNodes</code>
- 由childNodes属性返回的数组包含所有类型的节点，而不仅仅是元素节点。事实上，文档里几乎每一样东西都是一个节点，例如：空格、换行符等。它们也全都包含在childNodes属性所返回的数组当中。

### nodeType

- 

### nodeValue

### firstChild

### lastChild

元素节点的 nodeType 的属性值是1

属性节点的 nodeType 的属性值是2

文本节点的 nodeType 的属性值是3
