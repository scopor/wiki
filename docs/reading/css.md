---
title: CSS 笔记
head:
- - meta
  - property: og:title
    content: CSS 笔记
- - meta
  - name: description
    content: CSS,引入方式,选择器
- - meta
  - name: keywords
    content: CSS,引入方式,选择器
- - meta
  - property: og:description
    content: CSS,引入方式,选择器
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/reading/css
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/reading/css
---

# **CSS** 学习笔记

## 引入 **CSS** 的四种方式

### 外部样式表

推荐使用。**rel** 取值固定 **stylesheet**，标识引入的是一个样式表文件；**type** 取值固定 **text/css**，表示是标准的 **CSS** ，**href** 值为 **CSS** 文件路径。

```css
<link rel="stylesheet" type="text/css" href="文件路径" />
```

### 内部样式表

内部样式表是指 **HTML** 和 **CSS** 代码放到同一个 **HTML** 文件中，**CSS** 代码放在 **style** 标签内，**type="text/css"** 是必须添加的，表示这是标准的 **CSS** 。 **style** 标签是放在 **head** 标签内的。

```css
<style type="text/css">
    ……
</style>
```

### 行内样式表

不推荐使用，可读性和可维护性差。行内样式表与内部样式表类似，也是把 **HTML** 代码和 **CSS** 代码放到同一个 **HTML** 文件。但是两者有着本质的区别：内部样式表的 **CSS** 是在 **style** 标签内定义的，而行内样式表的 **CSS** 是在“标签的 **style** 属性”中定义的。

```css
<div style="color:blue;">Winter is comming.</div>
```

### @import 引入

与外部样式表相似，实际极少使用，**@import** 是先加载 **HTML** 后加载 **CSS**，而外部样式表相反。使用 **@import** 方式会导致页面用户体验差。



## **CSS** 选择器

### 元素选择器

对相同的源宿定义同一个 **CSS** 样式。下面的定义会将页面中所有的 **div** 选中，渲染他们的文本颜色为红色。

```css
div {
    color: red;
}
```

### **ID** 选择器

元素在当前页面中可以定义一个唯一性的 **ID**，而 **CSS** 样式可以针对这个 **ID** 进行渲染。**ID** 选择器使用语法 **#ID** 定义。

```css
#content {
    color: red;
}

<div id="content">Winter is comming</div>
```

### **class** 选择器

类选择器，和 **ID** 选择器类似，每个元素可以定义自己的 **class** 属性，区别是 **class** 属性可以用于多个相同或者不同的元素。使用语法 **.class** 定义。

```css
.content {
    color: red;
}

<div class="content">Winter is comming</div>
<span class="content">Winter is comming</span>
```

### 后代选择器

选择元素内部中某一种元素的所有元素，包括子元素和其他后代元素。使用语法**父元素选择器 子元素选择器** 定义，注意中间使用空格隔开。

:::tip

父元素选择器和子元素选择器，都可以是 **ID** 选择器、**class** 选择器或者元素选择器，可以互相搭配使用。 

:::


```css
#content #summer {
    color: red;
}

<div class="content" id="content">
    <p id="summer">Summer is warm.</p>
    <p>Winter is cold.</p>
    <span>Winter is cold.</span>
</div>
```


[1]: 从 0 到 1：HTML + CSS快速上手, 莫振杰.


