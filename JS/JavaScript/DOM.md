# DOM-文档对象模型

> DOM 是针对 HTML 和 XML 文档的一个 API(应用程序编程接口).DOM 描绘了一个层次化的节点树,允许开发人员添加、移除和修改页面的某一部分。

## 1. 创建

- document.write();
- document.innerHTML();
- document.createElement();
- \$(selector).html(dom)

> document.createElement()性能较优且常用,性能仅略次于使用数组的 innerHTML()

## 2. 增加

- appendChild(dom)
- insertBefore(tag,ele)

## 3.删除

- removeChild(dom)

## 4.修改

- 修改元素默认属性:src,href,title 等
- 修改元素内容:innerHTML,innerText
- 修改表单元素:value,type,disabled 等
- 修改元素样式:style,className

## 5.获取

- DOM:getElementById(),getElementsByTAgName(),getElementsByClassName(),getElementsByName();
- H5:querySelector(),querySelectAll();
- 节点操作:parentNode,children,previousElementSibling,nextElementbling

## 6.属性操作

- setAttribute(key,value):设置 dom 属性
- getAttribute(key):获取 dom 属性
- removeAttribute(key):移除 dom 属性

## 7.事件

- 另行叙述
