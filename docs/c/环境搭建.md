---
title: C 语言开发环境搭建
head:
- - meta
  - property: og:title
    content: C 语言开发环境搭建
- - meta
  - name: description
    content: C 语言开发环境搭建.
- - meta
  - name: keywords
    content: C, CLion，MinGW
- - meta
  - property: og:description
    content: C 语言开发环境搭建.
---

## 1 安装 CLion

下载最新版 CLion，默认安装即可。

## 2 创建工程

创建时选择可执行程序，创建完工程后默认弹出 MinGW 配置，我们不用再额外下载，因为最新版本的 CLion 自带 MinGW。

## 3 Hello world

创建好工程后，自动回生成 main.c 文件，已经写好了 Hello world 代码。

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## 4 结构说明

引入标准头文件，为了后续使用函数 `printf()`。

```c
#include <stdio.h>
```

程序主入口是 `main` 函数，`return 0` 是 CLion 自动生成携带的，其实可以不要这行代码。

## 5 运行

点击执行按钮，生成 exe 程序，控制台打印 `Hello, World!` 。
    
