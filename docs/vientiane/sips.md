---
title: Mac sips 命令
head:
- - meta
  - property: og:title
    content: MacOS 原生支持裁剪、缩小、翻转图片，查看图片源数据等
- - meta
  - name: description
    content: sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等
- - meta
  - name: keywords
    content: scp
- - meta
  - property: og:description
    content: sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/vientiane/sips
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/vientiane/sips
---

# Sips 简介

sips命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看 Meta 信息等

## 按长宽比例缩小

```
sips -z length width *.jpg
```

## 翻转（默认顺时针）

```
sips -r 90 *.jpg
```

## 修改后缀格式

```
sips -s format png xxx.jpg --out xxx.png
```

## 查看元数据

```
sips -g format *.jpg
```

其中元数据值和支持修改的图片格式可参见 man sips 信息。
    
