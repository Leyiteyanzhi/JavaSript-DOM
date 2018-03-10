# 第六章

## dmeo5改进

### 共享 onload 事件

   - 把现有的 window.onload 事件处理函数的值存入变量 oldonload 。
   - 如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它。
   - 如果这这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾。

  <code>function addLoadEvent(func){
            var oldonload = window.onload;
            if(typeof window.onload != 'function'){
                window.onload = func;
            }else{
                window,onload = function(){
                    oldonload();
                    func();
                }
            }
        }</code>

### 不要做太多的假设

  - 尽量让 JavaScript 代码不再依赖那些没有保证的假设，为此引入许多测试和检查


