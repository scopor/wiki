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

:::tip

简单选择器：包含元素选择器、ID选择器、类选择器

:::

### 元素选择器

对相同的源宿定义同一个 **CSS** 样式。使用语法 **A {}** 定义。下面的定义会将页面中所有的 **div** 选中，渲染他们的文本颜色为红色。

```css
div {
    color: red;
}
```

### **ID** 选择器

元素在当前页面中可以定义一个唯一性的 **ID**，而 **CSS** 样式可以针对这个 **ID** 进行渲染。**ID** 选择器使用语法 **#ID {}** 定义。

```css
#content {
    color: red;
}

<div id="content">Winter is comming</div>
```

### **class** 选择器

类选择器，和 **ID** 选择器类似，每个元素可以定义自己的 **class** 属性，区别是 **class** 属性可以用于多个相同或者不同的元素。使用语法 **.class {}** 定义。

```css
.content {
    color: red;
}

<div class="content">Winter is comming</div>
<span class="content">Winter is comming</span>
```

---

:::tip

组合选择器：包含群组选择器、后代选择器、子选择器、兄弟选择器和相邻选择器

:::

### 群组选择器

群组选择器，针对多个元素共同定义一组样式。使用语法 **A,B {}** 定义。

```css
#summer,.winter,span {
    color: red;
}

<div>
    <p id="summer">Summer is warm.</p>
    <div class="winter">Winter is cold.</div>
    <span>Winter is cold.</span>
</div>
```

### 后代选择器

选择元素内部中某一种元素的所有元素，包括子元素和其他后代元素。使用语法 **A B{}** 定义。

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

### 子选择器

用于选中元素内部的某一个子元素。和后代选择器比较相似，后代选择器选择的是元素内部所有的，子选择器选择的是元素内部的某一个，且仅限于子，其他后代不选择。使用语法 **A > B {}** 进行选择。

```css
.content > p {
    color: red;
}

/** 只有 <p id="summer">Summer is warm.</p> 变为红色 */
<div class="content">
    <p id="summer">Summer is warm.</p>
    <div class="winter">
        <p class="winter">Winter is cold.</p>
    </div>
    <span>Winter is cold.</span>
</div>
```

### 兄弟选择器

兄弟选择器用于选中某个元素后面（不包含前面的兄弟）的某一类兄弟元素。使用语法 **A ~ B {}** 定义。

```css
#season ~ p {
    color: red;
}

/** Summer 和 Winter 变红*/
<div class="content">
    <p>Spring is beautiful.</p>
    <div id="season">
        <p>Autumn is harvest season.</p>
    </div>
    <p>Summer is warm.</p>
    <p>Winter is cold.</p>
</div>
```

### 相邻选择器

选中某元素后面的（不包括前面的）某一个相邻的兄弟元素。和兄弟选择器的区别在于，只选紧跟在该元素后面相邻的某一个元素，而不是一类。使用语法 **A + B {}** 定义。

```css
li + li {
    border-top: 1px solid blue;
}

<ul class="season">
    <li>Spring</li>
    <li>Summer</li>
    <li>Autumn</li>
    <li>Winter</li>
</ul>
```

---

:::tip

属性和属性值存在性选择器：根据元素存在的属性和属性值来选择元素。主要有简单属性选择器、属性值选择器、部分属性值选择器等。

:::

### 简单属性选择器

选择具有某个属性的源宿，不论属性值是什么。使用语法 **[attr] {}** 定义。

```css
/** 选择具有 title 属性的任何元素 */
*[title] {color: red;}

/** 选择所有有锚点 href 的 a 标签*/
a[href] {color: purple;}

/** 多属性选择, 选择同时具有 title 和 href 的 a 标签 */
a[title][href] {color: blue;}

<ul class="season">
    <li title="Spring">Spring</li>
    <li>Summer</li>
    <li><a href="#">Autumn</a></li>
    <li><a title="Winter is comming" href="#">Winter</a></li>
</ul>
```

### 属性值选择器

只选择有特定属性值的元素。该使用方法必须保证属性值完全一致。使用语法 **[attr="value"] {}** 定义。

```css
/** 选择所有有锚点 href 且其值为 # 的 a 标签*/
a[href="#"] {color: red;}

/** 选择所有有锚点 href 值为 # 且 title 值为 Winter 的 a 标签*/
a[href="#"][title="Winter is comming"] {color: blue;}
```

### 部分属性值选择器

当属性值是多个单词时，需要根据其中某个值来选择时就可以使用部分属性值选择器。使用语法 **[attr~="value"] {}** 来定义。

```css
a[title~="Winter"] {color: purple;}
```


    
    
---

[[1]](https://book.douban.com/subject/34897696): 从0到1：HTML + CSS快速上手, 莫振杰.


