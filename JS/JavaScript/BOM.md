# BOM-浏览器对象模型
> BOM 的核心对象是 window，它表示浏览器的一个实例。在浏览器中，window 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。这意味着在网页中定义的任何一个对象、变量和函数，都以 window 作为其 Global 对象，因此有权访问 isNaN()、isFinite()、parseInt()、parseFloat() 等方法。

## window
> Window 对象表示浏览器中打开的窗口。如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。

## navigator

## history
### 属性
> 调用方式:history.XXX

常用属性 | 描述
- | -
length | 返回浏览器历史列表中的 URL 数量。(url列表长度)

### 方法

方法 |	描述
- | -
back()|	加载 history 列表中的前一个 URL。
forward()	| 加载 history 列表中的下一个 URL。
go()|	加载 history 列表中的某个具体页面。
备注: | History 对象最初设计来表示窗口的浏览历史。但出于隐私方面的原因，History 对象不再允许脚本访问已经访问过的实际 URL,仅保留上述3个方法
## location

## screen
### 属性
> 调用方式: screen.XXX

常用属性 | 描述
- | -
width |	返回显示器屏幕的宽度。
height | 返回显示屏幕的高度。
availWidth | 返回显示屏幕的可用宽度 (除 Windows 任务栏之外)。
availHeight | 返回显示屏幕的可用高度 (除 Windows 任务栏之外)。
pixelDepth | 返回显示屏幕的颜色分辨率（比特每像素）。
updateInterval |	设置或返回屏幕的刷新率。
... | 其他不常用的略