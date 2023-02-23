---
title: IDEA 加载大文件
head:
- - meta
  - property: og:title
    content: IDEA 加载大文件
- - meta
  - name: description
    content: IDEA 加载大文件。
- - meta
  - name: keywords
    content: IDEA
- - meta
  - property: og:description
    content: IDEA 加载大文件。
- - meta
  - property: og:url
    content: https://sanoon.me/vientiane/IDEA%20%E5%8A%A0%E8%BD%BD%E5%A4%A7%E6%96%87%E4%BB%B6
- - link
  - rel: canonical
    href: https://sanoon.me/vientiane/IDEA%20%E5%8A%A0%E8%BD%BD%E5%A4%A7%E6%96%87%E4%BB%B6
---

## 现象
最近在项目开发过程中，遇到 gRPC 生成的大文件，无法加载。

## 解决

打开此文件

```
Help –> Edit Custom Properties
```

修改配置大小为 `10 M`：

```
idea.max.intellisense.filesize=10240
```
    
