# 第五章

## 最佳实践

### 平稳退化

   如果正确地使用了 JavaScript 脚本，就可以让访问者在他们的游览器不支持 JavaScript 的情况下仍能顺利地游览网站。这就是所谓的“平稳退化”，就是说，虽然有
   些功能无法使用，但最基本的操作仍能顺利完成。

### 分离JavaScript

  把网页的结构和内容与 JavaScript 脚本的动作行为分开。

### 向后兼容性

   不同的游览器对 JavaScript 的支持程度也不一样。但比较古老的游览器却可能无法理解DOM提供的方法和属性。

   - 对象检测
        例如：<code>if(!document.getElementById || !document.getElementByTagName) return false;</code>

   - 游览器嗅探技术


### 性能考虑

   - 尽量少访问 DOM 和尽量减少标记
   - 合并和放置脚本
   - 压缩脚本
